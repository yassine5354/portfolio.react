import React from 'react'
import { useRef } from "react"
import Header from './componentes/Header/Header.jsx'
import Nav from './componentes/Nav/Nav.jsx'
import About from './componentes/About/About.jsx'
import Experience from './componentes/Experience/Experience.jsx'
import Services from './componentes/Services/services.jsx'
import Portfolio from './componentes/Portfolio/Portfolios.jsx'
import Contact from './componentes/Contact/Contact.jsx'
import Footer from './componentes/Footer/Footer.jsx'
import useScrollSnap from "react-use-scroll-snap"

function App() {
  const scrollRef = useRef(null);
  useScrollSnap({ ref: scrollRef, duration: 7000, delay: 60 });

  return (
    <div className="App" ref={scrollRef}>
    <>
    <Header />
    <Nav />
    <About />
    <Experience />
    <Services />
    <Portfolio />
    <Contact />
    <Footer />
    </>

   </div>

  )
}




export default App