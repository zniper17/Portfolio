import React from 'react'
import "./about.css"
import ME from '../../assets/me-about.jpg'
import {FaAward} from "react-icons/fa"
import {FiUsers} from "react-icons/fi"
import {TiFolderOpen} from "react-icons/ti"


function About() {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
  <div className='container about__container'>
    <div className='about__me'>
<div className='about__me-image'>
  <img src={ME} alt='about-image'/>
</div>
    </div>
    <div className='about__content'>
   
      <p>
Hi,I'm Shaham.I'm a multi-talented human being with bachelor's degree.You can call
me a front-end Developer,I will take data and covert it into something visually appealing for all!
I don't like to define myself by the work I want to do.I define myself by the work I've done.
Fueled by high energy levels and boundless enthusiasm,I'm easily inspired
and more then willing to follow my fascinations wherever they take me.
      </p>
      <a href='#contact' className='btn btn-primary'>Let's Talk</a>
    </div>
  </div>
    </section>
  )
}

export default About