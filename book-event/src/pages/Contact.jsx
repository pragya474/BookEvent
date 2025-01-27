/* eslint-disable no-unused-vars */
import React from "react";
/* eslint-enable no-unused-vars */
import { assets } from "../assets/assets";
import { toast } from "react-toastify";

const Contact = () => {
  const exploreJob = async () => {
    toast.success("No Job Opening now!", { duration: 3000 });
  };
  return (
    <div>
      {/* -----------pic--------- */}
      <div className="text-center text-2xl pt-10 ">
        <p>
          <span className="text-orange-600">CONTACT</span>
          <span className="text-blue-700 font-semibold">US</span>
        </p>
      </div>
      {/* ----------contact----------- */}
      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm">
        <img className="w-full md:max-w-[360px]" src={assets.contact} />
        <div className="flex flex-col justify-center items-start gap-6 text-blue-600">
          <p className=" font-semibold text-lg text-blue-600">OUR OFFICE</p>
          <p>
            54709 Willms Station <br /> Suite 350, Washington, USA
          </p>
          <p>
            Tel: +91 987456321 <br /> Email:bookevent@gmail.com
          </p>
          <p className=" font-semibold text-lg">CAREERS AT BookEvent</p>
          <p>Learn more about our teams and job openings.</p>
          <button
            onClick={exploreJob}
            className="border border-blue-700 px-8 py-4 text-sm hover:bg-primary hover:text-blue-800 rounded-xl transition-all duration-500"
          >
            Explore Jobs
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
