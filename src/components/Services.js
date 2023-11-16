import React, { useState } from "react";
import { Clock, Accesories, Exhaust, Speed } from "../assets/icons";
import { FaArrowLeft, FaArrowRight, FaRegDotCircle } from "react-icons/fa";
const Services = () => {
  const data = [<Clock />, <Accesories />, <Exhaust />, <Speed />];

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
    <section id="profile" className="flex flex-col sm:p-16 p-6">
      <div className="flex-1 sm:p-16 p-6 flex-col justify-center items-start bg-white shadow-md ">
        <h1 className="font-bold text-[#39A7FF] text-[24px] mb-2">
          OUR SPECIALITY
        </h1>

        <p className="text-black-400 font-normal text-[12px] ">
          Mauris nec purus scelerisque, sollicitudin velit vel, efficitur felis.
          Vestibulum gravida mauris dui, sed viverra ante euismod a. Etiam
          euismod convallis sagittis. Donec non ultricies lectus. Phasellus sed
          pulvinar tellus, condimentum elementum libero. Sed egestas laoreet
          bibendum. Fusce sit amet lectus porttitor, dictum enim ut, vulputate
          nunc.
        </p>

        <div className="my-5">{data[currentIndex]}</div>

        <p className="text-black-400 font-normal text-[12px] my-4">
          Mauris nec purus scelerisque, sollicitudin velit vel, efficitur felis.
          Vestibulum gravida mauris dui, sed viverra ante euismod a. Etiam
          euismod convallis sagittis. Donec non ultricies lectus. Phasellus sed
          pulvinar tellus, condimentum elementum libero. Sed egestas laoreet
          bibendum. Fusce sit amet lectus porttitor, dictum enim ut, vulputate
          nunc.
        </p>

        <div className="flex justify-between items-center ">
          <div className="text-gray-300 cursor-pointer" onClick={prevSlide}>
            <FaArrowLeft />
          </div>
          <div className="flex justify-center">
            {data.map((item, index) => (
              <div
                className="text-xl cursor-pointer mx-2"
                onClick={() => setCurrentIndex(index)}
              >
                <FaRegDotCircle />
              </div>
            ))}
          </div>
          <div className="text-[#39A7FF] cursor-pointer" onClick={nextSlide}>
            <FaArrowRight />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
