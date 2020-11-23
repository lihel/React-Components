const path = require("path");
module.exports = {
  entry: "./src/index.js", // 入口文件
  output: {
    path: path.resolve(__dirname, "build"), // 必须使用绝对地址，输出文件夹
    filename: "bundle.js", // 打包后输出文件的文件名
  },

  devServer: {
    // publicPath: "/",
    contentBase: "./build", // 服务启动在哪一个文件夹下
    // open: true, // 启动服务时，自动打开浏览器
    // port: 8080, // 端口号
    // // proxy 跨域时模拟接口代理
    // hot: true, // devServer开启Hot Module Replacement的功能
    // hotOnly: true, // 即便HMP的功能没有生效，浏览器也不能自动刷新
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        loader: ["style-loader", "css-loader"],
      },
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        query: {
          cacheDirectory: true,
          presets: ["@babel/react", "@babel/preset-env"],
          plugins: ["@babel/proposal-class-properties"],
        },
      },
    ],
  },
};
