import React from 'react';
import {IndexRoute, Route} from 'react-router';
// import { isLoaded as isAuthLoaded, load as loadAuth } from 'redux/modules/auth';
import {
    App,
    Home,
    About,
    Login,
    // LoginSuccess,
    NotFound,
    // IcoNotice,
    Crowdsale,
    Career,
    // WhiteForm,
  } from 'containers';

import Table from './containers/LoginSuccess/Table';
import Add from './containers/LoginSuccess/Add';

export default () => {
  // const requireLogin = (nextState, replace, cb) => {
  //   function checkAuth() {
  //     const { auth: { user }} = store.getState();
  //     if (!user) {
  //       // oops, not logged in, so can't be here!
  //       replace('/');
  //     }
  //     cb();
  //   }
  //
  //   if (!isAuthLoaded(store.getState())) {
  //     store.dispatch(loadAuth()).then(checkAuth);
  //   } else {
  //     checkAuth();
  //   }
  // };

  /**
   * Please keep routes in alphabetical order
   */
  return (
    <Route path="/" component={App}>
      { /* Home (main) route */ }
      <IndexRoute component={Home}/>

      { /* Routes requiring login */ }
      { /* <Route onEnter={requireLogin}> */ }
        { /* <Route path="chat" component={Chat}/> */ }
        {/* <Route path="table" component={Table}/> */}
        {/* <Route path="add" component={Add}/> */}
      {/* </Route> */}
        <Route path="table" component={Table}/>
        <Route path="add" component={Add}/>

      { /* Routes */ }
      <Route path="about" component={About}/>
       <Route path="tokensale" component={Crowdsale}/>
        <Route path="career" component={Career}/>
        {/* <Route path="whitelist" component={WhiteForm}/> */}

      <Route path="login" component={Login}/>
      { /* <Route path="pagination" component={Pagination}/> */ }
      { /* <Route path="survey" component={Survey}/> */ }
      { /* <Route path="widgets" component={Widgets}/> */ }

      { /* Catch all route */ }
      <Route path="*" component={NotFound} status={404} />
    </Route>
  );
};
