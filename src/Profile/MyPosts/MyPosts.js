import React from 'react';
import styles from './MyPosts.css'


const MyPosts = () => {
  return (
    <div className={styles.postsWrapper}>My new Post
        <div>
            <textarea placeholder='type something...'>
            </textarea>
            <div><button>post</button></div>
        </div>
    </div>

  );
};

export default MyPosts;
