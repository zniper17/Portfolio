import React,{useState} from "react";
import "./nav.css"
import {AiOutlineHome,AiOutlineUser} from "react-icons/ai"
import {GrBook} from "react-icons/gr"
import {RiServiceFill} from "react-icons/ri"
import {TiContacts} from "react-icons/ti"

function Nav(){
  const [activeNav,setActiveNav]=useState("#")
  return (
  
    <nav>
      <a href="#" onClick={()=> setActiveNav("#")} className={activeNav==="#"? 'active': ""}><AiOutlineHome /></a>
      <a href="#about" onClick={()=> setActiveNav("about")} className={activeNav==='about'? 'active': ""}><AiOutlineUser /></a>
      <a href="#experience" onClick={()=> setActiveNav("experience")} className={activeNav==='experience'? 'active': ""} ><GrBook /></a>
     
      <a href="#contact" onClick={()=> setActiveNav("contact")} className={activeNav==='contact'? 'active': ""} ><TiContacts /></a>
  

    </nav>
  )
}

export default Nav