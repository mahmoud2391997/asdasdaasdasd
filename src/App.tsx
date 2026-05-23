import { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Purpose from "./components/Purpose";
import WhatToExpect from "./components/WhatToExpect";
import ComeAndSee from "./components/ComeAndSee";
import Gatherings from "./components/Gatherings";
import GospelSection from "./components/GospelSection";
import JoinStory from "./components/JoinStory";
import Footer from "./components/Footer";

export default function App() {
  const [activeSection, setActiveSection] = useState("hero");

  // Track scroll position to update active nav indicator
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "hero",
        "purpose",
        "expect",
        "come-and-see",
        "gatherings",
        "gospel",
        "contact"
      ];
      
      const scrollPosition = window.scrollY + 200; // Offset for header height

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll handler
  const handleScrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -80; // Header offset
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="min-h-screen flex flex-col antialiased selection:bg-clay-light/35 selection:text-clay-dark">
      {/* Dynamic Nav Header */}
      <Header onScrollTo={handleScrollToSection} activeSection={activeSection} />

      {/* Main Pages Flow */}
      <main className="flex-grow">
        <Hero onScrollTo={handleScrollToSection} />
        
        <Purpose onScrollTo={handleScrollToSection} />
        
        <WhatToExpect />
        
        <ComeAndSee />
        
        <Gatherings />
        
        <GospelSection />
        
        <JoinStory />
      </main>

      {/* Relational Footer */}
      <Footer onScrollTo={handleScrollToSection} />
    </div>
  );
}
