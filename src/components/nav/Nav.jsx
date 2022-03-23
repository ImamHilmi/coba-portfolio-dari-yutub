import React, { useState } from 'react'
import "./Nav.css"
import { AiOutlineHome } from "react-icons/ai"
import { FaUserGraduate } from "react-icons/fa"
import { ImBook } from "react-icons/im"
import { RiServiceFill, RiContactsFill } from "react-icons/ri"

const Nav = () => {

  const[activeNav, setActiveNav] = useState('#home');

  return (
    <nav>
      <a href="#home" onClick={() => setActiveNav('#home')} className={activeNav === '#home' ? 'active' : ''}>
        <AiOutlineHome />
      </a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}>
        <FaUserGraduate />
      </a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}>
        <ImBook />
      </a>
      <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}>
        <RiServiceFill />
      </a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}>
        <RiContactsFill />
      </a>
    </nav>
  )
}

export default Nav