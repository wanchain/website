import React, { Component, PropTypes } from 'react';
import { IndexLink, Link } from 'react-router';
import { connect } from 'react-redux'
import { increment, doubleAsync } from '../../store/counter'
// import cookie from 'react-cookie';
import './Counter.scss';

class Counter extends Component {
    static propTypes = {
        increment: PropTypes.func.isRequired,
        doubleAsync: PropTypes.func.isRequired,
        count: PropTypes.number,
    };

    increment = () => {
       this.props.increment();
    };
    doubleAsync = () => {
        this.props.doubleAsync();

        const self = this;
        global.dataFeedback.once('onDoubleAstncCompelete', () => {
            alert('数据广播成功。')
        });
    };

    render() {
        const {count} = this.props;
        return (
            <div style={{ margin: '0 auto' }} >
                <h2>Counter: {count}</h2>
                <button className='btn btn-primary' onClick={this.increment}>
                    Increment
                </button>
                {' '}
                <button className='btn btn-secondary' onClick={this.doubleAsync}>
                    Double (Async)
                </button>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        increment: () => {
            dispatch(increment());
        },

        doubleAsync: () => {
            dispatch(doubleAsync());
        },
    };
};

const mapStateToProps = (state) => ({
    count : state.counterReducer.count
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
