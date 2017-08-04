// add Chinese/English transformation

export const LANGUAGE_CHANGE = 'Astro/LANGUAGE_CHANGE';
const CLIENTWIDTH = 'Astro/CLIENTWIDTH';

const initialState = {
    language: 'zn',
    clientWidth: 1200,
};

export default function lang(state = initialState, action = {}) {
    switch (action.type) {
        default:
            return state;
        case LANGUAGE_CHANGE:
            setTimeout(()=>{
                global.dataFeedback.emit('onchangeLangComplete');
            }, 50);
            return {
                ...state,
                language: action.reload,
            };

        case CLIENTWIDTH:
            return {
                ...state,
                clientWidth: action.reload,
            };
    }
}

export function changeLanguage(active) {
    return {
        type: LANGUAGE_CHANGE,
        reload: active
    };
}

export function getClientWidth(data) {
    return {
        type: CLIENTWIDTH,
        reload: data
    };
}