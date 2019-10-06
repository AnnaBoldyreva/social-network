import React from 'react';
import styles from './MyPosts.css'
import Post from "./PostItem/Post";

const MyPosts = () => {

    let postsData = [
        {id: 1, message: 'Hi,sweet baby!', likeCount: 432},
        {id: 2, message: 'I miss you, babe', likeCount: 689},
        {id: 3, message: 'Call me maybe', likeCount: 890}
    ];

    let postsElement = postsData.map(post => <Post message={post.message} likeCount={post.likeCount}/>);

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
            {postsElement}
        </div>

  );
};

export default MyPosts;
