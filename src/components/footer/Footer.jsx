import React from 'react'
import "./footer.css"
import { BsFacebook } from "react-icons/bs"
import { BsInstagram } from "react-icons/bs"
function footer() {
  return (
    <footer>
      <a href="#" className='footer__logo'>Shaham</a>
      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Expeirience</a></li>

        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>
     
      <div className='footer__copyright'>
        <small>
          &copy; Shaham Ahmed.All rights reserved
        </small>
      </div>
    </footer>
  )
}

export default footer