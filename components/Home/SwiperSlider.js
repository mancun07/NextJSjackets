import Head from 'next/head'
// import Image from 'next/image'

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"

// import "./styles.css";
import classes from './SwiperSlider.module.css'


// import Swiper core and required modules
import SwiperCore, {
  Autoplay,Pagination,Navigation
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([Autoplay,Pagination,Navigation]);


export default function Sli(props) {
  
    // autoplay={{
    //     "delay": 2500,
    //     "disableOnInteraction": false
    //   }}
  
  return (
    <>
    <Swiper className={classes['swiper-container']} 
            spaceBetween={30} 
            centeredSlides={true}  
            pagination={{
        "clickable": true
        }} navigation={true} className="mySwiper">
            
            {props.images.map(el => {
                return (
                <SwiperSlide className={classes['swiper-slide']} key={el.id}><img src={el.src} alt="" /></SwiperSlide> )
            })}
 </Swiper>
    </>
  )
}


