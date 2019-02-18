import webpack from 'webpack';
import path from 'path';
import dotenv from 'dotenv';
import TerserPlugin from 'terser-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

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
  stats: {
    children: false,
    colors: {
      green: '\u001b[32m',
    },
  },
  externals: ['express'],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.(md)$/,
        loader: ExtractTextPlugin.extract({
          use: [
            'html', 'highlight', 'markdown',
          ],
        }),
      },
    ],
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        parallel: true,
        test: /\.js(\?.*)?$/i,
        terserOptions: {
          ecma: 6,
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
  ],
};

export default serverConfig;
