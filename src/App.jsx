import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeaderSection from './components/Shared/Header/HeaderSection';
import HomePage from './pages/HomePage/HomePage';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="page">
        <BrowserRouter>
          <HeaderSection />
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App;
