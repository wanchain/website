import portId from './port';

const fetchData = (api, type) => {
    return dispatch => {
        return fetch(`${portId}/${api}`)
            .then(res => res.json())
            .then(json => {
                dispatch({ type: type, data: json});
            });
    };
};

export default fetchData