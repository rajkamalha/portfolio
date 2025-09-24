import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from "react"
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import About from './Components/About'
import Projects from './Components/Projects'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import Expertise from './Components/MyExpertize'
import ResumePage from './Components/Resume'
import WhatsAppButton from './Components/WhatsAppButton'
import LogoMarquee from './Components/Logoma'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <div className="bg-gray-50 text-gray-900">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <LogoMarquee/>
      <Expertise/>
      <ResumePage/>
      <Contact />
      <Footer />
      <WhatsAppButton/>
    </div>

    </>
  )
}

export default App
