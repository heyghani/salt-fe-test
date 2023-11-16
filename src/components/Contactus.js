import React from "react";

const Contactus = () => {
  return (
    <section id="profile" className="flex flex-col sm:p-16 p-6">
      <h1 className="font-bold text-white text-[24px] mb-2">COMPANY</h1>
      <div className="flex-1 sm:p-16 p-6 flex-col justify-center items-start bg-white shadow-md ">
        <h2 className="font-bold text-[#192655] text-[18px] mb-5">
          Technology Department
        </h2>
        <p className="font-semibold text-[#39A7FF] text-[16px] ">
          Jl.Lembong No 8
        </p>
        <p className="font-semibold text-[#39A7FF] text-[16px] ">
          Kel.Braga Kec.Sumur
        </p>
        <p className="font-semibold text-[#39A7FF] text-[16px] ">
          Bandung, Kota
        </p>
        <p className="font-semibold text-[#39A7FF] text-[16px] ">
          Bandung, Jawa Barat
        </p>
      </div>
      <div className="">
        <ul className="list-none flex flex-row items-start flex-1 mt-4">
          <li className="font-normal cursor-pointer text-[16px] text-white mr-4">
            <a>Who We Are</a>
          </li>
          <li className="font-normal cursor-pointer text-[16px] text-white mr-4">
            <a>Our Value</a>
          </li>
          <li className="font-normal cursor-pointer text-[16px] text-white ">
            <a>The Perks</a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Contactus;
