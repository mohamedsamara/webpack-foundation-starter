/* eslint-disable */
'use strict';

const fs = require('fs');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const NODE_ENV = process.env.NODE_ENV;

function getPages() {
  const views = path.resolve(__dirname, '../', 'src/views/pages/');
  const files = fs
    .readdirSync(views)
    .filter(fileName => fileName.endsWith('.pug'));
  const pages = [];

  files.forEach(file => {
    const options = {
      filename: path.basename(file).replace('pug', 'html'),
      template: path.resolve(__dirname, '../', `src/views/pages/${file}`),
      inject: true,
    };

    if (NODE_ENV === 'production') {
      options.minify = {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true,
      };
    }

    pages.push(new HtmlWebpackPlugin(options));
  });

  return pages;
}

module.exports = { getPages };
