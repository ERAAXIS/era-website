import React from "react";
import { Helmet } from "react-helmet";
import Header from "../../components/Header";
import HeroSection from "./HeroSection";
import OurServices from "./OurServices";
import BottomSection from "./BottomSection";

const Softwares = () => {
  return (
    <main className="bg-black text-white">
      <Helmet>
        <title>Software Solutions</title>
      </Helmet>
      <Header />
      <HeroSection />
      <OurServices />
      <BottomSection />
    </main>
  );
};

export default Softwares;
