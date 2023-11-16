import React from "react";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
const Home = () => {
  return (
    <section
      id="home"
      className="flex md:flex-row flex-col sm:py-16 py-6 relative"
    >
      <div className="flex-1 sm:px-16 px-6 flex-col justify-center items-start  ">
        <h1 className="text-white font-semibold text-[18px]">
          Discover
          <br />
          Your Wonder
        </h1>
        <p className="text-white font-normal text-[12px] w-[500px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          eros dolor, semper eget tellus nec, egestas fermentum augue. Nam
          tempor, magna at condimentum ultricies, orci diam volutpat justo, at
          elementum lacus dui vitae metus.
        </p>
      </div>
      <div className="absolute flex self-center justify-center item-center  rounded-xl bg-white bottom-[-12px] md:hidden shadow-md z-10">
        <MdKeyboardDoubleArrowDown size={24} />
      </div>
    </section>
  );
};

export default Home;
