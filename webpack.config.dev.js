const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.config.base.js')

const config = merge(baseConfig, {
  entry: './src/index.dev.ts',
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    host: '0.0.0.0',
    port: 9443,
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    useLocalIp: false,
    disableHostCheck: true,
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
})

module.exports = config
