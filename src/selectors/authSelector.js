export const getAuth = state => state.auth;

export const getUser = state => getAuth(state).user;

export const getAuthLoading = state => getAuth(state).loading;