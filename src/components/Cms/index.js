import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import cookie from 'react-cookie';
import { browserHistory} from 'react-router';

import Add from './Add';
import Table from './Table';

import {changeStep} from '../../store/cms';
import './Cms.scss';

class Cms extends Component {
    static propTypes = {
        changeStep: PropTypes.func,
        step: PropTypes.number,
    };

    componentWillMount() {
        const tokenId = cookie.load('token');
        // console.log('tokenId', tokenId);
        if (!tokenId || tokenId !== 'JWT@5Wn3O012n=+9d') {
            browserHistory.push('/')
        }
    }

    onChange(step) {
        this.props.changeStep(step);
    }

    render() {

        const {step} = this.props;

        return (
            <div>
                {step === 1 && <Table changeStepFunc = {this.onChange.bind(this)}/>}
                {step === 2 && <Add changeStepFunc = {this.onChange.bind(this)}/>}
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeStep: (data) => {
            dispatch(changeStep(data))
        },
    };
};

const mapStateToProps = (state) => ({
    step : state.cms.step,
});

export default connect(mapStateToProps, mapDispatchToProps)(Cms)

