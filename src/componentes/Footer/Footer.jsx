import React from 'react'
import './Footer.css'
import {BsFacebook} from 'react-icons/bs'
import {AiFillTwitterCircle} from 'react-icons/ai'
const Footer = () => {
  return (
    <footer>
      <a href="#home" className='footer__logo'>Yassine BeC</a>

      <ul className='permalinks'>
        <li><a href='#home'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/profile.php?id=100083104824132"><BsFacebook/></a>
        <a href="https://twitter.com/yassin_bc" target='_blanck'><AiFillTwitterCircle/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy;Created by Yassine BeC</small>
      </div>
    </footer>
  )
}

export default Footer