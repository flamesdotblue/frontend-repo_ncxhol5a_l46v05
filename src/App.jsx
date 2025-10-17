import React from 'react';
import HeroSection from './components/HeroSection';
import OrbitMenu from './components/OrbitMenu';
import TracksGrid from './components/TracksGrid';
import RegistrationPanel from './components/RegistrationPanel';
import { Heart } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen w-full bg-[#0b0b12] text-white">
      {/* Top banner with theme */}
      <div className="sticky top-0 z-50 flex items-center justify-center gap-2 border-b border-white/10 bg-black/60 px-4 py-2 backdrop-blur">
        <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-white"><Heart className="h-3.5 w-3.5 text-black" /></span>
        <p className="text-xs tracking-wider text-white/80">Black Swan — White Heart • Bold. Futuristic. Interactive.</p>
      </div>

      <HeroSection />
      <OrbitMenu />
      <TracksGrid />
      <RegistrationPanel />

      <footer className="mx-auto mt-16 max-w-7xl px-6 pb-16 text-center text-white/50">
        Crafted for the Black Swan festival — may your heart stay white and your code bug-free.
      </footer>
    </div>
  );
}

export default App;
