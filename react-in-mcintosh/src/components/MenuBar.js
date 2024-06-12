import React from 'react';
import '../styles/MenuBar.css';
import Logo from '../assets/icons/apple-logo.svg';

const MenuBar = () => {
    return (
        <div className="menu-bar">
            <span className="menu-img">
                <img src={Logo} alt="File" className="menu-icon" />
            </span>
            <span>File</span>
            <span>Edit</span>
            <span>View</span>
            <span>Label</span>
            <span>Special</span>
        </div>
    );
};
export default MenuBar;