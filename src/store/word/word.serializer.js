export const newWordSerializer = word => {
  return {
      id : word.id,
      title : word.title,
      translate : word.translate,
  }
};

