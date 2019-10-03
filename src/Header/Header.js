import React from 'react';
import styles from './Header.module.css';

const Header = () => {
  return (
    <div className={styles.header}>
        <img src="https://upload.wikimedia.org/wikipedia/ru/thumb/c/c0/Beyonce_-_Lemonade_%28album_cover%29.png/270px-Beyonce_-_Lemonade_%28album_cover%29.png" alt="app"/>
    </div>
  );
}

export default Header;
