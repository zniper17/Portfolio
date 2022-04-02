import React from 'react'
import "./portfolio.css"
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2  from '../../assets/portfolio2.jpg'
import IMG5 from '../../assets/portfolio5.png'

const data=[
  {
    id:1,
    image:IMG1,
    title:'To-Do-List App',
    github:'https://github.com',
    demo:'https://todolist-shaham.netlify.app/'
  },
  {
    id:2,
    image:IMG2,
    title:'Crypto Currency App,displays the current price and price changes of all major Crypto Currencies using external an API',
    github:'https://github.com/zniper17/cryptoApp',
    demo:'https://cryptoappshaham.netlify.app/'
  },
  
  {
    id:3,
    image:IMG5,
    title:'Netflix Clone is an online video entertainment website similar to Netflix, where you can browse unlimited movies & TV shows for FREE!',
    github:'https://github.com/zniper17/Netflix-clone.git',
    demo:'https://shaham-nestflix.netlify.app/'
  }

]
const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className='container portfolio__container'>
       {
         data.map(({id,image,title,github,demo}) => {
           return(
            <article key={id} className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={image} alt={title} />
          </div>

          <h3>{title}</h3>
          <div className='portfolio__item-cta'>
          <a href={github} className='btn' target="_blank">Github</a>
          <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
           )
         })
       }
       
      </div>
    </section>
  )
}

export default Portfolio