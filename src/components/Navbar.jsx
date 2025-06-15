import React, { useState } from "react";
import hackerImage from "../assets/png.png";
import { Menu, X } from "lucide-react"; // You can install lucide-react or use Heroicons

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
          <a href="#about" className="hover:text-indigo-400">About</a>
          <a href="#projects" className="hover:text-indigo-400">Projects</a>
          <a href="#contact" className="hover:text-indigo-400">Contact</a>
        </div>

        {/* Mobile Toggle Button */}
        <div className="md:hidden text-white">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-gray-950 text-white p-4 space-y-4">
          <a href="#about" className="block hover:text-indigo-400" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#projects" className="block hover:text-indigo-400" onClick={() => setMenuOpen(false)}>Projects</a>
          <a href="#contact" className="block hover:text-indigo-400" onClick={() => setMenuOpen(false)}>Contact</a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
