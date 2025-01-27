/* eslint-disable no-unused-vars */

import React, { useState } from "react";
/* eslint-enable no-unused-vars */

import { NavLink, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";

const Navbar = () => {
  const navigate = useNavigate();

  const [showMenu, setShowMenu] = useState(false);
  const [token, setToken] = useState(true);

  return (
    <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400 ">
      <img
        onClick={() => navigate("/")}
        className="w-30 cursor-pointer  h-14"
        src={assets.logo}
      />

      <ul className="hidden md:flex items-start gap-5 font-medium">
        <NavLink to="/">
          <li className="py-1 ">HOME</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden " />
        </NavLink>
        <NavLink to="/events">
          <li className="py-1 ">ALL EVENTS</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto  hidden" />
        </NavLink>
        <NavLink to="/about">
          <li className="py-1  ">ABOUT</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden " />
        </NavLink>
        <NavLink to="/contact">
          <li className="py-1 ">CONTACT</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden " />
        </NavLink>
      </ul>
      <div className="flex items-center gap-4">
        {token ? (
          <div className="flex items-center gap-2 cursor-pointer group relative">
            <img className="w-14 h-10 rounded-full" src={assets.man_profile} />
            <img className="w-2.5" src={assets.dropdown_icon} />
            <div className="absolute top-0 right-0  pt-14 text-base font-medium text-blue-500 z-20 hidden group-hover:block">
              <div className="min-w-48 bg-stone-100  rounded flex flex-col gap-4 p-4">
                <p
                  onClick={() => navigate("my-profile")}
                  className="hover:text-blue-950 cursor-pointer"
                >
                  My Profile
                </p>
                <p
                  onClick={() => navigate("my-events")}
                  className="hover:text-blue-950 cursor-pointer"
                >
                  My Events
                </p>
                <p
                  onClick={() => setToken(false)}
                  className="hover:text-blue-950 cursor-pointer"
                >
                  Logout
                </p>
              </div>
            </div>
          </div>
        ) : (
          <button
            onClick={() => navigate("/login")}
            className="bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block"
          >
            Create Account
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
