

import React from 'react'
import "./Portfolio.css"

import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";


export const Portfolio = () => {

  return (
    <div>
      <div className="portfolio" id="portfolio">
      {/* heading */}
      {/* <span style={{color: darkMode?'white': ''}}>Recent Projects</span> */}
      <span>Portfolio Mango</span>

      {/* slider */}
      <Swiper
      // spaceBetween={30}
        spaceBetween={1}
        slidesPerView={5}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src="../../img/" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="../../img/vetement5.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src= "../../img/vetement2.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="../../img/vetement3.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="../../img/vetement4.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="../../img/vetement6.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="../../img/vetement6.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="../../img/vetement6.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="../../img/vetement6.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="../../img/vetement6.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="../../img/vetement6.jpg" alt="" />
        </SwiperSlide>
      </Swiper>
    </div>

    </div>
  )
}
