import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "Work", href: "#projects" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "More", href: "#certifications" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState("Home");

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-center transition-all duration-300 ${
        scrolled ? "py-4" : "py-6"
      }`}
    >
      <nav className="hidden md:block">
        <ul className="flex items-center gap-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md backdrop-saturate-150 px-1.5 py-1 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]">
          {navItems.map((item) => (
            <li key={item.name} className="relative">
              <a
                href={item.href}
                className={`inline-block px-4 py-1.5 text-sm font-light transition-all duration-300 rounded-full relative overflow-hidden ${
                  activeItem === item.name
                    ? "text-white"
                    : "text-white/70 hover:text-white/85"
                }`}
                onClick={() => setActiveItem(item.name)}
              >
                <span className="relative z-10">{item.name}</span>
                {activeItem === item.name && (
                  <motion.div
                    layoutId="activeBackground"
                    className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-purple-500/30 to-pink-500/30 backdrop-blur-sm"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  >
                    <div className="absolute -top-[9px] left-1/2 h-1 w-8 -translate-x-1/2 rounded-t-full bg-gradient-to-r from-purple-500 to-pink-500">
                      <div className="absolute -top-2 -left-2 h-6 w-12 rounded-full bg-purple-500/20 blur-md"></div>
                      <div className="absolute -top-1 h-6 w-8 rounded-full bg-pink-500/20 blur-md"></div>
                      <div className="absolute top-0 left-2 h-4 w-4 rounded-full bg-white/20 blur-sm"></div>
                    </div>
                  </motion.div>
                )}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Menu Button */}
      <div className="fixed top-4 right-4 md:hidden z-50">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
          className="text-white relative z-50 bg-white/10 backdrop-blur-md backdrop-saturate-150 border border-white/20 rounded-full hover:bg-white/20"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            className="fixed top-0 right-0 bottom-0 w-[280px] bg-white/5 backdrop-blur-md backdrop-saturate-150 border-l border-white/10 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] z-40 md:hidden"
          >
            <div className="pt-20 px-6">
              <ul className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className={`relative block py-2 px-4 rounded-lg transition-all duration-300 ${
                        activeItem === item.name
                          ? "text-white bg-white/10 backdrop-blur-sm"
                          : "text-white/70 hover:text-white hover:bg-white/5"
                      }`}
                      onClick={() => {
                        setIsOpen(false);
                        setActiveItem(item.name);
                      }}
                    >
                      {item.name}
                      {activeItem === item.name && (
                        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full" />
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-30 md:hidden"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>
    </header>
  );
}