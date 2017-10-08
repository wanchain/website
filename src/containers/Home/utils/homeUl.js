import React from 'react';

import config from '../../../config';
import { Link, IndexLink } from 'react-router';


// zn
export function homeUl(styles, style) {
  return (
      <div className={styles} id="navbar-menu" style={style}>
          <ul>
              <li><IndexLink to="/">首页</IndexLink></li>
               {/* <li><Link to="/tokensale">Tokesale</Link></li> */}
              {/* <li><Link to="/whitelist">Whitelist</Link></li> */}
              <li><a href={config.app.files.WhitepaperCH} target="_blank">白皮书</a></li>
              <li><a href={config.app.files.YellowpaperCH} target="_blank">黄皮书</a></li>
              <li><a href={config.app.files.CommercialCH} target="_blank">商业白皮书</a></li>
              <li><Link to="/about">团队</Link></li>
          </ul>
      </div>
  );
}

export function homePcUl(styles, style, homeDropdown, content) {
  return (
        <div className={styles} id="navbar-menu" style={style}>
            <ul>
                <li><IndexLink to="/">首页</IndexLink></li>
                 {/* <li><Link to="/tokensale">Tokensale</Link></li> */}
                {/* <li><Link to="/whitelist">Whitelist</Link></li> */}
                <li>
                    <div className={homeDropdown}>
                        <a>文档</a>
                        <div className={content}>
                            <a href={config.app.files.WhitepaperCH} target="_blank">白皮书</a>
                            <a href={config.app.files.YellowpaperCH} target="_blank">黄皮书</a>
                            <a href={config.app.files.CommercialCH} target="_blank">商业白皮书</a>
                        </div>
                    </div>
                </li>
                <li><Link to="/about">团队</Link></li>
            </ul>
        </div>
  );
}

// en
export function homeUlEn(styles, style) {
  return (
        <div className={styles} id="navbar-menu" style={style}>
            <ul>
                <li><IndexLink to="/">Home</IndexLink></li>
                 {/* <li><Link to="/tokensale">Tokensale</Link></li> */}
                {/* <li><Link to="/whitelist">Whitelist</Link></li> */}
                <li><a href={config.app.files.WhitepaperEN} target="_blank">Whitepaper</a></li>
                <li><a href={config.app.files.YellowpaperEN} target="_blank">Yellowpaper</a></li>
                <li><a href={config.app.files.CommercialEN} target="_blank">Commercialpaper</a></li>
                <li><Link to="/about">Team</Link></li>
            </ul>
        </div>
  );
}

export function homePcUlEn(styles, style, homeDropdown, content) {
  return (
    <div className={styles} id="navbar-menu" style={style}>
        <ul>
            <li><IndexLink to="/">Home</IndexLink></li>
             {/* <li><Link to="/tokensale">Tokensale</Link></li> */}
            {/* <li><Link to="/whitelist">Whitelist</Link></li> */}
            <li>
                <div className={homeDropdown}>
                    <a>Docs</a>
                    <div className={content}>
                        <a href={config.app.files.WhitepaperEN} target="_blank">Whitepaper</a>
                        <a href={config.app.files.YellowpaperEN} target="_blank">Yellowpaper</a>
                        <a href={config.app.files.CommercialEN} target="_blank">Commercialpaper</a>
                    </div>
                </div>
            </li>
            <li><Link to="/about">Team</Link></li>
        </ul>
    </div>
  );
}
