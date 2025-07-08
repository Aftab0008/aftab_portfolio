import React from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const projectData = [
  {
    name: "Roadside Assistance App",
    description: "Real-time emergency response system with maps and backend alerts.",
    image: "https://ik.imagekit.io/wcuhazxr8/Screenshot%202025-06-18%20130333.png",
    liveLink: "https://car-service-flax.vercel.app",
    github: "https://github.com/Aftab0008/car_service",
  },
  {
    name: "Portfolio Website",
    description: "Personal developer portfolio with 3D and animated UI using React Three Fiber.",
    image: "https://ik.imagekit.io/wcuhazxr8/Screenshot%202025-06-18%20130500.png",
    liveLink: "https://aftab-portfolio.vercel.app",
    github: "https://github.com/Aftab0008/aftab_portfolio",
  },
  {
    name: "Quran Academy Web",
    description: "Online Islamic learning platform with WhatsApp group support and class bookings.",
    image: "https://ik.imagekit.io/wcuhazxr8/Screenshot%202025-07-07%20115959.png?updatedAt=1751869838243",
    liveLink: "https://nasim-quran-academy-h67v-omega.vercel.app/",
    github: "https://github.com/Aftab0008/quran_academy_end.git",
  },
  {
  name: "Attar Collection",
  description: "Elegant attar product gallery with 3D parallax tilt, scroll animations, and responsive design.",
  image: "https://ik.imagekit.io/wcuhazxr8/Screenshot%202025-07-07%20115558.png?updatedAt=1751869838458", 
  liveLink: "https://attar-page-nx2kwotl5-aftabs-projects-1a8d2dcd.vercel.app",  
  github: "https://github.com/Aftab0008/Attar_page.git",   
},
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative py-20 px-4 sm:px-6 md:px-12 lg:px-20  text-white"
    >
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 w-[700px] h-[700px] bg-purple-500 opacity-20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 z-0" />

      {/* Heading */}
     <div className="relative z-10 text-center mb-16 h-5">
  <h2 className="text-2xl sm:text-2xl md:text-4xl lg:text-5xl  font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-400 to-purple-500 animate-pulse">
    🚀 My Dev Projects
  </h2>
</div>


      {/* Project Grid */}
      <motion.div
        className="relative z-10 grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.15 },
          },
        }}
      >
        {projectData.map((project, index) => (
          <motion.div
            key={index}
            className="group bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/20 shadow-xl hover:scale-[1.03] hover:shadow-[0_0_35px_rgba(147,51,234,0.4)] transition-all duration-500 flex flex-col justify-between min-h-[300px]"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <img
              src={project.image}
              alt={project.name}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://placehold.co/400x240?text=Project+Image";
              }}
              className="w-full h-40 object-cover rounded-xl mb-4 transition-transform duration-300 group-hover:scale-105"
            />
            <div>
              <h3 className="text-lg font-bold mb-1 text-indigo-300 group-hover:text-purple-400 transition">
                {project.name}
              </h3>
              <p className="text-gray-300 text-sm mb-4">{project.description}</p>
            </div>
            <div className="flex items-center gap-4 text-sm mt-auto">
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-indigo-400 hover:text-indigo-200 transition"
              >
                <FaExternalLinkAlt className="mr-1" /> Live
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-400 hover:text-gray-200 transition"
              >
                <FaGithub className="mr-1" /> Code
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
