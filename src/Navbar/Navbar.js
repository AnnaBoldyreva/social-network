import React from 'react';
import styles from './Navbar.module.css'
import {NavLink} from "react-router-dom";


const Navbar = () => {
  return (
    <div className={styles.navigation}>
      <div className={styles.navItem}><NavLink to ='/profile'>Profile</NavLink></div>
        <div className={styles.navItem}> <NavLink to ='/messages'>Messages</NavLink></div>
          <div className={styles.navItem}><NavLink to ='/news'>News</NavLink></div>
            <div className={styles.navItem}><NavLink to ='/music'>Music</NavLink></div>
              <div className={styles.navItem}><NavLink to ='/settings'>Settings</NavLink></div>

    </div>
  );
}

export default Navbar;
