const LOAD = 'redux-example/auth/LOAD';
const LOAD_SUCCESS = 'redux-example/auth/LOAD_SUCCESS';
const LOAD_FAIL = 'redux-example/auth/LOAD_FAIL';
const LOGIN = 'redux-example/auth/LOGIN';
const LOGIN_SUCCESS = 'redux-example/auth/LOGIN_SUCCESS';
const LOGIN_FAIL = 'redux-example/auth/LOGIN_FAIL';
const LOGOUT = 'redux-example/auth/LOGOUT';
const LOGOUT_SUCCESS = 'redux-example/auth/LOGOUT_SUCCESS';
const LOGOUT_FAIL = 'redux-example/auth/LOGOUT_FAIL';

const USERS = 'redux-example/auth/USERS';
const USERS_SUCCESS = 'redux-example/auth/LOGOUT_SUCCESS';
const USERS_FAIL = 'redux-example/auth/LOGOUT_FAIL';

const CLIENT_WIDTH = 'redux-example/auth/CLIENT_WIDTH';
const HOME_NAV = 'redux-example/auth/HOME_NAV';
const HOME_LANG = 'redux-example/auth/HOME_LANG';

const SUBSCRIBE = 'redux-example/auth/SUBSCRIBE';
const SUBSCRIBE_SUCCESS = 'redux-example/auth/SUBSCRIBE_SUCCESS';
const SUBSCRIBE_FAIL = 'redux-example/auth/SUBSCRIBE_FAIL';

const initialState = {
  loaded: false,
  navButton: false,
  language: 'zn',
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOAD:
      return {
        ...state,
        loading: true
      };
    case LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        user: action.result
      };
    case LOAD_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false,
        error: action.error
      };
    case LOGIN:
      return {
        ...state,
        loggingIn: true
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loggingIn: false,
        user: action.result
      };
    case LOGIN_FAIL:
      return {
        ...state,
        loggingIn: false,
        user: null,
        loginError: action.error
      };
    case LOGOUT:
      return {
        ...state,
        loggingOut: true
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        loggingOut: false,
        user: null
      };
    case LOGOUT_FAIL:
      return {
        ...state,
        loggingOut: false,
        logoutError: action.error
      };
    case CLIENT_WIDTH:
      return {
        ...state,
        clientWidth: action.reload,
      };
    case HOME_NAV:
      return {
        ...state,
        navButton: action.reload,
      };
    case HOME_LANG:
      return {
        ...state,
        language: action.reload,
      };

    case SUBSCRIBE_SUCCESS:
      setTimeout(()=>{
        global.dataFeedback.emit('onSubscribeComplete');
      }, 50);
      return {
        ...state,
        subscribeState: action.result,
      };

    default:
      return state;
  }
}

export function isLoaded(globalState) {
  return globalState.auth && globalState.auth.loaded;
}

export function load() {
  return {
    types: [LOAD, LOAD_SUCCESS, LOAD_FAIL],
    promise: (client) => client.get('/loadAuth')
  };
}

export function login(name) {
  return {
    types: [LOGIN, LOGIN_SUCCESS, LOGIN_FAIL],
    promise: (client) => client.post('/login', {
      data: {
        name: name
      }
    })
  };
}

export function logout() {
  return {
    types: [LOGOUT, LOGOUT_SUCCESS, LOGOUT_FAIL],
    promise: (client) => client.get('/logout')
  };
}


export function getUserFunc() {
  return {
    types: [USERS, USERS_SUCCESS, USERS_FAIL],
    promise: (client) => client.get('/users')
  };
}

export function getClientWidthFunc(data) {
  return {
    type: CLIENT_WIDTH,
    reload: data,
  };
}

export function getNavButtonFunc(data) {
  return {
    type: HOME_NAV,
    reload: data,
  };
}

export function changeLangFunc(active) {
  return {
    type: HOME_LANG,
    reload: active
  };
}

export function insertSubscribeFunc(data) {
  return {
    types: [SUBSCRIBE, SUBSCRIBE_SUCCESS, SUBSCRIBE_FAIL],
    promise: (client) => client.post('/subscribe', {
      data: data,
    })
  };
}
