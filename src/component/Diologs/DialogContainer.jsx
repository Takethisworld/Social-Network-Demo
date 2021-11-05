import React from 'react';
import Dialog from './Dialog';
import {addMessageActionCreator} from '../redux/dialogReducer';
import {connect} from 'react-redux';
import {withAuthRedirect} from '../HOC/AuthRedirect';
import {compose} from 'redux';



let mapStateToProps=(state)=>{
    return{
        messagePage:state.messagePage
    }
}
let mapDispatchToProps =(dispatch)=>{
    return{
        
        addMessage:(newMessageText)=>{dispatch(addMessageActionCreator(newMessageText));}
    }
}

export default compose (
    connect(mapStateToProps,mapDispatchToProps),
    withAuthRedirect)(Dialog)
