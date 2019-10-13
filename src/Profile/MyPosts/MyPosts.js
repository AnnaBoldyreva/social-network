import React from 'react';
import styles from './MyPosts.css'
import Post from "./PostItem/Post";

const MyPosts = (props) => {


    let postsElement = props.postsData.map(post => <Post message={post.message} likeCount={post.likeCount}/>);

    let addPost = () => {
        alert('samurai')
    };

    return (
        <div className={styles.postsWrapper}>
            <h2>My new Post</h2>
            <div>
            <textarea placeholder='type something...'>
            </textarea>
                <div>
                    <button onClick={addPost}>post</button>
                </div>
            </div>
            {postsElement}
        </div>

  );
};

export default MyPosts;
