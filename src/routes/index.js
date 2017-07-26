import React from 'react';
import {Route, IndexRoute} from 'react-router';

import CoreLayout from '../components/layouts/PageLayout/PageLayout'
import Home from '../components/Home/index';
import About from '../components/About/index';
import Blog from '../components/Blog/index';

import CounterRoute from '../components/Counter/index'


export default () => {
  return (
      <Route path="/" component={CoreLayout}>
          <IndexRoute component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/blog" component={Blog}/>

          <Route path="/counter" component={CounterRoute}/>
      </Route>
  );
};
// <Route path="/detail/:id" component={UserDetail}/>

