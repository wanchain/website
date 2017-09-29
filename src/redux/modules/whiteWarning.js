const WHITE_OPEN = 'Astro/WHITE_OPEN';
const WHITE_CLOSE = 'Astro/WHITE_CLOSE';
const WHITE_MSG = 'Astro/WHITE_MSG';

const initialState = {
  whiteWarningModal: false,
};

export default function whiteWarning(state = initialState, action = {}) {
  switch (action.type) {
    default:
      return state;
    case WHITE_OPEN:
      return {
        ...state,
        whiteWarningModal: true,
      };
    case WHITE_CLOSE:
      return {
        ...state,
        whiteWarningModal: false,
      };

    case WHITE_MSG:
      return {
        ...state,
        whiteMsg: action.reload,
      };
  }
}

export function whiteOpenFunc() {
  return {
    type: WHITE_OPEN,
  };
}

export function whiteCloseFunc() {
  return {
    type: WHITE_CLOSE,
  };
}

export function whiteMsgFunc(msg) {
  return {
    type: WHITE_MSG,
    reload: msg,
  };
}

