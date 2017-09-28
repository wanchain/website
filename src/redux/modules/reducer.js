import { combineReducers } from 'redux';
// import multireducer from 'multireducer';
import { routerReducer } from 'react-router-redux';
import {reducer as reduxAsyncConnect} from 'redux-async-connect';
import { pagination } from 'violet-paginator';

import auth from './auth';
import warning from './warning';
import {reducer as form} from 'redux-form';
import info from './info';
import icoWarning from './icoWarning';
import white from './white';
import whiteWarning from './whiteWarning';
import videoWarning from './videoWarning';

export default combineReducers({
  routing: routerReducer,
  reduxAsyncConnect,
  auth,
  warning,
  icoWarning,
  white,
  whiteWarning,
  videoWarning,
  form,
  // multireducer: multireducer({
  //   counter1: counter,
  //   counter2: counter,
  //   counter3: counter
  // }),
  info,
  pagination,
});
