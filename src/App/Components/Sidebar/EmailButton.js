import React from 'react';
import emailIcon from '../../assets/icons/email.svg'
import styles from './Sidebar.module.scss';

const EmailButton = () => {
  const copyEmailToClipboard = (text) => {
    let textNode = document.createTextNode(text);

    document.body.appendChild(textNode);
    if (document.body.createTextRange) {
        let range = document.body.createTextRange();
        range.moveToElementText(textNode);
        range.select();
        document.execCommand('copy');
    } else {
        let range = document.createRange();
        let selection = window.getSelection;
        range.selectNodeContents(textNode);
        selection().removeAllRanges();
        selection().addRange(range);
        document.execCommand('copy');
        selection().removeAllRanges();
    }
    textNode.remove();
  }


  return (
    <button className={`${styles.hoveringButton}`} onClick={() => copyEmailToClipboard('visualsbydavidho@gmail.com')}>
      <img src={emailIcon} alt='Email icon'/>
    </button>
  )
}

export default EmailButton