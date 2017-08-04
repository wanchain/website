import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Add from './Add';
import Table from './Table';

import {changeStep} from '../../store/cms';
import './Cms.scss';

class Cms extends Component {
    static propTypes = {
        changeStep: PropTypes.func,
        step: PropTypes.number,
    };

    render() {

        const {step} = this.props;

        return (
            <div>
                {step === 0 && <Table changeStepFunc = {this.props.changeStep}/>}
                {step === 1 && <Add changeStepFunc = {this.props.changeStep}/>}
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

