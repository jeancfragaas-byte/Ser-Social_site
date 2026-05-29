import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import StudyToolkit from "./components/StudyToolkit";
import Testimonials from "./components/Testimonials";
import ContactFooter from "./components/ContactFooter";

export default function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 85; // accounts for header height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div className="relative min-h-screen bg-brand-cream text-brand-charcoal selection:bg-brand-gold/30 antialiased overflow-x-hidden">
      {/* Header */}
      <Header onScrollTo={handleScrollTo} />

      {/* Main Content Sections */}
      <main className="relative z-10">
        {/* Hero Section */}
        <Hero 
          onStartPractice={() => handleScrollTo("toolkit")} 
          onExploreServices={() => handleScrollTo("services")} 
        />

        {/* About Section */}
        <About />

        {/* Services Section */}
        <Services />

        {/* Target Audience & Differentiators Section */}
        <WhyChooseUs />

        {/* Interactive Toolkit (Quiz & Study Planner) */}
        <StudyToolkit />

        {/* Testimonials Section */}
        <Testimonials />

        {/* Contact and Footer Information */}
        <ContactFooter />
      </main>

      {/* Elegant Scroll to Top Floating Button */}
      {showScrollTop && (
        <button
          onClick={handleScrollTop}
          className="fixed bottom-6 right-6 z-40 p-3 bg-brand-orange text-white hover:bg-brand-orange/90 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.05] active:scale-[0.95] cursor-pointer"
          aria-label="Voltar para o topo"
        >
          <ArrowUp size={20} />
        </button>
      )}
    </div>
  );
}
