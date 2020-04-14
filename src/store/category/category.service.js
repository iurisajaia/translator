import AppAPI from "../../utils/Api";
import {
    newCategorySerializer,
    getUserCategoriesSerializer
} from "./category.serializer";

export const createNewCategory = data => {
    return AppAPI.post('/category' , data).then(res => {
        return newCategorySerializer(res.data && res.data);
    });
};

export const updateCategory = data => {
    return AppAPI.put(`/category/${data.id}` , data).then(res => {
        return newCategorySerializer(res.data && res.data);
    });
};

export const deleteWCategory = data => {
    return AppAPI.delete(`/category/${data.id}` , data).then(res => {
        return res;
    });
};

export const getUserCategories = data => {
    return AppAPI.get('/category').then(res => {
        return getUserCategoriesSerializer(res);
    });
};
