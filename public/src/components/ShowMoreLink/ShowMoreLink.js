import React from 'react';
import './ShowMoreLink.css';
import showMoreIcon from '../../assets/icons/showmore-icon.svg';

function ShowMoreLink({text}) {    
    return (
        <a className="showmorelink" href="">{text}<img className="showmorelink__icon" src={showMoreIcon}></img></a>
    );
  }
  
  export default ShowMoreLink;