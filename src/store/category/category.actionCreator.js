import * as types from './category.actionTypes';

// Create Category
export function createCategoryPendingActionCreator() {
    return {
        type: types.CREATE_CATEGORY_PENDING
    };
}
export function createCategoryListSuccessActionCreator(data) {
    return {
        type: types.CREATE_CATEGORY_SUCCESS,
        payload: data
    };
}
export function createCategoryListErrorActionCreator(error) {
    return {
        type: types.CREATE_CATEGORY_ERROR,
        payload: error
    };
}

// Update Category
export function updateCategoryPendingActionCreator() {
    return {
        type: types.UPDATE_CATEGORY_PENDING
    };
}
export function updateCategoryListSuccessActionCreator(data) {
    return {
        type: types.UPDATE_CATEGORY_SUCCESS,
        payload: data
    };
}
export function updateCategoryListErrorActionCreator(error) {
    return {
        type: types.UPDATE_CATEGORY_ERROR,
        payload: error
    };
}

// Delete Category
export function deleteCategoryPendingActionCreator() {
    return {
        type: types.DELETE_CATEGORY_PENDING
    };
}
export function deleteCategoryListSuccessActionCreator(data) {
    return {
        type: types.DELETE_CATEGORY_SUCCESS,
        payload: data
    };
}
export function deleteCategoryListErrorActionCreator(error) {
    return {
        type: types.DELETE_CATEGORY_ERROR,
        payload: error
    };
}

// Get User Categories
export function getUserCategoriesPendingActionCreator() {
    return {
        type: types.GET_USER_CATEGORIES_PENDING
    };
}
export function getUserCategoriesListSuccessActionCreator(data) {
    return {
        type: types.GET_USER_CATEGORIES_SUCCESS,
        payload: data
    };
}
export function getUserCategoriesListErrorActionCreator(error) {
    return {
        type: types.GET_USER_CATEGORIES_ERROR,
        payload: error
    };
}
