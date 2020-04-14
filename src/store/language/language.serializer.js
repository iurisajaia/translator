const languageItem = lang => {
    return {
            id : lang.id,
            title : lang.title
        }
};

export const getLanguageSerializer = lang => {
  return lang && lang.length > 0 ? lang.map(l => languageItem(l)) : [];
};

