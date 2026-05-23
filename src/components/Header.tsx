import { useState, useEffect } from "react";
import { Menu, X, Coffee, MapPin, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface HeaderProps {
  onScrollTo: (sectionId: string) => void;
  activeSection: string;
}

export default function Header({ onScrollTo, activeSection }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { id: "hero", label: "Home" },
    { id: "purpose", label: "Who We Are" },
    { id: "expect", label: "What To Expect" },
    { id: "come-and-see", label: "Our Invitation" },
    { id: "gatherings", label: "Gatherings" },
    { id: "gospel", label: "Good News" },
    { id: "contact", label: "Connect" },
  ];

  return (
    <header
      id="site-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-warm-cream/90 backdrop-blur-md py-3 shadow-soft border-b border-warm-canvas/50"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Call Sign */}
          <button
            id="nav-logo-btn"
            onClick={() => onScrollTo("hero")}
            className="flex items-center gap-2 text-left group cursor-pointer focus:outline-none"
          >
            <div className="w-10 h-10 rounded-xl bg-clay-red flex items-center justify-center text-warm-cream font-display font-bold text-lg shadow-soft group-hover:bg-clay-dark transition-colors">
              🕊️
            </div>
            <div>
              <span className="font-display font-extrabold text-lg sm:text-xl tracking-tight text-sage-green block leading-none">
                Acts 2:42
              </span>
              <span className="text-[10px] font-mono tracking-wider text-warm-gray uppercase block mt-0.5">
                Gwinnett House Churches
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  id={`nav-link-${link.id}`}
                  key={link.id}
                  onClick={() => onScrollTo(link.id)}
                  className={`px-3 py-2 rounded-lg font-display text-sm font-medium transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "text-clay-red bg-clay-light/10 font-semibold"
                      : "text-warm-gray hover:text-clay-red hover:bg-warm-canvas/45"
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Contact Short Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              id="header-coffee-btn"
              onClick={() => onScrollTo("contact")}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg border border-clay-light/30 bg-warm-cream text-[13px] font-medium font-display text-clay-red hover:bg-clay-red/5 transition-all cursor-pointer shadow-soft"
            >
              <Coffee className="w-4 h-4" />
              <span>Meet for Coffee</span>
            </button>
            <button
              id="header-visit-btn"
              onClick={() => onScrollTo("gatherings")}
              className="flex items-center gap-1.5 px-4.5 py-2 rounded-lg bg-clay-red text-[13px] font-semibold font-display text-warm-cream hover:bg-clay-dark transition-all cursor-pointer shadow-soft hover:shadow-elegant"
            >
              <MapPin className="w-3.5 h-3.5" />
              <span>Visit Us</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              id="header-visit-mobile-btn"
              onClick={() => onScrollTo("gatherings")}
              className="xs:flex hidden items-center gap-1 px-3 py-1.5 rounded-lg bg-clay-red text-xs font-semibold font-display text-warm-cream hover:bg-clay-dark transition-all cursor-pointer"
            >
              <span>Visit</span>
            </button>
            <button
              id="mobile-menu-toggle"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-sage-green hover:bg-warm-canvas/50 focus:outline-none cursor-pointer"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-nav-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-warm-cream border-b border-warm-canvas shadow-elegant"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <button
                    id={`mobile-nav-link-${link.id}`}
                    key={link.id}
                    onClick={() => {
                      setIsOpen(false);
                      onScrollTo(link.id);
                    }}
                    className={`block w-full text-left px-4 py-3 rounded-lg font-display text-base font-medium transition-all ${
                      isActive
                        ? "text-clay-red bg-clay-light/10 font-semibold border-l-4 border-clay-red"
                        : "text-warm-gray hover:text-clay-red hover:bg-warm-canvas/50"
                    }`}
                  >
                    {link.label}
                  </button>
                );
              })}
              <div className="pt-4 flex flex-col sm:flex-row gap-3">
                <button
                  id="mobile-coffee-btn"
                  onClick={() => {
                    setIsOpen(false);
                    onScrollTo("contact");
                  }}
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl border border-clay-light/30 bg-warm-cream text-clay-red font-medium font-display shadow-soft"
                >
                  <Coffee className="w-4 h-4" />
                  <span>Meet for Coffee First</span>
                </button>
                <button
                  id="mobile-visit-btn"
                  onClick={() => {
                    setIsOpen(false);
                    onScrollTo("gatherings");
                  }}
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-clay-red text-warm-cream font-semibold font-display shadow-soft"
                >
                  <MapPin className="w-4 h-4" />
                  <span>Find a Couch & Dinner Table</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
