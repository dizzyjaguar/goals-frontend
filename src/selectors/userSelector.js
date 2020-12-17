export const getUserItems = state => state.user;

export const getUserStars = state => getUserItems(state).starredGoals;

//possibly getUserStars and getUserGoals etc.