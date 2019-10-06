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

    let messagesData = [
        {id: 1, message:'Hello'},
        {id: 2, message:'How are you?'},
        {id: 3, message:'Good,you?'},
        {id: 4, message:'Yo,dude?'},
        {id: 5, message:'Okey,bro'}
    ];

  return (

    <div className={styles.dialogs}>
        <div className={styles.dialogsItems}>
            <Dialog name={dialogsData[0].name}  id={dialogsData[0].id}/>
            <Dialog name={dialogsData[1].name}  id={dialogsData[1].id}/>

        </div>

        <div className={styles.messages}>
           <Message message={messagesData[0].message} />
           <Message message={messagesData[1].message} />

        </div>
    </div>
  );
};


export default DialogsPage;
