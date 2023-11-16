import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
const Profile = () => {
  const data = [
    {
      title: "Who we are",
      sub: "Technology Company",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eros dolor, semper eget tellus nec, egestas fermentum augue. Namtempor, magna at condimentum ultricies, orci diam volutpat justo, atelementum lacus dui vitae metus.",
    },
    {
      title: "What we do",
      sub: "Profesional Brand Management",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eros dolor, semper eget tellus nec, egestas fermentum augue. Namtempor, magna at condimentum ultricies, orci diam volutpat justo, atelementum lacus dui vitae metus.",
    },
    {
      title: "How we do",
      sub: "Strategize, Design, Collaborate",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eros dolor, semper eget tellus nec, egestas fermentum augue. Namtempor, magna at condimentum ultricies, orci diam volutpat justo, atelementum lacus dui vitae metus.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? data.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === data.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  return (
    <section id="profile" className="flex flex-col sm:py-16 py-6">
      <div className="flex-1 sm:px-16 px-6 flex-col justify-center items-start  ">
        <h1 className="font-bold text-[#39A7FF] text-[24px] mb-2">
          {data[currentIndex].title}
        </h1>
        <h2 className="font-normal text-black text-[18px]">
          {data[currentIndex].sub}
        </h2>
        <p className="text-gray-400 font-normal text-[12px] ">
          {data[currentIndex].desc}
        </p>
      </div>
      <div className="flex flex-row justify-between items-center sm:px-16 px-6 mt-10">
        <div className="flex flex-row items-center">
          <p className="font-bold text-black text-[20px]">
            0{currentIndex + 1}
          </p>
          <p className="font-bold text-gray-400 text-[18px]"> / 03</p>
        </div>
        <div className="flex flex-row w-[150px] h-[50px] cursor-pointer">
          <div
            className="w-[50%] bg-gray-100 text-gray-300 items-center justify-center flex"
            onClick={prevSlide}
          >
            <FaArrowLeft />
          </div>
          <div
            className="w-[50%] bg-[#39A7FF] text-white items-center justify-center flex"
            onClick={nextSlide}
          >
            <FaArrowRight />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
