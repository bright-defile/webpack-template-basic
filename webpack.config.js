// export
const path = require("path");
const HtmlPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  // parcel index.html 같이
  // 파일 읽어들이기 시작하는 진입점
  // 웹팩은 기본이 js로 진입
  entry: "./js/main.js",
  // 결과물(번들)을 변환하는 설정
  output: {
    // path: path.resolve(__dirname, "dist"),
    // filename: "main.js",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlPlugin({
      template: "./index.html",
    }),
    new CopyPlugin({
      patterns: [{ from: "static" }],
    }),
  ],

  devServer: {
    host: "localhost",
  },
};
