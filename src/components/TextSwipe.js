'use client'
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {Navigation, Pagination, Autoplay} from 'swiper/modules';
import introData from '../data/introData';

// import Swiper styles
// import 'swiper/css';
import 'swiper/css/bundle';

export default function TextSwipe() {
    return (
        <Swiper
        loop={true}
        direction={'vertical'}
        // pagination={{
            //     clickable: true,
            // }}
            modules={[Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
            slidesPerGroup={1}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            onSwiper={(swiper) => console.log(swiper)}
            className='w-fit h-10 m-0 left-0'
        >
            {introData.map((data, k) => (
                <SwiperSlide key={k} className='m-0 p-0 ml-0'>
                    <span>
                        {(k != 1) ? <span>&nbsp;</span> : "n "}
                    </span>
                    <span className='text-purple-600 inline-block'>{data}</span>
                </SwiperSlide>
            ))}
        </Swiper>

    )
}
