import React from "react";
import Banner from "../Banner/Banner";
import MainContent from "../MainContent/MainContent/MainContent";
import Header from "../Shared/Header/Header";

const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      <MainContent />
    </div>
  );
};

export default Home;
