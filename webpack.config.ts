import { Configuration } from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import project from "./package.json";

const config: Configuration = {
  devtool: "eval-source-map",
  stats: "minimal",
  resolve: {
    extensions: [".js", ".ts"]
  },
  module: {
    rules: [{ test: /\.ts$/, loader: "ts-loader" }]
  },
  plugins: [new HtmlWebpackPlugin({ title: project.name })]
};

export default config;
