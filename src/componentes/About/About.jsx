import React from 'react'
import './About.css'
import ME from '../../assets/me-about.jpg'
import {FiUser} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
const About = () => {
  return (
    <section id='about' className='hidden'>
      <h5>KNOW</h5>
      <h2>About Me</h2>

      <div className="hidden container about__container">
       <div className="hidden about__me">
        <div className="about__me-image">
          <img src={ME} alt="about" />
        </div>
       </div>
        <div className="hidden about__content">
          <div className="hidden about__cards">

          

            <article className='hidden about__card'>
              <FiUser className=' about__icon'/>
              <h5>Clients
              </h5>
              <small>10+ Projects</small>
            </article>

            <article className='hidden about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>3+ Years Working</small>
            </article>

          </div>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas, error! Expedita, atque iste commodi odit esse magni omnis doloremque dignissimos veritatis fugiat consequatur debitis quasi aut.
             Deserunt mollitia quisquam tempore.</p>
             <a href="#contact" className='btn btn-primary '>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About