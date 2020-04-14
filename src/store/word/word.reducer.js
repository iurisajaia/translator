import * as types from './word.actionTypes';
const initState = {
    pending : false,
    languages: null,
    error : ''
};

export default (state = initState, action) => {
    switch (action.type) {


        default:
            return state;
    }
};
