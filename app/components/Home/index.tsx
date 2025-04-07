import React from "react";

// Component imports
import Header from "../Header";
import Footer from "../Footer";
import Hero from "../Hero";
import OurServices from "../OurServices";
import ProjectWorkFlow from "../ProjectWorkFlow";

const Home = () => {
  return (
    <div className="bg-[#FEF4FF] min-w-screen w-screen mx-auto min-h-screen px-2 sm:px-[30px]">
      <Header />
      {/* <Hero /> */}

      <OurServices />

      <ProjectWorkFlow />

      <Footer />
    </div>
  );
};

export default Home;
