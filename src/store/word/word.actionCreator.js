import * as types from './word.actionTypes';

// Create Word
export function createWordPendingActionCreator() {
    return {
        type: types.CREATE_WORD_PENDING
    };
}
export function createWordListSuccessActionCreator(data) {
    return {
        type: types.CREATE_WORD_SUCCESS,
        payload: data
    };
}
export function createWordListErrorActionCreator(error) {
    return {
        type: types.CREATE_WORD_ERROR,
        payload: error
    };
}

// Update Word
export function updateWordPendingActionCreator() {
    return {
        type: types.UPDATE_WORD_PENDING
    };
}
export function updateWordListSuccessActionCreator(data) {
    return {
        type: types.UPDATE_WORD_SUCCESS,
        payload: data
    };
}
export function updateWordListErrorActionCreator(error) {
    return {
        type: types.UPDATE_WORD_ERROR,
        payload: error
    };
}

// Delete Word
export function deleteWordPendingActionCreator() {
    return {
        type: types.DELETE_WORD_PENDING
    };
}
export function deleteWordListSuccessActionCreator(data) {
    return {
        type: types.DELETE_WORD_SUCCESS,
        payload: data
    };
}
export function deleteWordListErrorActionCreator(error) {
    return {
        type: types.DELETE_WORD_ERROR,
        payload: error
    };
}
