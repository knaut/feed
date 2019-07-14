'use strict'

const path = require('path')
const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const webpack = require('webpack')
const CopyPlugin = require('copy-webpack-plugin');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  performance: {
    hints: 'warning'
  },
  devServer: {
    contentBase: path.join(__dirname, 'build'),
    compress: true,
    port: 3000,
    hot: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*'
    },
    historyApiFallback: true,
    proxy: {
      '/api/cache': {
        target: 'http://0.0.0.0:5000',
        secure: false
      }
    }
  },
  plugins: [
    new CopyPlugin([
      { from: 'manifest.local.json', to: 'manifest.json' }
    ]),
    new webpack.HotModuleReplacementPlugin()
  ]
})
