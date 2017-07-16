import { combineReducers } from 'redux';
import locationReducer from './location';
import auth from './auth';
import home from './home';
import counterReducer from './counter';

import lang from './lang';

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    location: locationReducer,
    auth,
    home,
    counterReducer,

    lang,
    ...asyncReducers
  })
};

export const injectReducer = (store, { key, reducer }) => {
  if (Object.hasOwnProperty.call(store.asyncReducers, key)) return;

  store.asyncReducers[key] = reducer;
  store.replaceReducer(makeRootReducer(store.asyncReducers))
};

export default makeRootReducer
