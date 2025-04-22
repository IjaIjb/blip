import React from "react";
import Navbar from "../../component/Navbar";
import HeroSection from "./Hero";
import ConsistentSuccessInExecution from "./ConsistenceSuccess";
import ProgrammesCultureSlider from "./OurProgrammeCulture";
import Footer from "../../component/Footer";
import ExceptionalPeopleSection from "./ExceptionalExecution";

const Page = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <ConsistentSuccessInExecution />
      <ProgrammesCultureSlider />
      <ExceptionalPeopleSection />
      <Footer />
    </div>
  );
};

export default Page;
