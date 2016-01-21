var path = require('path');
var webpack = require("webpack");
var config = {
  entry: [
    'webpack/hot/dev-server',
    'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true',
    "bootstrap-sass!./bootstrap-sass.config.js",
    path.resolve(__dirname, 'app/main.jsx')
  ],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    })
  ],
  devtool: "source-map",
  module: {
    loaders: [{
      test: /\.jsx?$/, // 用正则来匹配文件路径，这段意思是匹配 js 或者 jsx
      exclude: /node_modules/,
      loader: 'babel', // 加载模块 "babel" 是 "babel-loader" 的缩写
      query: {
        plugins: ['transform-runtime'],
        presets: [ 'es2015', 'stage-0', 'react' ]
        }
    }, {
      test: /\.scss$/,
      loader: 'style!css!sass?sourceMap'
    }, {
      test: /\.(png|jpg)$/,
      loader: 'url?limit=25000'
    },
      { test: /bootstrap\/js\//, loader: 'imports?jQuery=jquery' },
      { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,   loader: "url?limit=10000&mimetype=application/font-woff" },
      { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,  loader: "url?limit=10000&mimetype=application/font-woff" },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,    loader: "url?limit=10000&mimetype=application/octet-stream" },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,    loader: "file" },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,    loader: "url?limit=10000&mimetype=images/svg+xml" }]
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]

};

module.exports = config;