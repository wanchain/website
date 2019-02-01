import React from 'react';

import config from '../../../config';
import { Link, IndexLink } from 'react-router';

// zn
export function homeUl(styles, style) {
  return (
      <div className={styles} id="navbar-menu" style={style}>
          <ul>
              <li><Link to="/products">产品</Link></li>
              <li><a href={config.app.files.WhitepaperCH} target="_blank">白皮书</a></li>
              <li><a href={config.app.files.YellowpaperCH} target="_blank">黄皮书</a></li>
              <li><a href={config.app.files.CommercialCH} target="_blank">商业白皮书</a></li>
              <li><a href="http://www.wanchaindocs.org/en/latest/" target="_blank">文档库</a></li>
              <li><Link to="/about">团队</Link></li>
              <li><Link to="https://www.wanscan.org" target="_blank">浏览器</Link></li>
              <li><Link to="https://medium.com/wanchain-foundation" target="_blank">资讯</Link></li>
              <li><Link to="/roadmap">路线图</Link></li>
          </ul>
      </div>
  );
}

export function homePcUl(styles, style, homeDropdown, content) {
  return (
        <div className={styles} id="navbar-menu" style={style}>
            <ul>
                <li><Link to="/products">产品</Link></li>
                <li>
                    <div className={homeDropdown}>
                        <a>文档</a>
                        <div className={content}>
                            <a href={config.app.files.WhitepaperCH} target="_blank">白皮书</a>
                            <a href={config.app.files.YellowpaperCH} target="_blank">黄皮书</a>
                            <a href={config.app.files.CommercialCH} target="_blank">商业白皮书</a>
                            <a href="http://www.wanchaindocs.org/en/latest/" target="_blank">文档库</a>
                        </div>
                    </div>
                </li>
                <li><Link to="/about">团队</Link></li>
                <li><Link to="https://www.wanscan.org" target="_blank">浏览器</Link></li>
                <li><Link to="https://medium.com/wanchain-foundation" target="_blank">资讯</Link></li>
                <li><Link to="/roadmap">路线图</Link></li>
            </ul>
        </div>
  );
}

// en
export function homeUlEn(styles, style) {
  return (
        <div className={styles} id="navbar-menu" style={style}>
            <ul>
                {/* <li><IndexLink to="/">Home</IndexLink></li> */}
                <li><Link to="/products">Products</Link></li>
                {/* <li><Link to="https://swap.wanchain.org" target="_blank">Tokenswap</Link></li> */}
                {/* <li><Link to="/whitelist">Whitelist</Link></li> */}
                <li><a href={config.app.files.WhitepaperEN} target="_blank">Whitepaper</a></li>
                <li><a href={config.app.files.YellowpaperEN} target="_blank">Yellowpaper</a></li>
                <li><a href={config.app.files.CommercialEN} target="_blank">Commercialpaper</a></li>
                <li><a href="http://www.wanchaindocs.org/en/latest/" target="_blank">Wanchain docs</a></li>
                
                <li><Link to="/about">Team</Link></li>
                {/* <li><Link to="/career">Career</Link></li> */}
                {/* <li><Link to="/career">Career</Link></li> */}
                <li><Link to="https://www.wanscan.org" target="_blank">Explorer</Link></li>
                <li><Link to="https://medium.com/wanchain-foundation" target="_blank">Medium</Link></li>
                <li><Link to="/roadmap">Roadmap</Link></li>
                {/* <li><Link to="/news">News</Link></li> */}
                {/* <li><Link to="/events">Events</Link></li> */}
                {/* <li><Link to="/wanlabs">WanLabs</Link></li> */}
            </ul>
        </div>
  );
}

export function homePcUlEn(styles, style, homeDropdown, content) {
  return (
    <div className={styles} id="navbar-menu" style={style}>
        <ul>
            {/* <li><IndexLink to="/">Home</IndexLink></li> */}
            <li><Link to="/products">Products</Link></li>
            {/* <li><Link to="https://swap.wanchain.org" target="_blank">Tokenswap</Link></li> */}
            {/* <li><Link to="/whitelist">Whitelist</Link></li> */}
            <li>
                <div className={homeDropdown}>
                    <a>Docs</a>
                    <div className={content}>
                        <a href={config.app.files.WhitepaperEN} target="_blank">White paper</a>
                        <a href={config.app.files.YellowpaperEN} target="_blank">Yellow paper</a>
                        <a href={config.app.files.CommercialEN} target="_blank">Commercial paper</a>
                        <a href="http://www.wanchaindocs.org/en/latest/" target="_blank">Wanchain docs</a>
                    </div>
                </div>
            </li>
            <li><Link to="/about">Team</Link></li>
            {/* <li><Link to="/career">Career</Link></li> */}
            <li><Link to="https://www.wanscan.org" target="_blank">Explorer</Link></li>
            <li><Link to="https://medium.com/wanchain-foundation" target="_blank">Medium</Link></li>
            <li><Link to="/roadmap">Roadmap</Link></li>
            {/* <li><Link to="/news">News</Link></li> */}
            {/* <li><Link to="/events">Events</Link></li> */}
            {/* <li><Link to="/wanlabs">WanLabs</Link></li> */}
        </ul>
    </div>
  );
}
