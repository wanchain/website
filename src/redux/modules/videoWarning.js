const ICO_OPEN = 'Astro/ICO_OPEN';
const ICO_CLOSE = 'Astro/ICO_CLOSE';
const ICO_MSG = 'Astro/ICO_MSG';

const initialState = {
  icoWarningModal: false,
};

export default function videoWarning(state = initialState, action = {}) {
  switch (action.type) {
    default:
      return state;
    case ICO_OPEN:
      return {
        ...state,
        icoWarningModal: true,
      };
    case ICO_CLOSE:
      return {
        ...state,
        icoWarningModal: false,
      };

    case ICO_MSG:
      return {
        ...state,
        icoMsg: action.reload,
      };
  }
}

export function icoOpenFunc() {
  return {
    type: ICO_OPEN,
  };
}

export function icoCloseFunc() {
  return {
    type: ICO_CLOSE,
  };
}

export function icoMsgFunc(msg) {
  return {
    type: ICO_MSG,
    reload: msg,
  };
}

