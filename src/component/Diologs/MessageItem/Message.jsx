import React from 'react';
import s from './../Dialog.module.css';


const Message =(props)=>{

    

return<div> 
    <div className={s.messages}>{props.message}</div>
    
 </div>
 
}

 
    
export default Message;