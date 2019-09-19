const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.config.base.js')

const config = merge(baseConfig, {
  entry: './src/index.dev.ts',
  mode: 'development',
  watch: true,
  resolve: {
    extensions: ['.ts', '.js']
  },
})

console.log(config)

module.exports = config
