import React from 'react';
import styles from './DialogsPage.module.css';
import Dialog from "./Dialog/Dialog";
import Message from "./MessagePage/Message";
import {sendMessageActionCreator, updateNewMessageTextActionCreator} from "../Redux/State";


const DialogsPage = (props) => {



    let dialogsElement = props.state.dialogsData.map (dialog => <Dialog id={dialog.id} name={dialog.name}/>);

    let messageElement = props.state.messagesData.map( mes => <Message message={mes.message} dispatch={props.dispatch}/>);

    let newMessageText = props.state.newMessageText;

    let onMessageClick = () => {
        props.dispatch(sendMessageActionCreator())
    };

    let onNewMessageChange = (e) => {
        let text = e.currentTarget.value;
        props.dispatch(updateNewMessageTextActionCreator(text));

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
