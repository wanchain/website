export const COUNTER_INCREMENT = 'Astro/COUNTER_INCREMENT';
export const COUNTER_DOUBLE_ASYNC = 'Astro/COUNTER_DOUBLE_ASYNC';

const initialState = {
    count: 0,
};

export default function homeReducer(state = initialState, action = {}) {
    switch (action.type) {
        default:
            return state;
        case COUNTER_INCREMENT:
            return {
                ...state,
                count: state.count + 1,
            };
        case COUNTER_DOUBLE_ASYNC:
            setTimeout(()=>{
                global.dataFeedback.emit('onDoubleAstncCompelete');
            }, 50);
            return {
                ...state,
                count: state.count * 2,
            };
    }
}

export function increment () {
    return {
        type    : COUNTER_INCREMENT,
    }
}

export function doubleAsync () {
    return {
        type    : COUNTER_DOUBLE_ASYNC,
    }
}
