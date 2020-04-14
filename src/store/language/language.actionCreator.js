import * as types from './language.actionTypes';

// Get Languages List
export function getLanguagesListPendingActionCreator() {
    return {
        type: types.GET_LANGUAGES_LIST_PENDING
    };
}
export function getLanguagesListSuccessActionCreator(languages) {
    return {
        type: types.GET_LANGUAGES_LIST_SUCCESS,
        payload: languages
    };
}
export function getLanguagesListErrorActionCreator(error) {
    return {
        type: types.GET_LANGUAGES_LIST_ERROR,
        payload: error
    };
}

