import React from 'react';
import { useState, useEffect } from "react";
import'./SkillSection.css'

var icons = {
    cSharp: "fa fa-3x fa-csharp",
    js: "fa-brands fa-js",
    angular: "fa-brands fa-angular",
    node: "fa-brands fa-node",
    html: "fa-brands fa-html5",
    css: "fa-brands fa-css3-alt",
    python: "fa fa-3x fa-python",
    mysql: "fa fa-3x fa-mysql"
}

const SkillSection = () => {
    const [skills, setSkills] = useState([]);

    useEffect(() => {
        const getSkills = async () => {
            let response = await fetch(
                "https://codebydhaval-php-portfolio-cms.000webhostapp.com/api/skills/user/4",
                {
                    method: "get"
                }
            ).catch((error) => { console.log(error) });
            let data = await response.json();
            setSkills(data);
        }
        getSkills();
    }, []);

    function getSkillIcon(skill) {
        switch (skill){
            case "C#":
                return icons.cSharp;
            case "JavaScript":
                return icons.js;
            case "Angular CLI":
                return icons.angular;
            case "NodeJs":
                return icons.node;
            case "HTML":
                return icons.html;
            case "CSS":
                return icons.css;
            case "Python":
                return icons.python;
            case "MySQL":
                return icons.mysql;
            default:
                return "";
        }
    }

    return (
        <section id="skills" className="skills">
            <h2>My Skills</h2>
            <div>
                <div className="skill-item">
                    <div className="skill-name">
                        Backend Skills
                    </div>
                    <div id="rating">
                        <span className="checked">★</span>
                        <span className="checked">★</span>
                        <span className="checked">★</span>
                        <span className="checked">★</span>
                        <span>★</span>
                    </div>
                </div>
                <div className="skill-item">
                    <div className="skill-name">
                        Frontend Skills
                    </div>
                    <div id="rating">
                        <span className="checked">★</span>
                        <span className="checked">★</span>
                        <span className="checked">★</span>
                        <span className="checked">★</span>
                        <span>★</span>
                    </div>
                </div>
                <div className="skill-item">
                    <div className="skill-name">
                        Dev-Ops Skills
                    </div>
                    <div id="rating">
                        <span className="checked">★</span>
                        <span className="checked">★</span>
                        <span className="checked">★</span>
                        <span>★</span>
                        <span>★</span>
                    </div>
                </div>
            </div>
            <div>
                {
                    skills.map((s) => (
                        <div className="skill-item">
                            <div className="skill-name">
                                <i className={getSkillIcon(s.name)} aria-hidden="true"></i>
                                <p>{s.name}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>    
    );
};

export default SkillSection;
