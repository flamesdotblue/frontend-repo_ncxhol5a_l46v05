import React, { useMemo, useState } from 'react';
import { Calendar, Map, Users } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function RegistrationPanel() {
  const [role, setRole] = useState('participant');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [track, setTrack] = useState('Coding Clash');
  const [teamSize, setTeamSize] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  const isValid = useMemo(() => {
    const emailOk = /.+@.+\..+/.test(email);
    const nameOk = name.trim().length > 1;
    return emailOk && nameOk && (role === 'visitor' || teamSize >= 1);
  }, [email, name, role, teamSize]);

  function onSubmit(e) {
    e.preventDefault();
    if (!isValid) return;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3500);
    setName('');
    setEmail('');
    setTeamSize(1);
  }

  return (
    <section id="register" className="relative mx-auto max-w-7xl px-6 py-16">
      <div className="mb-8 grid gap-4 md:grid-cols-3">
        <InfoTile icon={<Calendar className="h-5 w-5" />} title="Festival Window" text="3 dynamic days • Finals under the neon." />
        <InfoTile icon={<Map className="h-5 w-5" />} title="Venue" text="Black Swan Arena — Central Hall" />
        <InfoTile icon={<Users className="h-5 w-5" />} title="Open to All" text="Visitors and teams welcome" />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-xl border-4 border-white/80 bg-black p-6 shadow-[10px_10px_0_0_#111]">
          <h3 className="font-display text-2xl font-extrabold text-white">Register</h3>
          <p className="mt-1 text-sm text-white/70">One simple form — smart guidance for visitors and participants.</p>

          <form onSubmit={onSubmit} className="mt-5 space-y-4">
            <div className="flex gap-3">
              <button type="button" onClick={() => setRole('participant')} className={`flex-1 rounded-md border-2 px-4 py-2 font-semibold ${role==='participant' ? 'bg-white text-black border-white' : 'text-white border-white/50 hover:border-white'}`}>
                Participant
              </button>
              <button type="button" onClick={() => setRole('visitor')} className={`flex-1 rounded-md border-2 px-4 py-2 font-semibold ${role==='visitor' ? 'bg-white text-black border-white' : 'text-white border-white/50 hover:border-white'}`}>
                Visitor
              </button>
            </div>

            <div>
              <label className="mb-1 block text-sm font-semibold text-white">Full Name</label>
              <input value={name} onChange={(e)=>setName(e.target.value)} className="w-full rounded-md border-2 border-white/60 bg-transparent px-3 py-2 text-white placeholder:text-white/40 focus:border-white" placeholder="Alex Swan" />
            </div>

            <div>
              <label className="mb-1 block text-sm font-semibold text-white">Email</label>
              <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" className="w-full rounded-md border-2 border-white/60 bg-transparent px-3 py-2 text-white placeholder:text-white/40 focus:border-white" placeholder="you@example.com" />
            </div>

            {role === 'participant' && (
              <>
                <div>
                  <label className="mb-1 block text-sm font-semibold text-white">Competition</label>
                  <select value={track} onChange={(e)=>setTrack(e.target.value)} className="w-full rounded-md border-2 border-white/60 bg-black px-3 py-2 text-white focus:border-white">
                    <option className="bg-black" value="Coding Clash">Coding Clash</option>
                    <option className="bg-black" value="Arena Games">Arena Games</option>
                    <option className="bg-black" value="Pro Workshops">Pro Workshops</option>
                  </select>
                </div>
                <div>
                  <label className="mb-1 block text-sm font-semibold text-white">Team Size</label>
                  <input type="number" min={1} max={5} value={teamSize} onChange={(e)=>setTeamSize(parseInt(e.target.value || '1', 10))} className="w-full rounded-md border-2 border-white/60 bg-transparent px-3 py-2 text-white focus:border-white" />
                </div>
              </>
            )}

            <button disabled={!isValid} className={`w-full rounded-md border-2 px-4 py-3 text-center font-semibold transition ${isValid ? 'bg-white text-black border-white hover:translate-y-[-2px] hover:shadow-[6px_6px_0_0_#60a5fa]' : 'border-white/40 text-white/50 cursor-not-allowed'}`}>
              {role === 'visitor' ? 'Get Visitor Pass' : `Register for ${track}`}
            </button>
          </form>

          <AnimatePresence>
            {submitted && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="mt-4 rounded-lg border-2 border-white bg-white p-3 text-black"
              >
                Submission received! Check your inbox for confirmation and schedule.
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="rounded-xl border-4 border-white/80 bg-[#0b0b12] p-6 text-white shadow-[10px_10px_0_0_#111]">
          <h3 className="font-display text-2xl font-extrabold">How it works</h3>
          <ol className="mt-4 space-y-3 text-white/80">
            <li className="flex items-start gap-3"><span className="mt-2 h-2 w-2 rounded-full bg-white" /> Choose your role: visitor or participant.</li>
            <li className="flex items-start gap-3"><span className="mt-2 h-2 w-2 rounded-full bg-white" /> Fill in details and pick your competition.</li>
            <li className="flex items-start gap-3"><span className="mt-2 h-2 w-2 rounded-full bg-white" /> Get instant confirmation and guidance.</li>
            <li className="flex items-start gap-3"><span className="mt-2 h-2 w-2 rounded-full bg-white" /> Arrive early — warmups, swag, and team sync.</li>
          </ol>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <GuideCard title="Visitor Guide" points={["One-pass entry","Expo and finals access","Prime photo spots"]} accent="from-[#22d3ee] to-[#60a5fa]" />
            <GuideCard title="Participant Guide" points={["Report to check-in","Follow match calls","Claim prizes"]} accent="from-[#a78bfa] to-[#22d3ee]" />
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoTile({ icon, title, text }) {
  return (
    <div className="flex items-center gap-3 rounded-xl border-2 border-white/40 bg-black/40 p-4 text-white">
      <div className="grid h-10 w-10 place-items-center rounded-md bg-white text-black">{icon}</div>
      <div>
        <p className="text-sm font-semibold text-white/80">{title}</p>
        <p className="text-sm text-white/60">{text}</p>
      </div>
    </div>
  );
}

function GuideCard({ title, points, accent }) {
  return (
    <div className="relative overflow-hidden rounded-lg border-2 border-white/70 bg-black p-4">
      <div className={`pointer-events-none absolute inset-0 opacity-20 bg-gradient-to-br ${accent}`} />
      <div className="relative z-10">
        <h4 className="font-semibold text-white">{title}</h4>
        <ul className="mt-2 space-y-1 text-sm text-white/70">
          {points.map((p) => (
            <li key={p} className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-white/70" /> {p}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
