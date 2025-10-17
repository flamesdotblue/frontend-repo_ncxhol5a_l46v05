import React from 'react';
import { Gamepad2, Code2, Wrench } from 'lucide-react';
import { motion } from 'framer-motion';

const tracks = [
  {
    title: 'Arena Games',
    icon: Gamepad2,
    accent: 'from-[#22d3ee] to-[#60a5fa]',
    bullets: ['FIFA, Valorant, BGMI', 'Solo & squad brackets', 'Live leaderboard'],
  },
  {
    title: 'Coding Clash',
    icon: Code2,
    accent: 'from-[#a78bfa] to-[#22d3ee]',
    bullets: ['DSA sprints', 'Hack battle finals', 'Prizes for top 3'],
  },
  {
    title: 'Pro Workshops',
    icon: Wrench,
    accent: 'from-[#60a5fa] to-[#a78bfa]',
    bullets: ['Web + AI + Cloud', 'Hands-on labs', 'Project takeaways'],
  },
];

export default function TracksGrid() {
  return (
    <section id="tracks" className="relative mx-auto max-w-7xl px-6 py-16">
      <div className="mb-10 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
        <div>
          <h2 className="font-display text-3xl font-extrabold text-white md:text-5xl">Choose Your Battle</h2>
          <p className="mt-2 max-w-2xl text-white/70">
            Multiple competitions orbiting one festival — pick what excites you. Registrations are open for all.
          </p>
        </div>
        <a href="#register" className="rounded-md border-2 border-white bg-white px-4 py-2 font-semibold text-black hover:translate-y-[-2px] hover:shadow-[6px_6px_0_0_#a78bfa]">
          Quick Register
        </a>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {tracks.map((t, i) => (
          <motion.div
            key={t.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05, duration: 0.5 }}
            className="relative overflow-hidden rounded-xl border-4 border-white/80 bg-black p-5 shadow-[10px_10px_0_0_#111]"
          >
            <div className={`absolute inset-0 opacity-20 bg-gradient-to-br ${t.accent}`} />
            <div className="relative z-10">
              <div className="mb-4 inline-flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-md bg-white text-black">
                  <t.icon className="h-6 w-6" />
                </span>
                <h3 className="font-display text-xl font-extrabold text-white">{t.title}</h3>
              </div>
              <ul className="space-y-2 text-sm text-white/80">
                {t.bullets.map((b) => (
                  <li key={b} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-white/70" /> {b}
                  </li>
                ))}
              </ul>
              <div className="mt-4">
                <a href="#register" className="rounded-md border-2 border-white px-3 py-2 text-sm font-semibold text-white hover:bg-white hover:text-black">
                  Register for {t.title}
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
