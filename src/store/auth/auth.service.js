import AppAPI from "../../utils/Api";

export const SignUp = data => {
    return AppAPI.post('/register', data).then(res => {
        return res;
    });
};
