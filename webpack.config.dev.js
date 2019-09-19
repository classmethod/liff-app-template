const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.config.base.js')

const config = merge(baseConfig, {
  entry: './src/index.dev.ts',
  mode: 'development',
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    index: 'index.html',
    publicPath: '/assets/',
    filename: '[name].[contenthash].js',
    lazy: true,
    port: 8080,
    open: true,
  },
})

console.log(config)

module.exports = config
