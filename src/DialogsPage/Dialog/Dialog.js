import React from 'react';
import styles from './Dialog.module.css'



const Dialog = () => {
  return (
    <div className={styles.dialogItems}>
         <div className={styles.dialog}>Nick</div>
         <div className={styles.dialog + ' ' + styles.active}>Eric</div>
         <div className={styles.dialog}>Amy</div>
         <div className={styles.dialog}>Malone</div>
    </div>
  );
}

export default Dialog;
