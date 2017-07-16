import React, { PropTypes } from 'react';
import './Carousel.scss';

import wangxiang from './media/万向区块链实验室.png';
import tsinghua from './media/清华五道口.png';

import daca from './media/daca.png';
import hyp from './media/hyperledger.png';

import czifi from './media/中关村互联网金融研究院.png';
import ufapku from './media/ufapku.png';

import ckgsb from './media/长江商学院.png';
import beijingchain from './media/beijingchain.png';

import select from './media/选中.png';
import unselect from './media/未选中.png';

import CTO from './news/51CTO.png'
import CIO from './news/CIO时代.png'
import csda from './news/csda.png'
import Kr from './news/zehP0kAAAAASUVORK5CYII=.png'
import shared from './news/共享财经.png'
import BaBi from './news/巴比特.png'
import stdaily from './news/科技日报.png'
import scienceNet from './news/科学网.png'
import LeiFeng from './news/雷锋网.png'
import CHainB from './news/铅笔.png'
import Yee from './news/网易科技.png'
import Lang from './news/新浪科技.png'

export default class About extends React.Component {
  static propTypes = {
  };

  constructor(props) {
    super(props);

    this.state = {
      date: new Date(), // 精确到秒的时钟
      style: true,
    }
  }


  componentDidMount() { //组件渲染完成，要挂载到页面前执行的代码
    this.timer = setInterval(
        () => this.trick(),
        2000
    );
  }

  componentWillUnmount() { //组件从页面卸载前执行的方法
    clearInterval(this.timer);
  }

  trick() {
    this.setState({date: new Date(), style: !this.state.style}); //改变组件的状态
  }

  render() {

    return (
        <div className="cooperation">
          {this.state.style &&
          <div className="media container">
            <ul>
              <a href="http://news.51cto.com/art/201611/522986.htm" target="_blank"> <li><img src={CTO}/></li></a>
              <a href="http://www.ciotimes.com/blockchain/121686.html" target="_blank">    <li><img src={CIO}/></li></a>
              <a href="http://www.ciotimes.com/blockchain/121686.html" target="_blank">  <li><img src={LeiFeng}/></li></a>
            </ul>
            <ul >
              <a href="http://huiyi.csdn.net/activity/product/goods_list?project_id=3284" target="_blank">  <li><img src={csda}/></li></a>
              <a href="http://36kr.com/p/5055252.html" target="_blank">    <li><img src={Kr}/></li></a>
              <a href="http://36kr.com/p/5055252.html" target="_blank">    <li><img src={CHainB}/></li></a>
            </ul>
            <ul >
              <a href="http://www.gongxiangcj.com/show-22-2506-1.html?from=timeline&isappinstalled=0#10006-weixin-1-52626-6b3bffd01fdde4900130bc5a2751b6d1" target="_blank">   <li><img src={shared}/></li></a>
              <a href="http://e.chinabyte.com/167/13962167.shtml" target="_blank">   <li><img src={BaBi}/></li></a>
              <a href="http://e.chinabyte.com/167/13962167.shtml" target="_blank">   <li><img src={Yee}/></li></a>
            </ul>
            <ul >
              <a href="http://digitalpaper.stdaily.com/http_www.kjrb.com/kjrb/html/2016-11/16/content_354267.htm?div=-1&from=singlemessage" target="_blank">  <li><img src={stdaily}/></li></a>
              <a href="http://www.kejixun.com/chuangye/161110/246561.shtml" target="_blank"> <li><img src={scienceNet}/></li></a>
              <a href="http://www.kejixun.com/chuangye/161110/246561.shtml" target="_blank">  <li><img src={Lang}/></li></a>
            </ul>
          </div>
          }

          {!this.state.style &&
          <div className="media container">
            <ul >
              <li><img src={wangxiang}/></li>
              <li><img src={tsinghua}/></li>
            </ul>
            <ul className="ul2">
              <li><img src={daca}/></li>
              <li><img src={hyp}/></li>
            </ul>
            <ul className="ul3">
              <li><img src={czifi}/></li>
              <li><img src={ufapku}/></li>
            </ul>
            <ul className="ul4">
              <li><img src={ckgsb}/></li>
              <li><img src={beijingchain}/></li>
            </ul>
          </div>
          }

          {this.state.style &&
          <div className="choose2">
            <img src={select}/>
            <img src={unselect}/>
          </div>
          }
          {!this.state.style &&
          <div className="choose2">
            <img src={unselect}/>
            <img src={select}/>
          </div>
          }
        </div>
    );
  }
}
