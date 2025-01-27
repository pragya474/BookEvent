/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from "react";
/* eslint-enable no-unused-vars */

import { AppContext } from "../context/AppContext";
import { useNavigate, useParams } from "react-router-dom";

const Events = () => {
  const { category } = useParams();
  const [filterEvent, setFilterEvent] = useState([]);
  const [showFilter, setShowFilter] = useState(false);
  const navigate = useNavigate();

  const { events } = useContext(AppContext);

  const applyFilter = () => {
    if (category) {
      setFilterEvent(events.filter((eve) => eve.category === category));
    } else {
      setFilterEvent(events);
    }
  };

  useEffect(() => {
    applyFilter();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [events, category]);

  return (
    <div>
      <p className="text-orange-600">Browse through the events.</p>
      <div className="flex flex-col sm:flex-row items-start gap-8 mt-5">
        <button
          onClick={() => setShowFilter(!showFilter)}
          className={`py-1 px-3 border rounded text-sm  transition-all sm:hidden ${
            showFilter ? "bg-primary text-blue-600" : ""
          }`}
        >
          Filters
        </button>
        <div
          className={`flex-col gap-4 text-sm text-blue-600 ${
            showFilter ? "flex" : "hidden sm:flex"
          }`}
        >
          <p
            onClick={() =>
              category === "Spiritual Event"
                ? navigate("/events")
                : navigate("/events/SpiritualEvent")
            }
            className={`w-[94vw] sm:w-auto  pl-3 py-1.5 pr-16 border border-primary rounded transition-all cursor-pointer ${
              category === "Spiritual Event"
                ? "bg-orange-500 text-blue-700 "
                : ""
            }`}
          >
            Spiritual Event
          </p>

          <p
            onClick={() =>
              category === "Sports Event"
                ? navigate("/events")
                : navigate("/events/Sports Event")
            }
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-primary rounded transition-all cursor-pointer ${
              category === "Sports Event" ? " bg-primary text-blue-600" : ""
            }`}
          >
            Sports Event
          </p>

          <p
            onClick={() =>
              category === "Cultural Event"
                ? navigate("/events")
                : navigate("/events/Cultural Event")
            }
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-primary rounded transition-all cursor-pointer ${
              category === "Cultural Event" ? " bg-primary text-blue-600" : ""
            }`}
          >
            Cultural Event
          </p>

          <p
            onClick={() =>
              category === "Literary Event"
                ? navigate("/eventss")
                : navigate("/events/Literary Event")
            }
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-primary rounded transition-all cursor-pointer ${
              category === "Literary Events" ? " bg-primary text-blue-600" : ""
            }`}
          >
            Literary Event
          </p>

          <p
            onClick={() =>
              category === "Amusement Park"
                ? navigate("/events")
                : navigate("/event/Amusement Park")
            }
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-primary rounded transition-all cursor-pointer ${
              category === "Amusement Park" ? " bg-primary text-blue-600" : ""
            }`}
          >
            Amusement Park
          </p>

          <p
            onClick={() =>
              category === "Music Event"
                ? navigate("/events")
                : navigate("/events/Music Event")
            }
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-primary rounded transition-all cursor-pointer ${
              category === "Music Event" ? " bg-primary text-blue-600" : ""
            }`}
          >
            Music Event
          </p>
        </div>

        <div className="w-full grid grid-cols-5 gap-6 gap-y-6 ">
          {/* problem */}
          {filterEvent.map((item, index) => (
            <div
              onClick={() => {
                navigate(`/event/${item._id}`);
                window.scrollTo(0, 0);
              }}
              className="border border-orange-600 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500"
              key={index}
            >
              <img className="bg-orange-400" src={item.image} alt="" />
              <div className="p-4">
                <p className="text-blue-700 text-lg font-medium ">
                  {item.name}
                </p>
                <p className="text-primary text-sm">{item.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;
