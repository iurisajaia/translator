import * as types from './auth.actionTypes';
const initState = {
    pending : false,
    currentUser: null,
    error : ''
};

export default (state = initState, action) => {
    switch (action.type) {

        // Sign Up
        case types.SIGN_UP_PENDING :
            return {
                pending : true
            };
        case types.SIGN_UP_SUCCESS :
            return {
                pending : false,
                currentUser: action.payload
            };
        case types.SIGN_UP_ERROR :
            return {
               pending : false,
               error : action.payload.error
            };


        // Sign In
        case types.SIGN_IN_PENDING :
            return {
                pending : true
            };
        case types.SIGN_IN_SUCCESS :
            return {
                pending : false,
                currentUser: action.payload
            };
        case types.SIGN_IN_ERROR :
            return {
                pending : false,
                error : action.payload.error
            };

        default:
            return state;
    }
};
