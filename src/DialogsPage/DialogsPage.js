import React from 'react';
import styles from './DialogsPage.module.css';
import Dialog from "./Dialog/Dialog";
import Message from "./MessagePage/Message";


const DialogsPage = () => {
  return (

    <div className={styles.dialogs}>
        <div className={styles.dialogsItems}>
            <Dialog name='Nick' id='1'/>
            <Dialog name='Eric' id='2'/>
            <Dialog name='Malone' id='3'/>
            <Dialog name='Kirill' id='4'/>
            <Dialog name='Katya' id='5'/>
        </div>

        <div className={styles.messages}>
           <Message/>
        </div>
    </div>
  );
};

export default DialogsPage;
