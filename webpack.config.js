const CleanWebpackPlugin = require('clean-webpack-plugin')
const convert = require('koa-connect')
const Dotenv = require('dotenv-webpack')
const env = require('dotenv').config({ path: __dirname + '/.env.example' })
const history = require('connect-history-api-fallback')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')
const webpack = require('webpack')

module.exports = {
  mode: process.env.NODE_ENV ? 'development' : 'production',
  output: {
    filename: '[name].[hash].js',
    publicPath: '/'
  },
  serve: {
    content: ['./src'],
    open: true,
    port: 3000,
    add: app => {
      app.use(convert(history()))
    }
  },
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          enforce: true,
          chunks: 'initial'
        }
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          'css-loader'
        ]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {}
          }
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebPackPlugin({
      template: './index.html',
      filename: './index.html',
      minify: process.env.NODE_ENV === 'production',
      favicon: path.join(__dirname, './favicon.ico')
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    }),
    new Dotenv({
      silent: true,
      safe: true
    }),
    new webpack.EnvironmentPlugin(Object.keys(env.parsed))
  ]
}
