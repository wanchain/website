import React from 'react';

import config from '../../../config';
const unComplieConfig = require('../../../../static/upload/unCompileConfig.json');

export function ulFunc(styles, days, refDays, hours, refHours, min, refMin, sec, refSec) {
  return (
      <ul className={styles}>
          <li><span >{days}</span><small>:</small><p>{refDays}</p></li>
          <li><span >{hours}</span><small>:</small><p>{refHours}</p></li>
          <li><span >{min}</span><small>:</small><p>{refMin}</p></li>
          <li><span>{sec}</span><small style={{opacity: 0}}>:</small><p>{refSec}</p></li>
      </ul>
  );
}

export function divEnFunc(ingBox, ingTitle, ingDetal, ingDetalSpan) {
  return (
      // countdown, days, refDays, hours, refHours, min, refMin, sec, refSec,
      <div className={ingBox}>
          <h2 className={ingTitle}>距离众筹结束还有</h2>
          {/* <ul className={countdown}> */}
              {/* <li><span >{days}</span><small>:</small><p>{refDays}</p></li> */}
              {/* <li><span >{hours}</span><small>:</small><p>{refHours}</p></li> */}
              {/* <li><span >{min}</span><small>:</small><p>{refMin}</p></li> */}
              {/* <li><span>{sec}</span><small style={{opacity: 0}}>:</small><p>{refSec}</p></li> */}
          {/* </ul> */}

          <div className="row">
              <div className="col-md-offset-2 col-md-8">
                  <div className="progress"></div>
                  <div className="progress-bar progress-bar-info progress-bar-striped active" style={{width: `${unComplieConfig.rate}`}}></div>
              </div>
          </div>
          <p className={ingDetal}>众筹总量：{unComplieConfig.amount}
              <span className={ingDetalSpan}>已完成：<em className="progress-value">{unComplieConfig.rate}</em></span>
          </p>
      </div>
  );
}

export function divZnFunc(ingBox, ingTitle, countdown, days, refDays, hours, refHours, min, refMin, sec, refSec, ingDetal, ingDetalSpan) {
  return (
      <div className={ingBox}>
          <h2 className={ingTitle}>距离众筹结束还有</h2>
          <ul className={countdown}>
              <li><span >{days}</span><small>:</small><p>{refDays}</p></li>
              <li><span >{hours}</span><small>:</small><p>{refHours}</p></li>
              <li><span >{min}</span><small>:</small><p>{refMin}</p></li>
              <li><span>{sec}</span><small style={{opacity: 0}}>:</small><p>{refSec}</p></li>
          </ul>

          <div className="row">
              <div className="col-md-offset-2 col-md-8">
                  <div className="progress"></div>
                  <div className="progress-bar progress-bar-info progress-bar-striped active" style={{width: config.app.icoBar.bar}}></div>
              </div>
          </div>
          <p className={ingDetal}>众筹总量：{config.app.icoBar.amount}
              <span className={ingDetalSpan}>已完成：<em className="progress-value">{config.app.icoBar.bar}</em></span>
          </p>
      </div>
  );
}
