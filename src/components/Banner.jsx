import React, { useEffect, useState } from "react";
import { HiArrowRight, HiArrowLeft } from "react-icons/hi";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 3 : (prev) => prev - 1);
  };
  const nextSlide = () => {
    setCurrentSlide(currentSlide === 3 ? 0 : (prev) => prev + 1);
  };
  useEffect(() => {
    const autoSlide = setInterval(() => {
      setCurrentSlide((prev) => (prev === 3 ? 0 : prev + 1));
    }, 5000);
    return () => {
      clearInterval(autoSlide);
    };
  }, []);
  const data = [
    "https://amazonproone.vercel.app/static/media/img2.bc1bdb910ead16c65197.jpg",
    "https://img3.thuthuatphanmem.vn/uploads/2019/10/14/banner-thoi-trang-cho-be_113855803.png",
    "https://img3.thuthuatphanmem.vn/uploads/2019/10/14/anh-lookbook-thoi-trang_113854100.jpg",
    "https://img3.thuthuatphanmem.vn/uploads/2019/10/14/banner-thoi-trang-dang-cap-hien-dai_113856116.png",
  ];
  return (
    <div className="w-full h-auto overflow-hidden">
      <div className=" w-screen h-[650px] relative">
        <div
          style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
          className=" w-[400vw] h-full flex transition-transform duration-1000"
        >
          {data.map((img, index) => {
            return (
              <img
                key={index}
                className=" lg:w-screen md:w-auto h-full object-cover"
                src={img}
                alt={`Img${index}`}
                loading="priority"
              />
            );
          })}
        </div>
        <div className=" absolute w-fit left-0 right-0 mx-auto flex gap-8 bottom-36">
          <div
            onClick={prevSlide}
            className=" w-14 h-12 border rounded-full border-gray-700 flex items-center justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300  "
          >
            <HiArrowLeft />
          </div>
          <div
            onClick={nextSlide}
            className=" w-14 h-12 border rounded-full border-gray-700 flex items-center justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300  "
          >
            <HiArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
};
