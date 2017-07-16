'use strict';

var chalk = require('chalk');
var figures = require('figures');

// Need to support Node versions that don't support spreading function arguments
var spread = function spread(fn) {
  return function () {
    return fn([].slice.call(arguments));
  };
};

exports.log = console.log.bind(console);

exports.error = spread(function (messages) {
  console.error(chalk.red.apply(chalk, [figures.cross].concat(messages)));
});

exports.info = spread(function (messages) {
  console.info(chalk.cyan.apply(chalk, [figures.info].concat(messages)));
});

exports.success = spread(function (messages) {
  console.log(chalk.green.apply(chalk, [figures.tick].concat(messages)));
});

exports.warn = spread(function (messages) {
  console.warn(chalk.yellow.apply(chalk, [figures.warning].concat(messages)));
});

//# sourceMappingURL=logger-compiled.js.map