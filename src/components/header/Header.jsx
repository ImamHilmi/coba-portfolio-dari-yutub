import React from 'react'
import "./Header.css"
import CTA from "./CTA"
import ME from "../../assets/me2-1.png"
import HeaderSocials from "./HeaderSocials"

const Header = () => {
  return (
    <header id='home'>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Imam Hilmi</h1>
        <h5 className="text-light">
          FrontEnd Developer
        </h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className="scroll__down"> Scroll Down</a>
      </div>
    </header>
  )
}

export default Header