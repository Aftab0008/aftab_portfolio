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
}


];

function Skills() {
  return (
    <section
      className="relative bg-gray-950 min-h-[800px] py-20 px-4 overflow-hidden"
      id="skills"
    >
      {/* Glowing center node */}
      <div className="relative z-10 flex flex-col items-center text-white mb-16">
        <div className="w-32 h-32 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 shadow-2xl animate-pulse flex items-center justify-center text-xl font-bold">
          My Skills
        </div>
        <p className="text-gray-400 mt-6 text-center max-w-xl">
          Technologies I'm skilled in, styled like an expanding skill tree 🌿
        </p>
      </div>

      {/* Glass container for skills */}
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="bg-white/10 border border-white/20 backdrop-blur-md rounded-2xl p-10 shadow-2xl">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <motion.a
                key={skill.name}
                href={skill.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: index % 2 === 0 ? -80 : 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="flex flex-col items-center space-y-2 group transition-transform hover:scale-110"
              >
                <div className="bg-gray-900 p-4 rounded-full w-24 h-24 flex items-center justify-center border-2 border-indigo-500 shadow-[0_0_15px_rgba(99,102,241,0.6)] hover:shadow-[0_0_30px_rgba(147,51,234,0.8)] transition duration-300 ease-in-out">
                  <img
                    src={skill.logo}
                    alt={skill.name}
                    className="w-10 h-10"
                  />
                </div>
                <span className="text-sm text-gray-300 group-hover:text-purple-400 font-semibold">
                  {skill.name}
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      {/* Background Glow */}
      <div className="absolute top-[40%] left-[50%] w-[400px] h-[400px] bg-purple-600 opacity-20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 z-0"></div>
    </section>
  );
}

export default Skills;
