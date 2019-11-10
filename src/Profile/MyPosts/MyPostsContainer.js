import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../Redux/profile-reducer";
import MyPosts from "./MyPosts";



const MyPostsContainer = (props) => {

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    };

    let onPostChange = (text) => {
        let action = updateNewPostTextActionCreator(text);
        props.dispatch(action);
    };

    return (
         <MyPosts addPost={addPost} updateNewPostText={onPostChange} postsData={props.postsData}/>
  );
};

export default MyPostsContainer;
