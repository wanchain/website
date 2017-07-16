import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './PageLayout.scss';

import Navigation from '../Navigation';
import Carousel from '../Carousel';
import Footer from '../Footer';

// <Carousel/>
export const PageLayout = ({ children, pathname}) => (
    <div>
        {pathname !== '/' &&
        <Navigation/>
        }
        {children}
        <Footer/>
    </div>
);
PageLayout.propTypes = {
    children: PropTypes.node,
    pathname: PropTypes.string,
};

const mapDispatchToProps = (dispatch) => {
    return {

    };
};

const mapStateToProps = (state) => ({
    pathname : state.location.pathname,
});

export default connect(mapStateToProps, mapDispatchToProps)(PageLayout)
