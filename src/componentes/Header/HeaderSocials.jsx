import React from 'react'
import {GrLinkedin} from 'react-icons/gr'
import {BsGithub} from 'react-icons/bs'
import{FaFacebookSquare} from 'react-icons/fa'
const HeaderSocials = () => {
  return (
    <div className='header_socials'>
      <a href='https://linkedin.com' target='_blanck'><GrLinkedin/></a>
      <a href='https://github.com/yassine5354' target='_blanck'><BsGithub/></a>
      <a href='https://web.facebook.com/le.soldat.125/' target='_blanck'><FaFacebookSquare/></a>
    </div>
  )
}

export default HeaderSocials