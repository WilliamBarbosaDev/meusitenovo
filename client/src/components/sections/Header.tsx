import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@assets/menu_logo.png";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Início", href: "#hero" },
    { name: "Quem Sou", href: "#about" },
    { name: "Serviços", href: "#services" },
    { name: "Portfólio", href: "#portfolio" },
    { name: "Depoimentos", href: "#testimonials" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white/90 backdrop-blur-md border-b border-black/5 py-3" : "bg-white py-5 border-b border-transparent"
        }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <a href="#" className="z-50 relative block w-40 md:w-48">
          <img src={logo} alt="William B Designer" className="w-full h-auto object-contain" />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-600 hover:text-black transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href="#contact"
            className="bg-black text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-gray-800 transition-all hover:scale-105 active:scale-95"
          >
            Contato
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-black z-50 relative p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center space-y-8 md:hidden"
            >
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-medium text-gray-800"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="bg-black text-white px-8 py-3 rounded-full text-lg font-medium"
              >
                Contato
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
