import React from 'react';
import s from './Profileinfo.module.css'
import Preloader from '../../common/preloader/Preloader';
import smile from '../../Assets/Images/smile.png';
import HooksForStatus from './ HooksForStatus';

const ProfileInfo = ({ profile, updateStatus, status }) => {
  if (!profile) {
    return <Preloader />
  }
  return <div>
    <div>
      <img className={s.header_img} src='https://s.yimg.com/ny/api/res/1.2/12UU2JphAsbxTTDca.7QFQ--~A/YXBwaWQ9aGlnaGxhbmRlcjtzbT0xO3c9MTA4MDtoPTcxNg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2019-11/7b5b5330-112b-11ea-a77f-7c019be7ecae' alt='header_img' />
    </div>
    <div>
      <img src={profile.photos.large} />
    </div>
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