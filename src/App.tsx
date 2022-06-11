import React, { useEffect, useMemo, useRef, useState } from "react";
import Navbar from "./Components/Navbar";
import AboutSection from "./Sections/AboutSection";
import ContactSection from "./Sections/ContactSection";
import Footer from "./Sections/Footer";
import HeaderSection from "./Sections/HeaderSection";
import ProjectsSection from "./Sections/ProjectsSection";
import SkillsSection from "./Sections/AwardsSection";
import useIntersection from "./Utility/useIntersection";

function App() {
  const [activeLink, setActiveLink] = useState("home");

  const updateActiveLink = (link: string) => {
    setActiveLink(link);
  };

  const refHome = useRef(null);
  const refAbout = useRef(null);
  const refProjects = useRef(null);
  const refSkills = useRef(null);
  const refExp = useRef(null);
  const refContact = useRef(null);

  /*
  const isInViewportHome = useIntersection(refHome, "0px");
  const isInViewportAbout = useIntersection(refAbout, "0px");
  const isInViewportProjects = useIntersection(refProjects, "0px");
  const isInViewportSkills = useIntersection(refSkills, "0px");
  const isInViewportExp = useIntersection(refExp, "0px");
  const isInViewportContact = useIntersection(refContact, "0px");

  useEffect(() => {
    if (isInViewportHome) {
      setActiveLink("home");
    }
  }, [isInViewportHome]);

  useEffect(() => {
    if (isInViewportAbout) {
      setActiveLink("about");
    }
  }, [isInViewportAbout]);

  useEffect(() => {
    if (isInViewportProjects) {
      setActiveLink("projects");
    }
  }, [isInViewportProjects]);

  useEffect(() => {
    if (isInViewportSkills) {
      setActiveLink("skills");
    }
  }, [isInViewportSkills]);

  useEffect(() => {
    if (isInViewportExp) {
      setActiveLink("work");
    }
  }, [isInViewportExp]);

  useEffect(() => {
    if (isInViewportContact) {
      setActiveLink("contact");
    }
  }, [isInViewportContact]);

  */
  //swiper JS
  return (
    <div className="app">
      <Navbar active={activeLink} update={updateActiveLink} />
      <div ref={refHome}>
        <HeaderSection />
      </div>
      <div ref={refAbout}>
        <AboutSection />
      </div>
      <div ref={refProjects}>
        <ProjectsSection />
      </div>
      <div ref={refProjects}>
        <SkillsSection />
      </div>
      <div ref={refContact}>
        <ContactSection />
      </div>
      <Footer />
    </div>
  );
}

export default App;
