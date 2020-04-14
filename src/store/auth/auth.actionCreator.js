import * as types from './auth.actionTypes';

// Sign Up
export function signUpPendingActionCreator() {
    return {
        type: types.SIGN_UP_PENDING
    };
}
export function signUpSuccessActionCreator(user) {
    return {
        type: types.SIGN_UP_SUCCESS,
        payload: user
    };
}
export function signUpErrorActionCreator(error) {
    return {
        type: types.SIGN_UP_ERROR,
        payload: error
    };
}

// Sign In
export function signInPendingActionCreator() {
    return {
        type: types.SIGN_IN_PENDING
    };
}
export function signInSuccessActionCreator(user) {
    return {
        type: types.SIGN_IN_SUCCESS,
        payload: user
    };
}
export function signInErrorActionCreator(error) {
    return {
        type: types.SIGN_IN_ERROR,
        payload: error
    };
}

// Log Out
export function logOutPendingActionCreator() {
    return {
        type: types.LOG_OUT_PENDING
    };
}
export function logOutSuccessActionCreator(user) {
    return {
        type: types.LOG_OUT_SUCCESS,
        payload: user
    };
}
export function logOutErrorActionCreator(error) {
    return {
        type: types.LOG_OUT_ERROR,
        payload: error
    };
}

// User Details
export function userDetailsPendingActionCreator() {
    return {
        type: types.USER_DETAILS_PENDING
    };
}
export function userDetailsSuccessActionCreator(user) {
    return {
        type: types.USER_DETAILS_SUCCESS,
        payload: user
    };
}
export function userDetailsErrorActionCreator(error) {
    return {
        type: types.USER_DETAILS_ERROR,
        payload: error
    };
}
