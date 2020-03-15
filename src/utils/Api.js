import axios from 'axios';

const AppAPI = axios.create({
    baseURL: process.env.REACT_APP_BASEURL, //https://paylix-6jqosv67oa-uc.a.run.app
    headers: {
        common: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        }
    }
});

AppAPI.defaults.headers.common['Authorization'] = 'Bearer ' + JSON.parse(localStorage.getItem('token'));

export const setTokenToAxios = token => {
    AppAPI.defaults.headers.common['Authorization'] = 'Bearer ' + token; // That"s correct way of token: "Bearer ..."
};
export default AppAPI;
