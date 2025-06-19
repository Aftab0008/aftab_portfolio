import React from "react";
import Navbar from './components/Navbar';
import Hero from './pages/Hero';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import ScrollScene from './components/ScrollScene';
import TabsSection from './components/Tabs'; // 👈 Import tab layout

function App() {
  return (
    <div className="font-sans bg-gray-50 text-gray-900 overflow-x-hidden">
      <Navbar />
      <Hero />
      <ScrollScene />
      <About />
      <TabsSection /> {/* 👈 Skills + Projects + Certificates in one tab */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
