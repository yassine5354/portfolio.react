import React from 'react'
import './Nav.css'
import {HiHome} from 'react-icons/hi'
import {SiAboutdotme} from 'react-icons/si'
import {BsFillBookFill} from 'react-icons/bs'
import {MdHomeRepairService} from 'react-icons/md'
import{FiPhoneCall} from 'react-icons/fi'
import{MdPhoneAndroid} from 'react-icons/md'
import {useState} from 'react'
const Nav = () => {
  const [activeNav,setActiveNav]=useState('#');
  return (
   <nav> 
    <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><HiHome/></a>
    <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><SiAboutdotme/></a>
    <a href="#experience " onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BsFillBookFill/></a>
    <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><MdHomeRepairService/></a>
    <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><MdPhoneAndroid/></a>
    <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><FiPhoneCall/></a>
   </nav>
  )
}

export default Nav