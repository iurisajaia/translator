import { combineReducers } from 'redux';
import authReducer from './auth/auth.reducer';
import languageReducer from './language/language.reducer';

export default combineReducers({
    auth: authReducer,
    language : languageReducer
});
