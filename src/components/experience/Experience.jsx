import React from 'react'
import "./Experience.css"
import { CgCheckR } from "react-icons/cg"

const Experience = () => {
  return (
    <section id="experience">
      <h5 className="title">The Skills That I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">

      {/* FrontEnd Section */}

        <div className="experience__frontend">
          <h3>FrontEnd Development</h3>
            <div className="experience__content">

              <article className="experience__details">
                <CgCheckR className="experience__details-icon" />
                <div>
                  <h4>HTML</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>

              <article className="experience__details">
                <CgCheckR className="experience__details-icon" />
                <div>
                  <h4>CSS</h4>
                  <small className="text-light">Intermediate</small>
                </div>
              </article>

              <article className="experience__details">
                <CgCheckR className="experience__details-icon" />
                <div>
                  <h4>JavaScript</h4>
                  <small className="text-light">Basic</small>
                </div>
              </article>

              <article className="experience__details">
                <CgCheckR className="experience__details-icon" />
                <div>
                  <h4>Wordpress</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>

              <article className="experience__details">
                <CgCheckR className="experience__details-icon" />
                <div>
                  <h4>React</h4>
                  <small className="text-light">Basic</small>
                </div>
              </article>

              <article className="experience__details">
                <CgCheckR className="experience__details-icon" />
                <div>
                  <h4>Bootstrap</h4>
                  <small className="text-light">Intermediate</small>
                </div>
              </article>

            </div>
        </div>

      {/* End of FrontEnd Section */}

      {/* BackEnd Section */}

        <div className="experience__backend">
        <h3>BackEnd Development</h3>
            <div className="experience__content">

              <article className="experience__details">
                <CgCheckR className="experience__details-icon" />
                <div>
                  <h4>MySql</h4>
                  <small className="text-light">Intermediate</small>
                </div>
              </article>

              <article className="experience__details">
                <CgCheckR className="experience__details-icon" />
                <div>
                  <h4>Java</h4>
                  <small className="text-light">Basic</small>
                </div>
              </article>

              <article className="experience__details">
                <CgCheckR className="experience__details-icon" />
                <div>
                  <h4>Golang</h4>
                  <small className="text-light">Basic</small> 
                </div>
              </article>

              <article className="experience__details">
                <CgCheckR className="experience__details-icon" />
                <div>
                  <h4>Postgres</h4>
                  <small className="text-light">Intermediate</small>
                </div>
              </article>

            </div>
        </div>

      {/* End of BackEnd Section */}

      </div>

    </section>
  )
}

export default Experience