import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import './About.scss';

import teamData from './data/dataTeam';
import advisoryData from './data/dataAdvisory';


class About extends Component {
    static propTypes = {
        language: PropTypes.string,
    };

    render() {
        const {language} = this.props;
        const blog1 = require('../../image/blog1.png');
        const blog2 = require('../../image/team.png');

        let teamList;
        teamList = teamData.map((value, index) => {
            return (
                <div className="col-lg-4 aboutTitleDiv" key={index}>
                    <img src={value.img} />
                    <span>{value.title}<small>{value.position}</small></span>
                    <p>{value.describe}</p>
                </div>
            )
        });

        let advisoryList;
        advisoryList = advisoryData.map((value, index) => {
           return (
               <div className="col-lg-4 aboutTitleDiv2" key={index}>
                   <img src={value.img} />
                   <span>{value.title}</span>
                   <p>{value.describe}</p>
               </div>
           )
        });

        return (
            <div className="aboutDiv">
                <div className="aboutHeader">
                    <img className="aboutHeaderImg1" src={blog1} />
                    <img className="aboutHeaderImg2" src={blog2} />
                    <h2>项目团队</h2>
                    <p>WANGLU TEAM</p>
                </div>
                <div className="container aboutBody">
                    <div className="aboutTitle">
                        <h2>核心团队</h2>
                        <p>WANCHAIN Team</p>
                    </div>
                    <div className="col-lg-12" style={{marginBottom: '20px'}}>
                        {teamList}
                    </div>

                    <div className="aboutTitle">
                        <h2>顾问团队</h2>
                        <p>Advisory Group</p>
                    </div>
                    <div className="col-lg-12">
                        {advisoryList}
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    };
};

const mapStateToProps = (state) => ({
    language : state.lang.language,
});

export default connect(mapStateToProps, mapDispatchToProps)(About)

