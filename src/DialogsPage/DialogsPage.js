import React from 'react';
import styles from './DialogsPage.module.css';
import Dialog from "./Dialog/Dialog";
import Message from "./MessagePage/Message";


const DialogsPage = () => {
  return (
    <div className={styles.dialogs}>
   <Dialog/>
   <Message/>
    </div>
  );
};

export default DialogsPage;
