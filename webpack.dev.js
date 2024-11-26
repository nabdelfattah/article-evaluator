const path = require('path');
const cleanPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/client/index.js',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/', // Serve assets from the root
    library: "Client",
    libraryTarget: 'var'
  },
  // devtool: 'eval-cheap-module-source-map',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(?:js|mjs|cjs)$/,
        exclude: /node_modules/,
        loader: 'babel-loader', 
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.html$/, 
        loader: "html-loader",
      },
    ],
  },
  plugins: [
    new cleanPlugin.CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './src/client/views/index.html',
      filename: 'index.html',
    }),
  ],
};
