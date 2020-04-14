import {
    createCategoryPendingActionCreator,
    createCategoryListSuccessActionCreator,
    createCategoryListErrorActionCreator,

    updateCategoryPendingActionCreator,
    updateCategoryListSuccessActionCreator,
    updateCategoryListErrorActionCreator,

    deleteCategoryPendingActionCreator,
    deleteCategoryListSuccessActionCreator,
    deleteCategoryListErrorActionCreator,

    getUserCategoriesPendingActionCreator,
    getUserCategoriesListSuccessActionCreator,
    getUserCategoriesListErrorActionCreator
} from './category.actionCreator';
import {
    createNewCategory,
    updateCategory,
    deleteWCategory,
    getUserCategories
} from './category.service';

// Create Word
export const createCategoryAction = data => {
    return async dispatch => {
        try {
            dispatch(createCategoryPendingActionCreator());

            const category = await createNewCategory();

            dispatch(createCategoryListSuccessActionCreator(category));

        } catch (err) {
            dispatch(createCategoryListErrorActionCreator(err));
        }
    };
};

// Update Word
export const updateCategoryAction = data => {
    return async dispatch => {
        try {
            dispatch(updateCategoryPendingActionCreator());

            const category = await updateCategory();

            dispatch(updateCategoryListSuccessActionCreator(category));

        } catch (err) {
            dispatch(updateCategoryListErrorActionCreator(err));
        }
    };
};

// Delete Word
export const deleteCategoryAction = data => {
    return async dispatch => {
        try {
            dispatch(deleteCategoryPendingActionCreator());

            const category = await deleteWCategory();

            dispatch(deleteCategoryListSuccessActionCreator(category));

        } catch (err) {
            dispatch(deleteCategoryListErrorActionCreator(err));
        }
    };
};

// Get User Categories
export const getUserCategoriesAction = data => {
    return async dispatch => {
        try {
            dispatch(getUserCategoriesPendingActionCreator());

            const category = await getUserCategories();

            dispatch(getUserCategoriesListSuccessActionCreator(category));

        } catch (err) {
            dispatch(getUserCategoriesListErrorActionCreator(err));
        }
    };
};
