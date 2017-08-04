import { combineReducers } from 'redux';
import locationReducer from './location';
import auth from './auth';
import home from './home';
import counterReducer from './counter';

import cms from './cms';
import lang from './lang';
import warning from './warning';

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    location: locationReducer,
    auth,
    home,
    counterReducer,

    cms,
    lang,
    warning,
    ...asyncReducers
  })
};

export const injectReducer = (store, { key, reducer }) => {
  if (Object.hasOwnProperty.call(store.asyncReducers, key)) return;

  store.asyncReducers[key] = reducer;
  store.replaceReducer(makeRootReducer(store.asyncReducers))
};

export default makeRootReducer
