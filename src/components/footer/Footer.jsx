import React from 'react'
import "./Footer.css"
import { FaFacebookF, FaInstagramSquare, FaTwitter, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>

      <a href="#home" className="footer__logo" >
        Imam Hilmi
      </a>

      <ul className="permalinks">

        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonial">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>

      </ul>

      <div className="footer__socials">

        <a href="https://www.facebook.com/imamhilmi222" target="_blank" rel="noreferrer">
          <FaFacebookF />
        </a>
        <a href="https://twitter.com/ImamHilmi1" target="_blank" rel="noreferrer">
          <FaTwitter />
        </a>
        <a href="https://www.instagram.com/imam_hilmi222/" target="_blank" rel="noreferrer">
          <FaInstagramSquare />
        </a>
        <a href="https://www.linkedin.com/in/imam-hilmi/" target="_blank" rel="noreferrer">
          <FaLinkedin />
        </a>

      </div>

      <div className="footer__copyright">
        <small>&copy; Imam Hilmi Portfolio Website.</small>
      </div>

    </footer>
  )
}

export default Footer