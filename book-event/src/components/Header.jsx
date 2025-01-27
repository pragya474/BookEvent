/* eslint-disable no-unused-vars */
import React from "react";
/* eslint-enable no-unused-vars */
import { assets } from "../assets/assets";

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row flex-wrap bg-primary rounded-lg px-6 md:px-10  lg:px-20">
      {/* --------- LEFT SIDE --------- */}
      <div className="md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auot md:py-[10vw] md:mb-[-30px]">
        <p className="text-3xl md:text-4xl lg:text-5xl text-blue-700 font-semibold leading-tight md:leading-tight lg:leading-tight">
          It All Starts Here!
        </p>
        <div className="flex flex-col md:flex-row items-center gap-3 text-blue-700 text-sm font-light">
          <img className="w-26 h-16  rounded-full" src={assets.ballon} alt="" />
          <p className=" text-lg font-semibold">
            Simply browse through our extensive list of events happening ,
            <br className="hidden sm:block" />
            book your experience hassle-free.
          </p>
        </div>
        <a
          href="#category"
          className="flex items-center gap-2 bg-blue-700 px-8 py-3 rounded-full text-primary text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300"
        >
          Book event
          <img className="w-3 font-extrabold" src={assets.arrow_icon} alt="" />
        </a>
      </div>

      {/* ----------RIGHT SIDE --------- */}
      <div className="md:w-1/2 relative">
        <img
          className="w-full md:absolute bottom-0 h-auto rounded-lg"
          src={assets.event}
          alt=""
        />
      </div>
    </div>
  );
};

export default Header;
