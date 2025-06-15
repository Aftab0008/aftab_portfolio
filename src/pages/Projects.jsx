import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const projects = [
  {
    name: "Roadside Assistance App",
    description: "Real-time emergency request system with map, Node.js backend, and Leaflet integration.",
    logo: "https://img.icons8.com/external-flat-juicy-fish/60/external-roadside-car-repair-flat-flat-juicy-fish.png",
    liveLink: "https://car-service-flax.vercel.app",
    github: "https://github.com/Aftab0008/car_service.git",
  },
  {
    name: "Portfolio Website",
    description: "Modern developer portfolio with 3D Three.js scene, Tailwind, and React animations.",
    logo: "https://img.icons8.com/color/60/source-code.png",
    liveLink: "https://your-portfolio.vercel.app",
    github: "https://github.com/yourusername/portfolio-site",
  },
  {
    name: "Authentication System",
    description: "Full-stack JWT login with session management, MongoDB, and role-based access.",
    logo: "https://img.icons8.com/color/60/lock--v1.png",
    liveLink: "https://your-auth-system.vercel.app",
    github: "https://github.com/yourusername/auth-system",
  },
  {
    name: "Blog CMS",
    description: "Blog content management system with dashboard, markdown editor, and MongoDB.",
    logo: "https://img.icons8.com/color/60/blog.png",
    liveLink: "https://your-blog-cms.vercel.app",
    github: "https://github.com/yourusername/blog-cms",
  },
];

function Projects() {
  const radius = 280;

  return (
    <section
      className="relative bg-gray-950 h-[1300px] md:h-[1500px] lg:h-[1600px] py-28 px-4 overflow-hidden"
      id="projects"
    >
 
      {/* Mobile layout */}
      <div className="md:hidden space-y-12 relative z-10">
        {projects.map((project) => (
          <div
            key={project.name}
            className="bg-gray-900 p-6 rounded-2xl shadow-lg border border-indigo-500"
          >
            <div className="flex items-center space-x-4 mb-3">
              <img src={project.logo} alt={project.name} className="w-10 h-10" loading="lazy" />
              <h3 className="text-purple-300 text-lg font-semibold">{project.name}</h3>
            </div>
            <p className="text-gray-400 text-base">{project.description}</p>
            <div className="flex space-x-5 text-base mt-4">
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-indigo-400 hover:text-indigo-200"
              >
                <FaExternalLinkAlt className="mr-2" /> Live
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-400 hover:text-gray-200"
              >
                <FaGithub className="mr-2" /> Code
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Circular layout for larger screens */}
      <div className="relative z-10 hidden md:block max-w-6xl mx-auto h-[800px]">
        {projects.map((project, index) => {
          const angle = (index / projects.length) * 2 * Math.PI;
          const x = radius * Math.cos(angle);
          const y = radius * Math.sin(angle);

          return (
            <div
              key={project.name}
              className="absolute"
              style={{
                left: `calc(50% + ${x}px)`,
                top: `calc(50% + ${y}px)`,
                transform: "translate(-50%, -50%)",
              }}
            >
              <div className="group bg-gray-900 p-6 rounded-2xl w-64 shadow-xl border border-indigo-500 hover:shadow-[0_0_30px_rgba(99,102,241,0.6)] transition-all duration-300 hover:scale-105">
                <div className="flex items-center space-x-4 mb-4">
                  <img src={project.logo} alt={project.name} className="w-10 h-10" loading="lazy" />
                  <h3 className="text-lg font-semibold text-purple-300">{project.name}</h3>
                </div>
                <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                <div className="flex space-x-5 text-sm">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-indigo-400 hover:text-indigo-200"
                  >
                    <FaExternalLinkAlt className="mr-2" /> Live
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-400 hover:text-gray-200"
                  >
                    <FaGithub className="mr-2" /> Code
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Background glow */}
      <div className="absolute top-[50%] left-[50%] w-[700px] h-[700px] bg-purple-500 opacity-20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 z-0"></div>
    </section>
  );
}

export default Projects;
