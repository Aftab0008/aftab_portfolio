import React, { useState } from "react";
import hackerImage from "../assets/png.png";
import { Menu, X } from "lucide-react"; // You can install lucide-react or use Heroicons
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="p-4 bg-gradient-to-r from-gray-950 to-purple-600 shadow-md fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
     {/* Logo */}
<div className="flex items-center space-x-2">
  <img
    src="/pnf.png"
    alt="Special Force Logo"
    className="h-12 w-auto"
  />
</div>



        {/* Desktop Menu */}
       <div className="hidden md:flex space-x-6 text-white font-semibold">
  <a
    href="#about"
    className="relative px-4 py-1 rounded-md hover:bg-white/10 hover:backdrop-blur-md transition-all duration-300"
  >
    About
  </a>
  <a
    href="#projects"
    className="relative px-4 py-1 rounded-md hover:bg-white/10 hover:backdrop-blur-md transition-all duration-300"
  >
    Projects
  </a>
  <a
    href="#contact"
    className="relative px-4 py-1 rounded-md hover:bg-white/10 hover:backdrop-blur-md transition-all duration-300"
  >
    Contact
  </a>
</div>

        {/* Mobile Toggle Button */}
        <div className="md:hidden text-white">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

 <AnimatePresence>
  {menuOpen && (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
      className="md:hidden bg-white/10 backdrop-blur-md text-white p-4 space-y-4 rounded-xl shadow-lg mx-4 mt-2"
    >
      <a
        href="#about"
        onClick={() => setMenuOpen(false)}
        className="block px-3 py-2 rounded-md transition-all duration-300 hover:bg-purple-400/10 hover:backdrop-blur-sm hover:text-indigo-400"
      >
        About
      </a>
      <a
        href="#projects"
        onClick={() => setMenuOpen(false)}
        className="block px-3 py-2 rounded-md transition-all duration-300 hover:bg-purple-400/10 hover:backdrop-blur-sm hover:text-indigo-400"
      >
        Projects
      </a>
      <a
        href="#contact"
        onClick={() => setMenuOpen(false)}
        className="block px-3 py-2 rounded-md transition-all duration-300 hover:bg-purple-400/10 hover:backdrop-blur-sm hover:text-indigo-400"
      >
        Contact
      </a>
    </motion.div>
  )}
</AnimatePresence>

    </nav>
  );
}

export default Navbar;
