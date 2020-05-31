const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const ErrorOverlayPlugin = require('error-overlay-webpack-plugin');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const webpack = require('webpack');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const WebpackBar = require('webpackbar');

const env = require('dotenv').config({ path: __dirname + '/.env.example' });

const mode = process.env.NODE_ENV || 'development';

const prod = mode === 'production';

module.exports = {
  devtool: prod ? false : 'cheap-module-source-map',
  entry: path.join(__dirname, './src/index.tsx'),
  output: {
    filename: '[name].[hash].js',
    publicPath: '/',
  },
  devServer: {
    historyApiFallback: true,
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 3000,
    quiet: true,
    overlay: {
      warnings: false,
      errors: false,
    },
  },
  optimization: {
    minimize: prod,
    minimizer: [
      new TerserPlugin({
        cache: true,
        parallel: true,
      }),
    ],
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /node_modules/,
          chunks: 'initial',
          name: 'vendor',
          enforce: true,
        },
      },
    },
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        loader: 'eslint-loader',
        exclude: /node_modules/,
        test: /\.ts(x?)$/,
        options: {
          cache: true,
          emitWarning: true,
          emitError: false,
          failOnWarning: prod ? true : false,
          failOnError: prod ? true : false,
        },
      },
      {
        test: /\.(js|mjs|jsx|ts|tsx)$/,
        include: path.resolve(process.cwd(), 'src'),
        loader: 'babel-loader',
        options: {
          customize: require.resolve(
            'babel-preset-react-app/webpack-overrides',
          ),
          cacheDirectory: true,
          cacheCompression: false,
          compact: prod,
        },
      },
      {
        test: /\.(js|mjs)$/,
        exclude: /@babel(?:\/|\\{1,2})runtime/,
        loader: 'babel-loader',
        options: {
          babelrc: false,
          configFile: false,
          compact: false,
          presets: [
            [
              require.resolve('babel-preset-react-app/dependencies'),
              { helpers: true },
            ],
          ],
          cacheDirectory: true,
          cacheCompression: false,
        },
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader',
      },
      {
        test: /\.module\.s(a|c)ss$/,
        loader: [
          !prod ? 'style-loader' : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: true,
              sourceMap: !prod,
              modules: {
                localIdentName: '[local]___[hash:base64:5]',
              },
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: !prod,
            },
          },
        ],
      },
      {
        test: /\.s(a|c)ss$/,
        exclude: /\.module.(s(a|c)ss)$/,
        loader: [
          !prod ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              sourceMap: !prod,
            },
          },
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf|png|jpg|gif)$/,
        use: ['file-loader'],
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
    ],
  },
  mode,
  plugins: [
    new ForkTsCheckerWebpackPlugin(),
    new CleanWebpackPlugin({ cleanAfterEveryBuildPatterns: ['dist'] }),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, './public/robots.txt'),
          to: path.resolve(__dirname, './dist/robots.txt'),
        },
      ],
    }),
    new WebpackBar(),
    new FriendlyErrorsPlugin({
      compilationSuccessInfo: {
        messages: ['You application is running on http://localhost:3000'],
      },
      clearConsole: false,
      additionalFormatters: [],
      additionalTransformers: [],
    }),
    new HtmlWebPackPlugin({
      template: './public/index.html',
      filename: './index.html',
      minify: process.env.NODE_ENV === 'production',
      favicon: path.join(__dirname, './public/favicon.ico'),
    }),
    new CompressionPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css',
    }),
    new Dotenv({
      silent: true,
      safe: false,
    }),
    new webpack.EnvironmentPlugin(Object.keys(env.parsed)),
    new ErrorOverlayPlugin(),
  ],
};
