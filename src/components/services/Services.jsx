import React from 'react'
import "./Services.css"
// import { CgCheckR } from "react-icons/cg"

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        
        {/* UI/UX Design Section */}

        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design.</h3>
          </div>

          <ul className="service__list">
            <li>
              {/* <CgCheckR className="service__list-icon" /> */}
              <p>User Research and Usability Testing.</p>
            </li>

            <li>
              {/* <CgCheckR className="service__list-icon" /> */}
              <p>Data Analytics.</p>
            </li>

            <li>
              {/* <CgCheckR className="service__list-icon" /> */}
              <p>Prototyping, Wireframing, User Flows, Mockups.</p>
            </li>

            <li>
              {/* <CgCheckR className="service__list-icon" /> */}
              <p>Design Principles.</p>
            </li>

          </ul>

        </article>

        {/* End of UI/UX Design Section */}
        
        {/* Content Creation Section */}

        <article className="service">
          <div className="service__head">
            <h3>Content Creation.</h3>
          </div>

          <ul className="service__list">
            <li>
              {/* <CgCheckR className="service__list-icon" /> */}
              <p>Strong Creative Ability.</p>
            </li>

            <li>
              {/* <CgCheckR className="service__list-icon" /> */}
              <p>The Ability to Explain Technical Matters Clearly.</p>
            </li>

            <li>
              {/* <CgCheckR className="service__list-icon" /> */}
              <p>A Logical Approach to Work.</p>
            </li>

            <li>
              {/* <CgCheckR className="service__list-icon" /> */}
              <p>Strong Communication Skills.</p>
            </li>

            <li>
              {/* <CgCheckR className="service__list-icon" /> */}
              <p>A Keen Interest in Technology.</p>
            </li>

            <li>
              {/* <CgCheckR className="service__list-icon" /> */}
              <p>Creating Design.</p>
            </li>

          </ul>

        </article>

        {/* End of Content Creation Section */}

        {/* Website Development Section */}

        <article className="service">
          <div className="service__head">
            <h3>Web Development.</h3>
          </div>

          <ul className="service__list">
            <li>
              {/* <CgCheckR className="service__list-icon" /> */}
              <p>Visual Design.</p>
            </li>

            <li>
              {/* <CgCheckR className="service__list-icon" /> */}
              <p>Coding Languages Including HTML and CSS.</p>
            </li>

            <li>
              {/* <CgCheckR className="service__list-icon" /> */}
              <p>An Understanding of SEO.</p>
            </li>

            <li>
              {/* <CgCheckR className="service__list-icon" /> */}
              <p>Frontend Website Programing Languages.</p>
            </li>

          </ul>

        </article>

        {/* End of Website Development Section */}

      </div>

    </section>
  )
}

export default Services