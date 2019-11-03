   const profileReducer = (state, action) => {
    const ADD_POST = 'ADD-POST';
    const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';


    if (action.type === ADD_POST){
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likeCount: 0
        };
        state.postsData.push(newPost);
        state.newPostText = '';
    } else
    if (action.type === UPDATE_NEW_POST_TEXT ){
        state.newPostText= action.newText;
    }

    return state;
};

   export default profileReducer;