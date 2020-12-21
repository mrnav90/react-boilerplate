import webpack from 'webpack';
import path from 'path';
import dotenv from 'dotenv';
import TerserPlugin from 'terser-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import express from 'express';
import nodeExternals from 'webpack-node-externals';

dotenv.config();

const build = process.env.NODE_ENV === 'development' ? 'dist' : 'public';

const serverConfig = {
  entry: './server/index.js',
  output: {
    path: path.join(__dirname, `../${build}`),
    filename: 'server.js',
    publicPath: '/',
    libraryTarget: 'commonjs2',
  },
  target: 'node',
  node: {
    fs: 'empty',
    child_process: 'empty',
    global: true,
    process: true,
    Buffer: true,
    __filename: true,
    __dirname: true,
    setImmediate: false,
  },
  performance: { hints: false },
  resolve: {
    modules: ['node_modules', 'app'],
    extensions: ['.js', '.jsx', '.react.js'],
    mainFields: ['browser', 'jsnext:main', 'main'],
    alias: {
      jquery: path.join(__dirname, '../node_modules/jquery/dist/jquery'),
      moment: path.join(__dirname, '../node_modules/moment/moment.js'),
      actions: path.resolve(__dirname, '../src/actions'),
      selectors: path.resolve(__dirname, '../src/selectors'),
      reducers: path.resolve(__dirname, '../src/reducers'),
      middlewares: path.resolve(__dirname, '../src/middlewares'),
      components: path.resolve(__dirname, '../src/components'),
      containers: path.resolve(__dirname, '../src/containers'),
      config: path.resolve(__dirname, '../src/config'),
      stores: path.resolve(__dirname, '../src/stores'),
      api: path.resolve(__dirname, '../src/api'),
      styles: path.resolve(__dirname, '../src/styles'),
      pages: path.resolve(__dirname, '../src/pages'),
      i18n: path.resolve(__dirname, '../i18n'),
      utils: path.resolve(__dirname, '../src/utils'),
      assets: path.resolve(__dirname, '../assets'),
      src: path.resolve(__dirname, '../src'),
      modals: path.resolve(__dirname, '../src/modals'),
      libs: path.resolve(__dirname, '../src/libs'),
      jitsiMeet: path.resolve(__dirname, '../src/jitsi-meet'),
    },
  },
  stats: {
    children: false,
    colors: {
      green: '\u001b[32m',
    },
  },
  externals: [express(), nodeExternals()],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.(md)$/,
        use: [MiniCssExtractPlugin.loader, 'html', 'highlight', 'markdown'],
      },
      {
        test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)/,
        loader: 'url-loader',
      },
      {
        test: /\.(jpe?g|png|gif|ico)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              hash: 'sha512',
              digest: 'hex',
              name: '[hash].[ext]',
            },
          },
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                quality: 65,
              },
              optipng: {
                optimizationLevel: 7,
              },
              gifsicle: {
                interlaced: false,
              },
              pngquant: {
                quality: '65-90',
                speed: 4,
              },
            },
          },
        ],
      },
    ],
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        parallel: true,
        test: /\.js(\?.*)?$/i,
        terserOptions: {
          mangle: false,
          compress: {
            dead_code: false,
            conditionals: false,
            unused: false,
            side_effects: false,
          },
          output: {
            comments: false,
          },
        },
      }),
    ],
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false,
    }),
    new webpack.DefinePlugin({
      API_URL: JSON.stringify(process.env.API_URL),
      SOCKET_CHAT_URL: JSON.stringify(process.env.SOCKET_CHAT_URL),
      APP_URL: JSON.stringify(process.env.APP_URL),
      APP_DOMAIN: JSON.stringify(process.env.APP_DOMAIN),
      NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      PORT: JSON.stringify(process.env.PORT),
      SSR: JSON.stringify(process.env.SSR),
      PUSHER_APP_KEY: JSON.stringify(process.env.PUSHER_APP_KEY),
      EXTENSION_CHROME_ID: JSON.stringify(process.env.EXTENSION_CHROME_ID),
      TIMEOUT_RECHECK_CONNECTION: parseFloat(
        process.env.TIMEOUT_RECHECK_CONNECTION,
      ),
      TIME_WAIT_CONNECT: parseFloat(process.env.TIME_WAIT_CONNECT),
      FIREBASE_APP_CODE: JSON.stringify(process.env.FIREBASE_APP_CODE),
      FIREBASE_ISI: JSON.stringify(process.env.FIREBASE_ISI),
      FIREBASE_IBI: JSON.stringify(process.env.FIREBASE_IBI),
      FIREBASE_APN: JSON.stringify(process.env.FIREBASE_APN),
      JITSI_DOMAIN: JSON.stringify(process.env.JITSI_DOMAIN),
      CALLING_ELECTRON_PREFIX: JSON.stringify(
        process.env.CALLING_ELECTRON_PREFIX,
      ),
      CALLING_ELECTRON_PORT: Number(process.env.CALLING_ELECTRON_PORT),
      CALL_STATS_ID: JSON.stringify(process.env.CALL_STATS_ID),
      CALL_STATS_SECRET: JSON.stringify(process.env.CALL_STATS_SECRET),
      WS_MJPEG: JSON.stringify(process.env.WS_MJPEG),
      MJPEG_SCREEN_QUALITY: JSON.stringify(process.env.MJPEG_SCREEN_QUALITY),
      MJPEG_SCREEN_FPS: JSON.stringify(process.env.MJPEG_SCREEN_FPS),
      SENTRY_DSN: JSON.stringify(process.env.SENTRY_DSN),
      GTM_ID: JSON.stringify(process.env.GTM_ID),
    }),
  ],
};

export default serverConfig;
