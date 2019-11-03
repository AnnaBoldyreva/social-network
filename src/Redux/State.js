import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

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
        this._state.profilePage = profileReducer(this._state.profilePage,action);
        this._state.dialogPage = dialogsReducer(this._state.dialogPage,action);
        this._callSubscriber(this._state);
    },

    subscribe(observer) {
        this._callSubscriber = observer;
},
    getState(){
        return this._state
    },

};





export default store;
window.store= store;