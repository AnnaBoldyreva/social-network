import React from 'react';
import {sendMessageActionCreator, updateNewMessageTextActionCreator} from "../Redux/dialogs-reducer";
import DialogsPage from "./DialogsPage";


const DialogsPageContainer = (props) => {


    let onMessageClick = () => {
        props.store.dispatch(sendMessageActionCreator())
    };

    let onNewMessageChange = (body) => {
        props.store.dispatch(updateNewMessageTextActionCreator(body));

    };

    return (
    <DialogsPage store={props.store} updateNewMessageBody={onNewMessageChange} sendMessage={onMessageClick}/>
    )
};


export default DialogsPageContainer;
