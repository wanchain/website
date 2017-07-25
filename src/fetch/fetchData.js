import portId from './port';

const fetchData = (api, type, data) => {
    if (!data) {
        console.log('false');
        return dispatch => {
            return fetch(`${portId}/${api}`)
                .then(res => res.json())
                .then(json => {
                    dispatch({ type: type, data: json});
                });
        };
    } else if (data) {
        console.log('true', data);
        return dispatch => {
            return fetch(`${portId}/${api}`,
                {
                    method: "POST",
                    headers: { 'Accept': 'application/json, text/html,application/xhtml+xml,application/xml', 'Content-Type': 'application/json'},
                    body: JSON.stringify(data),
                })
                .then(res => res.json())
                .then(json => {
                    dispatch({ type: type, data: json});
                });
        };
    }
};

export default fetchData