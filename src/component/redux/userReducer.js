import { usersAPI } from '../api/api'
import {objectHelperArray} from '../Utilits/Validators/objectHelper';

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USER'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_USER_COUNT = 'SET_USER_COUNT'
const TOGGLE_FETCHING = 'TOGGLE_FETCHING'
const TOGGLE_FOLLOW_PROGRESS = 'TOGGLE_FOLLOW_PROGRESS'




let initialUser = {
    users: [],
    pageSize: 5,
    totalUser: 0,
    currentPage: 1,
    isFetching: true,
    followInProgress: []

}

const userReducer = (state = initialUser, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: objectHelperArray(state.users,action.userId,'id',{followed: true})
            }
        case UNFOLLOW:
            return {
                ...state,
                users: objectHelperArray(state.users,action.userId,'id',{followed: false})
            }
        case SET_USERS: {
            return { ...state, users: action.users }
        }
        case SET_CURRENT_PAGE: {
            return { ...state, currentPage: action.currentPage }
        }
        case SET_USER_COUNT: {
            return { ...state, totalUser: action.count }
        }
        case TOGGLE_FETCHING: {
            return { ...state, isFetching: action.isFetching }
        }
        case TOGGLE_FOLLOW_PROGRESS: {
            return {
                ...state, followInProgress: action.isFetching
                    ? [...state.followInProgress, action.userId]
                    : state.followInProgress.filter(id => id !== action.userId)
            }
        }


        default:
            return state;
    }

}
export const followThunk = (userId) => ({ type: FOLLOW, userId })

export const unfollowThunk = (userId) => ({ type: UNFOLLOW, userId });

export const setUser = (users) => ({ type: SET_USERS, users });

export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });

export const setTotalUser = (totalUser) => ({ type: SET_USER_COUNT, count: totalUser });

export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_FETCHING, isFetching });

export const toggleIsFollow = (isFetching, userId) => ({ type: TOGGLE_FOLLOW_PROGRESS, isFetching, userId });

export const currentUsers = (page, pageSize) => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true));
        dispatch(setCurrentPage(page));

        let data = usersAPI.currentUsers(page, pageSize);
        dispatch(toggleIsFetching(false));
        dispatch(setUser(data.items));
        dispatch(setTotalUser(data.totalCount));
    }
}

const followUnfollowFlow =async(dispatch,userId,actionCreator,methodApi)=>{
    dispatch(toggleIsFollow(true, userId));
    let response = await methodApi(userId);          
            if (response.data.resultCode === 0) {
                dispatch(actionCreator(userId));
            }
            dispatch(toggleIsFollow(false, userId));
}

export const follow = (userId) => {
    return async (dispatch) => {
        followUnfollowFlow(dispatch,userId,usersAPI.follow.bind(usersAPI),followThunk)
        }
}

export const unfollow = (userId) => {
    return async(dispatch) => {
        followUnfollowFlow(dispatch,userId,usersAPI.unfollow.bind(usersAPI),unfollowThunk)
    }
}




export default userReducer;