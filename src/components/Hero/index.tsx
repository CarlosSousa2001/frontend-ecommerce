"use client"
import React from 'react'

import imgone from '../../../public/imgone.jpg'
import imgtwo from '../../../public/imgtwo.jpg'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';


// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay  } from 'swiper/modules';
import Image from 'next/image';

export function Hero() {
  return (
    <div className='max-h-[400px] w-full relative '>
      <div className="flex z-10">
        <Swiper
          cssMode={true}
          slidesPerView={1}
          slidesPerGroup={1}
          navigation={true}
          mousewheel={true}
          keyboard={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          modules={[Navigation, Mousewheel, Keyboard, Autoplay]}
          className="mySwiper"
          style={{ paddingBottom: '40px' }}
        >

          <SwiperSlide>
            <div className="relative max-h-[400px] overflow-hidden">
              <div className='w-full h-[400px] block bg-blue-500'>

              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="relative max-h-[400px] overflow-hidden">
              <Image src={imgtwo} alt='imgtwo' width={1000} height={400} className='object-cover w-full h-full' />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="relative max-h-[400px] overflow-hidden">
              <div className='w-full h-[400px] block bg-orange-500'>

              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="relative max-h-[400px] overflow-hidden">
              <div className='w-full h-[400px] block bg-[#ffe600]'>

              </div>
            </div>
          </SwiperSlide>

        </Swiper>
      </div>
    </div>
  )
}
