/* eslint-disable no-unused-vars */
import React from "react";
/* eslint-enable no-unused-vars */
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 ">
        <p>
          <span className="text-orange-600">ABOUT</span>
          <span className="text-blue-700 font-semibold">US</span>
        </p>
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-12">
        <img className="w-full md:max-w-[360px]" src={assets.about} />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-sm text-blue-700">
          <p>
            Welcome to BookEvent, your trusted partner in managing and booking
            your events conveniently and efficiently. At BookEvent, we
            understand the challenges individuals face when it comes to booking
            events and managing their record.
          </p>
          <p>
            BookEvent is committed to excellence in managing technology. We
            continuously strive to enhance our platform, integrating the latest
            advancements to improve user experience and deliver superior
            service. Whether you are booking your first event or managing those
            bookings , BookEvent is here to support you every step of the way.
          </p>
          <b className="text-orange-600">Our Vision</b>
          <p>
            Our vision at Prescripto is to create a seamless experience for
            every user. We try to make it easier for you to access the luxury
            you need, when you need it.
          </p>
        </div>
      </div>
      <div className="text-xl my-4">
        <p className="text-orange-600 font-semibold">WHY CHOOSE US</p>
      </div>

      <div className="flex flex-col md:flex-row ">
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-blue-800 transition-all duration-300 text-blue-600 cursor-pointer">
          <b>EFFICIENCY:</b>
          <p>Streamlined events bookings that fits into your busy lifestyle.</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-blue-800 transition-all duration-300 text-blue-600 cursor-pointer">
          <b>CONVENIENCE: </b>
          <p>Access to a network of trusted professionals in your area.</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-blue-800 transition-all duration-300 text-blue-600 cursor-pointer">
          <b>PERSONALIZATION:</b>
          <p>
            Tailored recommendations and reminders to help you stay on top of
            your world.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
