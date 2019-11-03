   const dialogsReducer = (state, action) => {
    const SEND_MESSAGE = 'SEND-MESSAGE';
    const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';


    if (action.type === SEND_MESSAGE){
        let newMessage = {
            id: 6,
            message: state.newMessageText
        };
        state.messagesData.push(newMessage);
        state.newMessageText = '';
    } else
    if(action.type === UPDATE_NEW_MESSAGE_TEXT){
        state.newMessageText = action.newText;
    }
    return state;
};

export default dialogsReducer;