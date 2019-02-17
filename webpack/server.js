import path from 'path';
import dotenv from 'dotenv';

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
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      components: path.resolve(__dirname, '../src/components'),
      containers: path.resolve(__dirname, '../src/containers'),
      config: path.resolve(__dirname, '../src/config'),
      api: path.resolve(__dirname, '../src/api'),
      styles: path.resolve(__dirname, '../src/styles'),
      pages: path.resolve(__dirname, '../src/pages'),
      i18n: path.resolve(__dirname, '../i18n'),
      utils: path.resolve(__dirname, '../src/utils'),
      assets: path.resolve(__dirname, '../assets'),
      stores: path.resolve(__dirname, '../src/stores'),
      src: path.resolve(__dirname, '../src'),
      modals: path.resolve(__dirname, '../src/modals'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
};

export default serverConfig;
