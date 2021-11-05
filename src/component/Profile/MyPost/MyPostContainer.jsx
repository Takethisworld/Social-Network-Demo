import React from 'react';
import { addPostActionCreator  } from '../../redux/postReducer';
import MyPost from './MyPost';
import {connect} from 'react-redux';
import {compose} from 'redux';


let mapStateToProps =(state)=>{
  return{
    post:state.profilePage.post,
    newPostText:state.profilePage.newPostText
  }
}
let mapDispatchToProps =(dispatch)=>{
  return{
    
    addPost:(newPostForm)=>{
      dispatch(addPostActionCreator(newPostForm));
    }
  }
}


export default compose (connect(mapStateToProps, mapDispatchToProps)) (MyPost)
