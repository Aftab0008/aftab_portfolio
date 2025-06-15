import { useEffect, useState, useRef } from "react";

// Image path from public folder
const profileImage = "/profile.jpg";

// Typing effect texts
const typingTexts = [
  "Full Stack Developer",
  "Creative Thinker",
  "Tech Enthusiast",
];

function Hero() {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const canvasRef = useRef(null);

  // Typing effect logic
  useEffect(() => {
    if (subIndex === typingTexts[index].length + 1 && !deleting) {
      setTimeout(() => setDeleting(true), 1000);
      return;
    }

    if (subIndex === 0 && deleting) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % typingTexts.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (deleting ? -1 : 1));
      setText(typingTexts[index].substring(0, subIndex));
    }, deleting ? 50 : 150);

    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting]);

  // 0101 Rain background logic
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    let columns = Math.floor(width / 20);
    let drops = Array(columns).fill(1);
    const fontSize = 18;

    function draw() {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, width, height);

      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, "#0f0f0f"); // gray-950
      gradient.addColorStop(1, "#9333ea"); // purple-600
      ctx.fillStyle = gradient;
      ctx.font = `bold ${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const char = Math.random() > 0.5 ? "0" : "1";
        ctx.fillText(char, i * 20, drops[i] * fontSize);

        if (drops[i] * fontSize > height || Math.random() > 0.95) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    }

    const interval = setInterval(draw, 50);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      columns = Math.floor(width / 20);
      drops = Array(columns).fill(1);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center text-center bg-gradient-to-r from-gray-950 to-purple-600 text-white px-4 overflow-hidden">
      {/* Canvas rain background */}
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none"
      ></canvas>

      {/* Foreground content */}
      <div className="relative z-10 max-w-3xl w-full mx-auto px-2 sm:px-6 lg:px-8">
        {/* Profile Image with Flip Animation */}
        <div className="flex justify-center mb-4">
          <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 perspective">
            <img
              src={profileImage}
              alt="Aftab Profile"
              className="w-full h-full rounded-full border-4 border-white shadow-lg object-cover transition-transform duration-700 transform hover:rotate-y-180"
            />
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-3">
          Hi, I'm Aftab
        </h1>

        {/* Typing Effect */}
        <p className="text-base sm:text-lg md:text-xl h-8 mb-2">
          <span>{text}</span>
          <span className="border-r-2 border-white animate-pulse ml-1">&nbsp;</span>
        </p>

        {/* Resume Button */}
        <a
          href="/resume.pdf"
          download
          className="inline-block mt-4 px-5 py-2 text-sm sm:text-base bg-white text-indigo-600 font-semibold rounded-lg hover:bg-gray-200 transition"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
}

export default Hero;
