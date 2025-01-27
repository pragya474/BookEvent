/* eslint-disable no-unused-vars */
import React from "react";
/* eslint-enable no-unused-vars */
import { categoryData } from "../assets/assets";
import { Link } from "react-router-dom";

const CategoryMenu = () => {
  return (
    <div
      id="category"
      className="flex flex-col items-center  gap-4 py-16 text-blue-700"
    >
      <h1 className="text-3xl font-medium"> Find by Category</h1>
      <p className="sm:w-1/3 text-center text-sm">
        Simply browse through our extensive list of events happening all over
        india.
      </p>
      <div className="flex sm:justify-center gap-7 pt-5 w-full  overflow-scroll ">
        {categoryData.map((item, index) => (
          <Link
            onClick={() => scrollTo(0, 0)}
            to={`/events/${item.category}`}
            className="flex flex-col items-center text-sm cursor-pointer flex-shrink-0 hover:translate-y-[-14px] transition-all duration-500"
            key={index}
          >
            <img
              className="w-26 h-20 sm:w-24 mb-2 rounded"
              src={item.image}
              alt=""
            />
            <p>{item.category}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryMenu;
