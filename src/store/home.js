export const HOME_LANGUAGE = 'Astro/HOME_LANGUAGE';
import fetchData from '../fetch/fetchData';

const SUBSCRIBE = 'Astro/SUBSCRIBE';

const initialState = {
  language: 'cn',
};

export default function home(state = initialState, action = {}) {
  switch (action.type) {
    default:
      return state;
    case HOME_LANGUAGE:
      return {
        ...state,
        language: action.reload,
      };
    case SUBSCRIBE:
      return {
        ...state,
        subscribeState: action.data,
      };
  }
}

export function changeLanguage(active) {
  return {
    type: HOME_LANGUAGE,
    reload: active
  };
}

export function subscribe(data) {
  return fetchData('subscribe', SUBSCRIBE, data);
}