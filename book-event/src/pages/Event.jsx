/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from "react";
/* eslint-enable no-unused-vars */

import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AppContext } from "../context/AppContext";
import { addItem } from "../pages/MyEvent/MyEventSlice";
import { assets } from "../assets/assets";
import RelatedEvents from "../components/RelatedEvents";

const Event = () => {
  const dispatch = useDispatch();
  const { eventId } = useParams();
  const { events } = useContext(AppContext);
  const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  const [eventInfo, setEventInfo] = useState(null);
  const [eventSlots, setEventSlots] = useState([]);
  const [slotIndex, setSlotIndex] = useState(0);
  const [slotTime, setSlotTime] = useState("");

  useEffect(() => {
    if (events.length > 0) {
      const foundEvent = events.find((event) => event._id === eventId);
      if (foundEvent) {
        setEventInfo(foundEvent);
      }
    }
  }, [events, eventId]);

  useEffect(() => {
    if (eventInfo) {
      generateAvailableSlots();
    }
  }, [eventInfo]);

  const generateAvailableSlots = () => {
    let today = new Date();
    let newSlots = [];

    for (let i = 0; i < 7; i++) {
      let currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i);
      currentDate.setHours(i === 0 ? Math.max(9, currentDate.getHours() + 1) : 9, 0, 0, 0);

      let endTime = new Date(currentDate);
      endTime.setHours(21, 0, 0, 0);

      let timeSlots = [];
      while (currentDate < endTime) {
        timeSlots.push({
          datetime: new Date(currentDate),
          time: currentDate.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        });
        currentDate.setMinutes(currentDate.getMinutes() + 30);
      }
      newSlots.push(timeSlots);
    }
    setEventSlots(newSlots);
  };

  const bookAppointment = () => {
    if (!eventSlots.length) {
      alert("No available slots. Please try again later.");
      return;
    }

    if (slotIndex < 0 || !eventSlots[slotIndex] || eventSlots[slotIndex].length === 0) {
      alert("Please select a valid date.");
      return;
    }

    if (!slotTime) {
      alert("Please select a time slot.");
      return;
    }

    const selectedDate = eventSlots[slotIndex][0]?.datetime;
    if (!selectedDate) {
      alert("Invalid slot selection. Please try again.");
      return;
    }

    const newEvent = {
      _id: eventId,
      name: eventInfo.name,
      category: eventInfo.category,
      date: selectedDate.toLocaleDateString(),
      timings: slotTime,
      image: eventInfo.image, // ✅ Included image in dispatched event
    };

    console.log("🚀 Dispatching Event:", newEvent); // ✅ Debugging log

    dispatch(addItem(newEvent));
    alert("Event booked successfully!");
  };

  if (!eventInfo) return <p className="text-center text-red-500 mt-10">Event not found.</p>;

  return (
    <div className="container mx-auto p-5">
      {/* Event Details Section */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div>
          <img className="bg-primary w-full sm:max-w-72 rounded-lg" src={eventInfo.image} alt={eventInfo.name} />
        </div>

        {/* Event Info */}
        <div className="flex-1 border border-primary rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0">
          <h2 className="text-2xl font-semibold text-blue-800">{eventInfo.name}</h2>

          <p className="text-sm text-blue-800 mt-1">{eventInfo.category}</p>

          {/* Event About Section */}
          <div className="mt-3">
            <p className="text-sm font-medium text-blue-950 flex items-center gap-1">
              About <img className="w-4" src={assets.info_icon} alt="info" />
            </p>
            <p className="text-sm text-gray-500 max-w-[900px] mt-1">{eventInfo.about}</p>
          </div>

          <p className="text-blue-950 mt-4 font-bold">
            Entry fees: <span className="text-blue-700">{eventInfo.entry}</span>
          </p>
        </div>
      </div>

      {/* Booking Slots Section */}
      <div className="sm:ml-72 sm:pl-4 mt-6 font-medium text-blue-800">
        <h3 className="text-lg">Booking Slots</h3>

        {/* Date Selection */}
        <div className="flex gap-3 items-center w-full overflow-x-auto mt-4">
          {eventSlots.map((item, index) => (
            <div
              key={index}
              onClick={() => setSlotIndex(index)}
              className={`text-center py-4 px-4 min-w-16 rounded-full cursor-pointer ${
                slotIndex === index ? "bg-orange-500 text-white" : "border border-blue-700"
              }`}
            >
              <p className="font-bold">{item[0]?.datetime && daysOfWeek[item[0].datetime.getDay()]}</p>
              <p>{item[0]?.datetime && item[0].datetime.getDate()}</p>
            </div>
          ))}
        </div>

        {/* Time Slot Selection */}
        <div className="flex gap-3 items-center w-full overflow-x-auto mt-4">
          {eventSlots.length > 0 &&
            eventSlots[slotIndex]?.map((item, index) => (
              <p
                key={index}
                onClick={() => setSlotTime(item.time)}
                className={`text-sm font-light px-5 py-2 rounded-full cursor-pointer ${
                  item.time === slotTime ? "bg-orange-500 text-white" : "border border-blue-600 text-blue-600"
                }`}
              >
                {item.time}
              </p>
            ))}
        </div>

        <button
          onClick={bookAppointment}
          className="bg-orange-500 text-white text-sm font-medium px-14 py-3 rounded-full mt-6"
        >
          Book an appointment
        </button>
      </div>

      {/* Related Events Section */}
      <RelatedEvents category={eventInfo.category} eventId={eventId} />
    </div>
  );
};

export default Event;

