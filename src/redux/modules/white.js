const INSERT = 'wanchain/INSERT';
const INSERT_SUCCESS = 'wanchain/INSERT_SUCCESS';
const INSERT_FAIL = 'wanchain/INSERT_FAIL';

const initialState = {

};

export default function info(state = initialState, action = {}) {
  switch (action.type) {
    case INSERT_SUCCESS:
      return {
        ...state,
        insertWhiteState: action.result
      };
    case INSERT_FAIL:
      return {
        ...state,
        insertWhiteState: action.errors
      };
    default:
      return state;
  }
}

export function insertWhiteFunc(data) {
  return {
    types: [INSERT, INSERT_SUCCESS, INSERT_FAIL],
    promise: (client) => client.post('/insertwhite', {
      data: data,
    })
  };
}
