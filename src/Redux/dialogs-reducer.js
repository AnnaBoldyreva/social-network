   const dialogsReducer = (state, action) => {
    const SEND_MESSAGE = 'SEND-MESSAGE';
    const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';


    switch (action.type){
        case SEND_MESSAGE:
            let newMessage = {
                id: 6,
                message: state.newMessageText
            };
            state.messagesData.push(newMessage);
            state.newMessageText = '';
            return state;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newText;
            return state;
        default:
            return state;

    }
};

export default dialogsReducer;