const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
  //   mode: "none",
  entry: {
    app: "./src/index.js",
  },
  output: {
    publicPath:'/',
    path: path.join(__dirname, "/app"),
    filename: "app.js",
  },
  devServer: {
    devMiddleware: {
      writeToDisk: true,
    },
    static: {
      directory: path.join(__dirname, "./app"),
    },
    // contentBase: path.join(__dirname, "/app"),
    port: 8080,
    // overlay: true, //for errors
  },
  module: {
    rules: [
      {
        test: /\.html$/i,
        use: {
          loader: "html-loader",
        },
      },
      {
        test: /\.(sass|css|scss)$/,

        use: [MiniCssExtractPlugin.loader, "css-loader","postcss-loader", "sass-loader"],
      },
      {
        test: /\.(svg|eot|woff|woff2|ttf)$/,

        exclude: /images/,

        use: [
          {
            loader: "file-loader",

            options: {
              name: "[name].[ext]",

              outputPath: "assets/fonts",
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./src/index.html",
    }),
    new CssMinimizerPlugin({}),

    new MiniCssExtractPlugin({
      filename: "assets/css/style.css",
    }),
  ],
};
