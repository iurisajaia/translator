import {
    createWordPendingActionCreator,
    createWordListSuccessActionCreator,
    createWordListErrorActionCreator,

    updateWordPendingActionCreator,
    updateWordListSuccessActionCreator,
    updateWordListErrorActionCreator,

    deleteWordPendingActionCreator,
    deleteWordListSuccessActionCreator,
    deleteWordListErrorActionCreator
} from './word.actionCreator';
import {
    createNewWord,
    updateWord,
    deleteWord
} from './word.service';

// Create Word
export const createWordAction = data => {
    return async dispatch => {
        try {
            dispatch(createWordPendingActionCreator());

            const word = await createNewWord();

            dispatch(createWordListSuccessActionCreator(word));

        } catch (err) {
            dispatch(createWordListErrorActionCreator(err));
        }
    };
};

// Update Word
export const updateWordAction = data => {
    return async dispatch => {
        try {
            dispatch(updateWordPendingActionCreator());

            const word = await updateWord();

            dispatch(updateWordListSuccessActionCreator(word));

        } catch (err) {
            dispatch(updateWordListErrorActionCreator(err));
        }
    };
};

// Delete Word
export const deleteWordAction = data => {
    return async dispatch => {
        try {
            dispatch(deleteWordPendingActionCreator());

            const word = await deleteWord();

            dispatch(deleteWordListSuccessActionCreator(word));

        } catch (err) {
            dispatch(deleteWordListErrorActionCreator(err));
        }
    };
};
