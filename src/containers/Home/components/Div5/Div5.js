import React, {PropTypes} from 'react';
import { connect } from 'react-redux';

import newsData from './data/news';
import { queryNewsFunc } from 'redux/modules/auth';

@connect(
    state => ({language: state.auth.language, clientWidth: state.auth.clientWidth, }),
    {queryNewsFunc}
)
class Div5 extends React.Component {

    static propTypes = {
      language: PropTypes.string,
      clientWidth: PropTypes.number,
      queryNewsFunc: PropTypes.func,
    };
    // componentWillMount() {
    //   const data = {limit: 3};
    //   this.props.queryNewsFunc(data);
    // }

    render() {
      const {language} = this.props;

      const styles = require('./Div5.scss');
      const style = { textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: 4, WebkitBoxOrient: 'vertical', overflow: 'hidden'};

      let newsResult;
      newsResult = newsData.map((value, index) => {
        return (
            <a href={value.url} target="_blank" key={index}>
                <div className="col-lg-4">
                    <div className={styles.AstroModule7} >
                        <h2>{value.title}</h2>
                        <p style={style}>{value.description}</p>
                        <h4>{value.create_time}</h4>
                    </div>
                </div>
            </a>
        );
      });
      return (
            <div className={styles.div4Header}>

                <div className={styles.div4HeaderDiv + ' container'}>
                    <h2><hr className={styles.div1HeaderImg}/>
                        {language === 'zn' ? '最新通告' : 'News'}
                        <hr className={styles.div1HeaderImg}/>
                    </h2>
                    <div className="col-lg-12">
                        {newsResult}
                    </div>
                </div>
            </div>
      );
    }
}

export default Div5;
