import React from 'react';
import {Link, useHistory} from 'react-router-dom';
import './BackLink.css';
import backIcon from '../../assets/icons/back-icon.svg';

function BackLink() {
    const history = useHistory();

    const goBack = () => {
        history.goBack();
    }

    return (
        <div className="backlink">
            <p className="backlink__link" onClick={goBack}><img className="backlink__icon" src={backIcon}></img>Zpět</p>
        </div>
    );
  }
  
  export default BackLink;