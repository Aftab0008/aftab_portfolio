import React from "react";
import { motion } from "framer-motion";

const skills = [
  {
    name: "HTML",
    logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg",
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    name: "CSS",
    logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg",
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    name: "JavaScript",
    logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    name: "React",
    logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
    link: "https://reactjs.org/",
  },
  {
    name: "Tailwind",
    logo: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
    link: "https://tailwindcss.com/",
  },
  {
    name: "Node.js",
    logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg",
    link: "https://nodejs.org/",
  },
  {
    name: "Express",
    logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg",
    link: "https://expressjs.com/",
  },
  {
    name: "PostgreSQL",
    logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg",
    link: "https://www.postgresql.org/",
  },
  {
    name: "Blender",
    logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/blender/blender-original.svg",
    link: "https://www.blender.org/",
  },
  {
    name: "GitHub",
    logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg",
    link: "https://github.com/",
  },
  {
    name: "Vercel",
    logo: "https://assets.vercel.com/image/upload/front/favicon/vercel/favicon.ico",
    link: "https://vercel.com/",
  },
  {
    name: "Railway",
    logo: "https://railway.app/favicon.ico",
    link: "https://railway.app/",
  },
];

function Skills() {
  return (
    <section
      className="relative min-h-screen py-16 px-4 sm:px-6 md:px-10 lg:px-20  text-white overflow-hidden"
      id="skills"
    >
      {/* 🔮 Center Pulse Header */}
      <div className="relative z-10 flex flex-col items-center mb-16 text-center">
        <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 shadow-2xl animate-pulse flex items-center justify-center text-lg sm:text-xl font-bold">
          My Skills
        </div>
        <p className="text-gray-400 mt-6 text-sm sm:text-base max-w-lg">
          Technologies I'm skilled in, styled like an expanding skill tree 🌿
        </p>
      </div>

      {/* 🌫 Glass Card Container */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="bg-white/10 border border-white/20 backdrop-blur-md rounded-2xl px-6 py-10 sm:px-10 shadow-2xl">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 sm:gap-8">
            {skills.map((skill, index) => (
              <motion.a
                key={skill.name}
                href={skill.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.1 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                  type: "spring",
                  stiffness: 100,
                }}
                viewport={{ once: true }}
                className="flex flex-col items-center space-y-2 group transition-transform"
              >
                <div className="bg-gray-900 p-4 rounded-full w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center border-2 border-indigo-500 shadow-[0_0_15px_rgba(99,102,241,0.5)] hover:shadow-[0_0_30px_rgba(147,51,234,0.8)] transition duration-300 ease-in-out">
                  <img
                    src={skill.logo}
                    alt={skill.name}
                    className="w-8 h-8 sm:w-10 sm:h-10"
                  />
                </div>
                <span className="text-xs sm:text-sm text-gray-300 group-hover:text-purple-400 font-medium sm:font-semibold">
                  {skill.name}
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      {/* 💡 Background Glow */}
      <div className="absolute top-[40%] left-[50%] w-[400px] h-[400px] bg-purple-600 opacity-20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 z-0"></div>
    </section>
  );
}

export default Skills;
