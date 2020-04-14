export const selectUser = state => {
    return state.auth.currentUser;
};
export const selectAuthPending = state => {
    return state.auth.pending;
};
