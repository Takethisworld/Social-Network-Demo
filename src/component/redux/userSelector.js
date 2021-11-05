import {createSelector} from "reselect";

const getUsersSelector=(state)=>{
    return state.userPage.users;
}

export const getUsers = createSelector(getUsersSelector,(users)=>{
     return users.filter(u=>true);}
)

export const getPageSize=(state)=>{
    return state.userPage.pageSize;
}

export const getTotalUser=(state)=>{
    return state.userPage.totalUser;
}

export const getCurrentPage=(state)=>{
    return state.userPage.currentPage;
}

export const getIsFetching=(state)=>{
    return state.userPage.isFetching;
}

export const getFollowInProgress=(state)=>{
    return state.userPage.followInProgress;
}