const path = require("path");

module.exports = {
  entry: {
    app: "./resources/js/app.js",
    vendor: "./resources/js/vendor.js",
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          "html-loader", // Minimize html
        ],
      },
      {
        test: /\.(svg|png|jpe?g|gif)$/i,
        use: {
          loader: "file-loader", // Image loader for webpack
          options: {
            name: "[name].[hash].[ext]",
            outputPath: "images",
          },
        },
      },
    ],
  },
};
