import {renenderEntireTree} from "../render";


let state = {
    profilePage: {
        postsData: [
            {id: 1, message: 'Hi,sweet baby!', likeCount: 432},
            {id: 2, message: 'I miss you, babe', likeCount: 689},
            {id: 3, message: 'Call me maybe', likeCount: 890}
        ]
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
    }
};

 export let addPost = (postMessage) => {
    let newPost = {
        id: 5,
        message: postMessage,
        likeCount: 0
    };
    state.profilePage.postsData.push(newPost);
     renenderEntireTree(state);
};

 export let sendMessage = (message) =>{
     let newMessage = {
         id: 6,
         message: message
     };
     state.dialogPage.messagesData.push(newMessage)
 };

export default state;