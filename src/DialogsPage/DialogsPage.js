import React from 'react';
import styles from './DialogsPage.module.css';
import Dialog from "./Dialog/Dialog";
import Message from "./MessagePage/Message";
import {sendMessageActionCreator, updateNewMessageTextActionCreator} from "../Redux/dialogs-reducer";


const DialogsPage = (props) => {

let state = props.store.getState();

    let dialogsElement = state.dialogPage.dialogsData.map (dialog => <Dialog id={dialog.id} name={dialog.name}/>);

    let messageElement = state.dialogPage.messagesData.map( mes => <Message message={mes.message} dispatch={props.dispatch}/>);

    let newMessageText = state.newMessageText;

    let onMessageClick = () => {
        props.sendMessage();
    };

    let onNewMessageChange = (e) => {
        let body = e.currentTarget.value;
        props.updateNewMessageBody(body);

    };

  return (

    <div className={styles.dialogs}>
        <div className={styles.dialogsItems}>
            {dialogsElement}
        </div>

        <div className={styles.messages}>
            <div> {messageElement} </div>
            <div>
                <br/>
                <div><textarea placeholder='enter your message' value={newMessageText} onChange={onNewMessageChange}>
                </textarea></div>
                <div><button onClick={onMessageClick}>Send</button></div>
            </div>
        </div>
    </div>
  );
};


export default DialogsPage;
