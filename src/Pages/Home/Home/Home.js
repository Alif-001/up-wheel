import React from "react";
import Follow from "../../Shared/Follow/Follow";
import Footer from "../../Shared/Footer/Footer";
import Navigation from "../../Shared/Navigation/Navigation";
import ReviewSlider from "../../Shared/ReviewSlider/ReviewSlider";
import Collection from "../Collection/Collection";
import Banner from "./Banner/Banner";
import Newsletter from "./Newsletter/Newsletter";
import Statics from "./Statics/Statics";

const Home = () => {
  return (
    <div>
      <Navigation />
      <Banner />
      <Collection />
      <Statics />
      <Newsletter />
      <ReviewSlider />
      <Follow />
      <Footer />
    </div>
  );
};

export default Home;
