import React from 'react';
import styles from './MyPosts.css'
import Post from "./PostItem/Post";

const MyPosts = () => {

  return (
    <div className={styles.postsWrapper}>My new Post
        <div>
            <textarea placeholder='type something...'>
            </textarea>
            <div><button>post</button></div>
        </div>
        <Post/>
        <Post/>
        <Post/>
    </div>

  );
};

export default MyPosts;
