import React from 'react';
import {sendMessageActionCreator, updateNewMessageTextActionCreator} from "../Redux/dialogs-reducer";
import DialogsPage from "./DialogsPage";
import {connect} from "react-redux";



let mapStateToProps = (state) => {
    return{
        dialogsData: state.dialogPage.dialogsData,
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageBody: (body) => {
           dispatch(updateNewMessageTextActionCreator(body));
        },
        sendMessage:  () => {
            dispatch(sendMessageActionCreator())
        }
    }
};


const DialogsPageContainer = connect (mapStateToProps,mapDispatchToProps)(DialogsPage);



export default DialogsPageContainer;
