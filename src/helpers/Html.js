import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom/server';
import serialize from 'serialize-javascript';
import Helmet from 'react-helmet';

import reAgent from '../utils/reAgent';

export default class Html extends Component {
  static propTypes = {
    assets: PropTypes.object,
    component: PropTypes.node,
    store: PropTypes.object,
  };

  render() {
    const {assets, component, store} = this.props;
    const content = component ? ReactDOM.renderToString(component) : '';
    const head = Helmet.rewind();

    const agent = global.navigator.userAgent;
    console.log('userAgent ', agent);

    let title;
    let description;
    // if (reAgent('google', agent)) {
    //   title = "Wanchain- A Distributed Super Financial Market";
    //   description = 'Wanchain aims to build a super financial market of digital assets.  It is an infrastructure connecting different digital assets.';
    // } else {
    //   title = "万维链(Wanchain)-资产跨链+隐私保护+智能合约 构建数字新经济基础设施";
    //   description = '万维链Wanchain旨在建立一个分布式的未来“银行”,通过建立不同区块链账本之间的连接，实现资产的跨账本转移，为基于数字货币和数字资产的金融应用提供一个基础设施。万维链Wanchain不只是一个实现跨链交易和多资产互通的连接平台，在实现跨链交易功能的同时，也是一个可以独立运行的区块链网络：它包含原生币，支持智能合约，并且拥有智能合约代币交易的隐私保护机制。任何开发者，均可根据应用场景，在万维链上开发出满足需求的金融应用';
    // }
    title = "Wanchain - Cross-Chain Smart Contracts with Privacy Protection";
    description = 'Wanchain aims to build a super financial market of digital assets.  It is an infrastructure connecting different digital assets.';

    return (
      <html lang="zh-cmn-Hans">
        <head>
          {head.base.toComponent()}
          {/* {head.title.toComponent()} */}
          {head.meta.toComponent()}
          {head.link.toComponent()}
          {head.script.toComponent()}

          <title>{title}</title>
          <meta name="keywords" content="wanchain, Wanchain, wanchan.org, 万维链, 区块链，blockchain" />
          <meta name="description" content={description} />
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
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
          <script src={assets.javascript.main} charSet="UTF-8"/>

          <script type="text/javascript" src="/baidu/baidu.js" />

          <script type="text/javascript" src="/facebook/facebook.js" />
          <noscript>
            < img height="1" width="1" style={{display: 'none'}} src="https://www.facebook.com/tr?id=1773079876322445&ev=PageView&noscript=1"/>
          </noscript>
          {/* <script type="text/javascript" src="/whiteForm/saveForm.js" /> */}

          <script type="text/javascript" src="/monitor/click.js" />
        </body>
      </html>
    );
  }
}
