'use strict';

require('dotenv').config();

const Dotenv = require('dotenv-webpack');
const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devServer: {
    contentBase: path.join(__dirname, 'build'),
    compress: true,
    port: 3000,
    hot: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*',
    },
    historyApiFallback: true,
    proxy: {
      '/api/cache': {
        target: 'http://0.0.0.0:5000',
        secure: false
      }
    }
  },
  mode: 'development',
  entry: {
    app: './src/App.js'
  },
  output: {
    path: path.resolve( __dirname, 'build' ),
    filename: '[name].bundle.js',
    publicPath: '/'
  },
  // performance: {
  //   hints: 'warning'
  // },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Feed 🌱 your decentralized social networking tool',
      inject: true,
      template: './webpack.template.html'
    }),
    new webpack.HotModuleReplacementPlugin(),
    // wrap our .env file into globals we can use in webpack-built code
    new Dotenv()
  ],
  devtool: 'source-map',
  target: 'web',
  module: {
    rules: [
      {
        test: /\.jsx$|.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.(css)$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  }
};