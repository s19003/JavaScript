const path = require('path')

module.exports = {
  // エントリーポイント
  entry: {
    index: './src/index.js',
    app: './app.js'
    // 追加方法
    // xxx: './src/xxx.js'
  },

  // Bundleファイルを出力する
  output: {
    path: path.resolve(__dirname, 'dist')
  },

  target: 'node',

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        ]
      }
    ]
  }
}
