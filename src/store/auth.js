import cookie from 'react-cookie';
import fetchData from '../fetch/fetchData';

const LOGIN = 'Astro/LOGIN';
const USER = 'Astro/USER';

const initialState = {
    loginState: '',
};


export default function authReducer(state = initialState, action = {}) {
    switch (action.type) {
        default:
            return state;
        case LOGIN:
            cookie.save('token', 'JWT ' + action.reload, { path: '/' });
            setTimeout(()=>{
                global.dataFeedback.emit('onLoginComplete');
            }, 50);
            return {
                ...state,
                loginState: action.reload,
            };

        case USER:
            return {
                ...state,
                user: action.data,
            };
    }
}

export function login () {
    return {
        type: LOGIN,
        reload: 'aaaaa',
    }
}

export function users(data) {
    return fetchData('users/detail', USER, data);
}
