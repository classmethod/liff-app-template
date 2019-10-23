const merge = require('webpack-merge')
const baseConfig = require('./webpack.config.base.js')

const config = merge(baseConfig, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    https: true,
    contentBase: './dist',
    port: 9443,
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
})

module.exports = config
