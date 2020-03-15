import {
    SignUpPending,
    SignUpSuccess,
    SignUpError,
    SignInPending,
    SignInSuccess,
    SignInError,
    LogOutPending,
    LogOutSuccess,
    LogOutError
} from './auth.actionCreator';
import {SignUp} from './auth.service';

export const SignUpNewUser = data => {
    return async dispatch => {
        try {
            dispatch(SignUpPending());

            const User = await SignUp(data);

            if (User.token) {
                localStorage.setItem('token', JSON.stringify(User.token));
            }

            if (User.error) {
                dispatch(SignUpError(User.error));
            } else {
                dispatch(SignUpSuccess(User));
            }
        } catch (err) {
            dispatch(SignUpError(err));
        }
    };
};
