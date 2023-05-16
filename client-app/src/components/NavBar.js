import React from 'react';
import './Navbar.css';

function Navbar() {
    return (
        <div>
            <nav className="navbar">
                <ul className="navbar-links">
                    <li><a href={'*'}>ГЛАВНАЯ</a></li>
                    <li><a href="#">О ЦЕНТРЕ</a></li>
                    <li><a href="#">ПРОГРАММЫ</a></li>
                    <li><a href="#">УЧЁБА</a></li>
                    <li><a href={'/Publications'}>ПУБЛИКАЦИИ</a></li>
                    <li><a href="#">КОНТАКТЫ</a></li>
                </ul>
            </nav>
            <hr></hr>
        </div>
    );
}

export default Navbar;