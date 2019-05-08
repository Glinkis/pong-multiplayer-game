import { Configuration } from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import project from "./package.json";

const config: Configuration = {
  devtool: "eval-source-map",
  stats: "minimal",
  resolve: {
    extensions: [".js", ".ts", ".tsx"],
    alias: {
      "socket.io-client": "socket.io-client/dist/socket.io.slim.js"
    }
  },
  optimization: {
    splitChunks: {
      chunks: "all"
    }
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader"
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: project.name
    })
  ]
};

export default config;
