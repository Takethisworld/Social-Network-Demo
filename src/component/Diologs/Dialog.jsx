import React from 'react';
import { Redirect } from 'react-router-dom';
import s from './Dialog.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './MessageItem/Message';
import NewMessageForm from './AddMessageForm/addMessageForm';

function Dialog(props) {
    let state = props.messagePage;

    let dialogElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id} />);
    let messageElements = state.messages.map(m => <Message message={m.message} />);


    
    
    let newMessage = (value) => {
        props.addMessage(value.newMessageText);

    };

    if (!props.isAuth ) return <Redirect to={'/login'} />

    return (
        <div className={s.dialog}>
            <div className={s.dModule}>
                {dialogElements}
                <div className={s.message}>
                {messageElements}
                </div>
                <NewMessageForm onSubmit={newMessage}/>
            </div>
        </div>
    )

}


export default Dialog;