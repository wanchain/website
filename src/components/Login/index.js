import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux'
import Helmet from 'react-helmet';
import { browserHistory } from 'react-router';

import { changeLanguage } from '../../store/lang';
import { users } from '../../store/auth';

import './Login.scss'

class Login extends Component {
    static propTypes = {
        language: PropTypes.string,
        changeLanguage: PropTypes.func,
        users: PropTypes.func,
    };

    onSubmit(event) {
        event.preventDefault();
        const email = document.getElementById('login-email').value;
        const passwd = document.getElementById('login-passwd').value;
        console.log(email, passwd);
        const data = {username: email, password: passwd};
        this.props.users(data);

        const self = this;
        global.dataFeedback.once('onLoginComplete', () => {
            browserHistory.push('/cms');
        });
    }


    render() {

        const location = require('./images/location.png');

        return (
            <div className="app-location">
                <Helmet title="login"/>
                <h2>Welcome to Wanchian</h2>
                <div className="line"><span></span></div>
                <div className="location"><img src={location} className="img-responsive" alt="" /></div>
                <form>
                    <input type="text" className="text" placeholder="E-mail address" id="login-email"/>
                    <input type="password" placeholder="Password" id="login-passwd"/>
                    <div className="submit">
                        <a id="mySubmit" onClick={this.onSubmit.bind(this)}>Login</a>
                    </div>
                    <div className="clear"></div>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeLanguage: (data) => {
            dispatch(changeLanguage(data))
        },
        users: (data) => {
            dispatch(users(data))
        },
    };
};

const mapStateToProps = (state) => ({
    language : state.lang.language,
    clientWidth: state.lang.clientWidth,
});

export default connect(mapStateToProps, mapDispatchToProps)(Login)

// <Div4 />

