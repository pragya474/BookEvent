/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from "react";
/* eslint-enable no-unused-vars */
import { useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { assets } from "../assets/assets";
import RelatedEvents from "../components/RelatedEvents";
import { useDispatch } from "react-redux";
import { addItem } from "../pages/MyEvent/MyEventSlice";
// import { toast } from "react-toastify";

const Event = () => {
  const dispatch = useDispatch();
  const { eventId } = useParams();
  const { events } = useContext(AppContext);
  const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  const [eventInfo, setEventInfo] = useState(null);
  const [eventSlots, setEventSlots] = useState([]);
  const [slotIndex, setSlotIndex] = useState(0);
  const [slotTime, setSlotTime] = useState("");

  const fetchEventInfo = async () => {
    const eventInfo = events.find((event) => event._id === eventId);
    setEventInfo(eventInfo);
  };

  const getAvailableSlots = async () => {
    setEventSlots([]);

    let today = new Date();

    for (let i = 0; i < 7; i++) {
      let currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i);

      //setting end time
      let endTime = new Date();
      endTime.setDate(today.getDate() + i);
      endTime.setHours(21, 0, 0, 0);

      //setting hours
      if (today.getDate() === currentDate.getDate()) {
        currentDate.setHours(
          currentDate.getHours() > 9 ? currentDate.getHours() + 1 : 9
        );
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0);
      } else {
        currentDate.setHours(9);
        currentDate.setMinutes(0);
      }

      let timeSlots = [];

      while (currentDate < endTime) {
        let formattedTime = currentDate.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        });

        //add slot
        timeSlots.push({
          datetime: new Date(currentDate),
          time: formattedTime,
        });
        currentDate.setMinutes(currentDate.getMinutes() + 30);
      }
      setEventSlots((prev) => [...prev, timeSlots]);
    }
  };
  // const bookAppointment = async () => {
  //   if (slotIndex === null || slotTime === null) {
  //     toast.error("Please select both time and date", { duration: 3000 });
  //   }
  //   const date = eventSlots[slotIndex][0].datetime;

  //   let day = date.getDate();
  //   let month = date.getMonth() + 1;
  //   let year = date.getFullYear();

  //   const slotDate = `${day}_${month}_${year}`;
  //   console.log(slotDate, slotTime);

  //   toast.success("Event booked successfully!", { duration: 3000 });
  // };

  function bookAppointment() {
    const newEvent = {
      _id: eventId,
      name: eventInfo.name,
      category: eventInfo.category,
      date: eventSlots[slotIndex][0].datetime,
      timings: slotTime,
    };
    dispatch(addItem(newEvent));
  }

  useEffect(
    () => {
      if (events.length > 0) {
        fetchEventInfo();
      }
    }, // eslint-disable-next-line react-hooks/exhaustive-deps
    [events, eventId]
  );

  useEffect(() => {
    if (eventInfo) {
      getAvailableSlots();
    }
  }, [eventInfo]);

  return eventInfo ? (
    <div>
      {/* ------- event details --------- */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div>
          <img
            className="bg-primary w-full sm:max-w-72 rounded-lg justify-center align-middle"
            src={eventInfo.image}
          />
        </div>

        {/* --------event:info:name,date,timimgs------ */}
        <div className="flex-1 border border-primary rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0">
          <p className="flex items-center gap-2 text-2xl font-medium text-blue-800">
            {eventInfo.name}
          </p>

          <div className="flex items-center gap-2 text-sm mt-1 text-blue-800">
            <p>{eventInfo.category}</p>
          </div>
          {/* ---------event-about------ */}
          <div>
            <p className="flex items-center gap-1 text-sm font-medium text-blue-950 mt-3">
              About <img className="w-4" src={assets.info_icon} />
            </p>
            <p className="text-sm text-gray-500 max-w-[900px] mt-1">
              {eventInfo.about}
            </p>
          </div>
          <p className="text-blue-950  mt-4 font-extrabold">
            Entry fees:
            <span className="text-blue-700 font-extrabold">
              {eventInfo.entry}
            </span>
          </p>
        </div>
      </div>
      {/* --------booking slots--------- */}
      <div className="sm:ml-72 sm:pl-4 mt-4 font-medium text-blue-800">
        <p>Booking Slots</p>
        <div className="flex gap-3 items-center w-full overflow-x-scroll mt-4">
          {eventSlots.length &&
            eventSlots.map((item, index) => (
              <div
                onClick={() => setSlotIndex(index)}
                key={index}
                className={`text-center py-6 min-w-16 rounded-full cursor-pointer gridTemplateColumns:auto ${
                  slotIndex === index
                    ? "bg-primary text-blue-700"
                    : "border border-blue-700"
                }`}
              >
                <p>{item[0] && daysOfWeek[item[0].datetime.getDay()]}</p>
                <p>{item[0] && item[0].datetime.getDate()}</p>
              </div>
            ))}
        </div>

        <div className="flex items-center gap-3 w-full overflow-x-scroll mt-4">
          {eventSlots.length &&
            eventSlots[slotIndex].map((item, index) => (
              <p
                onClick={() => setSlotTime(item.time)}
                key={index}
                className={`text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer ${
                  item.time === slotTime
                    ? "bg-primary text-blue-600"
                    : "text-blue-600 border border-blue-600"
                }`}
              >
                {item.time.toLowerCase()}
              </p>
            ))}
        </div>
        <button
          onClick={bookAppointment}
          className="bg-primary text-blue-900 text-sm font-medium px-14 py-3 rounded-full my-6"
        >
          Book an appointment
        </button>
      </div>
      {/* listing related events */}
      <RelatedEvents category={eventInfo.category} eventId={eventId} />
    </div>
  ) : null;
};

export default Event;
