const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';


let store = {
    _state : {
        profilePage: {
            postsData: [
                {id: 1, message: 'Hi,sweet baby!', likeCount: 432},
                {id: 2, message: 'I miss you, babe', likeCount: 689},
                {id: 3, message: 'Call me maybe', likeCount: 890}
            ],
            newPostText: ''
        },
        dialogPage : {
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
        }
    },
    _callSubscriber() {
        console.log('rerender');
    },


    dispatch(action){
        if (action.type === ADD_POST){
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likeCount: 0
            };
            this._state.profilePage.postsData.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else
            if (action.type === UPDATE_NEW_POST_TEXT ){
            this._state.profilePage.newPostText= action.newText;
            this._callSubscriber(this._state);
        } else
            if(action.type === SEND_MESSAGE){
                let newMessage = {
                    id: 6,
                    message: action.message
                };
                this._state.dialogPage.messagesData.push(newMessage);
                this._callSubscriber(this._state);
            } else
                if(action.type === UPDATE_NEW_MESSAGE_TEXT){
                    this._state.dialogPage.newMessageText = action.newText;
                    this._callSubscriber(this._state)
                }

    },

    subscribe(observer) {
        this._callSubscriber = observer;
},
    getState(){
        return this._state
    },

};

    export const addPostActionCreator = () =>  ({type: ADD_POST});
    export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});
    export const sendMessageActionCreator = (text) => ({type: SEND_MESSAGE, message: text});
    export const updateNewMessageTextActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, newText: text});


export default store;
window.store= store;