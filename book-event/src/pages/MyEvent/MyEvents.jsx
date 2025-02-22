import React from "react";
import { useSelector } from "react-redux";
import { getMyEvent } from "./MyEventSlice";

function MyEvents() {
  const events = useSelector(getMyEvent) || []; // ✅ Prevents undefined error

  console.log("Redux State - My Events:", events); // ✅ Debugging output

  return (
    <div className="container mx-auto p-5">
      <h2 className="text-orange-600 text-xl font-semibold">My Bookings</h2>

      {events.length > 0 ? (
        <div>
          {events.map((item) => (
            <div key={item._id} className="grid grid-cols-[1fr_2fr] gap-4 sm:flex sm:gap-6 py-2 border-b">
              {/* Event Image */}
              <div>
                <img className="w-32 bg-indigo-50" src={item.image} alt={item.name} />
              </div>

              {/* Event Details */}
              <div className="flex-1 text-sm text-blue-700">
                <p className="text-neutral-800 font-semibold">{item.name}</p>
                <p>{item.category}</p>
                <p className="text-xs mt-1">
                  <span className="text-sm text-primary font-medium">Date & Time: </span>
                  {item.date} | {item.timings}
                </p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500 text-lg text-center mt-4">No bookings found.</p>
      )}
    </div>
  );
}

export default MyEvents;
