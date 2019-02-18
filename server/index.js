import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { Server } from 'http';
import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import ejs from 'ejs';
import fs from 'fs';
import compression from 'compression';
import stores from 'stores';
import { StaticRouter as Router } from 'react-router-dom';
import { Provider } from 'mobx-react';
import AppRoutes from 'components/Application/AppRoutes';
import routes from './routes';

dotenv.config();

const build = process.env.NODE_ENV === 'development' ? 'dist' : 'public';
const isDevelopment = process.env.NODE_ENV === 'development';
const PORT = process.env.PORT || 3001;
const staticFiles = [
  '/*.png',
  '/*.jpg',
  '/*.jpeg',
  '/*.svg',
  '/*.ttf',
  '/*.css',
  '/*.js',
];

export default {
  run: () => {
    const app = express();
    const server = new Server(app);

    if (!isDevelopment) {
      app.use(compression({ threshold: 0 }));
    }

    staticFiles.forEach((file) => {
      app.get(file, (req, res) => {
        const filePath = path.resolve(`${build}/${req.url}`);
        if (!isDevelopment && ['/*.css', '/*.js'].indexOf(file) !== -1) {
          res.set('Content-Encoding', 'gzip');
        }
        res.sendFile(filePath);
      });
    });

    app.use(express.static(path.join(__dirname, '..', build)));
    app.set('view engine', 'ejs');

    app.get('*', (req, res) => {
      const context = {};
      const manifest = JSON.parse(fs.readFileSync(path.join(__dirname, '..', `${build}/manifest.json`)));
      const appContainer = ReactDOMServer.renderToString(
        <Provider {...stores}>
          <Router location={req.url} context={context}>
            <AppRoutes routes={routes} />
          </Router>
        </Provider>,
      );

      res.status(404).end('error');

      if (context.url) {
        res.writeHead(301, {
          Location: context.url,
        });
        res.end();
      } else {
        ejs.renderFile(path.join(__dirname, '..', 'index.ejs'), {
          appContainer,
          jsFile: isDevelopment ? 'app.js' : manifest['main.js'],
          styleFile: isDevelopment ? 'app.css' : manifest['main.css'],
          pageTitle: 'React boilerplate',
        }, {}, (err, str) => {
          res.writeHead(200);
          res.write(str);
          res.end();
        });
      }
    });

    server.listen(PORT, () => {
      console.log(`Server listening at PORT: ${server.address().port}`);
    });
  },
};
