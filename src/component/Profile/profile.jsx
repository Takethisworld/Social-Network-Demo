import React from 'react';
import s from './profile.module.css';
import MyPostContainer from './MyPost/MyPostContainer';
import ProfileInfo from './ProfileInfo/Profileinfo';

const Profile=(props)=>{

return<div>
    <div>
      <ProfileInfo 
      savePhoto={props.savePhotos}
      profile={props.profile} 
      status={props.status} 
      updateStatus={props.updateStatus}
      saveProfile={props.saveProfile}/>
    </div>
  <div className={s.post}>
    <MyPostContainer store={props.store}/>
  </div>
  </div>
}

export default Profile;