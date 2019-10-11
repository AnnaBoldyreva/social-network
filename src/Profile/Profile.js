import React from 'react';
import styles from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from "./MyPosts/MyPosts";


const Profile = (props) => {
    // let postsData = [
    //     {id: 1, message: 'Hi,sweet baby!', likeCount: 432},
    //     {id: 2, message: 'I miss you, babe', likeCount: 689},
    //     {id: 3, message: 'Call me maybe', likeCount: 890}
    // ];

  return (
      <div className={styles.profile}>
        <ProfileInfo/>
        <MyPosts postsData={props.postsData}/>


      </div>
  );
};

export default Profile;
