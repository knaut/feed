'use strict';

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
    historyApiFallback: true
  },
  mode: 'development',
  entry: {
    app: './src/App.jsx'
  },
  output: {
    path: path.resolve( __dirname, 'build' ),
    filename: '[name].bundle.js',
  },
  performance: {
    hints: 'warning'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Feed 🌱 your decentralized social networking tool',
      inject: true,
      template: './webpack.template.html'
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  devtool: 'source-map',
  target: 'web',
  module: {
    rules: [
      {
        test: /\.jsx$/,
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