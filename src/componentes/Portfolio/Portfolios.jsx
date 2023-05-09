import React from 'react'
import './Portfolios.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'


const Portfolios = () => {

  return (
    <section id='portfolio' className='hidden'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="hidden container portfolio__container">
      
      
          <article  className="hidden portfolio__item" >
          <div className="portfolio__item-image">
            <img src={IMG1} alt='May Project' />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className='portfolio__item-cta'> 
          <a href='https://github.com' className='btn' target='_blanck'>Github page</a>
          <a href='https://dribble/shots.com' className='btn btn-primary' target='_blanck'>Live Demo</a>
          </div>
        </article>

          <article  className="hidden portfolio__item" >
          <div className="portfolio__item-image">
            <img src={IMG2} alt='May Project' />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className='portfolio__item-cta'> 
          <a href='https://github.com' className='btn' target='_blanck'>Github page</a>
          <a href='https://dribble/shots.com' className='btn btn-primary' target='_blanck'>Live Demo</a>
          </div>
        </article>


          <article  className="hidden portfolio__item" >
          <div className="portfolio__item-image">
            <img src={IMG3} alt='May Project' />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className='portfolio__item-cta'> 
          <a href='https://github.com' className='btn' target='_blanck'>Github page</a>
          <a href='https://dribble/shots.com' className='btn btn-primary' target='_blanck'>Live Demo</a>
          </div>
        </article>

          <article  className="hidden portfolio__item" >
          <div className="portfolio__item-image">
            <img src={IMG4} alt='May Project' />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className='portfolio__item-cta'> 
          <a href='https://github.com' className='btn' target='_blanck'>Github page</a>
          <a href='https://dribble/shots.com' className='btn btn-primary' target='_blanck'>Live Demo</a>
          </div>
        </article>

          <article  className="hidden portfolio__item" >
          <div className="portfolio__item-image">
            <img src={IMG5} alt='May Project' />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className='portfolio__item-cta'> 
          <a href='https://github.com' className='btn' target='_blanck'>Github page</a>
          <a href='https://dribble/shots.com' className='btn btn-primary' target='_blanck'>Live Demo</a>
          </div>
        </article>

          <article  className="hidden portfolio__item" >
          <div className="portfolio__item-image">
            <img src={IMG6} alt='May Project' />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className='portfolio__item-cta'> 
          <a href='https://github.com' className='btn' target='_blanck'>Github page</a>
          <a href='https://dribble/shots.com' className='btn btn-primary' target='_blanck'>Live Demo</a>
          </div>
        </article>
       
      </div>
    </section>
  )
}

export default Portfolios