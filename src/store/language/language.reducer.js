import * as types from './language.actionTypes';
const initState = {
    pending : false,
    languages: null,
    error : ''
};

export default (state = initState, action) => {
    switch (action.type) {

        // Sign Up
        case types.GET_LANGUAGES_LIST_PENDING :
            return {
                pending : true
            };
        case types.GET_LANGUAGES_LIST_SUCCESS :
            return {
                pending : false,
                languages: action.payload
            };
        case types.GET_LANGUAGES_LIST_ERROR :
            return {
               pending : false,
               error : action.payload.error
            };

        default:
            return state;
    }
};
