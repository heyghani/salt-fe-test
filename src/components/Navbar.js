import React, { useState } from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="w-full flex py-6 justify-between items-center">
      <p className="font-bold text-blue-600 text-[24px]">COMPANY</p>
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        <li className="font-normal cursor-pointer text-[16px] text-black mr-10">
          <a>Who We Are</a>
        </li>
        <li className="font-normal cursor-pointer text-[16px] text-black mr-10">
          <a>Our Value</a>
        </li>
        <li className="font-normal cursor-pointer text-[16px] text-black ">
          <a>The Perks</a>
        </li>
      </ul>
      <div className="sm:hidden flex flex-1 justify-end items-center">
        {toggle ? (
          <IoMdClose onClick={() => setToggle((prev) => !prev)} />
        ) : (
          <IoMdMenu onClick={() => setToggle((prev) => !prev)} />
        )}
        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-black absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            <li className="font-normal cursor-pointer text-[16px] text-white mb-4">
              <a>Who We Are</a>
            </li>
            <li className="font-normal cursor-pointer text-[16px] text-white mb-4">
              <a>Our Value</a>
            </li>
            <li className="font-normal cursor-pointer text-[16px] text-white ">
              <a>The Perks</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
