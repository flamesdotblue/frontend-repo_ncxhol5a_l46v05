import React from 'react';
import { Gamepad2, Code2, Wrench, Users } from 'lucide-react';
import { motion } from 'framer-motion';

/*
  Solar-system inspired navigation: a central "White Heart" nucleus with orbiting category planets.
  Clicks jump to sections. Pure CSS + motion for subtle scale/hover.
*/
export default function OrbitMenu() {
  const items = [
    { id: 'tracks', label: 'Competitions', icon: Gamepad2, color: '#60a5fa' },
    { id: 'tracks', label: 'Coding Arena', icon: Code2, color: '#a78bfa' },
    { id: 'tracks', label: 'Workshops', icon: Wrench, color: '#22d3ee' },
    { id: 'register', label: 'Visitors & Teams', icon: Users, color: '#f5f5f5' },
  ];

  return (
    <section className="relative mx-auto my-20 grid max-w-6xl place-items-center px-6">
      <div className="mb-10 text-center">
        <h2 className="font-display text-3xl font-extrabold text-white md:text-5xl">
          Navigate the Orbit
        </h2>
        <p className="mt-2 text-white/70">Choose your path around the Black Swan — guided routes for everyone.</p>
      </div>

      <div className="relative aspect-square w-full max-w-[560px]">
        {/* Orbits */}
        <div className="pointer-events-none absolute inset-0 rounded-full border border-white/10" />
        <div className="pointer-events-none absolute inset-6 rounded-full border border-white/10" />
        <div className="pointer-events-none absolute inset-12 rounded-full border border-white/10" />

        {/* Core */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="grid place-items-center rounded-xl border-4 border-white bg-black px-6 py-5 shadow-[8px_8px_0_0_#a78bfa]">
            <div className="text-4xl">🖤</div>
            <p className="mt-1 text-xs font-semibold tracking-wider text-white/80">WHITE HEART CORE</p>
          </div>
        </div>

        {/* Planets (positioned on orbits) */}
        <div className="absolute left-1/2 top-0 -translate-x-1/2">
          <Planet href="#tracks" color={items[0].color} label={items[0].label} Icon={items[0].icon} />
        </div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2">
          <Planet href="#tracks" color={items[1].color} label={items[1].label} Icon={items[1].icon} />
        </div>
        <div className="absolute left-1/2 bottom-0 -translate-x-1/2">
          <Planet href="#tracks" color={items[2].color} label={items[2].label} Icon={items[2].icon} />
        </div>
        <div className="absolute left-0 top-1/2 -translate-y-1/2">
          <Planet href="#register" color={items[3].color} label={items[3].label} Icon={items[3].icon} />
        </div>
      </div>
    </section>
  );
}

function Planet({ href, color, label, Icon }) {
  return (
    <motion.a
      href={href}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      className="group inline-flex -translate-y-1/2 items-center gap-3 rounded-lg border-2 border-white bg-[#0b0b12] px-4 py-3 shadow-[6px_6px_0_0_#111]"
      style={{ boxShadow: `6px 6px 0 0 ${color}` }}
    >
      <span
        className="grid h-9 w-9 place-items-center rounded-md"
        style={{ background: color }}
      >
        <Icon className="h-5 w-5 text-black" />
      </span>
      <span className="font-semibold text-white">{label}</span>
    </motion.a>
  );
}
