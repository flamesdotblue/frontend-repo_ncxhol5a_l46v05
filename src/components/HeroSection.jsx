import React from 'react';
import Spline from '@splinetool/react-spline';
import { Heart, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden bg-[#0b0b12] text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/wwTRdG1D9CkNs368/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Grainy gradient overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(120,119,198,0.25),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(56,189,248,0.2),transparent_45%),radial-gradient(circle_at_50%_80%,rgba(168,85,247,0.2),transparent_40%)] [background-blend-mode:screen]" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 pt-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 backdrop-blur"
        >
          <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-white">
            <Heart className="h-3.5 w-3.5 text-black" />
          </span>
          <span className="text-xs tracking-widest text-white/80">BLACK SWAN • WHITE HEART EDITION</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.8 }}
          className="font-display text-4xl font-black leading-tight text-white sm:text-6xl md:text-7xl"
        >
          The Camp of Champions
          <span className="block bg-gradient-to-r from-[#a78bfa] via-[#60a5fa] to-[#22d3ee] bg-clip-text text-transparent">Tournament & Tech Carnival</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mx-auto mt-4 max-w-2xl text-balance text-base text-white/70 sm:text-lg"
        >
          Dive into a bold, brutal, and beautiful universe. Register for games, coding battles, and hands-on workshops.
          Guided flows for participants and visitors — all in one place.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25, duration: 0.8 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="#register"
            className="group inline-flex items-center gap-2 rounded-md border-2 border-white bg-white px-5 py-3 font-semibold text-black transition hover:translate-y-[-2px] hover:shadow-[6px_6px_0_0_#a78bfa]"
          >
            <Rocket className="h-4 w-4" /> Register Now
          </a>
          <a
            href="#tracks"
            className="inline-flex items-center gap-2 rounded-md border-2 border-white/40 px-5 py-3 font-semibold text-white transition hover:translate-y-[-2px] hover:shadow-[6px_6px_0_0_#60a5fa]"
          >
            Explore Competitions
          </a>
        </motion.div>
      </div>
    </section>
  );
}
