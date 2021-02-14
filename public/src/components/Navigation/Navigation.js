import React from 'react';
import {NavLink} from 'react-router-dom';
import './Navigation.css';

function Navigation() {
    return (
        <React.Fragment>
            <nav className="navigation">
                <li className="navigation__list">
                    <NavLink className="navigation__link" activeClassName="navigation__link--active" to="/map">
                        <svg className="navigation__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3.626 3.976">
                            <g className="navigation__icon-group" stroke="#606060" stroke-width=".134" stroke-dashoffset="693.543" paint-order="fill markers stroke" transform="translate(-76.126 -163.652)">
                                <path className="navigation__path" d="M76.918 166.177h2.076c.074-.005.085-.007.113.057l.578 1.327h-3.493l.564-1.295c.031-.103.062-.089.162-.089z" fill="#fff" stroke-linecap="round" stroke-linejoin="round"/>
                                <path className="navigation__pin-path" d="M78.772 164.551c0 .46-.833 2.282-.833 2.282s-.833-1.822-.833-2.282a.833.833 0 011.666 0z" fill="#fff" stroke-linejoin="round"/>
                                <circle className="navigation__circle-path" r=".379" cy="164.595" cx="77.939" fill="none"/>
                            </g>
                        </svg>
                    </NavLink>
                </li>
                <li className="navigation__list">
                    <NavLink className="navigation__link" activeClassName="navigation__link--active" exact to="/">
                        <svg className="navigation__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 4.276 3.978">
                            <g className="navigation__icon-group" transform="translate(-3.89 1.653)" fill="none" stroke="#606060" stroke-width=".134" paint-order="stroke fill markers">
                                <rect width="1.835" height=".852" x="3.958" y="-1.586" ry=".06"/>
                                <rect y="-.236" x="3.973" height="2.492" width="1.805" ry=".06"/>
                                <rect y="-2.258" x="-8.1" height=".852" width="1.835" ry=".06" transform="scale(-1)"/>
                                <rect width="1.805" height="2.492" x="-8.085" y="-.907" ry=".06" transform="scale(-1)"/>
                            </g>
                        </svg>
                    </NavLink>
                </li>
                <li className="navigation__list">
                    <NavLink className="navigation__link" activeClassName="navigation__link--active" to="/profile">
                        <svg className="navigation__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3.531 3.965">
                            <g className="navigation__icon-group" fill="none" stroke="#606060" stroke-width=".137">
                                <path d="M2.704 1.009a.942.942 0 01-.94.942.942.942 0 01-.944-.938.942.942 0 01.936-.946.942.942 0 01.948.934" stroke-linecap="round" paint-order="stroke fill markers" stroke-width=".1338901"/>
                                <path d="M.127 3.898h3.309c.03 0 .03-.01.02-.037-.62-1.989-2.733-2.048-3.38-.025-.01.035-.019.062.05.062z" stroke-linejoin="round" stroke-width=".1338901"/>
                            </g>
                        </svg>
                    </NavLink>
                </li>
            </nav>
        </React.Fragment>
    );
  }
  
  export default Navigation;