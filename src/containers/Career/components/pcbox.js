import React, {Component} from 'react';
import dataObj from '../data/opportunities.json';
import styles from '../Career.scss';

class PCBox extends Component {
  render() {
    const sanjiao = require('../image/sanj.png');
    // const dataObj = JSON.parse(data);
    const detail = dataObj.map((obj, index) => (<div className={styles.comDiv}>
      <p className={
          `cdPBox${
            index === 0
            ? ''
            : (index + 1)}`
        } id="comcdpBox">
        <span className="cdpSpan1">{obj.posi}</span>
        <span className="cdpSpan2">{obj.loca}</span>
        <span className="cdpSpan3">
          <span>{obj.num}</span>
          <em className="cdpXia"><img id="target" src={sanjiao}/></em>
        </span>
      </p>
      <div className={
          `toggleBox${
            index === 0
            ? ''
            : (index + 1)}`
        } id="toggleBox">
        <div className="w">
          <div className="tbDiv">
            <h1>
              <span className="icoSan"></span>
              <span className="comtdH1">Job Description:</span>
            </h1>
            {obj.detail['Job Description'].map((str) => (<p>{str}</p>))}
          </div>
          <div className="tbDiv">
            <h1>
              <span className="icoSan"></span>
              <span className="comtdH1">Requirement:</span>
            </h1>
            <p className="comtdP">
              {obj.detail.Requirement.map((str) => (<span>{str}</span>))}
            </p>
          </div>
          <div className="tbDiv">
            <h1>
              <span className="icoSan"></span>
              <span className="comtdH1">Compensation:</span>
            </h1>
            <p className="comtdP">{obj.detail.Compensation}</p>
          </div>
          <div className="tbDiv">
            <h1>
              <span className="icoSan"></span>
              <span className="comtdH1">Preferred Location:</span>
            </h1>
            <p className="comtdP">{obj.detail['Preferred Location']}</p>
          </div>
          <div className="tbDiv">
            <h1>
              <span className="icoSan"></span>
              <span className="comtdH1">About Us:</span>
            </h1>
            <p className="comtdP">
              {obj.detail['About Us']}
            </p>
          </div>
          <div className="tbDiv">
            <h1>
              <span className="icoSan"></span>
              <span className="comtdH1">Benefits of Working at Wanchain</span>
            </h1>
            <p className="comtdP">
              {obj.detail['Benefits of Working at Wanchain'].map((str) => (<span>{str}</span>))}
            </p>
          </div>
          <div className="tbDiv">
            <h1>
              <span className="icoSan"></span>
              <span className="comtdH1">To apply please send your resume, Github repository, and/or LinkedIn profile to:
              </span>
            </h1>
            <p className="comtdP">
              info@wanchain.org</p>
          </div>
        </div>
      </div>
    </div>));
    return (<div className={styles.messageBox} id="pcBox">
      <ul className={styles.mbUl}>
        <li className={styles.mbuLi1}>
          <span className={styles.liBor}>POSITION</span>
        </li>
        <li className={styles.mbuLi2}>LOCATION</li>
        <li className={styles.mbuLi3}>NUMBER</li>
      </ul>
      {detail}
    </div>);
  }
}

export default PCBox;
