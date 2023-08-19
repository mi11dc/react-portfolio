import React from 'react';
import './ProjectSection.css'

const ProjectSection = () => {
  return (
    <section id="projects" className="projects">
    <h2>My Projects</h2>
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
    <br />
    <a className="more-projects" href="#">See more projects</a>
</section>
  );
};

export default ProjectSection;
