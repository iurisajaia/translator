import * as types from './auth.actionTypes';

// Sign Up
export function SignUpPending() {
    return {
        type: types.SIGN_UP_PENDING
    };
}
export function SignUpSuccess(merchant) {
    return {
        type: types.SIGN_UP_SUCCESS,
        payload: merchant
    };
}
export function SignUpError(error) {
    return {
        type: types.SIGN_UP_ERROR,
        payload: error
    };
}

// Sign In
export function SignInPending() {
    return {
        type: types.SIGN_IN_PENDING
    };
}
export function SignInSuccess(merchant) {
    return {
        type: types.SIGN_IN_SUCCESS,
        payload: merchant
    };
}
export function SignInError(error) {
    return {
        type: types.SIGN_IN_ERROR,
        payload: error
    };
}

// Log Out
export function LogOutPending() {
    return {
        type: types.LOG_OUT_PENDING
    };
}
export function LogOutSuccess(merchant) {
    return {
        type: types.LOG_OUT_SUCCESS,
        payload: merchant
    };
}
export function LogOutError(error) {
    return {
        type: types.LOG_OUT_ERROR,
        payload: error
    };
}
