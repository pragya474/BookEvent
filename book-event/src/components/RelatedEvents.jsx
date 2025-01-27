/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from "react";
/* eslint-enable no-unused-vars */
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const RelatedEvents = ({ category, eveId }) => {
  const navigate = useNavigate();
  const { events } = useContext(AppContext);
  const [relEvent, setRelEvent] = useState([]);

  useEffect(() => {
    if (events.length > 0 && category) {
      const eventsData = events.filter(
        (eve) => eve.category === category && eve._id !== eveId
      );
      setRelEvent(eventsData);
    }
  }, [events, category, eveId]);

  return (
    <div className="flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10">
      <h1 className="text-3xl font-medium">Related Events</h1>
      <p className="sm:w-1/3 text-center text-sm">
        Become part of these events and enjoy !!!!!
      </p>
      <div className="max-w-full grid justify-center  grid-cols-auto flex-col gap-20 gap-y-10 pt-8 px-10 sm:px-0">
        {relEvent.slice(0, 5).map((item, index) => (
          <div
            onClick={() => {
              navigate(`/event/${item._id}`);
              window.scrollTo(0, 0);
            }}
            className=" border border-primary rounded-xl  cursor-pointer hover:translate-y-[-10px] transition-all duration-500 "
            key={index}
          >
            <img
              className="bg-blue-700 border-primary  rounded-xl"
              src={item.image}
            />
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

export default RelatedEvents;
