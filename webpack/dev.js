import ExtractTextPlugin from 'extract-text-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config();

const webpackConfig = {
  entry: ['./src/app.jsx', 'babel-polyfill'],
  output: {
    path: path.join(__dirname, '../dist'),
    filename: 'app.js',
    hotUpdateChunkFilename: 'hot/hot-update.js',
    hotUpdateMainFilename: 'hot/hot-update.json',
    publicPath: '/',
  },
  devtool: 'eval-source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader',
        }),
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
            },
            {
              loader: 'sass-loader',
            },
          ],
        }),
      },
      {
        type: 'javascript/auto',
        test: /\.json$/,
        loader: 'json-loader',
      },
      {
        test: /\.(md)$/,
        loader: ExtractTextPlugin.extract({
          use: [
            'html', 'highlight', 'markdown',
          ],
        }),
      },
      {
        test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)/,
        loader: 'url-loader',
      },
      {
        test: /\.(jpe?g|png|gif|ico)$/i,
        loaders: [
          'file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: path.join(__dirname, '../dist/index.html'),
      template: path.join(__dirname, '../index.html'),
    }),
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery',
      'window.jQuery': 'jquery',
      'window.$': 'jquery',
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin({ filename: 'app.css', allChunks: true }),
    new webpack.DefinePlugin({
      'API_URL': JSON.stringify(process.env.API_URL),
      'APP_URL': JSON.stringify(process.env.APP_URL),
    }),
    new CopyWebpackPlugin([
      { from: path.join(__dirname, '../assets'), to: path.join(__dirname, '../dist/') },
    ]),
  ],
};

export default webpackConfig;
