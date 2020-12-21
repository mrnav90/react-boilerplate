import dotenv from 'dotenv';
import webpackBaseConfig from './base';
import webpackProductionConfig from './production';
import webpackDevConfig from './dev';
import serverConfig from './server';

dotenv.config();

const DEVELOPMENT = process.env.NODE_ENV === 'development';
const DEBUG = process.env.DEBUG === 'yes';
const SSR = process.env.SSR === 'yes';

const webpackConfig = {
  entry: './src/app.jsx',
  output: DEVELOPMENT
    ? webpackDevConfig.output
    : webpackProductionConfig.output,
  module: {
    rules: [
      ...webpackBaseConfig.rules,
      ...(DEVELOPMENT
        ? webpackDevConfig.module
        : webpackProductionConfig.module),
    ],
  },
  optimization: DEVELOPMENT
    ? webpackDevConfig.optimization
    : webpackProductionConfig.optimization,
  mode: process.env.NODE_ENV,
  resolve: {
    extensions: ['.js', '.jsx', '.react.js'],
    mainFields: ['browser', 'jsnext:main', 'main'],
    modules: ['node_modules', 'src'],
    alias: webpackBaseConfig.alias,
  },
  performance: DEVELOPMENT
    ? webpackDevConfig.performance
    : webpackProductionConfig.performance,
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
  plugins: [
    ...webpackBaseConfig.plugins,
    ...(DEVELOPMENT
      ? webpackDevConfig.plugins
      : webpackProductionConfig.plugins),
  ],
  devtool: DEBUG ? 'eval-source-map' : 'source-map',
};

if (DEVELOPMENT && !SSR) {
  webpackConfig.devServer = webpackBaseConfig.devServer;
}

export default SSR ? [webpackConfig, serverConfig] : webpackConfig;
