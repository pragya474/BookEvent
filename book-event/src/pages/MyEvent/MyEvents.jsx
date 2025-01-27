/* eslint-disable no-unused-vars */
import { useSelector } from "react-redux";
import React, { useContext } from "react";
/* eslint-enable no-unused-vars */
// import { AppContext } from "../../context/AppContext";
// import { useSelector } from "react-redux";
import { getMyEvent } from "./MyEventSlice";
function MyEvents() {
  const events = useSelector(getMyEvent);
  return (
    <div>
      <p>My Bookings</p>
      <div>
        {events.map((item, index) => (
          <div
            className="grid grid-cols-[1fr_2fr] gap-4 sm:flex sm:gap-6 py-2 border-b "
            key={index}
          >
            <div>
              <img className="w-32 bg-indigo-50" src={item.image} />
            </div>
            <div className="flex-1 text-sm text-blue-700">
              <p className="text-neutral-800 font-semibold">{item.name}</p>
              <p>{item.category}</p>

              <p className="text-xs mt-1">
                <span className="text-sm text-primary font-medium">
                  Date & Time:
                </span>
                {item.date} | {item.timings}
              </p>
            </div>
            <div></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyEvents;
