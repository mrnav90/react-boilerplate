import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { Server } from 'http';
import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import ejs from 'ejs';
import fs from 'fs';
import compression from 'compression';
import { parse as parseUrl } from 'url';
import routes from 'config/routes';
import stores from 'stores';
import { StaticRouter as Router } from 'react-router-dom';
import { Provider } from 'mobx-react';
import AppRoutes from 'components/Application/AppRoutes';

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

    app.use(compression({ threshold: 0 }));

    staticFiles.forEach((file) => {
      app.get(file, (req, res) => {
        const filePath = path.resolve(`${build}/${req.url}`);
        res.set('Content-Encoding', 'gzip');
        res.sendFile(filePath);
      });
    });

    app.use(express.static(path.join(__dirname, '..', build)));
    app.set('view engine', 'ejs');

    app.get('*', (req, res) => {
      const manifest = JSON.parse(fs.readFileSync(path.join(__dirname, '..', `${build}/manifest.json`)));
      const pageTitle = 'React boilerplate';
      const jsFile = isDevelopment ? 'app.js' : manifest['main.js'];
      const styleFile = isDevelopment ? 'app.css' : manifest['main.css'];
      const appContainer = ReactDOMServer.renderToString(
        <Provider {...stores}>
          <Router>
            <AppRoutes routes={routes} />
          </Router>
        </Provider>,
      );

      ejs.renderFile(path.join(__dirname, '..', 'index.ejs'), {
        appContainer,
        jsFile,
        styleFile,
        pageTitle,
      }, {}, (err, str) => {
        if (err) {
          console.log(err);
        }

        res.writeHead(200);
        res.write(str);
        res.end();
      });
    });

    server.listen(PORT, () => {
      console.log(`Listening at PORT: ${server.address().port}`);
    });
  },
};
