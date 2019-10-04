import React from 'react';
import styles from './Post.module.css'

const Post = () => {

  return (
    <div className={styles.post}>
        <div>
            <img src="https://ca-times.brightspotcdn.com/dims4/default/c500991/2147483647/strip/true/crop/5314x3543+0+0/resize/840x560!/quality/90/?url=https%3A%2F%2Fca-times.brightspotcdn.com%2Fbf%2Fba%2Fe4af3ec44eed9d87cb99b72106f0%2Fnfl-jay-z-75487.jpg" alt="jay"/>
        </div>
        <div>Likes: 367</div>
    </div>

  );
};

export default Post;
