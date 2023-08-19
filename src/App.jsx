import { useState } from 'react'
import './App.css'
import Header from './components/Shared/Header/Header';
import Home from './components/Home/Home';
import Skills from './components/Skills/Skills';
import Education from './components/Education/Education';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Shared/Footer/Footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <Header />
      <Home />
      <Skills />
      <Education />
      <Projects />
      <Contact />
      <Footer />
    </div>
    </>
  )
}

export default App;
