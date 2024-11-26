const path = require('path');
const cleanPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// optimize-css-assets-webpack-plugin is depricated
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');


module.exports = {
  mode: 'production',
  entry: './src/client/index.js',
  output: {
    filename: '[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: './',
    library: "Client",
    libraryTarget: 'var'
  },
  optimization: {
    minimizer: [new TerserPlugin({}), new CssMinimizerWebpackPlugin({})],
  },
  devtool: 'cheap-source-map',
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
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.html$/, 
        loader: "html-loader",
      },
    ],
  },
  plugins: [
    new cleanPlugin.CleanWebpackPlugin(),
    new HtmlWebpackPlugin(
      {
        template: './src/client/views/index.html',
        filename: 'index.html',
      },
    ),
    new MiniCssExtractPlugin({ filename: '[name].css' })
  ],
};
