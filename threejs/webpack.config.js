const path = require('path')

module.exports = {
  mode: 'production',
  entry: ['@babel/polyfill', './public/01/index.js'],
  output: {
    path: path.resolve(__dirname, './public/dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
}
