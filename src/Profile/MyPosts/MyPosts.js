import React from 'react';
import styles from './MyPosts.css'
import Post from "./PostItem/Post";

let addPostActionCreator = () => {
    return {
       type: 'ADD-POST'
    }
};

let updateNewPostTextActionCreator = (text) => {
    return {
        type: 'UPDATE-NEW-POST-TEXT',
        newText: text
    }
};

const MyPosts = (props) => {


    let postsElement = props.postsData.map(post => <Post message={post.message} likeCount={post.likeCount}/>);

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        let action = updateNewPostTextActionCreator(text);
        props.dispatch(action);
    };

    return (
        <div className={styles.postsWrapper}>
            <h2>My new Post</h2>
            <div>
            <textarea onChange={onPostChange} ref={newPostElement} placeholder='type something...' value={props.newPostText} />
                <div>
                    <button onClick={addPost}>post</button>
                </div>
            </div>
            {postsElement}
        </div>

  );
};

export default MyPosts;
