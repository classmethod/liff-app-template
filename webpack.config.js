const path = require('path')

module.exports = {
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, 'public', 'assets'),
    filename: 'bundle.js'
  },
  devtool: 'inline-source-map',
  devServer: {
    publicPath: '/assets/',
    filename: 'bundle.js',
    lazy: true,
    contentBase: path.join(__dirname, 'public'),
    index: 'index.html',
    watchContentBase: true,
    port: 8080,
    open: true,
    compress: true,
    hot: true,
    inline: true,
  }
}
