import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Skills from "../pages/Skills";
import Certificates from "../pages/Certificates";
import Projects from "../pages/Projects";

const tabs = [
  {
    name: "Skills",
    mobileLabel: "🛠️",
    desktopLabel: "Skills",
    component: <Skills />,
  },
  {
    name: "Projects",
    mobileLabel: "💼",
    desktopLabel: "Projects",
    component: <Projects />,
  },
  {
    name: "Certificates",
    mobileLabel: "📜",
    desktopLabel: "Certificates",
    component: <Certificates />,
  },
];

export default function TabsSection() {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  return (
    <section className="relative bg-gray-950 text-white py-16 px-4 sm:px-6 md:px-12 lg:px-20 overflow-hidden">
      {/* 🔮 Background Lights */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-gradient-to-tr from-purple-600 via-indigo-500 to-purple-600 opacity-20 blur-3xl rounded-full z-0" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[200px] bg-gradient-to-bl from-indigo-500 via-purple-500 to-pink-500 opacity-10 blur-2xl rounded-full z-0" />

      {/* 🌫 Tab Navigation */}
      <div className="relative z-10 flex justify-center mb-10">
        <div className="bg-white/10 backdrop-blur-md border border-white/20 shadow-lg rounded-2xl px-4 py-3 flex flex-wrap justify-center gap-3 w-full max-w-full sm:max-w-xl md:max-w-2xl lg:max-w-4xl">
          {tabs.map((tab) => (
            <button
              key={tab.name}
              onClick={() => setSelectedTab(tab)}
              className={`px-5 py-2 rounded-full text-sm sm:text-base font-semibold transition-all ${
                selectedTab.name === tab.name
                  ? "bg-purple-600 text-white"
                  : "bg-white/10 hover:bg-white/20 text-white"
              }`}
            >
              <span className="block sm:hidden text-xl">{tab.mobileLabel}</span>
              <span className="hidden sm:block">{tab.desktopLabel}</span>
            </button>
          ))}
        </div>
      </div>

      {/* 🧩 Tab Content Area */}
      <div className="relative z-10 w-full max-w-[100%] sm:max-w-3xl md:max-w-5xl lg:max-w-6xl mx-auto">
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
