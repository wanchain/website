import React, {PropTypes} from 'react';
import { browserHistory, Router } from 'react-router';
import { Provider } from 'react-redux';

import { getClientWidth } from '../store/lang';
import { connect } from 'react-redux';

class App extends React.Component {
  static propTypes = {
    store: PropTypes.object.isRequired,
    routes: PropTypes.object.isRequired,
    getClientWidth: PropTypes.func,
  };

  componentWillMount() {
    const width = document.documentElement.clientWidth;
    this.props.getClientWidth(width);
  }

  shouldComponentUpdate () {
    return false
  }

  render () {

    return (
      <Provider store={this.props.store}>
        <div style={{ height: '100%' }}>
          <Router history={browserHistory} children={this.props.routes}/>
        </div>
      </Provider>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getClientWidth: (data) => {
      dispatch(getClientWidth(data))
    },
  };
};

const mapStateToProps = (state) => ({
  language : state.lang.language,
});

export default connect(mapStateToProps, mapDispatchToProps)(App)
