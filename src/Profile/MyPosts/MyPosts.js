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
        <Post message='Hi,sweet baby!'   likeCount='432'/>
        <Post message='I miss you, babe' likeCount='689'/>
        <Post message='Call me maybe'    likeCount='890'/>
    </div>

  );
};

export default MyPosts;
