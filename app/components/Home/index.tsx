import React from "react";

// Component imports
import Header from "../Header";
import Footer from "../Footer";
import Hero from "../Hero";
import OurServices from "../OurServices";

const Home = () => {
  return (
    <div className="bg-[#FEF4FF] max-w-screen mx-auto w-full min-h-screen">
      <Header />
      {/* <Hero /> */}

      <OurServices />
      <Footer />
    </div>
  );
};

export default Home;
