const path = require('path')
module.exports = {
  entry: './src/index.js', // 入口文件
  output: {
    path: path.resolve(__dirname, 'build'), // 必须使用绝对地址，输出文件夹
    filename: 'bundle.js', // 打包后输出文件的文件名
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        // loader: 'style-loader!css-loader',
      },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          cacheDirectory: true,
          presets: ['@babel/react', '@babel/preset-env'],
          plugins: ['@babel/proposal-class-properties'],
        },
      },
    ],
  },
}
