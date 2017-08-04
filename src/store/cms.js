import fetchData from '../fetch/fetchData';

export const CMS_ADD = 'Astro/CMS_ADD';
export const CMS_STEP = 'Astro/CMS_STEP';

const initialState = {
    cmsAddData: {status: 0},
    step: 0,
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
        case CMS_STEP:
            return{
                ...state,
                step: action.reload,
            }
    }
}

export function cmsAddFunc(data) {
    return fetchData('news', CMS_ADD, data);
}

export function changeStep(data) {
    return {
        type: CMS_STEP,
        reload: data,
    }
}