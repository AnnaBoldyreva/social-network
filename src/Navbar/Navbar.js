import React from 'react';
import styles from './Navbar.module.css'


const Navbar = () => {
  return (
    <div className={styles.navigation}>
      <div><a href='/profile'>Profile</a></div>
        <div> <a href='/messages'>Messages</a></div>
          <div> <a href='news'>News</a></div>
            <div> <a href='music'>Music</a></div>
              <div><a href='settings'>Settings</a></div>

    </div>
  );
}

export default Navbar;
