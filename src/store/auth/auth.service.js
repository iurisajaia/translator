import AppAPI from "../../utils/Api";
import {
    signUpSerializer,
    userDetailsSerializer
} from "./auth.serializer";

export const signUpService = data => {
    return AppAPI.post('/register', data).then(res => {
        return signUpSerializer(res.data.user && res.data.user);
    });
};

export const signInService = data => {
    return AppAPI.post('/login', data).then(res => {
        return signUpSerializer(res.data.user && res.data.user);
    });
};

export const userDetailsService = data => {
    return AppAPI.post('/details', data).then(res => {
        return userDetailsSerializer(res.data.user && res.data.user);
    });
};
