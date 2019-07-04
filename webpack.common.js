'use strict';

require('dotenv').config();

const webpack = require('webpack');
const path = require('path');
const Dotenv = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebappWebpackPlugin = require('webapp-webpack-plugin');

module.exports = {
  entry: {
    app: './src/App'
  },
  output: {
    path: path.resolve( __dirname, 'build' ),
    filename: '[name].bundle.js',
    publicPath: '/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Feed 🌱 your decentralized social networking tool',
      inject: true,
      template: './webpack.template.html'
    }),
    new webpack.HotModuleReplacementPlugin(),
    // wrap our .env file into globals we can use in webpack-built code
    new Dotenv(),
    new WebappWebpackPlugin({
      logo: './assets/Fleaf.png',
      favicons: {
        appName: 'Feed',
        appDescription: 'A blockchain-based social networking tool',
        developerName: 'small invisible machines',
        developerURL: null, // prevent retrieving from the nearest package.json
        background: '#1E1624',
        theme_color: '#6FFFB0',
        icons: {
          coast: false,
          yandex: false
        }
      }
    })
  ],
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
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  }
}