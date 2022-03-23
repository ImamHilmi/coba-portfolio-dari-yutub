import React from 'react'
import "./Portfolio.css"
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Wordpress E-Commerce Website',
    github: 'https://github.com/ImamHilmi/',
    demo: 'https://clubdemariposas.xyz/'
  },
  {
    id: 2,
    image: IMG2,
    title: 'React JS Personal Portfolio',
    github: 'https://github.com/ImamHilmi/my-react-portfolio-1-feb-2022',
    demo: 'https://elastic-bohr-a85fcc.netlify.app/'
  },
  {
    id: 3,
    image: IMG3,
    title: 'React JS with Movie DB API',
    github: 'https://github.com/ImamHilmi/tugas-23-des-2021-aplikasi-dengan-movie-db-api',
    demo: 'https://romantic-snyder-1e8f5d.netlify.app/'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Wordpress E-Commerce Website',
    github: 'https://github.com/ImamHilmi/',
    demo: 'https://clubdemariposas.xyz/'
  },
  {
    id: 5,
    image: IMG5,
    title: 'React JS Personal Portfolio',
    github: 'https://github.com/ImamHilmi/my-react-portfolio-1-feb-2022',
    demo: 'https://elastic-bohr-a85fcc.netlify.app/'
  },
  {
    id: 6,
    image: IMG6,
    title: 'React JS with Movie DB API',
    github: 'https://github.com/ImamHilmi/tugas-23-des-2021-aplikasi-dengan-movie-db-api',
    demo: 'https://romantic-snyder-1e8f5d.netlify.app/'
  },
]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Works</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">

        {
          data.map(({ id, image, title, github, demo }) => {
            return (
              <article className="portfolio__item" key={id}>
          
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>

                <h3>{title}</h3>
                  <div className="portfolio__item-cta">
                    <a href={github} className="btn" target="_blank" rel="noreferrer">Github</a>
                    <a href={demo} className="btn btn-primary" target="_blank" rel="noreferrer">Live Demo</a>
                  </div>

              </article>
            )
          })
        }

      </div>

    </section>
  )
}

export default Portfolio