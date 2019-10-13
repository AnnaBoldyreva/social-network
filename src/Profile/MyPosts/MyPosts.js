import React from 'react';
import styles from './MyPosts.css'
import Post from "./PostItem/Post";

const MyPosts = (props) => {


    let postsElement = props.postsData.map(post => <Post message={post.message} likeCount={post.likeCount}/>);

    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text);
    };

    return (
        <div className={styles.postsWrapper}>
            <h2>My new Post</h2>
            <div>
            <textarea  ref={newPostElement} placeholder='type something...'>
            </textarea >
                <div>
                    <button onClick={addPost}>post</button>
                </div>
            </div>
            {postsElement}
        </div>

  );
};

export default MyPosts;
