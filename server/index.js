/**
 * Created by Justin on 1/20/16.
 */
var webpack = require('webpack');
var webpackConfig = require('../webpack.config');
var compiler = webpack(webpackConfig);

app.use(require("webpack-dev-middleware")(compiler, {
  noInfo: true, publicPath: webpackConfig.output.publicPath
}));

app.use(require("webpack-hot-middleware")(compiler));