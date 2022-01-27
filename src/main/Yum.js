import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function Yum(){
  return (
    <figure>
      <Swiper   
        modules={[Navigation, Pagination]}
        spaceBetween={0}
        slidesPerView={'auto'}
        loop
        navigation
        pagination={{ clickable: true }}      
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>     
      </Swiper>
    </figure>
  )
}

export default Yum;