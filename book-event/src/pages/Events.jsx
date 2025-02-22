/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
/* eslint-enable no-unused-vars */

import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const categoryList = [
  "Spiritual Event",
  "Sports Event",
  "Cultural Event",
  "Literary Event",
  "Amusement Park",
  "Music Event",
];

const Events = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const { events } = useContext(AppContext);

  // Filter events dynamically without extra state
  const filteredEvents = category
    ? events.filter((e) => e.category === category)
    : events;

  // Handle category selection and navigation
  const handleCategoryClick = (selectedCategory) => {
    navigate(
      category === selectedCategory
        ? "/events"
        : `/events/${encodeURIComponent(selectedCategory)}`
    );
  };

  return (
    <div className="container mx-auto p-5">
      <h2 className="text-orange-600 text-xl font-semibold">
        Browse through the events
      </h2>

      <div className="flex flex-col sm:flex-row items-start gap-8 mt-5">
        {/* Mobile Filter Button */}
        <button
          onClick={() => navigate("/events")}
          className={`py-2 px-4 border rounded text-sm transition-all sm:hidden ${
            category ? "bg-orange-500 text-white" : "bg-white text-orange-500"
          }`}
        >
          {category ? "Clear Filters" : "Show Filters"}
        </button>

        {/* Filter List */}
        <div
          className={`flex-col gap-4 text-sm text-blue-600 ${
            category ? "flex" : "hidden sm:flex"
          }`}
        >
          {categoryList.map((cat) => (
            <p
              key={cat}
              onClick={() => handleCategoryClick(cat)}
              className={`w-[94vw] sm:w-auto pl-4 py-2 pr-16 border border-primary rounded cursor-pointer transition-all ${
                category === cat
                  ? "bg-orange-500 text-white font-semibold"
                  : "hover:bg-orange-100"
              }`}
            >
              {cat}
            </p>
          ))}
        </div>

        {/* Event Grid */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {filteredEvents.length > 0 ? (
            filteredEvents.map((item) => (
              <div
                key={item._id}
                onClick={() => {
                  navigate(`/event/${item._id}`);
                  window.scrollTo(0, 0);
                }}
                className="border border-orange-600 rounded-xl overflow-hidden cursor-pointer hover:shadow-lg transition-all duration-300"
              >
                <img
                  className="bg-orange-400 w-full h-40 object-cover"
                  src={item.image}
                  alt={item.name}
                />
                <div className="p-4">
                  <h3 className="text-blue-700 text-lg font-semibold">
                    {item.name}
                  </h3>
                  <p className="text-primary text-sm">{item.category}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-red-500 text-lg font-medium col-span-full text-center">
              No events found for this category.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Events;

