const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  devtool: 'source-map',
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "index_bundle.js"
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/html/index.html"
    })
  ],
  devServer: {
    port: 3000,
    proxy: {
      '/': {
        target: 'http://localhost:8080',
        secure: false,
        prependPath: false
      }
    }
  }
};
