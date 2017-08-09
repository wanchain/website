const WARNING_OPEN = 'Astro/WARNING_OPEN';
const WARNING_CLOSE = 'Astro/WARNING_CLOSE';
const WARNING_MSG = 'Astro/WARNING_MSG';

const initialState = {
  warningModal: false,
  warningMsg: '',
};

export default function warning(state = initialState, action = {}) {
  switch (action.type) {
    default:
      return state;
    case WARNING_OPEN:
      return {
        ...state,
        warningModal: true,
      };
    case WARNING_CLOSE:
      return {
        ...state,
        warningModal: false,
      };
    case WARNING_MSG:
      return {
        ...state,
        warningMsg: action.reload,
      };
  }
}

export function warningOpenFunc() {
  return {
    type: WARNING_OPEN,
  };
}

export function warningCloseFunc() {
  return {
    type: WARNING_CLOSE,
  };
}

export function warningMsgFunc(msg) {
  return {
    type: WARNING_MSG,
    reload: msg,
  };
}

// setTimeout(()=>{
//   global.dataFeedback.emit('onWarnCloseComplete');
// }, 50);
