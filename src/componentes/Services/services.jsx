import React from 'react'
import './services.css'
import {BsCheckAll} from 'react-icons/bs'
const services = () => {
  return (
    <section id='services' className='hidden'>
      <h5>what I offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className="hidden service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BsCheckAll className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus unde dolor.</p>
            </li>
            <li>
              <BsCheckAll className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus unde dolor.</p>
            </li>
            <li>
              <BsCheckAll className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus unde dolor.</p>
            </li>
            <li>
              <BsCheckAll className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus unde dolor.</p>
            </li>
            <li>
              <BsCheckAll className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus unde dolor.</p>
            </li>
            <li>
              <BsCheckAll className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus unde dolor.</p>
            </li>
          </ul>
          </article>
          {/*END OF UI/UX*/}
          <article className="hidden service">
          <div className="service__head">
            <h3>MOBILE DEVELOPMENT</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BsCheckAll className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus unde dolor.</p>
            </li>
            <li>
              <BsCheckAll className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus unde dolor.</p>
            </li>
            <li>
              <BsCheckAll className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus unde dolor.</p>
            </li>
            <li>
              <BsCheckAll className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus unde dolor.</p>
            </li>
            <li>
              <BsCheckAll className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus unde dolor.</p>
            </li>
            <li>
              <BsCheckAll className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus unde dolor.</p>
            </li>
          </ul>
          </article>
          {/*END OF MOBILE APP DEVELOPMENT*/}
         
         
      </div>
    </section>
  )
}

export default services