import {
    signUpPendingActionCreator,
    signUpSuccessActionCreator,
    signUpErrorActionCreator,

    signInPendingActionCreator,
    signInSuccessActionCreator,
    signInErrorActionCreator,

    logOutPendingActionCreator,
    logOutSuccessActionCreator,
    logOutErrorActionCreator,

    userDetailsPendingActionCreator,
    userDetailsSuccessActionCreator,
    userDetailsErrorActionCreator
} from './auth.actionCreator';
import {
    signInService,
    signUpService,
    userDetailsService
} from './auth.service';

// Sign Up New User
export const SignUpNewUser = data => {
    return async dispatch => {
        try {
            dispatch(signUpPendingActionCreator());

            const User = await signUpService(data);

            if (User.token) {
                localStorage.setItem('token', JSON.stringify(User.token));
            }

            dispatch(signUpSuccessActionCreator(User));

        } catch (err) {
            dispatch(signUpErrorActionCreator(err));
        }
    };
};

// Sign In User
export const SignInUser = data => {
    return async dispatch => {
        try {
            dispatch(signInPendingActionCreator());

            const User = await signInService(data);

            if (User.token) {
                localStorage.setItem('token', JSON.stringify(User.token));
            }

            dispatch(signInSuccessActionCreator(User));

        } catch (err) {
            dispatch(signInErrorActionCreator(err));
        }
    };
};

// Log Out User
export const logOut = () => {
    return async dispatch => {
        try {
            dispatch(logOutPendingActionCreator());

            // const user = await userDetailsService();

            // dispatch(logOutSuccessActionCreator(user));

        } catch (err) {
            dispatch(logOutErrorActionCreator(err));
        }
    };
};

// Sign In User
export const userDetails = data => {
    return async dispatch => {
        try {
            dispatch(userDetailsPendingActionCreator());

            const user = await userDetailsService(data);

            dispatch(userDetailsSuccessActionCreator(user));

        } catch (err) {
            dispatch(userDetailsErrorActionCreator(err));
        }
    };
};
