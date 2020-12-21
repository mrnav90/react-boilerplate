import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
// import CircularDependencyPlugin from 'circular-dependency-plugin';
import ErrorOverlayPlugin from 'error-overlay-webpack-plugin';
import path from 'path';

const webpackConfig = {
  output: {
    path: path.join(__dirname, '../dist'),
    filename: '[name].js',
    hotUpdateChunkFilename: 'hot/hot-update.[hash:6].js',
    hotUpdateMainFilename: 'hot/hot-update.[hash:6].json',
    publicPath: '/',
    chunkFilename: '[name].chunk.js',
  },
  module: {
    rules: [
      {
        test: /\.(jpe?g|png|gif|ico|mp4|mp3|txt|woff|woff2|eot|ttf|otf|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              hash: 'sha512',
              digest: 'hex',
              name: '[hash].[ext]',
            },
          },
        ],
      },
    ],
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: path.join(__dirname, '../dist/index.html'),
      template: path.join(__dirname, '../index.html'),
      inject: true,
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      allChunks: true,
      ignoreOrder: true,
    }),
    new ErrorOverlayPlugin(),
    // new CircularDependencyPlugin({
    //   exclude: /a\.js|node_modules/,
    //   failOnError: false,
    // }),
  ],
  performance: { hints: false },
};

export default webpackConfig;
