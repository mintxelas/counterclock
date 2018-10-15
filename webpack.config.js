const webpack = require("webpack");

module.exports = {
  entry: {
    main: [
      "./scripts/app.js",
      "./scripts/misc/gauge.js",
      "./scripts/controllers/about.js",
      "./scripts/controllers/main.js"
    ]
  },
  mode: "development",
  output: {
    path: __dirname,
    filename: "[name].js"
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all"
        }
      }
    }
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      moment: "moment"
    })
  ]
};
