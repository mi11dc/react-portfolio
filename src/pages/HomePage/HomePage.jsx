import { useState } from 'react'
import './HomePage.css'
import HomeSection from '../../components/HomeSection/HomeSection';
import SkillSection from '../../components/SkillsSection/SkillSection';
import EducationSection from '../../components/EducationSection/EducationSection';
import ProjectSection from '../../components/ProjectSection/ProjectSection';
import ContactSection from '../../components/ContactSection/ContactSection';
import FooterSection from '../../components/Shared/Footer/FooterSection';

const HomePage = () => {
  return (
    <div>
      <HomeSection />
      <SkillSection />
      <EducationSection />
      <ProjectSection />
      <ContactSection />
      <FooterSection />
    </div>
  )
};

export default HomePage;