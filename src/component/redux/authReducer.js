import {authAPI, securityApi} from '../api/api'
import {stopSubmit} from 'redux-form';

const SET_USER_DATA ='demo-network/auth/SET_USER_DATA'
const CAPTCHA_URL = 'demo-network/auth/CAPTCHA_URL'





let initialUser = {
    id: null,
    email: null,
    login: false,
    isFetching: true,
    isAuth: false,
    captchaUrl: null
}

const authReducer = (state = initialUser, action) => {
    switch (action.type) {
        case SET_USER_DATA:
          case CAPTCHA_URL:
            return {
                ...state,
                ...action.payload
            }
        
        default:
            return state;
    }

}
export const setAuthUser = (userId,email,login,isAuth) => ({ type: SET_USER_DATA, payload:{userId,email,login,isAuth }})
export const getCaptcha = (captchaUrl) => ({ type: CAPTCHA_URL, payload:{captchaUrl }})



export const authThunk =()=>async (dispatch)=> {
       let response = await authAPI.authUsers(); 
        if (response.data.resultCode === 0){
          let {id,email,login} = response.data.data;
          dispatch(setAuthUser(id,email,login,true));
      }
    }

export const captchaGetSuccess =()=>async (dispatch)=> {
      const response = await securityApi.getCaptchaUrl(); 
      const captchaUrl = response.data.url;
         dispatch(getCaptcha(captchaUrl));
   }    

export const loginThunk =(email,password,rememberMe,captcha)=>
     async (dispatch)=> {
       let response = await authAPI.loginGet(email,password,rememberMe,captcha);    
        if (response.data.resultCode === 0){
          dispatch(setAuthUser());
        }else{
          if(response.data.resultCode === 10){
            dispatch(captchaGetSuccess()) 
          }
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