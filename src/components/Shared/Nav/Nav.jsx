import { NavLink } from "react-router-dom";
import './Nav.css';

export default function Nav() {
    return (
        <nav id="main-nav" aria-label="Main navigation">
            <ul className="menu">
                <li>
                    <NavLink to="#home">Home</NavLink>
                </li>
                <li>
                    <NavLink to="#skills">Skills</NavLink>
                </li>
                <li>
                    <NavLink to="#educations">Educations</NavLink>
                </li>
                <li>
                    <NavLink to="#projects">Projects</NavLink>
                </li>
                <li>
                    <NavLink to="#contact">Contact</NavLink>
                </li>
                {/* <li><a href="#home">Home</a></li> */}
                {/* <li><a href="#skills">Skills</a></li>
                <li><a href="#educations">Educations</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li> */}
            </ul>
        </nav>
    );
}
