import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import work1 from '../../img/work1.jpg'
import work2 from '../../img/work2.jpg'
import work3 from '../../img/work3.jpg'
import work4 from '../../img/work4.jpg'
import work5 from '../../img/work5.jpg'
import work6 from '../../img/work6.jpg'
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={work1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={work2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={work3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={work4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={work5} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={work6} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
