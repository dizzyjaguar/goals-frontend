export const getUserItems = state => state.user;

export const getUserStars = state => getUserItems(state).starredGoals;

export const getUserCompleted = state => getUserItems(state).completedGoals;
//possibly getUserStars and getUserGoals etc.