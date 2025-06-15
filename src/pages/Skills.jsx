import React from "react";

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
    name: "MongoDB",
    logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg",
    link: "https://www.mongodb.com/",
  },
];

function Skills() {
  return (
   <section className="relative bg-gray-950 min-h-[800px] py-20 px-4 overflow-hidden" id="skills">

      {/* Glowing center node */}
      <div className="relative z-10 flex flex-col items-center text-white mb-16">
        <div className="w-32 h-32 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 shadow-2xl shadow-indigo-500/50 animate-pulse flex items-center justify-center text-xl font-bold">
          My Skills
        </div>
        <p className="text-gray-400 mt-6 text-center max-w-xl">
          Technologies I'm skilled in, styled like an expanding skill tree 🌿
        </p>
      </div>

      {/* Root branch grid */}
      <div className="relative z-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {skills.map((skill, index) => (
          <a
            key={skill.name}
            href={skill.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center space-y-2 group transition-transform hover:scale-110"
          >
            <div className="bg-gray-900 p-4 rounded-full w-24 h-24 flex items-center justify-center border-2 border-indigo-500 shadow-[0_0_15px_rgba(99,102,241,0.6)] hover:shadow-[0_0_30px_rgba(147,51,234,0.8)] transition duration-300 ease-in-out">
              <img src={skill.logo} alt={skill.name} className="w-10 h-10" />
            </div>
            <span className="text-sm text-gray-300 group-hover:text-purple-400 font-semibold">
              {skill.name}
            </span>
          </a>
        ))}
      </div>

      {/* Background Glow */}
      <div className="absolute top-[40%] left-[50%] w-[400px] h-[400px] bg-purple-600 opacity-20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 z-0"></div>
    </section>
  );
}

export default Skills;
