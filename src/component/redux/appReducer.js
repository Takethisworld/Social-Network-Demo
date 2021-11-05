import {authThunk} from './authReducer';

const INITIAL_ACCEPT ='INITIAL_ACCEPT'





let initializeState = {
  initialized:false
}

const authReducer = (state = initializeState, action) => {
    switch (action.type) {
        case INITIAL_ACCEPT:
            return {
                ...state,
                initialized: true
            }
        
        default:
            return state;
    }

}
export const initialAccept = () => ({ type: INITIAL_ACCEPT })




export const initialThunk =()=>(dispatch)=>{
    let promise=dispatch (authThunk());
    Promise.all([promise])
    .then(()=>{
      dispatch(initialAccept())
    })
}




export default authReducer;