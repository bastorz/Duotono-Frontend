import { Dot, ArrowLeft, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { Button } from '../ui/button';

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      url: './banner.jpg',
    },
    {
      url: './banner2.jpg',
    },
    {
      url: './banner3.jpg',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="relative w-full h-[400px] md:h-[750px] overflow-hidden">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="w-full h-full bg-center bg-cover duration-500 relative"
      >
        <button
          className="hidden lg:flex absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-75 p-2 rounded-full transition-opacity duration-300 delay-300 cursor-pointer z-50"
          onClick={prevSlide}
        >
          <ArrowLeft size={24} />
        </button>
        <button
          className="hidden lg:flex absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-75 p-2 rounded-full transition-opacity duration-300 delay-300 cursor-pointer z-50"
          onClick={nextSlide}
        >
          <ArrowRight size={24} />
        </button>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <h1 className="text-2xl lg:text-6xl text-center font-bold mb-4 px-4 md:px-0">
            Impresión digital al alcance de todos
          </h1>
          <Link href="/tienda">
            <Button
              variant="default"
              className="bg-first rounded-xl gap-x-2 shrink-0 text-black font-semibold text-md md:text-xl"
            >
              Descubre nuestros servicios
            </Button>
          </Link>
        </div>
      </div>
      <div className="flex top-4 justify-center py-2 ">
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

export default Banner;
