import React from 'react'
import { BsLinkedin, BsGithub, BsTwitter, BsInstagram } from "react-icons/bs"

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/imam-hilmi/" target="_blank">
            <BsLinkedin />
        </a>
        <a href="https://github.com/ImamHilmi/" target="_blank">
            <BsGithub />
        </a>
        <a href="https://twitter.com/ImamHilmi1" target="_blank">
            <BsTwitter />
        </a>
        <a href="https://www.instagram.com/imam_hilmi222/" target="_blank">
            <BsInstagram />
        </a>
    </div>
  )
}

export default HeaderSocials