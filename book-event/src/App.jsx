/* eslint-disable no-unused-vars */
import React from "react";
/* eslint-enable no-unused-vars */
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Events from "./pages/Events";
import Login from "./pages/Login";
import About from "./pages/About";
import Contact from "./pages/Contact";
import MyProfile from "./pages/MyProfile";
import MyEvents from "./pages/MyEvent/MyEvents";
import Event from "./pages/Event";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <div className=" mx-4  sm:mx-[10%]">
      <Navbar />
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/events:category" element={<Events />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/my-profile" element={<MyProfile />} />
        <Route path="/my-events" element={<MyEvents />} />
        <Route path="/event/:eventId" element={<Event />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
