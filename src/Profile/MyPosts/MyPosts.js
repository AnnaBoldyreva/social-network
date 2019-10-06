import React from 'react';
import styles from './MyPosts.css'
import Post from "./PostItem/Post";

const MyPosts = () => {

    let postsData = [
        {id: 1, message: 'Hi,sweet baby!', likeCount: 432},
        {id: 2, message: 'I miss you, babe', likeCount: 689},
        {id: 3, message: 'Call me maybe', likeCount: 890}
    ];

    return (
        <div className={styles.postsWrapper}>
            <h2>My new Post</h2>
            <div>
            <textarea placeholder='type something...'>
            </textarea>
                <div>
                    <button>post</button>
                </div>
            </div>
            <Post message={postsData[0].message} likeCount={postsData[0].likeCount}/>
            <Post message={postsData[1].message} likeCount={postsData[1].likeCount}/>
            <Post message={postsData[2].message} likeCount={postsData[2].likeCount}/>
        </div>

  );
};

export default MyPosts;
