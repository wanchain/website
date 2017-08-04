export const CMS_ADD = 'Astro/CMS_ADD';
import fetchData from '../fetch/fetchData';

const initialState = {
    cmsAddData: null,
};

export default function cms(state = initialState, action = {}) {
    switch (action.type) {
        default:
            return state;
        case CMS_ADD:
            setTimeout(()=>{
                global.dataFeedback.emit('onCmsAddComplete');
            }, 50);
            return {
                ...state,
                cmsAddData: action.data,
            };
    }
}

export function cmsAddFunc(data) {
    return fetchData('news', CMS_ADD, data);
}