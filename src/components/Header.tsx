import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, BookOpen, MessageSquare, Instagram, Youtube, Compass } from "lucide-react";
import Logo from "./Logo";

interface HeaderProps {
  onScrollTo: (sectionId: string) => void;
}

export default function Header({ onScrollTo }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Início", id: "hero" },
    { name: "Sobre", id: "about" },
    { name: "Serviços", id: "services" },
    { name: "Diferenciais", id: "differentials" },
    { name: "Prática & Simulados", id: "toolkit" },
    { name: "Depoimentos", id: "testimonials" },
  ];

  const handleNavClick = (id: string) => {
    onScrollTo(id);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-brand-cream/90 backdrop-blur-md shadow-sm border-b border-brand-cream-dark/50 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Brand */}
          <div className="cursor-pointer" onClick={() => handleNavClick("hero")} id="header-logo-container">
            <Logo size={42} showText={true} />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="text-sm font-medium text-brand-teal-light hover:text-brand-orange transition-colors duration-200 cursor-pointer relative py-1 group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-orange transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </nav>

          {/* Contact Actions (CTA) */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href="https://wa.me/5533984295746"
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2.5 bg-brand-teal text-white hover:bg-brand-teal-light rounded-xl text-sm font-semibold shadow-md shadow-brand-teal/10 hover:shadow-lg transition-all duration-300 hover:scale-[1.02] flex items-center gap-2"
            >
              <MessageSquare size={16} />
              Falar com Mentor
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-3">
            <a
              href="https://wa.me/5533984295746"
              target="_blank"
              rel="noreferrer"
              className="sm:hidden p-2.5 bg-brand-teal text-white rounded-xl shadow-md hover:scale-[1.02] transition-transform active:scale-[0.98]"
              title="Falar com Mentor no WhatsApp"
            >
              <MessageSquare size={16} />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 text-brand-teal bg-brand-cream-dark/30 hover:bg-brand-cream-dark/60 rounded-xl transition-colors"
              aria-label="Abrir Menu de Navegação"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="lg:hidden bg-brand-cream border-b border-brand-cream-dark/60"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className="block w-full text-left px-4 py-3 rounded-xl text-base font-semibold text-brand-teal hover:bg-brand-cream-dark/50 hover:text-brand-orange transition-all"
                >
                  {item.name}
                </button>
              ))}
              <div className="pt-4 px-4 border-t border-brand-cream-dark/50 flex flex-col gap-3">
                <a
                  href="https://wa.me/5533984295746"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-3.5 bg-brand-teal text-white rounded-xl text-center font-bold shadow-md flex items-center justify-center gap-2"
                >
                  <MessageSquare size={18} />
                  Falar no WhatsApp
                </a>
                <div className="flex justify-center gap-4 text-brand-teal-light pt-2">
                  <a
                    href="https://www.instagram.com/sersocial_estuda?igsh=MThkaXE2dGFsbDlocw%3D%3D&utm_source=qr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-brand-orange"
                  >
                    <Instagram size={20} />
                  </a>
                  <a
                    href="https://youtube.com/@paxissocial?si=B5OV_JBerponUFmz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-brand-orange"
                  >
                    <Youtube size={20} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
