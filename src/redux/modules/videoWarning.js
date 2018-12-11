const VIDEO_OPEN = 'Astro/VIDEO_OPEN';
const VIDEO_CLOSE = 'Astro/VIDEO_CLOSE';

const initialState = {
  videoWarningModal: false,
};

export default function videoWarning(state = initialState, action = {}) {
  switch (action.type) {
    default:
      return state;
    case VIDEO_OPEN:
      return {
        ...state,
        videoWarningModal: true,
      };
    case VIDEO_CLOSE:
      return {
        ...state,
        videoWarningModal: false,
      };
  }
}

export function videoOpenFunc() {
  return {
    type: VIDEO_OPEN,
  };
}

export function videoCloseFunc() {
  return {
    type: VIDEO_CLOSE,
  };
}

