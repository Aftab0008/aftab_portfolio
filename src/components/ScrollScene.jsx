import React, { useRef, useEffect, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Load 3D model
function Model({ scale }) {
  const gltf = useGLTF("/gaming_desktop_pc/scene.gltf");
  return <primitive object={gltf.scene} scale={[scale, scale, scale]} />;
}

// Animate scene on scroll
function AnimatedScene({ scale }) {
  const ref = useRef();
  const { camera } = useThree();

  useEffect(() => {
    if (!ref.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#scroll-section",
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
      },
    });

    tl.to(ref.current.rotation, { y: Math.PI * 2 })
      .to(ref.current.position, { z: -2, y: 0.5 })
      .to(ref.current.scale, { x: 0.6, y: 0.6, z: 0.6 });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      tl.kill();
    };
  }, []);

  return (
    <group ref={ref}>
      <Model scale={scale} />
    </group>
  );
}

// Main Scroll Scene
export default function ScrollScene() {
  const [scale, setScale] = useState(0.5);

  useEffect(() => {
    const handleResize = () => {
      setScale(window.innerWidth < 768 ? 0.35 : 0.5);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      id="scroll-section"
      className="relative w-full min-h-[150vh] bg-gradient-to-b from-gray-950 to-purple-600 text-white overflow-hidden px-4 py-20"
    >
      {/* Glowing background effect */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none">
        <div className="w-[300px] sm:w-[400px] md:w-[500px] h-[300px] sm:h-[400px] md:h-[500px] bg-purple-500 rounded-full blur-3xl opacity-30 animate-pulse" />
      </div>

      {/* Layout wrapper */}
      <div className="relative z-10 max-w-10xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 px-4">
        {/* 3D Canvas */}
        <div className="w-full md:w-1/2 h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
          <Canvas camera={{ position: [0, 1, 6.5], fov: 35 }}>
            <ambientLight intensity={0.8} />
            <directionalLight position={[2, 2, 2]} intensity={1.5} />
            <AnimatedScene scale={scale} />
            <OrbitControls enableZoom={false} />
          </Canvas>
        </div>

        {/* Text Content */}
        <div className="w-full md:w-1/2 px-2 text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Explore My Rig
          </h2>
          <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
            Scroll to see how my system transforms. This setup powers everything
            from web apps to AI visuals.
          </p>
        </div>
      </div>
    </section>
  );
}
