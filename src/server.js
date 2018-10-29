import Express from 'express';
import React from 'react';
import ReactDOM from 'react-dom/server';
import config from './config';
import favicon from 'serve-favicon';
import compression from 'compression';
import httpProxy from 'http-proxy';
import path from 'path';
import createStore from './redux/create';
import ApiClient from './helpers/ApiClient';
import Html from './helpers/Html';
import PrettyError from 'pretty-error';
import http from 'http';
import https from 'https';
import fs from 'fs';
import helmet from 'helmet'
import referrerPolicy from 'referrer-policy'
import csp from 'helmet-csp'

import { match } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { ReduxAsyncConnect, loadOnServer } from 'redux-async-connect';
import createHistory from 'react-router/lib/createMemoryHistory';
import {Provider} from 'react-redux';
import getRoutes from './routes';

var formidable = require('formidable');
var util = require('util');

var getIP = require('ipware')().get_ip;
var geoIp = require('geoip-lite');



const mysite = (config.app.cert.mysite); //key
const mysiteCrt = (config.app.cert.mysiteCrt); //
const gd1 = (config.app.cert.gd1);

const targetUrl = 'http://' + config.apiHost + ':' + config.apiPort;
const pretty = new PrettyError();

const app = new Express();

app.use(helmet())
app.use(referrerPolicy({ policy: 'same-origin' }))
app.use(csp({
  // Specify directives as normal.
  directives: {
    scriptSrc: ["'self'", "'unsafe-inline'", '*'],
    imgSrc: ['img.com', 'data:', '*'],
  },
}))

let server;
if (__DEVELOPMENT__) {
  server = new http.Server(app);
} else  {
  const httpapp = new Express();
  const httpserver = new http.Server(httpapp);

  httpapp.use('*', function(req, res) {
    console.log("HTTP: " + req.url);
    return res.redirect(301, "https://" + req.headers["host"] + req.url);
  });
  httpapp.listen(80);

  server = https.createServer({
    key: fs.readFileSync(path.join(__dirname, 'cert/wanchain.org.key')),
    cert: fs.readFileSync(path.join(__dirname, 'cert/343826d2a48a2880.crt')),
    ca: [fs.readFileSync(path.join(__dirname, 'cert/gd_bundle-g2-g1.crt'))
    ],
    requestCert: false,
    rejectUnauthorized: false
  }, app);
}

const proxy = httpProxy.createProxyServer({
  target: targetUrl,
  ws: true
});

app.use(compression());

// let debug;
// debug = true;
// // debug = false;

// if (debug === false) {
//   app.use(function(req, res, next) {
//     var ipInfo = getIP(req);
//
//     var geo = geoIp.lookup(ipInfo.clientIp);
//
//     if (geo !== null && geo['country'] !== 'CN') {
//       next();
//     } else {
//       res.writeHead(404,{'Content-Type':'text/plain'});
//       res.write('404 Not Found');
//       res.end();
//     }
//   });
// }

app.use(function(req, res, next) {
  next();
});

app.use(favicon(path.join(__dirname, '..', 'static', 'favicon.ico')));

app.use(Express.static(path.join(__dirname, '..', 'static')));

app.use('/download/gwan-linux*', function(req, res) {
  res.download(path.join(__dirname, '..', 'static', config.app.files.gwanLinux));
});
app.use('/download/gwan-windows*', function(req, res) {
  res.download(path.join(__dirname, '..', 'static', config.app.files.gwanWin));
});
app.use('/download/gwan-mac*', function(req, res) {
  res.download(path.join(__dirname, '..', 'static', config.app.files.gwanMac));
});
app.use('/download/wanLabs_introduction', function(req, res) {
  res.download(path.join(__dirname, '..', 'static', config.app.files.wanLabs_introduction));
});
// app.use('/download/winwallet', function(req, res) {
//   res.download(path.join(__dirname, '..', 'static', config.app.files.winwallet));
// });  
// app.use('/download/macwallet', function(req, res) {
//   res.download(path.join(__dirname, '..', 'static', config.app.files.macwallet));
// });
// app.use('/download/linwallet', function(req, res) {
//   res.download(path.join(__dirname, '..', 'static', config.app.files.linwallet));
// });

app.use('/download/winwallet2', function(req, res) {
  res.download(path.join(__dirname, '..', 'static', config.app.files.winwallet2));
});
app.use('/baidu_statistics', function(req, res) {
  res.setHeader('X-Frame-Options', 'https://tongji.baidu.com');
  res.sendfile(path.join(__dirname, '..', 'static', '/baidu/baiduStatistics.html'));
});
app.use('/download/macwallet2', function(req, res) {
  res.download(path.join(__dirname, '..', 'static', config.app.files.macwallet2));
});
app.use('/download/linwallet2', function(req, res) {
  res.download(path.join(__dirname, '..', 'static', config.app.files.linwallet2));
});

