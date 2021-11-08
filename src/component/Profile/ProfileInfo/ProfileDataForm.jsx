import React from 'react';
import style from './Profileinfo.module.css'
import { createField, Textarea,Input } from '../../common/FormControl/FormControl';

const ProfileDataForm =({handleSubmit,profile,error})=>{
    return(
        <form onSubmit={handleSubmit}>
            <div>
                <button> save</button>
            </div>
            <div>
                <b>Full Name</b>: {createField('Full Name','fullName',[],Input)}
            </div>
            <div>
                <b>Looking for a job</b>:{createField("lookigForAJob",[],Input,{type:'checkbox'})}
            </div>

            <div>
                <b>My skills</b>:{profile.lookingForAJobDescriptions}
                { createField('My skills','lookingForAJobDescriptions',[],Textarea)}
            </div>
            <div>
                <b>About Me</b>:{ createField('About me','aboutMe',[],Textarea)}
            </div>
            <div>
                <b>Contacts </b>: {Object.keys(profile.contacts).map(key=>{
                    <div key={key} className={style.contacts}>
                        <b>{key}:{createField(key,'contacts.' + key,[],Input)}</b>
                    </div>
                })}
            </div>
        </form>
    )
}

export default ProfileDataForm