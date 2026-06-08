"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform, useScroll, useMotionTemplate } from "framer-motion";
import { FaFacebookF, FaYoutube, FaInstagram, FaTiktok } from "react-icons/fa";

export function HeroSection() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 25, stiffness: 150 };
  const mouseXSpring = useSpring(mouseX, springConfig);
  const mouseYSpring = useSpring(mouseY, springConfig);

  const rotateX = useTransform(mouseYSpring, [-300, 300], [8, -8]);
  const rotateY = useTransform(mouseXSpring, [-300, 300], [-8, 8]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  };

  return (
    <section 
      onMouseMove={handleMouseMove}
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black px-5 py-20 text-white"
    >
      {/* Aurora Animation */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_50%,rgba(124,92,255,0.2),transparent_70%)] blur-3xl" 
      />

      {/* Moving Blur Orbs */}
      <motion.div animate={{ x: [0, 100, 0], y: [0, -50, 0] }} transition={{ duration: 15, repeat: Infinity }} className="absolute top-20 left-20 w-72 h-72 bg-purple-900/20 rounded-full blur-[128px]" />
      <motion.div animate={{ x: [0, -100, 0], y: [0, 50, 0] }} transition={{ duration: 20, repeat: Infinity }} className="absolute bottom-20 right-20 w-96 h-96 bg-blue-900/10 rounded-full blur-[128px]" />

      {/* Center Content */}
      <div className="relative z-10 flex w-full max-w-5xl flex-col items-center text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-6 text-5xl font-extrabold leading-tight tracking-tighter md:text-7xl"
        >
          <span className="text-gray-500 line-through decoration-purple-500 decoration-4">Stop posting content.</span>
          <br />
          Build a{" "}
          <motion.span 
            className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent inline-block"
            animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
            transition={{ duration: 5, repeat: Infinity }}
          >
            system
          </motion.span>{" "}
          that makes you impossible to ignore.
        </motion.h1>

        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="mb-4 max-w-3xl text-lg text-gray-400 md:text-xl">
          We turn one recording session into a full month of content — across LinkedIn, Instagram & YouTube. Strategy, scripting, editing, posting. We do all of it.
        </motion.p>

        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="mb-10 text-sm text-gray-500 md:text-base">
          You give <span className="font-semibold text-purple-400">~2 hours a week.</span> We handle the rest.
        </motion.p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link href="#inquire" className="relative overflow-hidden rounded-full bg-purple-600 px-10 py-4 font-semibold text-white shadow-[0_0_25px_rgba(147,51,234,0.3)] hover:shadow-[0_0_40px_rgba(147,51,234,0.6)] transition-all">
              Book a Free 1:1 Call
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link href="/portfolio" className="rounded-full border border-white/10 bg-white/5 px-10 py-4 font-semibold text-white backdrop-blur-md transition hover:border-purple-500/50">
              View Portfolio
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Floating Cards with Parallax & Hover Tilt */}
      <FloatingCard className="absolute left-[10%] top-[20%] rotate-[-10deg]" mouseX={rotateX} mouseY={rotateY}>
        <div className="text-xs uppercase tracking-wider text-purple-400">Trusted By</div>
        <div className="text-3xl font-bold">100+</div>
        <div className="text-sm text-gray-400">Founders Served</div>
      </FloatingCard>

      <FloatingCard className="absolute bottom-[10%] left-[15%] rotate-[5deg]" mouseX={rotateX} mouseY={rotateY}>
        <div className="mb-2 text-xs">Monthly Content Output</div>
        <div className="flex h-16 items-end gap-1.5">
          {[35, 55, 70, 85, 65, 95].map((h, i) => (
            <motion.div key={i} animate={{ height: [`${h * 0.8}%`, `${h}%`] }} transition={{ repeat: Infinity, duration: 2, repeatType: "reverse" }} className="w-3 rounded-t-sm bg-purple-500" />
          ))}
        </div>
      </FloatingCard>

      <motion.div animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }} className="absolute right-[15%] top-[15%] flex gap-4 rounded-full border border-white/10 bg-black/40 p-4 backdrop-blur-md hover:border-purple-500 transition-colors">
        <FaFacebookF size={20} /> <FaYoutube size={20} /> <FaTiktok size={20} /> <FaInstagram size={20} />
      </motion.div>

      <FloatingCard className="absolute bottom-[15%] right-[10%]" mouseX={rotateX} mouseY={rotateY}>
        <div className="mb-4 flex justify-between gap-8 text-xs font-bold text-white"><span>Content Engine</span><span>Full Service</span></div>
        <div className="space-y-2 text-sm text-purple-400">
          {["Strategy", "Scripting", "Editing", "Distribution", "Growth"].map((item, i) => (
            <div key={i} className="flex justify-between gap-12"><span>Step {i + 1}</span><span className="font-mono">{item}</span></div>
          ))}
        </div>
      </FloatingCard>

      {/* Scroll Indicator */}
      <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 1.5 }} className="absolute bottom-10 left-1/2 -translate-x-1/2 w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-2">
        <div className="w-1 h-2 bg-white rounded-full" />
      </motion.div>
    </section>
  );
}

function FloatingCard({ children, className, mouseX, mouseY }: any) {
  return (
    <motion.div
      style={{ rotateX: mouseX, rotateY: mouseY, transformStyle: "preserve-3d" }}
      animate={{ y: [0, -20, 0] }}
      transition={{ y: { repeat: Infinity, duration: 5, ease: "easeInOut" }, rotateX: { duration: 0.2 }, rotateY: { duration: 0.2 } }}
      className={`rounded-2xl border border-white/10 bg-black/40 p-5 backdrop-blur-lg shadow-[0_0_15px_rgba(0,0,0,0.5)] hover:shadow-[0_0_30px_rgba(168,85,247,0.2)] transition-shadow ${className}`}
    >
      {children}
    </motion.div>
  );
}