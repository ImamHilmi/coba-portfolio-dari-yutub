import React from 'react'
import "./About.css"
import ME from '../../assets/me1-1.jpg'
import { BsAwardFill } from 'react-icons/bs'
import { FaUsers } from 'react-icons/fa'
import { MdOutlineWeb } from 'react-icons/md'

const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">

        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="My Pict" />
          </div>
        </div>

        <div className="about__content">

          <div className="about__cards">
            <article className="about-card">
              <BsAwardFill className="about__icon"/>
              <h5>Experiences</h5>
              <small>1 Years Working</small>
            </article>

            <article className="about-card">
              <FaUsers className="about__icon"/>
              <h5>Clients</h5>
              <small>2+ IT Company</small>
            </article>

            <article className="about-card">
              <MdOutlineWeb className="about__icon"/>
              <h5>Projects</h5>
              <small>10+ Website Developed</small>
            </article>
          </div>

          <p>
            I'm quite proficient in UI/UX Design Application and Website. Also I have participated in several competitions related to information technology innovation. I have an interest to continue developing my designing ablities for any applications.
          </p>

          <a href="#contact" className="btn btn-primary">Let's Talk</a>

        </div>

      </div>
    </section>
  )
}

export default About