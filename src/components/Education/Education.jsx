import React from 'react';
import './Education.css'

const Education = () => {
  return (
    <section id="educations" class="educations">
    <h2>My Education</h2>
    <div class="education-item">
        <img class="education-img" src="/Humber_Logo_Blue_and_Gold_Centered.svg" alt="Humber College" />
        <h3>Web Development</h3>
        <p>JAN 2023 - DEC 2023</p>
        <p>Post Graduate Diploma Certificate</p>
    </div>
    <div class="education-item">
        <img class="education-img" src="/Georgian_College_logo.svg" alt="Georgian College" />
        <h3>Big Data Analytics</h3>
        <p>JAN 2022 - AUG 2022</p>
        <p>Post Graduate Diploma Certificate</p>
    </div>
    <div class="education-item">
        <img class="education-img vgec-logo-width" src="/VGEC_logo.png" alt="Vishwakarma Government Engineering Collge" />
        <h3>Computer Engineering</h3>
        <p>JUN 2014 - MAY 2018</p>
        <p>Gujarat Technological University</p>
    </div>
</section>
  );
};

export default Education;
 