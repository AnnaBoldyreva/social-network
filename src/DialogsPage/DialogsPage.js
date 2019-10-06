import React from 'react';
import styles from './DialogsPage.module.css';
import Dialog from "./Dialog/Dialog";
import Message from "./MessagePage/Message";


const DialogsPage = () => {
    let dialogsData = [
        {id: 1, name: 'Nick'},
        {id: 2, name: 'Eric'},
        {id: 3, name: 'Malone'},
        {id: 4, name: 'Kirill'},
        {id: 5, name: 'Katya'}
        ];

    let dialogsElement = dialogsData.map (dialog => <Dialog id={dialog.id} name={dialog.name}/>);

    let messagesData = [
        {id: 1, message:'Hello'},
        {id: 2, message:'How are you?'},
        {id: 3, message:'Good,you?'},
        {id: 4, message:'Yo,dude?'},
        {id: 5, message:'Okey,bro'}
    ];
    let messageElement = messagesData.map( mes => <Message message={mes.message}/>);

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
