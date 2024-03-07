'use client';

import { Dot, StepBack, StepForward } from 'lucide-react';
import React, { useEffect, useState } from 'react';

interface CarouselProps {
  slides: {
    url: string;
  }[];
  dotColor: string;
}

export const Carousel = ({ slides, dotColor }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Función para ir al siguiente slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    // Define el intervalo para cambiar automáticamente de slide cada 2 segundos
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    // Limpia el intervalo cuando el componente se desmonta
    return () => clearInterval(interval);
  }, [currentIndex]); // Se ejecuta cada vez que currentIndex cambia

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };
  return (
    <div className="flex flex-col w-[20rem] h-[20rem] lg:w-[40rem] lg:h-[40rem] m-auto py-4 lg:py-16 px-4 relative group">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
      />
      {/* <div className="absolute top-[46%] -translate-x-0 translate-y-[-50%] left-6 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <StepBack onClick={prevSlide} size={20} color="#ffffff" />
      </div> */}
      {/* <div className="absolute top-[46%] -translate-x-0 translate-y-[-50%] right-6 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <StepForward onClick={nextSlide} size={20} color="#ffffff" />
      </div> */}
      <div className="flex top-4 justify-center py-2 ">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className="text-2xl cursor-pointer"
          >
            <Dot color={dotColor} />
          </div>
        ))}
      </div>
    </div>
  );
};
