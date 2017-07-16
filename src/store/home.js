export const HOME_LANGUAGE = 'Astro/HOME_LANGUAGE';

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
  }
}

export function changeLanguage(active) {
  return {
    type: HOME_LANGUAGE,
    reload: active
  };
}
