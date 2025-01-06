'use client';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';

function Responsive() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3, // 4 images in a row by default
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3, // 3 images on larger tablets
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1, // 1 image on mobile devices
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1, // 1 image on small mobile screens
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="slider-container w-full">
      <Slider {...settings}>
        {/* Each slide with margin to create space between images */}
        <div className="w-full border-2 border-white">
          <Image
            src="/images/image-7.jpeg"
            alt="Egypt"
            width={400}
            height={400}
            className="object-cover w-full h-[400px]"
          />
        </div>
        <div className="w-full border-2 border-white ">
          <Image
            src="/images/image-5.jpeg"
            alt="Egypt"
            width={400}
            height={400}
            className="object-cover w-full h-[400px]"
          />
        </div>
        <div className="w-full border-2 border-white ">
          <Image
            src="/images/image-4.jpeg"
            alt="Egypt"
            width={400}
            height={400}
            className="object-cover w-full h-[400px]"
          />
        </div>
        <div className="w-full border-2 border-white ">
          <Image
            src="/images/image-8.png"
            alt="Egypt"
            width={400}
            height={400}
            className="object-cover w-full h-[400px]"
          />
        </div>
        <div className="w-full border-2 border-white">
          <Image
            src="/images/image-3.jpeg"
            alt="Egypt"
            width={400}
            height={400}
            className="object-cover w-full h-[400px]"
          />
        </div>
        <div className="w-full border-2 border-white ">
          <Image
            src="/images/image-2.jpeg"
            alt="Egypt"
            width={400}
            height={400}
            className="object-cover w-full h-[400px]"
          />
        </div>
        <div className="w-full border-2 border-white  ">
          <Image
            src="/images/image-6.jpeg"
            alt="Egypt"
            width={400}
            height={400}
            className="object-cover w-full h-[400px]"
          />
        </div>
        <div className="w-full border-2 border-white ">
          <Image
            src="/images/image-1.jpeg"
            alt="Egypt"
            width={400}
            height={400}
            className="object-cover w-full h-[400px]"
          />
        </div>
      </Slider>
    </div>
  );
}

export default Responsive;
