import React from 'react'
import Header from "../src/components/header/Header"
import Nav from "../src/components/nav/Nav"
import About from "../src/components/about/About"
import Experience from "../src/components/experience/Experience"
import Services from "../src/components/services/Services"
import Portfolio from "../src/components/portfolio/Portfolio"
import Testimonial from "../src/components/testimonial/Testimonial"
import Contact from "../src/components/contact/Contact"
import Footer from "../src/components/footer/Footer"

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Testimonial />
      <Contact />
      <Footer />
    </>
  )
}

export default App