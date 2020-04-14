export const newCategorySerializer = category => {
  return {
      id : category.id,
      title : category.title,
  }
};

export const getUserCategoriesSerializer = categories => {
    return categories && categories.length > 0 && categories.map(category => getUserCategory(category));
};

const getUserCategory = category => {
    return {
        id : category.id,
        title : category.title,
        words : category.words,
    }
};
