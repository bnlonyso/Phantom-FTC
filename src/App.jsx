import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Team from "./components/Team";
import Projects from "./components/Projects";
import Tutorials from "./components/Tutorials";
import LearningHub from "./components/LearningHub";
import ComicReader from "./components/ComicReader";
import Gallery from "./components/Gallery";
import Community from "./components/Community";
import Footer from "./components/Footer";

function App() {
  // Intersection Observer hook to trigger CSS scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      {
        threshold: 0.05, // trigger when 5% of element is visible
        rootMargin: "0px 0px -40px 0px" // bottom offset to delay entry slightly
      }
    );

    // Scan the DOM for reveal-on-scroll elements
    const elements = document.querySelectorAll(".reveal");
    elements.forEach((el) => observer.observe(el));

    // Cleanup observer on unmount
    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Team />
      <Projects />
      <Tutorials />
      <LearningHub />
      <ComicReader />
      <Gallery />
      <Community />
      <Footer />
    </>
  );
}

export default App;
