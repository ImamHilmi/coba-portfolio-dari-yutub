import React from 'react'
import "./Testimonial.css"
import AVTR1 from "../../assets/women1.jpg"
import AVTR2 from "../../assets/women2.jpg"
import AVTR3 from "../../assets/women3.jpg"
import AVTR4 from "../../assets/women4.jpg"

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonial = () => {

  const data = [
    {
      id: 1,
      name: 'Savannah Mollie',
      avatar: AVTR1,
      review: 'With no images to load up front, Portfolio Web loads in just milliseconds - even with a slow connection.'
    },
    {
      id: 2,
      name: 'Pearl Alfie',
      avatar: AVTR2,
      review: 'Portfolio Web is fully responsive - meaning it will automatically fit any screen size to provide a uniform browsing experience.'
    },
    {
      id: 3,
      name: 'Ava Christine',
      avatar: AVTR3,
      review: 'Loved by the people and the experts! Portfolio Web has been written about in many online blogs.'
    },
    {
      id: 4,
      name: 'Scarlet Eleanor',
      avatar: AVTR4,
      review: 'Portfolio Web is built with the latest technologies and it will be available for both desktop and mobile viewing.'
    },
  ]

  return (
    <section id="testimonial">
      
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>

          <Swiper className="container testimonials__container"
            // install Swiper modules
            modules={[Pagination]}
            spaceBetween={40}
            slidesPerView={1}
            pagination={{ clickable: true }}
          >

            {
              data.map(({ id, name, avatar, review }) => {
                return (
                  <SwiperSlide className="testimonial" key={id}>
                    <div className="client__avatar">
                      <img src={avatar} alt={name} />
                    </div>
                    <h5 className="client__name">
                      {name}
                    </h5>
                    <small className="client__review">
                      {review}
                    </small>  
                  </SwiperSlide>
                )
              })
            }

          </Swiper> 

    </section>
  )
}

export default Testimonial