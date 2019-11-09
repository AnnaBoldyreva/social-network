const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';

let initialState = {
    dialogsData : [
        {id: 1, name: 'Nick'},
        {id: 2, name: 'Eric'},
        {id: 3, name: 'Malone'},
        {id: 4, name: 'Kirill'},
        {id: 5, name: 'Katya'}
    ],
    messagesData : [
        {id: 1, message: 'Hello'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Good,you?'},
        {id: 4, message: 'Yo,dude'},
        {id: 5, message: 'Okey,bro'}
    ],
    newMessageText: ''
};

const dialogsReducer = (state = initialState, action) => {
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
   export const sendMessageActionCreator = (text) => ({type: SEND_MESSAGE, message: text});
   export const updateNewMessageTextActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, newText: text});

export default dialogsReducer;