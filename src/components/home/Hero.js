"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { AnimatedElement } from "@/components/common";

// Roller Text List
const texts = [
  "DIGITAL MARKETING",
  "PERFORMANCE MARKETING",
  "SOCIAL MEDIA STRATEGY",
  "BRAND BUILDING",
];

export default function HeroSection() {
  const [index, setIndex] = useState(0);
  const canvasRef = useRef(null);

 // Auto roller text
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  // Canvas background animation
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let w, h;
    const resize = () => {
      w = (canvas.width = window.innerWidth);
      h = (canvas.height = window.innerHeight);
    };
    resize();
    window.addEventListener("resize", resize);

    // Only 2 particles
    let particles = [
      {
        x: Math.random() * w,
        y: Math.random() * h,
        dx: (Math.random() - 0.5) * 6,
        dy: (Math.random() - 0.5) * 6,
        r: 300, // radius
        color: "#9803034f", // red
      },
      {
        x: Math.random() * w,
        y: Math.random() * h,
        dx: (Math.random() - 0.5) * 2,
        dy: (Math.random() - 0.5) * 2,
        r: 300, // radius
        color: "#16005c82", // teal
      },
    ];

    function animate() {
      ctx.fillStyle = "#0a0a0a"; // dark background
      ctx.fillRect(0, 0, w, h);

      particles.forEach((p) => {
        p.x += p.dx;
        p.y += p.dy;

        // Bounce on full screen edges
        if (p.x - p.r < 0 || p.x + p.r > w) p.dx *= -1;
        if (p.y - p.r < 0 || p.y + p.r > h) p.dy *= -1;

        // Blurry / Glow Effect
        ctx.save();
        ctx.globalAlpha = 0.6;
        ctx.shadowBlur = 100; // blur glow
        ctx.shadowColor = p.color;
        ctx.fillStyle = p.color;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();

        ctx.restore();
      });

      requestAnimationFrame(animate);
    }
    animate();

    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <div className="relative w-full h-screen flex items-center justify-center text-white overflow-hidden">
      {/* Background Canvas */}
      <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full" />

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        {/* Roller Text - Keep existing animation */}
        <motion.h2
          key={index}
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -30, opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="text-xl md:text-2xl font-semibold text-[#ee2c2f]"
        >
          {texts[index]}
        </motion.h2>

        {/* Heading */}
        <AnimatedElement animation="fadeInUp" delay={0.3}>
          <h1 className="text-4xl md:text-6xl font-extrabold mt-2">
            AGENCY IN NOIDA
          </h1>
        </AnimatedElement>

        {/* Tagline */}
        <AnimatedElement animation="fadeInUp" delay={0.5}>
          <p className="mt-4 text-gray-300 text-lg">
            We help brands grow with data-driven strategies & creative execution.
          </p>
        </AnimatedElement>

        {/* Button */}
        <AnimatedElement animation="bounceIn" delay={0.7}>
          <div
            id="ctc_button"
            className="scrollTrigger ctc_button mb-5 text-center pt-5"
          >
            <a
              href="#"
              className="inline-block mt-6 px-6 py-3 bg-[#4e0405] hover:bg-[#620506] text-white font-medium rounded-3xl shadow-lg transition"
            >
              Let's Connect
            </a>
          </div>
        </AnimatedElement>
      </div>
    </div>
  );
}
