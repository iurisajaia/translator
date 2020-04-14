import {
    getLanguagesListPendingActionCreator,
    getLanguagesListSuccessActionCreator,
    getLanguagesListErrorActionCreator
} from './language.actionCreator';
import {
    getLanguages,
} from './language.service';

// Sign Up New User
export const getLanguagesList = () => {
    return async dispatch => {
        try {
            dispatch(getLanguagesListPendingActionCreator());

            const languages = await getLanguages();

            dispatch(getLanguagesListSuccessActionCreator(languages));

        } catch (err) {
            dispatch(getLanguagesListErrorActionCreator(err));
        }
    };
};

