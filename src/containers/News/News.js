import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { getNavButtonFunc } from 'redux/modules/auth';

@connect(
    state => ({language: state.auth.language, }),
    {getNavButtonFunc}
)
class News extends Component {
    static propTypes = {
      language: PropTypes.string,
      getNavButtonFunc: PropTypes.func,
    };
    componentWillUnmount() {
      this.props.getNavButtonFunc(false);
    }
    render() {
      const {language} = this.props;
      const styles = require('./News.scss');
      const newsImg = require('./image/newsImg.jpg');
      const timeImg = require('./image/time.png');

      return (
            <div className={styles.newsCom}>
              <div className={styles.newsDiv}>
                {/* <div className={styles.newsNav}>
                  <h2>NEWS</h2>  
                </div>  */}
                <div className={styles.newsTab}>
                  <div className={styles.newsContainers}>
                    <dl>
                      <dt className={styles.newsDt}><img src={newsImg}/></dt>
                      <dd className={styles.newsDd}>
                        <a href="/news/detail/storemanplan">万维链Storeman节点奖励先行计划及2019年规划路线图</a>
                        <div className={styles.newsMess}>
                          <p>各位万维链的支持者：</p>
                          <p>我们很高兴地宣布，万维链 Storeman节点奖励先行计划已经启动！2019年万维链路线图同期发布，详情请参见文章内容。</p>
                        </div>
                        <p className={styles.newsTime}><img src={timeImg}/><span>2018-12-28</span></p>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
      );
    }
}

export default News;
