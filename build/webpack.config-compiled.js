'use strict';

var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var project = require('../project.config');

var inProject = path.resolve.bind(path, project.basePath);
var inProjectSrc = function inProjectSrc(file) {
  return inProject(project.srcDir, file);
};

var __DEV__ = project.env === 'development';
var __TEST__ = project.env === 'test';
var __PROD__ = project.env === 'production';

var config = {
  entry: {
    normalize: [inProjectSrc('normalize')],
    main: [inProjectSrc(project.main)]
  },
  devtool: project.sourcemaps ? 'source-map' : false,
  output: {
    path: inProject(project.outDir),
    filename: __DEV__ ? '[name].js' : '[name].[chunkhash].js',
    publicPath: project.publicPath
  },
  resolve: {
    modules: [inProject(project.srcDir), 'node_modules'],
    extensions: ['*', '.js', '.jsx', '.json']
  },
  externals: project.externals,
  module: {
    rules: []
  },
  plugins: [new webpack.DefinePlugin(Object.assign({
    'process.env': { NODE_ENV: JSON.stringify(project.env) },
    __DEV__: __DEV__,
    __TEST__: __TEST__,
    __PROD__: __PROD__
  }, project.globals))]
};

// JavaScript
// ------------------------------------
config.module.rules.push({
  test: /\.(js|jsx)$/,
  exclude: /node_modules/,
  use: [{
    loader: 'babel-loader',
    query: {
      cacheDirectory: true,
      plugins: ['babel-plugin-transform-class-properties', 'babel-plugin-syntax-dynamic-import', ['babel-plugin-transform-runtime', {
        helpers: true,
        polyfill: false, // we polyfill needed features in src/normalize.js
        regenerator: true
      }], ['babel-plugin-transform-object-rest-spread', {
        useBuiltIns: true // we polyfill Object.assign in src/normalize.js
      }]],
      presets: ['babel-preset-react', ['babel-preset-env', {
        modules: false,
        targets: {
          ie9: true
        },
        uglify: true
      }]]
    }
  }]
});

// Styles
// ------------------------------------
var extractStyles = new ExtractTextPlugin({
  filename: 'styles/[name].[contenthash].css',
  allChunks: true,
  disable: __DEV__
});

config.module.rules.push({
  test: /\.(sass|scss)$/,
  loader: extractStyles.extract({
    fallback: 'style-loader',
    use: [{
      loader: 'css-loader',
      options: {
        sourceMap: project.sourcemaps,
        minimize: {
          autoprefixer: {
            add: true,
            remove: false,
            browsers: ['last 2 versions']
          },
          discardComments: {
            removeAll: true
          },
          discardUnused: false,
          mergeIdents: false,
          reduceIdents: false,
          safe: true,
          sourcemap: project.sourcemaps
        }
      }
    }, {
      loader: 'sass-loader',
      options: {
        sourceMap: project.sourcemaps,
        includePaths: [inProjectSrc('styles')]
      }
    }]
  })
});
config.plugins.push(extractStyles);

// Images
// ------------------------------------
config.module.rules.push({
  test: /\.(png|jpg|gif|pdf)$/,
  loader: 'url-loader',
  options: {
    limit: 8192
  }
})

// Fonts
// ------------------------------------
;[['woff', 'application/font-woff'], ['woff2', 'application/font-woff2'], ['otf', 'font/opentype'], ['ttf', 'application/octet-stream'], ['eot', 'application/vnd.ms-fontobject'], ['svg', 'image/svg+xml']].forEach(function (font) {
  var extension = font[0];
  var mimetype = font[1];

  config.module.rules.push({
    test: new RegExp('\\.' + extension + '$'),
    loader: 'url-loader',
    options: {
      name: 'fonts/[name].[ext]',
      limit: 10000,
      mimetype: mimetype
    }
  });
});

// HTML Template
// ------------------------------------
config.plugins.push(new HtmlWebpackPlugin({
  template: inProjectSrc('index.html'),
  inject: true,
  minify: {
    collapseWhitespace: true
  }
}));

// Development Tools
// ------------------------------------
if (__DEV__) {
  config.entry.main.push('webpack-hot-middleware/client.js?path=' + config.output.publicPath + '__webpack_hmr');
  config.plugins.push(new webpack.HotModuleReplacementPlugin(), new webpack.NamedModulesPlugin());
}

// Bundle Splitting
// ------------------------------------
if (!__TEST__) {
  var bundles = ['normalize', 'manifest'];

  if (project.vendors && project.vendors.length) {
    bundles.unshift('vendor');
    config.entry.vendor = project.vendors;
  }
  config.plugins.push(new webpack.optimize.CommonsChunkPlugin({ names: bundles }));
}

// Production Optimizations
// ------------------------------------
if (__PROD__) {
  config.plugins.push(new webpack.LoaderOptionsPlugin({
    minimize: true,
    debug: false
  }), new webpack.optimize.UglifyJsPlugin({
    sourceMap: !!config.devtool,
    comments: false,
    compress: {
      warnings: false,
      screw_ie8: true,
      conditionals: true,
      unused: true,
      comparisons: true,
      sequences: true,
      dead_code: true,
      evaluate: true,
      if_return: true,
      join_vars: true
    }
  }));
}

module.exports = config;

//# sourceMappingURL=webpack.config-compiled.js.map