import React from 'react';
import { useState, useEffect } from "react";
import './EducationSection.css';
import { format } from 'date-fns';

var eduImages = {
    humberImage: "/images/educations/Humber_Logo_Blue_and_Gold_Centered.svg",
    georgianImage: "/images/educations/Georgian_College_logo.svg",
    vgecImage: "/images/educations/VGEC_logo.png"
}

const EducationSection = () => {
    const [educations, setEducations] = useState([]);

    useEffect(() => {
        const getEducations = async () => {
            let response = await fetch(
                "https://codebydhaval-php-portfolio-cms.000webhostapp.com/api/educations/user/4",
                {
                    method: "get"
                }
            ).catch((error) => { console.log(error) });
            let data = await response.json();
            setEducations(data);
        }
        getEducations();
    }, []);

    function getFormatedDate(date) {
        return format(new Date(date), 'MMM yyyy');
    }

    function getEduImg(collegeName) {
        switch (collegeName){
            case "Georgian College":
                return eduImages.georgianImage;
            case "Humber College":
                return eduImages.humberImage;
            case "Gujarat Technological University":
                return eduImages.vgecImage;
            default:
                return "";
        }
    }

    return (
        <section id="educations" className="educations">
            <h2>My Education</h2>
            {
                educations.sort(function (a, b) {
                    return new Date(a.start_date) - new Date(b.start_date);
                }).map((edu) => (
                    <div className="education-item">
                        <img className="education-img" src={getEduImg(edu.institution)} alt={edu.institution} />
                        <h3>{edu.major}</h3>
                        <p>{getFormatedDate(edu.start_date)} - {getFormatedDate(edu.end_date)}</p>
                        <p>{edu.degree}</p>
                    </div>
                ))
            }
        </section>
    );
};

export default EducationSection;
 