import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

const projects = [
  {
    name: "Roadside Assistance App",
    description:
      "Real-time emergency request system with map, Node.js backend, and Leaflet integration.",
    logo:
      "https://img.icons8.com/external-flat-juicy-fish/60/external-roadside-car-repair-flat-flat-juicy-fish.png",
    image: "https://ik.imagekit.io/wcuhazxr8/Screenshot%202025-06-18%20130333.png?updatedAt=1750323197042",
    liveLink: "https://car-service-flax.vercel.app",
    github: "https://github.com/Aftab0008/car_service.git",
  },
  {
    name: "Portfolio Website",
    description:
      "Modern developer portfolio with 3D Three.js scene, Tailwind, and React animations.",
    logo: "https://img.icons8.com/color/60/source-code.png",
    image: "https://ik.imagekit.io/wcuhazxr8/Screenshot%202025-06-18%20130500.png?updatedAt=1750323197456",
    liveLink: "https://aftab-portfolio.vercel.app",
    github: "https://github.com/Aftab0008/aftab_portfolio.git",
  },
   {
    name: "Portfolio Website",
    description:
      "Modern developer portfolio with 3D Three.js scene, Tailwind, and React animations.",
    logo: "https://img.icons8.com/color/60/source-code.png",
    image: "https://ik.imagekit.io/wcuhazxr8/Screenshot%202025-06-18%20130500.png?updatedAt=1750323197456",
    liveLink: "https://aftab-portfolio.vercel.app",
    github: "https://github.com/Aftab0008/aftab_portfolio.git",
  },
   {
    name: "Portfolio Website",
    description:
      "Modern developer portfolio with 3D Three.js scene, Tailwind, and React animations.",
    logo: "https://img.icons8.com/color/60/source-code.png",
    image: "https://ik.imagekit.io/wcuhazxr8/Screenshot%202025-06-18%20130500.png?updatedAt=1750323197456",
    liveLink: "https://aftab-portfolio.vercel.app",
    github: "https://github.com/Aftab0008/aftab_portfolio.git",
  },
];

function Projects() {
  const radius = 320;

  return (
    <section className="relative bg-gray-950 py-28 px-4 overflow-hidden" id="projects">
      {/* Heading */}
      <div className="relative z-10 text-center mb-20">
        <div className="inline-block px-6 py-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 shadow-md animate-pulse ring-2 ring-purple-500/30">
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-400 to-purple-500">
            My Dev Projects
          </h2>
        </div>
      </div>

      {/* Mobile layout */}
      <div className="md:hidden space-y-12 relative z-10">
        {projects.map((project, index) => (
          <motion.div
            key={project.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl shadow-lg"
          >
            <img
              src={project.image}
              alt={project.name}
              className="rounded-xl mb-4 w-full h-48 object-cover"
            />
            <div className="flex items-center space-x-3 mb-3">
              <img src={project.logo} alt={project.name} className="w-8 h-8" />
              <h3 className="text-purple-300 text-xl font-semibold">{project.name}</h3>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">{project.description}</p>
            <div className="flex space-x-4 text-sm mt-4">
              <a
                href={project.liveLink}
                target="_blank"
                className="text-indigo-400 hover:text-indigo-200 flex items-center"
              >
                <FaExternalLinkAlt className="mr-1" /> Live
              </a>
              <a
                href={project.github}
                target="_blank"
                className="text-gray-400 hover:text-gray-200 flex items-center"
              >
                <FaGithub className="mr-1" /> Code
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Circular layout for desktop */}
      <div className="hidden md:block relative z-10 max-w-6xl mx-auto h-[1000px]">
        {projects.map((project, index) => {
          const angle = (index / projects.length) * 2 * Math.PI;
          const x = radius * Math.cos(angle);
          const y = radius * Math.sin(angle);

          return (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="absolute"
              style={{
                left: `calc(40% + ${x}px)`,
                top: `calc(40% + ${y}px)`,
                transform: "translate(-50%, -50%)",
              }}
            >
              <div className="bg-white/10 backdrop-blur-md border border-white/20 p-5 rounded-2xl w-64 shadow-lg hover:scale-105 hover:shadow-[0_0_25px_rgba(168,85,247,0.5)] transition duration-300 ease-in-out">
                <img src={project.image} alt={project.name} className="w-full h-36 object-cover rounded-lg mb-3" />
                <div className="flex items-center space-x-2 mb-2">
                  <img src={project.logo} alt={project.name} className="w-8 h-8" />
                  <h3 className="text-purple-300 text-base font-semibold">{project.name}</h3>
                </div>
                <p className="text-gray-300 text-xs mb-2">{project.description}</p>
                <div className="flex space-x-3 text-xs">
                  <a href={project.liveLink} target="_blank" className="text-indigo-400 hover:text-indigo-200 flex items-center">
                    <FaExternalLinkAlt className="mr-1" /> Live
                  </a>
                  <a href={project.github} target="_blank" className="text-gray-400 hover:text-gray-200 flex items-center">
                    <FaGithub className="mr-1" /> Code
                  </a>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Background glow */}
      <div className="absolute top-[50%] left-[50%] w-[700px] h-[700px] bg-purple-500 opacity-20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 z-0" />
    </section>
  );
}

export default Projects;