/* 上传*/
app.post('/upload',function(req, res){
  var reqMethod = req.method.toLowerCase();
  console.log('reqMethod', reqMethod);
  // 文件将要上传到哪个文件夹下面
  var uploadfolderpath = config.app.upload.prodpath;

  var server = config.app.upload.prodserver;

  console.log('路由 ' + req.url);

  // ----------------------用 '/upload' 这个路由来处理文件上传----------------------
  if (req.url === '/upload' && req.method.toLowerCase() === 'post') {

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With");
    res.setHeader("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");

    // ----- 情况1：跨域时，先发送一个options请求，此处要返回200 -----
    if (reqMethod === 'options') {
      console.log('options 请求时，返回 200');

      // 返回结果
      res.writeHead(200, {
        'Content-type': 'text/html'
      });
      res.end('options OK');
      return;
    }

    // ----- 情况2：发送post请求，上传图片 -----

    console.log('定位到 /upload 路由');

    // 使用第三方的 formidable 插件初始化一个 form 对象
    var form = new formidable.IncomingForm();
    form.uploadDir = config.app.upload.produploadDir;

    // 处理 request
    form.parse(req, function (err, fields, files) {
      if (err) {
        return console.log('formidable, form.parse err');
      }

      console.log('formidable, form.parse ok');

      var item;

      // 计算 files 长度
      var length = 0;
      for (item in files) {
        length++;
      }
      if (length === 0) {
        console.log('files no data');
        return;
      }

      for (item in files) {
        var file = files[item];
        // formidable 会将上传的文件存储为一个临时文件，现在获取这个文件的目录
        var tempfilepath = file.path;
        console.log('tempfilepath', tempfilepath);
        // 获取文件类型
        var type = file.type;

        // 获取文件名，并根据文件名获取扩展名
        var filename = file.name;
        var extname = filename.lastIndexOf('.') >= 0
            ? filename.slice(filename.lastIndexOf('.') - filename.length)
            : '';
        // 文件名没有扩展名时候，则从文件类型中取扩展名
        if (extname === '' && type.indexOf('/') >= 0) {
          extname = '.' + type.split('/')[1];
        }
        // 将文件名重新赋值为一个随机数（避免文件重名）
        filename = Math.random().toString().slice(2) + extname;

        // 构建将要存储的文件的路径
        var filenewpath = uploadfolderpath  + filename;

        // 将临时文件保存为正式的文件
        fs.rename(tempfilepath, filenewpath, function (err) {
          // 存储结果
          var result = '';

          if (err) {
            // 发生错误
            console.log('fs.rename err');
            result = 'error|save error';
          } else {
            // 保存成功
            console.log('fs.rename done');
            // 拼接图片url地址
            result = server + 'upload' + '/' + filename;
          }

          // 返回结果
          res.writeHead(200, {
            'Content-type': 'text/html'
          });
          res.end(result);
        }); // fs.rename
      } // for in
    });
  } else {
    // ---------------------- 其他路由，直接作为静态文件返回，如通过url获取图片 ----------------------
    var pathname = url.parse(req.url).pathname;
    var filepath = path.join(__dirname, pathname);
    fs.readFile(filepath, function (err, file) {
      if (err) {
        res.writeHead(404);
        console.log('response file error: ' + filepath);
        res.end('404 NOT FOUND...');
        return;
      }
      if (filepath.slice(filepath.lastIndexOf('.') - filepath.length) === '.css') {
        // 兼容IE
        res.writeHead('200', {'Content-type': 'text/css'});
      } else {
        res.writeHead('200');
      }
      console.log('response file success: ' + filepath);
      res.end(file);
    });
  }
});

// Proxy to API server
// app.use('/api', (req, res) => {
//   proxy.web(req, res, {target: targetUrl});
// });

app.use('/ws', (req, res) => {
  proxy.web(req, res, {target: targetUrl + '/ws'});
});

server.on('upgrade', (req, socket, head) => {
  proxy.ws(req, socket, head);
});

// added the error handling to avoid https://github.com/nodejitsu/node-http-proxy/issues/527
proxy.on('error', (error, req, res) => {
  let json;
  if (error.code !== 'ECONNRESET') {
    console.error('proxy error', error);
  }
  if (!res.headersSent) {
    res.writeHead(500, {'content-type': 'application/json'});
  }

  json = {error: 'proxy_error', reason: error.message};
  res.end(JSON.stringify(json));
});

app.use((req, res) => {
  if (__DEVELOPMENT__) {
    // Do not cache webpack stats: the script file would change since
    // hot module replacement is enabled in the development env
    webpackIsomorphicTools.refresh();
  }

  const client = new ApiClient(req);
  const memoryHistory = createHistory(req.originalUrl);
  const store = createStore(memoryHistory, client);
  const history = syncHistoryWithStore(memoryHistory, store);

  function hydrateOnClient() {
    res.send('<!doctype html>\n' +
        ReactDOM.renderToString(<Html assets={webpackIsomorphicTools.assets()} store={store} />));
  }

  if (__DISABLE_SSR__) {
    hydrateOnClient();
    return;
  }

  match({ history, routes: getRoutes(store), location: req.originalUrl }, (error, redirectLocation, renderProps) => {
    if (redirectLocation) {
      res.redirect(redirectLocation.pathname + redirectLocation.search);
    } else if (error) {
      console.error('ROUTER ERROR:', pretty.render(error));
      res.status(500);
      hydrateOnClient();
    } else if (renderProps) {
      loadOnServer({...renderProps, store, helpers: {client}}).then(() => {
        const component = (
            <Provider store={store} key="provider">
              <ReduxAsyncConnect {...renderProps} />
            </Provider>
        );

        res.status(200);

        global.navigator = {userAgent: req.headers['user-agent']};

        res.send('<!doctype html>\n' +
            ReactDOM.renderToString(<Html assets={webpackIsomorphicTools.assets()} component={component} store={store} />));
      });
    } else {
      res.status(404).send('Not found');
    }
  });
});

if (config.port) {
  server.listen(config.port, (err) => {
    if (err) {
      console.error(err);
    }
    console.info('----\n==> ✅  %s is running in localhost, talking to API server on %s.', config.app.title, config.apiPort);
    console.info('==> 💻  Open http://%s:%s in a browser to view the app.', config.host, config.port);
  });
} else {
  console.error('==>     ERROR: No PORT environment variable has been specified');
}
