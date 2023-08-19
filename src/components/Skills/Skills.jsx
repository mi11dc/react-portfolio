import React from 'react';
import { useState, useEffect } from "react";
import'./Skills.css'

const Skills = () => {
    const [randomFact, setRandomFact] = useState("");
    const [factSource, setFactSource] = useState();

    // useEffect(() => {
    //     const getFact = async () => {
    //         let response = await fetch(
    //             "https://uselessfacts.jsph.pl/api/v2/facts/random",
    //             {
    //                 method: "get"
    //             }
    //         );
    //         let data = await response.json();
    //         setRandomFact(data.text);
    //         setFactSource(data.source_url);
    //     }
    //     getFact(); //run the getFact() async function after defining it
    // }, []); //dependency array [] is empty so it only runs once

    useEffect(() => {
        const getFact = async () => {
            let response = await fetch(
                "https://codebydhaval-php-portfolio-cms.000webhostapp.com/api/skills",
                {
                    method: "get",
                    headers: {
                        "user-id": "4",
                    },
                }
            ).catch(e => console.log(e));
            let data = await response.json();
            console.log(data);
            // .then((response) => response.json())
            // .then((data) => {
            //     debugger;
            //     console.log(data); // Check if the data is being fetched correctly
            //     // setProjects(data);
            // })
            // .catch((error) => console.error(error));
        }
        getFact();
    }, []);

    return (
        <section id="skills" class="skills">
            <h2>My Skills</h2>
            <div>
                <div class="skill-item">
                    <div class="skill-name">
                        Backend Skills
                    </div>
                    <div id="rating">
                        <span class="checked">★</span>
                        <span class="checked">★</span>
                        <span class="checked">★</span>
                        <span class="checked">★</span>
                        <span>★</span>
                    </div>
                </div>
                <div class="skill-item">
                    <div class="skill-name">
                        Frontend Skills
                    </div>
                    <div id="rating">
                        <span class="checked">★</span>
                        <span class="checked">★</span>
                        <span class="checked">★</span>
                        <span class="checked">★</span>
                        <span>★</span>
                    </div>
                </div>
                <div class="skill-item">
                    <div class="skill-name">
                        Dev-Ops Skills
                    </div>
                    <div id="rating">
                        <span class="checked">★</span>
                        <span class="checked">★</span>
                        <span class="checked">★</span>
                        <span>★</span>
                        <span>★</span>
                    </div>
                </div>
            </div>
            <div>
                <div class="skill-item">
                    <div class="skill-name">
                        <i class="fa fa-3x fa-csharp" aria-hidden="true"></i>
                        <p>C#</p>
                    </div>
                </div>
                <div class="skill-item">
                    <div class="skill-name">
                        <i class="fa-brands fa-js"></i>
                        <p>JavaScript</p>
                    </div>
                </div>
                <div class="skill-item">
                    <div class="skill-name">
                        <i class="fa-brands fa-angular"></i>
                        <p>Angular CLI</p>
                    </div>
                </div>
                <div class="skill-item">
                    <div class="skill-name">
                        <i class="fa-brands fa-node"></i>
                        <p>NodeJs</p>
                    </div>
                </div>
                <div class="skill-item">
                    <div class="skill-name">
                        <i class="fa-brands fa-html5"></i>
                        <p>HTML</p>
                    </div>
                </div>
                <div class="skill-item">
                    <div class="skill-name">
                        <i class="fa-brands fa-css3-alt"></i>
                        <p>CSS</p>
                    </div>
                </div>
                <div class="skill-item">
                    <div class="skill-name">
                        <i class="fa fa-3x fa-python" aria-hidden="true"></i>
                        <p>Python</p>
                    </div>
                </div>
                <div class="skill-item">
                    <div class="skill-name">
                        <i class="fa fa-3x fa-mysql" aria-hidden="true"></i>
                        <p>MySQL</p>
                    </div>
                </div>
            </div>
        </section>    
    );
};

export default Skills;
