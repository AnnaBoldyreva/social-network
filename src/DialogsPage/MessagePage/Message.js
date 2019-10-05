import React from 'react';
import styles from './Message.module.css';



const Message = () => {
  return (
    <div className={styles.messageItems}>
        <div className={styles.message}>Hello</div>
        <div className={styles.message}>How are you?</div>
        <div className={styles.message}>Good,you?</div>
    </div>
  );
}

export default Message;
