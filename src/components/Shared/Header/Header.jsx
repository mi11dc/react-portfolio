import React from 'react';
import './Header.css'

const Header = () => {
  return (
    <header>
        <div class="logo">
            <a href="./">Dhaval Shah</a>
        </div>
        <nav>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#educations">Educations</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>
  );
};

export default Header;
