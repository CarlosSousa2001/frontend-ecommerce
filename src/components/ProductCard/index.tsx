"use client"

import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

import { CardItem } from './CardItem';
import type { Product } from '@/api/get-all-products';
import Link from 'next/link';
import { useRouter } from 'next/navigation';


interface ProductPropsAll {
  item: Product[]
  sectionTitle: string
}

export function ProductCardSlide({ item, sectionTitle}: ProductPropsAll) {

  const router = useRouter();

function handleRedirectProductDetailsPage(id:number){
  router.push(`/products/${id}`)
}

  return (
    <div className='w-full flex flex-col'>
      <div className='flex items-center gap-6 mb-4'>
        <p className='text-base uppercase tracking-wider'>{sectionTitle} ❤️</p>
        <span className=' text-sm text-blue-400 cursor-pointer'>Ver mais</span>
      </div>
      <div className='w-full'>
        <Swiper
          cssMode={true}
          slidesPerView={5}
          slidesPerGroup={5}
          spaceBetween={10}
          navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className="mySwiper "
          style={{ paddingBottom: '40px' }}
        >
          {item.map(item => (
            <SwiperSlide key={item.id} className='cursor-pointer min-w-[240px]' onClick={() => handleRedirectProductDetailsPage(item.id)}>
              <CardItem
                id={item.id}
                title={item.title}
                description={item.description}
                price={item.price}
                photoUrl={item.photoUrl}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

    </div>
  )
}
