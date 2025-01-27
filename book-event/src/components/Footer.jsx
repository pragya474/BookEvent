/* eslint-disable no-unused-vars */
import React from "react";
/* eslint-enable no-unused-vars */
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10  mt-32 text-sm">
        <div>
          <img className="mb-5 w-20 h-20" src={assets.logo} />
          <p className="w-full md:w-2/3 text-blue-600 leading-6">
            Discover the easiest way to book events and activities
            <br /> with our website. We achieve our mission by giving
            <br />
            individuals more time back, enabling them to create
            <br /> and share meaningful human experiences together.
          </p>
        </div>

        {/* ------------- Middle section--------- */}
        <div>
          <h1 className="text-xl font-medium mb-5"> COMPANY</h1>
          <ul className="flex flex-col gap-2 text-blue-600">
            <li>Home</li>
            <li>About</li>
            <li>Contact us</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* --------Right section -------------- */}
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-blue-600">
            <li>+91 987456321</li>
            <li>bookevent@gmail.com</li>
          </ul>
        </div>
      </div>

      {/* ---------copyright text------ */}
      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright 2025@ BookEvent- All Right Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
