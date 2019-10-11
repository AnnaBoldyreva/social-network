import React from 'react';
import styles from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from "./MyPosts/MyPosts";


const Profile = (props) => {

  return (
      <div className={styles.profile}>
        <ProfileInfo/>
        <MyPosts postsData={props.postsData}/>


      </div>
  );
};

export default Profile;
