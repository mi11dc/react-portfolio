import React from 'react';
import './HomeSection.css'
const HomeSection = () => {
  return (
    
<section id="home" className="home">
        <img src="/profile-picture.jpeg" alt="Profile Picture" />
        {/* <p>An experienced software engineer with a strong desire to create effective and user-friendly software and online solutions.</p>  */}
        <h1>Hi, I'm <strong>Dhaval Shah</strong>.</h1>
        <p>
            I'm a software developer with over 3 years of experience in developing web applications and software solutions. <br /> 
            I specialize in developing applications using C#, NodeJs, Python, Php, Angular CLI, JavaScript</p>
    </section>
    
  );
};

export default HomeSection;
