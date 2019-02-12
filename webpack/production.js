import ExtractTextPlugin from 'extract-text-webpack-plugin';
import CompressionPlugin from 'compression-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import CleanWebpackPlugin from 'clean-webpack-plugin';
import ManifestPlugin from 'webpack-manifest-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config();

const webpackConfig = {
  entry: ['./src/index.js', 'babel-polyfill'],
  output: {
    path: path.join(__dirname, '../public'),
    filename: 'app.[contenthash:6].js',
  },
  devtool: false,
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
        test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)/,
        loader: 'url-loader',
      },
      {
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
        test: /\.(jpe?g|png|gif|ico|svg)$/i,
        loaders: [
          'file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
          'image-webpack-loader?{optipng: {optimizationLevel: 7}, gifsicle: {interlaced: false}, pngquant:{quality: "65-90", speed: 4}, mozjpeg: {quality: 65}}',
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin([
      'public',
      'dist',
    ], {
      root: process.cwd(),
    }),
    new HtmlWebpackPlugin({
      filename: path.join(__dirname, '../public/index.html'),
      template:  path.join(__dirname, '../index.html'),
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true
      },
    }),
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery',
      'window.jQuery': 'jquery',
      'window.$': 'jquery',
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false,
    }),
    new webpack.DefinePlugin({
      'API_URL': JSON.stringify(process.env.API_URL),
      'APP_URL': JSON.stringify(process.env.APP_URL),
    }),
    new ExtractTextPlugin({ filename: 'app.[chunkhash:6].css', allChunks: true }),
    new CompressionPlugin({
      filename: '[path]',
      algorithm: 'gzip',
      test: /\.js$|\.css$/,
      threshold: 10240,
      minRatio: 0.8,
    }),
    new CopyWebpackPlugin([
      { from: path.join(__dirname, '../assets'), to: path.join(__dirname, '../public/assets') },
    ]),
    new ManifestPlugin({
      filter: ({name}) => ['main.js', 'main.css'].indexOf(name) !== -1
    }),
  ],
};

export default webpackConfig;
