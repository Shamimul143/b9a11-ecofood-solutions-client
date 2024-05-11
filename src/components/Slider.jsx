import image1 from "../assets/image/chicken-alfredo-feature.jpg"
import image2 from "../assets/image/foods.jpg"
import image3 from "../assets/image/indian-style-vegetable.jpeg"
import image4 from "../assets/image/Tuna-Sushi-Rolls.jpg"

// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Navigation } from 'swiper/modules';


const Slider = () => {
    return (
        <div className="max-w-7xl mx-auto">
        <Swiper navigation={true} modules={[Navigation]} loop={true} className="mySwiper ">
          <SwiperSlide><div className="max-w-7xl"><img className="w-full h-[550px] rounded-lg" src={image1} alt="" /></div></SwiperSlide>
          <SwiperSlide><div className="max-w-7xl"><img className="w-full h-[550px] rounded-lg" src={image2} alt="" /></div></SwiperSlide>
          <SwiperSlide><div className="max-w-7xl"><img className="w-full h-[550px] rounded-lg" src={image3} alt="" /></div></SwiperSlide>
          <SwiperSlide><div className="max-w-7xl"><img className="w-full h-[550px] rounded-lg" src={image4} alt="" /></div></SwiperSlide>      
        </Swiper>
      </div>
    );
};
export default Slider;