import CompressionPlugin from 'compression-webpack-plugin';
import CleanWebpackPlugin from 'clean-webpack-plugin';
import ManifestPlugin from 'webpack-manifest-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import TerserPlugin from 'terser-webpack-plugin';
import OptimizeCSSAssetsPlugin from 'optimize-css-assets-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import MomentLocalesPlugin from 'moment-locales-webpack-plugin';
import PreloadWebpackPlugin from 'preload-webpack-plugin';
import OfflinePlugin from 'offline-plugin';
import webpack from 'webpack';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config();

const webpackConfig = {
  output: {
    path: path.join(__dirname, '../public'),
    filename: 'app.[chunkhash].js',
    publicPath: '/',
    // publicPath: `${process.env.APP_URL}/`,
    chunkFilename: '[name].[chunkhash].chunk.js',
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
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          warnings: false,
          compress: {
            comparisons: false,
          },
          parse: {},
          mangle: true,
          output: {
            comments: false,
            ascii_only: true,
          },
        },
        parallel: true,
        cache: true,
        sourceMap: true,
      }),
    ],
    nodeEnv: 'production',
    sideEffects: true,
    concatenateModules: true,
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
      maxInitialRequests: 10,
      minSize: 0,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name(module) {
            const packageName = module.context.match(
              /[\\/]node_modules[\\/](.*?)([\\/]|$)/,
            )[1];
            return `npm.${packageName.replace('@', '')}`;
          },
        },
      },
    },
  },
  plugins: [
    new CleanWebpackPlugin(['public', 'dist'], {
      root: process.cwd(),
    }),
    new MomentLocalesPlugin(),
    new OptimizeCSSAssetsPlugin({}),
    new HtmlWebpackPlugin({
      filename: path.join(__dirname, '../public/index.html'),
      template: path.join(__dirname, '../index.html'),
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false,
    }),
    new webpack.HashedModuleIdsPlugin({
      hashFunction: 'sha256',
      hashDigest: 'hex',
      hashDigestLength: 20,
    }),
    new PreloadWebpackPlugin({
      rel: 'preload',
      as(entry) {
        if (/\.css$/.test(entry)) return 'style';
        if (/\.woff$/.test(entry)) return 'font';
        if (/\.png$/.test(entry)) return 'image';
        return 'script';
      },
      include: 'allAssets',
    }),
    new MiniCssExtractPlugin({
      filename: 'app.[chunkhash].css',
      allChunks: true,
      ignoreOrder: true,
    }),
    new CompressionPlugin({
      filename: '[path]',
      algorithm: 'gzip',
      test: /\.js$|\.css$/,
      minRatio: 0.8,
    }),
    new ManifestPlugin({
      filter: ({ name }) => ['main.js', 'main.css'].indexOf(name) !== -1,
    }),
    new OfflinePlugin({
      responseStrategy: 'network-first',
      relativePaths: false,
      publicPath: '/',
      appShell: '/',
      excludes: ['.htaccess'],
      caches: {
        main: [':rest:'],
        additional: ['*.chunk.js'],
      },
      safeToUseOptionalCaches: true,
    }),
  ],
  performance: {
    assetFilter: (assetFilename) => !/(\.map$)|(^(main\.|favicon\.))/.test(assetFilename),
  },
};

export default webpackConfig;
