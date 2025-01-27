/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
/* eslint-enable no-unused-vars */
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

const TrendingEvents = () => {
  const navigate = useNavigate();
  const { events } = useContext(AppContext);

  return (
    <div className="flex flex-col  items-center gap-4 my-16 text-gray-900 md:mx-10">
      <h1 className="text-3xl font-medium">Trending Events</h1>
      <p className="sm:w-1/3 text-center text-sm">
        Join the vibe-book these events and become part of trends
      </p>
      <div className="max-w-full grid  grid-cols-auto  flex-col gap-20 gap-y-10 pt-8 px-10 sm:px-0">
        {events.slice(0, 7).map((item, index) => (
          <div
            onClick={() => {
              navigate(`/event/${item._id}`);
              window.scrollTo(0, 0);
            }}
            className=" border border-primary rounded-xl  cursor-pointer hover:translate-y-[-10px] transition-all duration-500 "
            key={index}
          >
            <img className="bg-blue-700 border-primary " src={item.image} />
            <div className="p-4">
              <div className="flex items-center gap-2 text-sm text-center text-red-600">
                <p className="w-2 h-2 bg-red-600 "></p> <p>Trending</p>
              </div>
              <p className="text-blue-700 text-lg font-medium">{item.name}</p>
              <p className="text-gray-600 text-sm">📅{item.date}</p>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={() => {
          navigate("/events");
          scrollTo(0, 0);
        }}
        className="bg-primary text-blue-900 px-12 py-3 rounded-full mt-10"
      >
        more
      </button>
    </div>
  );
};

export default TrendingEvents;
