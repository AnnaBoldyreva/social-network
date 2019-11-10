import React from 'react';
import styles from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";


const Profile = (props) => {

  return (
      <div className={styles.profile}>
        <ProfileInfo/>
        <MyPostsContainer
            store={props.store}
            // postsData={props.profilePage.postsData}
            // newPostText={props.profilePage.newPostText}
            // dispatch={props.dispatch}
            />


      </div>
  );
};

export default Profile;
