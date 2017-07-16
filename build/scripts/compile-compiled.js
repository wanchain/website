'use strict';

var fs = require('fs-extra');
var path = require('path');
var chalk = require('chalk');
var webpack = require('webpack');
var logger = require('../lib/logger');
var webpackConfig = require('../webpack.config');
var project = require('../../project.config');

var runWebpackCompiler = function runWebpackCompiler(webpackConfig) {
  return new Promise(function (resolve, reject) {
    webpack(webpackConfig).run(function (err, stats) {
      if (err) {
        logger.error('Webpack compiler encountered a fatal error.', err);
        return reject(err);
      }

      var jsonStats = stats.toJson();
      if (jsonStats.errors.length > 0) {
        logger.error('Webpack compiler encountered errors.');
        logger.log(jsonStats.errors.join('\n'));
        return reject(new Error('Webpack compiler encountered errors'));
      } else if (jsonStats.warnings.length > 0) {
        logger.warn('Webpack compiler encountered warnings.');
        logger.log(jsonStats.warnings.join('\n'));
      }
      resolve(stats);
    });
  });
};

var compile = function compile() {
  return Promise.resolve().then(function () {
    return logger.info('Starting compiler...');
  }).then(function () {
    return logger.info('Target application environment: ' + chalk.bold(project.env));
  }).then(function () {
    return runWebpackCompiler(webpackConfig);
  }).then(function (stats) {
    logger.info('Copying static assets from ./public to ./' + project.outDir + '.');
    fs.copySync(path.resolve(project.basePath, 'public'), path.resolve(project.basePath, project.outDir));
    return stats;
  }).then(function (stats) {
    if (project.verbose) {
      logger.log(stats.toString({
        colors: true,
        chunks: false
      }));
    }
    logger.success('Compiler finished successfully! See ./' + project.outDir + '.');
  }).catch(function (err) {
    return logger.error('Compiler encountered errors.', err);
  });
};

compile();

//# sourceMappingURL=compile-compiled.js.map