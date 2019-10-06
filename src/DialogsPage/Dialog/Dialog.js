import React from 'react';
import styles from './Dialog.module.css'
import {NavLink} from "react-router-dom";



const Dialog = () => {
  return (
    <div className={styles.dialogItems}>
         <div className={styles.dialog}>
             <NavLink to='/dialogs/1'>Nick</NavLink>
         </div>
         <div className={styles.dialog + ' ' + styles.active}>
             <NavLink to='/dialogs/2'>Eric</NavLink>
         </div>
         <div className={styles.dialog}>
             <NavLink to='/dialogs/3'>Amy</NavLink>
         </div>
         <div className={styles.dialog}>
             <NavLink to='/dialogs/4'>Malone</NavLink>
         </div>
    </div>
  );
}

export default Dialog;
