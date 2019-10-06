import React from 'react';
import styles from './Dialog.module.css'
import {NavLink} from "react-router-dom";



const Dialog = (props) => {
    let path = '/dialogs/'+ props.id;
  return (

         <div className={styles.dialog}>
             <div className={styles.dialog + ' ' + styles.active}>
                 <NavLink to={path}>{props.name}</NavLink>
             </div>

         </div>

  );
};

export default Dialog;
