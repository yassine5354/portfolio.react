import React from 'react'
import './experience.css'
import {AiFillCheckCircle} from 'react-icons/ai'
const xp = () => {
  return (
    <section id='experience'>
      <h5>Skillnns I Know</h5>
      <h2>My Experience</h2>

      <div className=" container experience__container">
        <div className="hidden experience__frontend">
          <h3>FRONTEND WEB DEVELOPMENT</h3>
          <div className="experience__content">
            <article className='experince__details'>
             <AiFillCheckCircle className='exprience__details-icon'/>
             <div>
              <h4>HTML</h4>
             <small className='text-light'>Experienced</small>
             </div>
            </article>
            <article className='experince__details'>
             <AiFillCheckCircle className='exprience__details-icon'/>
            <div>
            <h4>CSS AND SASS</h4>
             <small className='text-light'>Experienced</small>
            </div>
            </article>
            <article className='experince__details'>
             <AiFillCheckCircle className='exprience__details-icon'/>
            <div>
            <h4>JAVASCRIPT</h4>
             <small className='text-light'>Experienced</small>
            </div>
            </article>
            <article className='experince__details'>
             <AiFillCheckCircle className='exprience__details-icon'/>
          <div>
          <h4>REACT.JS</h4>
             <small className='text-light'>Experienced</small>
          </div>
            </article>
            <article className='experince__details'>
             <AiFillCheckCircle className='exprience__details-icon'/>
            <div>
            <h4>NEXT.JS AND THREE.JS</h4>
             <small className='text-light'>Experienced</small>
            </div>
            </article>
            <article className='experince__details'>
             <AiFillCheckCircle className='exprience__details-icon'/>
          <div>
               <h4>BOOTSTRAP AND TAILWIND</h4>
             <small className='text-light'>Experienced</small>
          </div>
            </article>
          </div>
        </div>
        {/*===END OF FRONTEND===0*/}
        <div className="hidden experience__backend">
        <h3>OUTHER SKILLS</h3>
          <div className=" experience__content">
            <article className='experince__details'>
             <AiFillCheckCircle className='exprience__details-icon'/>
             <div>
             <h4>PHP</h4>
             <small className='text-light'>Experienced</small>
             </div>
            </article>
            <article className='experince__details'>
             <AiFillCheckCircle className='exprience__details-icon'/>
           <div>
           <h4>MY SQL</h4>
             <small className='text-light'>Experienced</small>
           </div>
            </article>
            <article className='experince__details'>
             <AiFillCheckCircle  className='exprience__details-icon'/>
            <div>
            <h4>NODE.JS</h4>
             <small className='text-light'>Experienced</small>
            </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default xp