import React from 'react';
const styles = require('./Carousel.scss');

import media from './data/media';
// import mediaTow from './data/mediaTow';

// const select = require('./image/select.png');
// const unselect = require('./image/unselect.png');

export default class Carousel extends React.Component {
  static propTypes = {
  };

  constructor(props) {
    super(props);

    this.state = {
      date: new Date(), // 精确到秒的时钟
      style: true,
    };
  }


  componentDidMount() { // 组件渲染完成，要挂载到页面前执行的代码
    this.timer = setInterval(
        () => this.trick(),
        2000
    );
  }

  componentWillUnmount() { // 组件从页面卸载前执行的方法
    clearInterval(this.timer);
  }

  trick() {
    this.setState({date: new Date(), style: !this.state.style}); // 改变组件的状态
  }

  render() {
    let mediaResult;
    let style;
    mediaResult = media.map((value, index) => {
      if (value.url === '') {
        style = {pointerEvents: 'none'};
      } else {
        style = {};
      }
      return (
          <a href={value.url} target="_blank" key={index} style={style}>
            {value.img && <img src={value.img} />}
          </a>
      );
    });

    return (
        <div className={styles.cooperation}>
          <div className={styles.cooperationDiv}>
            {mediaResult}
          </div>
        </div>
    );
  }
}
