import React from "react";
import { motion } from "framer-motion";

const certificates = [
  {
    name: "Full stack developer",
    image: "https://ik.imagekit.io/wcuhazxr8/Screenshot%202025-06-19%20151957.png?updatedAt=1750326724380", // Replace with real URLs
  },
  {
    name: "Internship in XR tecnology",
    image: "https://ik.imagekit.io/wcuhazxr8/Screenshot%202025-06-19%20152036.png?updatedAt=1750326724570",
  },
  {
    name: "Full stack developer",
    image: "https://ik.imagekit.io/wcuhazxr8/Screenshot%202025-06-19%20151858.png?updatedAt=1750326724462",
  },
  // Add more if needed
];

function Certificates() {
  return (
    <section className="py-16 px-6">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-purple-400">Certificates</h2>
        <p className="text-gray-400 mt-2">Proof of my completed trainings & achievements.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {certificates.map((cert, index) => (
          <motion.div
            key={cert.name}
            className="bg-white/10 p-4 rounded-xl backdrop-blur-md border border-white/20 shadow-md"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            viewport={{ once: true }}
          >
            <img
              src={cert.image}
              alt={cert.name}
              className="rounded-lg object-cover w-full h-52"
            />
            <p className="mt-4 text-center text-gray-300 font-medium">{cert.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Certificates;
