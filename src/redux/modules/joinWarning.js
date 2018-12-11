const JOIN_OPEN = 'Astro/JOIN_OPEN';
const JOIN_CLOSE = 'Astro/JOIN_CLOSE';
const JOIN_MSG = 'Astro/JOIN_MSG';

const initialState = {
  joinWarningModal: false,
};

export default function joinWarning(state = initialState, action = {}) {
  switch (action.type) {
    default:
      return state;
    case JOIN_OPEN:
      return {
        ...state,
        joinWarningModal: true,
      };
    case JOIN_CLOSE:
      return {
        ...state,
        joinWarningModal: false,
      };

    case JOIN_MSG:
      return {
        ...state,
        icoMsg: action.reload,
      };
  }
}

export function joinOpenFunc() {
  return {
    type: JOIN_OPEN,
  };
}

export function joinCloseFunc() {
  return {
    type: JOIN_CLOSE,
  };
}

export function joinMsgFunc(msg) {
  return {
    type: JOIN_MSG,
    reload: msg,
  };
}

