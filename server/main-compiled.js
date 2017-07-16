'use strict';

var express = require('express');
var path = require('path');
var webpack = require('webpack');
var logger = require('../build/lib/logger');
var webpackConfig = require('../build/webpack.config');
var project = require('../project.config');
var compress = require('compression');
var https = require('https');
var fs = require('fs');

var mysite = './build/cert/ddlphtcsr.pem';
var mysiteCrt = './build/cert/7ce659ffec8df530.crt';
var gd1 = './build/cert/gd_bundle-g2-g1.crt';

var app = express();
app.use(compress());

// ------------------------------------
// Apply Webpack HMR Middleware
// ------------------------------------
if (project.env === 'development') {
  var compiler = webpack(webpackConfig);

  logger.info('Enabling webpack development and HMR middleware');
  app.use(require('webpack-dev-middleware')(compiler, {
    publicPath: webpackConfig.output.publicPath,
    contentBase: path.resolve(project.basePath, project.srcDir),
    hot: true,
    quiet: false,
    noInfo: false,
    lazy: false,
    stats: 'normal'
  }));
  app.use(require('webpack-hot-middleware')(compiler, {
    path: '/__webpack_hmr'
  }));

  // Serve static assets from ~/public since Webpack is unaware of
  // these files. This middleware doesn't need to be enabled outside
  // of development since this directory will be copied into ~/dist
  // when the application is compiled.
  app.use(express.static(path.resolve(project.basePath, 'public')));

  // This rewrites all routes requests to the root /index.html file
  // (ignoring file requests). If you want to implement universal
  // rendering, you'll want to remove this middleware.
  app.use('*', function (req, res, next) {
    var filename = path.join(compiler.outputPath, 'index.html');
    compiler.outputFileSystem.readFile(filename, function (err, result) {
      if (err) {
        return next(err);
      }
      res.set('content-type', 'text/html');
      res.send(result);
      res.end();
    });
  });
} else {
  logger.warn('Server is being run outside of live development mode, meaning it will ' + 'only serve the compiled application bundle in ~/dist. Generally you ' + 'do not need an application server for this and can instead use a web ' + 'server such as nginx to serve your static files. See the "deployment" ' + 'section in the README for more information on deployment strategies.');

  // Serving ~/dist by default. Ideally these files should be served by
  // the web server and not the app server, but this helps to demo the
  // server in production.
  app.use(express.static(path.resolve(project.basePath, project.outDir)));
}

module.exports = https.createServer({
  key: fs.readFileSync(mysite),
  certificate: fs.readFileSync(mysiteCrt),
  ca: [fs.readFileSync(gd1)]
}, app);

//# sourceMappingURL=main-compiled.js.map