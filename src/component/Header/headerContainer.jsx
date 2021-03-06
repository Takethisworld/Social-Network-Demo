import React from 'react';
import Header from './header';
import {connect} from 'react-redux';
import {setAuthUser,logOutThunk} from '../redux/authReducer';


class HeaderContainer extends React.Component {
  
  render(){
    return <Header {...this.props}/>
  }
}

const mapStateToProps =(state)=>({
  isAuth: state.auth.isAuth,
  login: state.auth.login
});

export default connect (mapStateToProps,{setAuthUser,logOutThunk}) (HeaderContainer);