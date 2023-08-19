import React from 'react';
import './HeaderSection.css'
import Nav from '../Nav/Nav';

const HeaderSection = () => {
  return (
    <header>
        <div className="logo">
            <a href="./">Dhaval Shah</a>
        </div>
        <Nav />
    </header>
  );
};

export default HeaderSection;
