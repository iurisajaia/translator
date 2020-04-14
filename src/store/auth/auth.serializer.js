export const signUpSerializer = user => {
  return {
      id : user.id,
      name : user.name,
      email : user.email,
      token : user.token
  }
};

export const userDetailsSerializer = user => {
    return {
        id : user.id,
        name : user.name,
        email : user.email,
        birthday : user.birthday,
        country : user.country,
        phone : user.phone,
        languages : user.languages
    }
};
