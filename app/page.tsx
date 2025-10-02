import About from "@/components/about";
import Departments from "@/components/departments";
import Education from "@/components/education";
import Events from "@/components/events";
import Footer from "@/components/footer";
import Graduates from "@/components/graduates";
import Hero from "@/components/hero";
import Honorary from "@/components/honorary";
import InteractiveServices from "@/components/interactive-services";
import News from "@/components/news";
import ScientificCenters from "@/components/scientific-centers";
import StudentLife from "@/components/student-life";
import Studies from "@/components/studies";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <About />
      <News />
      <Events />
      <InteractiveServices />
      <Departments />
      <Education />
      <Honorary />
      <StudentLife />
      <Studies />
      <ScientificCenters />
      <Graduates />
      <Footer />
    </div>
  );
};

export default HomePage;
