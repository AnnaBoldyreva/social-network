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
    let stateCopy = {...state,
        // messagesData:[...state.messagesData]
    };

    switch (action.type){
        case SEND_MESSAGE:
            let body = state.newMessageText;
            stateCopy.newMessageText = '';
            stateCopy.messagesData.push({id: 6, message: body});
            return stateCopy;
            // let newMessage = {
            //     id: 6,
            //     message: stateCopy.newMessageText
            // };
            // stateCopy.messagesData.push(newMessage);
            // stateCopy.newMessageText = '';
            // return stateCopy;

        case
            UPDATE_NEW_MESSAGE_TEXT:
            stateCopy.newMessageText = action.newText;
            return stateCopy;

        default:
            return state;

    }
};
   export const sendMessageActionCreator = (text) => ({type: SEND_MESSAGE, message: text});
   export const updateNewMessageTextActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, newText: text});

export default dialogsReducer;