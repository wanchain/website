// add Chinese/English transformation

export const LANGUAGE_CHANGE = 'Astro/LANGUAGE_CHANGE';

const initialState = {
    language: 'zn',
};

export default function lang(state = initialState, action = {}) {
    switch (action.type) {
        default:
            return state;
        case LANGUAGE_CHANGE:
            return {
                ...state,
                language: action.reload,
            };
    }
}

export function changeLanguage(active) {
    return {
        type: LANGUAGE_CHANGE,
        reload: active
    };
}
