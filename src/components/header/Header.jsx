import React from 'react'
import "./header.css"
import CTA from './CTA.jsx'
import ME from '../../assets/meog.png'
import HeaderSocials from './HeaderSocials.jsx'

function Header() {
  return (
    <header>
     <div className='container header__container'>
       <h5>Hello I'm</h5>
       <h1>Shaham Ahmed</h1>
          <h5 className='text-light' >Front-End Developer</h5>
    <CTA />
    <HeaderSocials />

    <div className='me'>
      <img src={ME} alt='me'/>
    </div>

<a href="#contact" className='scroll__down'>Srcoll Down</a>
     </div>      

    </header>
  )
}

export default Header