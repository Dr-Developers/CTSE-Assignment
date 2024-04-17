import React from "react";
import NavigationBar from "../../components/navigation_bar/navigation_bar";
import Carousel from "../../components/carousel/carousel";
import Services from "../../components/service/service";

const Home_Page = () => {
  document.title = "Home";
  return (
    <>
      <NavigationBar />
      <Carousel />
      <Services />
    </>
  );
};

export default Home_Page;
