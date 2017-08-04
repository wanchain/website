import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import './Cmsadd.scss';

class Cmsadd extends Component {
    static propTypes = {
        language: PropTypes.string,
        clientWidth: PropTypes.number,
    };

    render() {
        const {language, clientWidth} = this.props;

        return (
            <div className="crowdsaleDiv">
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
    clientWidth: state.lang.clientWidth,
});

export default connect(mapStateToProps, mapDispatchToProps)(Cmsadd)

