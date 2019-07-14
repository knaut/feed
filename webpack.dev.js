'use strict'

const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const WebappWebpackPlugin = require('webapp-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  performance: {
    hints: 'warning'
  },
  plugins: [
    new CopyPlugin([
      { from: 'manifest.dev.json', to: 'manifest.json' }
    ]),
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
  ]
})
