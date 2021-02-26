import React from 'react';
import {Link} from 'react-router-dom';
import './ShowMoreLink.css';
import showMoreIcon from '../../assets/icons/showmore-icon.svg';

function ShowMoreLink({link, text}) {    
    return (
        <Link className="showmorelink" to={link}>{text}<img className="showmorelink__icon" src={showMoreIcon}></img></Link>
    );
  }
  
  export default ShowMoreLink;