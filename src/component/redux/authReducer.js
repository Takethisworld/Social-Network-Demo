import {authAPI} from '../api/api'
import {stopSubmit} from 'redux-form';

const SET_USER_DATA ='test-network/auth/SET_USER_DATA'





let initialUser = {
    id: null,
    email: null,
    login: false,
    isFetching: true,
    isAuth: false

}

const authReducer = (state = initialUser, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
            }
        
        default:
            return state;
    }

}
export const setAuthUser = (userId,email,login,isAuth) => ({ type: SET_USER_DATA, payload:{userId,email,login,isAuth }})




export const authThunk =()=>async (dispatch)=> {
       let response = await authAPI.authUsers(); 
        if (response.data.resultCode === 0){
          let {id,email,login} = response.data.data;
          dispatch(setAuthUser(id,email,login,true));
        
        
      }
    }


export const loginThunk =(email,password,rememberMe)=>
     async (dispatch)=> {
       let response = await authAPI.loginGet(email,password,rememberMe);    
        if (response.data.resultCode === 0){
          dispatch(setAuthUser());
        }else{
          let message = response.data.messages.length > 0 ? response.data.messages[0] :"SomeError";
          dispatch(stopSubmit("login",{_error: message}));
        }
    }


export const logOutThunk =()=>
   async(dispatch)=> {
     let response = await authAPI.getLogOut()  
      if (response.data.resultCode === 0){
        dispatch(setAuthUser(null,null,null,false));
      }
  }



export default authReducer;