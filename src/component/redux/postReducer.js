import { profileAPI } from '../api/api';
import {stopSubmit} from 'redux-form';

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';
const SAVE_PHOTOS = 'SAVE_PHOTOS';

let initialState = {
    post: [
        { id: 0, message: 'Hi', likeCounter: 25 },
        { id: 1, message: 'Hello MZFk', likeCounter: 56 },
        { id: 2, message: 'Whatsup MZFK', likeCounter: 31 },
        { id: 3, message: 'whatsup MZFK ', likeCounter: 22 }],
    profile: null,
    status: ""
}

const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: action.newPostForm,
                likeCounter: 0,
            };
            return {
                ...state,
                post: [...state.post, newPost],
                newPostText: ''
            }
        }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }
        case DELETE_POST:
            return {
                ...state, post: state.post.filter(p => p.id !== action.postId)
            }
        case DELETE_POST:
            return {
                ...state, profile: {...state.profile , photos :action.photos}
            }

        default:
            return state;
    }

}


export const addPostActionCreator = (newPostForm) => ({ type: ADD_POST, newPostForm });
export const deletePost = (postId) => ({ type: DELETE_POST, postId });
export const userProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
export const userStatus = (status) => ({ type: SET_STATUS, status });
export const savePhotosSuccess = (photos) => ({ type: SAVE_PHOTOS, photos });


export const saveProfile=(profile)=>async(dispatch,getState)=>{
    const userId = getState().auth.userId;
    const response = await profileAPI.saveProfile(profile);

    if(response.data.resultCode === 0){
        dispatch(profileThunk(userId))
    }else{
        dispatch(stopSubmit("edit-profile",{_error:response.data.messages[0]}))
        return Promise.reject(response.data.messages[0])
    }
}

export const profileThunk = (userId) => async (dispatch) => {
    let response = await profileAPI.profileGet(userId);
    dispatch(userProfile(response.data));
}

export const createStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId);
    dispatch(userStatus(response.data));

}

export const updateStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status);
    if (response.data.resultCode === 0) {
        dispatch(userStatus(status));
    }
}

export const savePhotos = (file) => async (dispatch) => {
    let response = await profileAPI.savePhotos(file);
    if (response.data.resultCode === 0) {
        dispatch(savePhotosSuccess(response.data.data.photo));
    }
}



export default postReducer;