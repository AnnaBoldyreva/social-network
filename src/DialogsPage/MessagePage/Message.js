import React from 'react';
import styles from './Message.module.css';




const Message = (props) => {

  // let messageEl = React.createRef();

  // let sendMessage = () => {
  //   let text = messageEl.current.value;
  //   let action = sendMessageActionCreator(text);
  //   props.dispatch(action)
  // };

  return (

        <div className={styles.message}>{props.message}
        <br/>
          {/*<textarea  ref={messageEl}  placeholder='type new message...'> </textarea>*/}
          {/*<button onClick={sendMessage}>Send</button>*/}
        </div>


  );
};

export default Message;
