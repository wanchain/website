import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom/server';
import serialize from 'serialize-javascript';
import Helmet from 'react-helmet';

export default class Html extends Component {
  static propTypes = {
    assets: PropTypes.object,
    component: PropTypes.node,
    store: PropTypes.object
  };

  render() {
    const {assets, component, store} = this.props;
    const content = component ? ReactDOM.renderToString(component) : '';
    const head = Helmet.rewind();

    return (
      <html lang="en-us">
        <head>
          {head.base.toComponent()}
          { /*{head.title.toComponent()}*/ }
          {head.meta.toComponent()}
          {head.link.toComponent()}
          {head.script.toComponent()}
          <meta name="keywords" content="wanchain,Wanchain, wanchan.org, 万维链，区块链，blockchain" />
          <meta name="description" content="万维链Wanchain旨在建立一个分布式的未来“银行”,通过建立不同区块链账本之间的连接，实现资产的跨账本转移，为基于数字货币和数字资产的金融应用提供一个基础设施。万维链Wanchain不只是一个实现跨链交易和多资产互通的连接平台，在实现跨链交易功能的同时，也是一个可以独立运行的区块链网络：它包含原生币，支持智能合约，并且拥有智能合约代币交易的隐私保护机制。任何开发者，均可根据应用场景，在万维链上开发出满足需求的金融应用" />
          <link rel="shortcut icon" href="/favicon.ico" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          {/* styles (will be present only in production with webpack extract text plugin) */}
          {Object.keys(assets.styles).map((style, key) =>
            <link href={assets.styles[style]} key={key} media="screen, projection"
                  rel="stylesheet" type="text/css" charSet="UTF-8"/>
          )}

          {/* (will be present only in development mode) */}
          {/* outputs a <style/> tag with all bootstrap styles + App.scss + it could be CurrentPage.scss. */}
          {/* can smoothen the initial style flash (flicker) on page load in development mode. */}
          {/* ideally one could also include here the style for the current page (Home.scss, About.scss, etc) */}
          { Object.keys(assets.styles).length === 0 ?
              <style dangerouslySetInnerHTML={{__html: require('../theme/bootstrap.config.js') + require('../containers/App/App.scss')._style}}/> : null }
        </head>
        <body>
          <div id="content" dangerouslySetInnerHTML={{__html: content}}/>
          <script dangerouslySetInnerHTML={{__html: `window.__data=${serialize(store.getState())};`}} charSet="UTF-8"/>

          <script type="text/javascript" src="/jquery/jquery.min.js" />
          <script type="text/javascript" src="/scroll/scroll.js" />

          <script type="text/javascript" src="/baidu/baidu.js" />

          <script src={assets.javascript.main} charSet="UTF-8"/>
        </body>
      </html>
    );
  }
}
