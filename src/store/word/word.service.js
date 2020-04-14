import AppAPI from "../../utils/Api";
import {
    newWordSerializer
} from "./word.serializer";

export const createNewWord = data => {
    return AppAPI.post('/word' , data).then(res => {
        return newWordSerializer(res.data && res.data);
    });
};

export const updateWord = data => {
    return AppAPI.put(`/word/${data.id}` , data).then(res => {
        return newWordSerializer(res.data && res.data);
    });
};

export const deleteWord = data => {
    return AppAPI.delete(`/word/${data.id}` , data).then(res => {
        return res;
    });
};
