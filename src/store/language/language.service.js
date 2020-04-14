import AppAPI from "../../utils/Api";
import { getLanguageSerializer } from "./language.serializer";

export const getLanguages = () => {
    return AppAPI.get('/languages').then(res => {
        return getLanguageSerializer(res.data && res.data);
    });
};

