let store = {

};


let renenderEntireTree = () => {
    console.log('rerender')
};

let state = {
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
    }
};

 export const addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likeCount: 0
    };
    state.profilePage.postsData.push(newPost);
    state.profilePage.newPostText = '';
    renenderEntireTree(state);

};

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText= newText;
    renenderEntireTree(state);
};

 export const sendMessage = (message) =>{
     let newMessage = {
         id: 6,
         message: message
     };
     state.dialogPage.messagesData.push(newMessage)
 };

 export const subscribe = (observer) => {
     renenderEntireTree = observer;
};

export default state;