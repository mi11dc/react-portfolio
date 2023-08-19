import React from 'react';
import './Project.css'

const Projects = () => {
  return (
    <section id="projects" class="projects">
    <h2>My Projects</h2>
    <div class="project-item">
        <div class="item image">
            <div class="content">
                <img class="project-img" src="/sceenshot-demo.png" alt="Project 1" />
                <h3>Design</h3>
            </div>
        </div>
        <div class="item description">
            <div class="content">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at.</p>
                    <a href="#">Read More</a>
            </div>
        </div>    
    </div>
    <div class="project-item">
        <div class="item image">
            <div class="content">
                <img class="project-img" src="/sceenshot-demo.png" alt="Project 1" />
                <h3>Design</h3>
            </div>
        </div>
        <div class="item description">
            <div class="content">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at.</p>
                    <a href="#">Read More</a>
            </div>
        </div>
    </div>
    <div class="project-item">
        <div class="item image">
            <div class="content">
                <img class="project-img" src="/sceenshot-demo.png" alt="Project 1" />
                <h3>Design</h3>
            </div>
        </div>
        <div class="item description">
            <div class="content">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at.</p>
                    <a href="#">Read More</a>
            </div>
        </div>
    </div>
    <br />
    <a class="more-projects" href="#">See more projects</a>
</section>
  );
};

export default Projects;
