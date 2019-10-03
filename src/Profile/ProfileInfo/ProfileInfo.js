import React from 'react';
import styles from './ProfileInfo.module.css'


const ProfileInfo = () => {
  return (
    <div className={styles.avatarka}>
      <img src="https://media.npr.org/assets/img/2016/04/25/from-tidal-16bd7ea90c70e612bcfc86710667602acd76ee10-s800-c85.jpg" alt="avatarka"/>
      <div className={styles.descriptionBlock}>Description</div>

    </div>
  );
};

export default ProfileInfo;
