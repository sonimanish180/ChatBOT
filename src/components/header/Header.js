import React from 'react';
import Avatar from '../elementalComponents/avatar/Avatar';
import {IoIosArrowDown} from 'react-icons/io';


const Header = () => {
    return (
        <header className="header">
            <h1 className = "page-title-container">AI playground</h1>
            <div className="nav-items">
                <a href="/">Learn AI</a>
                <a href="/">Docs</a>
                <Avatar src="https://reqres.in/img/faces/2-image.jpg" />
                <a style={{margin:"0 4px 0 0"}} href="/">Account</a>
                <IoIosArrowDown />
            </div>
        </header>
    );
}

export default Header;