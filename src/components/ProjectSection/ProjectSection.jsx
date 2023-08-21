import React from 'react';
import { useState, useEffect } from "react";
import './ProjectSection.css';

var projectImage = {
    passionImage: "/images/projects/passion-project.webp",
    uselessWeb: "/images/projects/moodsense.png",
    galary: "/images/projects/photo-galary.png"
}

const ProjectSection = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const getProjects = async () => {
            let response = await fetch(
                "https://codebydhaval-php-portfolio-cms.000webhostapp.com/api/projects/user/4",
                {
                    method: "get"
                }
            ).catch((error) => { console.log(error) });
            let data = await response.json();
            setProjects(data);
        }
        getProjects();
    }, []);

    function getProjectImg(title) {
        switch (title){
            case "Useless Web":
                return projectImage.uselessWeb;
            default:
                return "";
        }
    }

    return (
        <section id="projects" className="projects">
            <h2>My Projects</h2>
            {
                projects.map((proj) => (
                    <div className="project-item">
                        <div className="item image">
                            <div className="content">
                                <img className="project-img" src={getProjectImg(proj.title)} alt={proj.title} />
                                <h3>{proj.title}</h3>
                            </div>
                        </div>
                        <div className="item description">
                            <div className="content">
                                
                                <p>{proj.description}</p>
                                <a href={proj.link} target='_blank'>View</a>
                            </div>
                        </div>    
                    </div>
                ))
            }
            {/* <div className="project-item">
                <div className="item image">
                    <div className="content">
                        <img className="project-img" src="/sceenshot-demo.png" alt="Project 1" />
                        <h3>Design</h3>
                    </div>
                </div>
                <div className="item description">
                    <div className="content">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at.</p>
                            <a href="#">Read More</a>
                    </div>
                </div>
            </div>
            <div className="project-item">
                <div className="item image">
                    <div className="content">
                        <img className="project-img" src="/sceenshot-demo.png" alt="Project 1" />
                        <h3>Design</h3>
                    </div>
                </div>
                <div className="item description">
                    <div className="content">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at.</p>
                            <a href="#">Read More</a>
                    </div>
                </div>
            </div>
            <br /> */}
            {/* <a className="more-projects" href="#">See more projects</a> */}
        </section>
    );
};

export default ProjectSection;
