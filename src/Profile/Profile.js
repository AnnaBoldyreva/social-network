import React from 'react';
import styles from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from "./MyPosts/MyPosts";


const Profile = () => {
  return (
      <div className={styles.profile}>
        <ProfileInfo/>
        <MyPosts/>


      </div>
  );
};

export default Profile;
