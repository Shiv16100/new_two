import React from 'react'
import './details_WTP.css'
import Cariculam from './Cariculam/Cariculam'


import { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

import growth from './../../images_WTP/growth.png'
import certificate from './../../images_WTP/certificate.jpg'
import Mentors_bio from './Mentors_bio/Mentors_bio'
const Details_WTP = () => {
  return (
    <div>
      <div className="main_details_WTP">
        <p>Program CURRICULUM</p>
        <h1><span>Industry Ready</span> and Detailed Syllabus</h1>
        <div className="top_div div">
          <h1>1</h1>
          <Cariculam img={growth} title="Introduction" details="Analyse past student information for tailored insights using our AI " />

        </div>
        <div className="right_div div">
          <h1>2</h1>

          <Cariculam img={growth} title="Introduction" details="Analyse past student information for tailored insights using our AI " />

        </div>
        <div className="left_div div">
          <h1>3</h1>
          <Cariculam img={growth} title="Introduction" details="Analyse past student information for tailored insights using our AI " />

        </div>
        <div className="right_div div">
          <h1>4</h1>

          <Cariculam img={growth} title="Introduction" details="Analyse past student information for tailored insights using our AI " />

        </div>
        <div className="left_div div">
          <h1>5</h1>
          <Cariculam img={growth} title="Introduction" details="Analyse past student information for tailored insights using our AI " />

        </div>
        <div className="bottom_div div">
          <h1>6</h1>
          <Cariculam img={growth} title="Introduction" details="Analyse past student information for tailored insights using our AI " />

        </div>
        <h1>Earn a <span>Career Certificate</span></h1>
        <div className="certificate_WTP">
          <div className="certificate_WTP_content">
            <h1>Certificate</h1>
            <p>A career studies certificate is not a degree, but rather a program that can</p>
          </div>
          <img src={certificate} alt="" />
        </div>
        <p>Mentors</p>
        <h1>Learn form the <span>best</span></h1>
        <div className="mentors_bio">
          {/* <Mentors_bio/>
          <Mentors_bio/>
          <Mentors_bio/>
          <Mentors_bio/>
          <Mentors_bio/> */}
          <Swiper
          slidesPerView={3}
          spaceBetween={30}
            pagination={{
              type: 'none',
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide><Mentors_bio /></SwiperSlide>
            <SwiperSlide><Mentors_bio /></SwiperSlide>
            <SwiperSlide><Mentors_bio /></SwiperSlide>
            <SwiperSlide><Mentors_bio /></SwiperSlide>
            <SwiperSlide><Mentors_bio /></SwiperSlide>
            <SwiperSlide><Mentors_bio /></SwiperSlide>

          </Swiper>
        </div>

      </div>

    </div>
  )
}

export default Details_WTP
