import React from 'react';
import Profile from './profile';
import { connect } from 'react-redux';
import { profileThunk, createStatus,updateStatus } from '../redux/postReducer';
import { withRouter} from 'react-router-dom';
import {compose} from 'redux';

class ProfileContainer extends React.Component {

  
  componentDidMount()
   {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = this.props.authUser;
      if(!userId){
        this.props.history.push("/login")
      }
    }
    this.props.profileThunk(userId);
    this.props.createStatus(userId); 
  }

  render() {

    return (
      <div>
        <Profile {...this.props} 
        profile={this.props.profile} 
        status={this.props.status}  
        updateStatus={this.props.updateStatus}/>
      </div>
    )

  }

}
let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  authUser: state.auth.userId,
  isAuth: state.auth.isAuth
})


export default compose (
  connect(mapStateToProps, { profileThunk, createStatus,updateStatus }),
  withRouter
)(ProfileContainer)
