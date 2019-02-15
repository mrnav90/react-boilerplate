import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { Server } from 'http';
import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import ejs from 'ejs';
import fs from 'fs';
import { parse as parseUrl } from 'url';
import { AppRoot } from 'components/Application';
import routes from 'config/routes';
import stores from 'stores';

dotenv.config();

export default {
  run: () => {
    const app = express();
    const server = new Server(app);
    const build = process.env.NODE_ENV === 'development' ? 'dist' : 'public';
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
    const appContainer = ReactDOMServer.renderToString(
      <AppRoot stores={stores} routes={routes} />,
    );

    app.use(express.static(path.join(__dirname, '..', build)));
    app.set('view engine', 'ejs');

    app.get('*', (req, res) => {
      let error = () => {
        res.writeHead(404);
        res.write('Error');
        res.end();
      };
      const url = req.originalUrl || req.url;
      const location = parseUrl(url);
      const manifest = JSON.parse(fs.readFileSync(path.join(__dirname, '..', `${build}/manifest.json`)));
      const pageTitle = 'React boilerplate';
      const jsFile = manifest['main.js'];
      const styleFile = manifest['main.css'];

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
