import React, { useState } from 'react';
import s from './Profileinfo.module.css'
import Preloader from '../../common/preloader/Preloader';
import ProfileDataForm from './ProfileDataForm';
import smile from '../../Assets/Images/smile.png';
import userPhoto from '../../Assets/Images/users.png'
import HooksForStatus from './ HooksForStatus';

const ProfileInfo = ({ profile, updateStatus, status, isOwner, savePhoto, saveProfile }) => {

  const [editMode, setEditMode] = useState(false)

  if (!profile) {
    return <Preloader />
  }

  const onSubmit = (FormData) => {
    saveProfile(FormData)(() => {
      setEditMode(false)
    })
  }

  const onProfPhoto = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files);
    }
  }
  return <div>
    <div>
      <img className={s.header_img} src='https://s.yimg.com/ny/api/res/1.2/12UU2JphAsbxTTDca.7QFQ--~A/YXBwaWQ9aGlnaGxhbmRlcjtzbT0xO3c9MTA4MDtoPTcxNg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2019-11/7b5b5330-112b-11ea-a77f-7c019be7ecae' alt='header_img' />
    </div>
    <div>
      <img src={profile.photos.large || userPhoto} className={s.profphoto} />
      {isOwner && <input type="file" onChange={onProfPhoto} />}
    </div>
    {editMode
      ? < ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit} /> :
      < ProfileDataForm goToEditMode={() => { setEditMode(true) }}
        profile={profile} isOwner={isOwner} />
    }
    <div>
      <HooksForStatus status={status} updateStatus={updateStatus} />
    </div>

    <div>{profile.fullName}</div>
    <div>{profile.contacts.facebook}</div>
    <img src={profile.lookingForAJob !== false ? smile : profile.lookingForAJob}
      className={s.jobStatus} />

  </div>
}

export default ProfileInfo;