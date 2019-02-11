import dotenv from 'dotenv';
import path from 'path';
import webpackProductionConfig from './production';
import webpackDevConfig from './dev';

dotenv.config();

const DEVELOPMENT = process.env.NODE_ENV === 'development';

const webpackConfig = {
  entry: DEVELOPMENT ? webpackDevConfig.entry : webpackProductionConfig.entry,
  output: DEVELOPMENT ? webpackDevConfig.output : webpackProductionConfig.output,
  resolve: {
    extensions: ['.jsx', '.js'],
    alias: {
      jquery: path.join(__dirname, '../node_modules/jquery/dist/jquery'),
      components: path.resolve(__dirname, '../src/components'),
      containers: path.resolve(__dirname, '../src/containers'),
      commons: path.resolve(__dirname, '../src/commons'),
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
  stats: {
    children: false,
    colors: {
      green: '\u001b[32m',
    },
  },
  module: DEVELOPMENT ? webpackDevConfig.module : webpackProductionConfig.module,
  plugins: DEVELOPMENT ? webpackDevConfig.plugins : webpackProductionConfig.plugins,
  devtool: DEVELOPMENT ? webpackDevConfig.devtool : webpackProductionConfig.devtool,
};

if (DEVELOPMENT) {
  webpackConfig.devServer = {
    contentBase: path.join(__dirname, '../dist'),
    disableHostCheck: true,
    historyApiFallback: true,
    host: '0.0.0.0',
    port: process.env.PORT || 8001,
    compress: !DEVELOPMENT,
    inline: DEVELOPMENT,
    hot: DEVELOPMENT,
    stats: {
      assets: true,
      children: false,
      chunks: false,
      hash: false,
      modules: false,
      publicPath: false,
      timings: true,
      version: false,
      warnings: true,
      colors: {
        green: '\u001b[32m',
      },
    },
  };
}

export default webpackConfig;
