import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Skills from "../pages/Skills";
import Projects from "../pages/Projects";
import Certificates from "../pages/Certificates";

const tabs = [
  { name: "Skills", component: <Skills /> },
  { name: "Projects", component: <Projects /> },
  { name: "Certificates", component: <Certificates /> },
];

function TabsSection() {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  return (
    <section className="relative bg-gray-950 text-white py-20 px-4 overflow-hidden">
      {/* 🔮 Glowing Light Background */}
      <div className="absolute top-16 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-gradient-to-r from-purple-600 via-indigo-500 to-purple-600 opacity-20 blur-3xl rounded-full z-0" />

      {/* 🌫 Glassmorphism Tab Bar */}
      <div className="relative z-10 flex justify-center mb-12">
        <div className="bg-white/10 backdrop-blur-md border border-white/20 shadow-lg rounded-2xl px-6 py-4 flex space-x-4">
          {tabs.map((tab) => (
            <button
              key={tab.name}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                selectedTab.name === tab.name
                  ? "bg-purple-600 text-white"
                  : "bg-white/10 hover:bg-white/20 text-white"
              }`}
              onClick={() => setSelectedTab(tab)}
            >
              {tab.name}
            </button>
          ))}
        </div>
      </div>

      {/* 🧩 Tab Content with Animation */}
      <div className="overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedTab.name}
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -80 }}
            transition={{ duration: 0.5 }}
          >
            {selectedTab.component}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

export default TabsSection;
