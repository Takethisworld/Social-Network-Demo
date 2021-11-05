import React,{ useState,useEffect } from 'react';
import s from './Profileinfo.module.css'

const HooksForStatus = (props) => {

  let [editMode,setEditMode] = useState (false);
  let [status,setStatus] = useState (props.status);

   useEffect(()=>{
    setStatus(props.status);
  },[props.status])

  const activateMode =()=>{
    setEditMode(true)
  }

  const deactivetMode=()=>{
    setEditMode(false);
    props.updateStatus(status);
  }
  const onStatusChange =(e)=>{
    setStatus(
       e.currentTarget.value
    )
  }

  return (
    <div>
      {! editMode &&
        <div>
          <span onClick={activateMode}>{props.status || "Set status MZFK"} </span>
        </div>
      }
      {editMode &&
        <div>
          <input autoFocus={true} onBlur={deactivetMode} value={status} onChange={onStatusChange}/>
        </div>}
    </div>)
}



export default HooksForStatus;