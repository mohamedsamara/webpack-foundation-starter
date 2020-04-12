/* eslint-disable */

'use strict';

const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const helpers = require('./helpers');

const pages = helpers.getPages();
const NODE_ENV = process.env.NODE_ENV;

module.exports = {
  entry: path.resolve(__dirname, '../', 'src/js/index.js'),
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'eslint-loader',
        exclude: /(node_modules)/,
        options: {
          emitWarning: NODE_ENV !== 'production',
        },
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /(node_modules)/,
      },
      {
        test: /\.pug$/,
        loader: 'pug-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.json', '.css', '.scss', '.html'],
  },
  plugins: [
    ...pages,
    new CopyWebpackPlugin([{ from: 'src/public' }]),
    new CleanWebpackPlugin(),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(NODE_ENV),
      },
    }),
  ],
};
