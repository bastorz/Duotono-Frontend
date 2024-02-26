'use client';

import { Dot, StepBack, StepForward } from 'lucide-react';
import React, { useEffect, useState } from 'react';

export const Carousel = () => {
  const slides = [
    {
      url: 'https://duotonodesign.s3.eu-west-3.amazonaws.com/flyers-a4.jpg',
    },
    {
      url: 'https://duotonodesign.s3.eu-west-3.amazonaws.com/bolsa+de+tela.jpg',
    },
    {
      url: 'https://duotonodesign.s3.eu-west-3.amazonaws.com/camisetas-deportivas-poliester.jpeg',
    },
    {
      url: 'https://duotonodesign.s3.eu-west-3.amazonaws.com/taza-con-caja.jpg',
    },
    {
      url: 'https://duotonodesign.s3.eu-west-3.amazonaws.com/tarjeta-de-visita.jpeg',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: React.SetStateAction<number>) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="flex flex-col xl:hidden w-[18rem] h-[18rem] md:w-[24rem] md:h-[24rem] lg:w-[30rem] lg:h-[30rem] m-auto py-16 px-4 relative group">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
      />
      {/* Left Arrow */}
      <div className="absolute top-[46%] -translate-x-0 translate-y-[-50%] left-7 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <StepBack onClick={prevSlide} size={30} color="#ffffff" />
      </div>
      {/* Right Arrow */}
      <div className="absolute top-[46%] -translate-x-0 translate-y-[-50%] right-7 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <StepForward onClick={nextSlide} size={30} color="#ffffff" />
      </div>
      <div className="flex top-4 justify-center py-2">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className="text-2xl cursor-pointer"
          >
            <Dot />
          </div>
        ))}
      </div>
    </div>
  );
};
