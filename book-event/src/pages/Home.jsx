/* eslint-disable no-unused-vars */
import React from "react";
/* eslint-enable no-unused-vars */
import Header from "../components/Header";
import CategoryMenu from "../components/categoryMenu";
import TrendingEvents from "../components/TrendingEvents";
import Banner from "../components/Banner";

const Home = () => {
  return (
    <div>
      <Header />
      <CategoryMenu />
      <TrendingEvents />
      <Banner />
    </div>
  );
};

export default Home;
