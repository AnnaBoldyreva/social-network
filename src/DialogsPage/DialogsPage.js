import React from 'react';
import styles from './DialogsPage.module.css';
import Dialog from "./Dialog/Dialog";
import Message from "./MessagePage/Message";


const DialogsPage = (props) => {


    let dialogsElement = props.state.dialogsData.map (dialog => <Dialog id={dialog.id} name={dialog.name}/>);

    let messageElement = props.state.messagesData.map( mes => <Message message={mes.message} sendMessage={props.sendMessage}/>);

  return (

    <div className={styles.dialogs}>
        <div className={styles.dialogsItems}>
            {dialogsElement}
        </div>

        <div className={styles.messages}>
            {messageElement}
        </div>
    </div>
  );
};


export default DialogsPage;
