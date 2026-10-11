import React from 'react';
import { Play, FlaskConical, ArrowDown, Shield, HeartPulse, Sparkles } from 'lucide-react';

interface HeroBannerProps {
  onStartPresentation: () => void;
  onExploreLab: () => void;
  onExploreSection1: () => void;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({
  onStartPresentation,
  onExploreLab,
  onExploreSection1,
}) => {
  return (
    <div className="relative min-h-[90vh] flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 py-20 overflow-hidden bg-midnight-950">
      {/* Background radial gradient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-cyan-600/15 to-amber-500/15 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center gap-6">
        {/* Conference / Project Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-midnight-900 border border-slate-700/80 shadow-[0_0_20px_rgba(0,240,255,0.15)]">
          <Sparkles className="w-4 h-4 text-silk-gold animate-pulse motion-reduce:animate-none" />
          <span className="text-xs font-mono font-medium text-slate-200">
            First-Year Engineering College Science Exhibition • 45-Minute Synchronized Poster
          </span>
        </div>

        {/* Master Project Title */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-silk-gold to-yellow-200">
            SPIDER SILK-INSPIRED FIBERS
          </span>
          <span className="block text-2xl sm:text-4xl lg:text-5xl mt-2 text-slate-100 font-bold">
            Ultra-Lightweight Protective Vests & Biodegradable Surgical Sutures
          </span>
        </h1>

        {/* Narrative Subtitle */}
        <p className="max-w-3xl text-sm sm:text-base lg:text-lg text-slate-300 font-sans leading-relaxed">
          How 380 million years of evolutionary protein engineering inspires next-generation materials:
          absorbing massive kinetic impacts on the frontlines of defense, while dissolving into harmless natural amino acids in delicate operating theatres.
        </p>

        {/* Dual Application Showcase Pills */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-2xl my-2">
          <div className="p-4 rounded-2xl bg-midnight-900/80 border border-cyan-800/60 flex items-center gap-3.5 text-left shadow-lg">
            <div className="p-3 rounded-xl bg-synth-cyan/15 border border-synth-cyan/30 text-synth-cyan shrink-0">
              <Shield className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[11px] font-mono text-synth-cyan uppercase block">Frontier Application 01</span>
              <h2 className="text-sm font-bold text-white">Biomimetic Ballistic Textiles</h2>
              <p className="text-xs text-slate-400 mt-0.5">160 MJ/m³ work-to-fracture energy dissipation (Conceptual NIJ Targets)</p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-midnight-900/80 border border-emerald-800/60 flex items-center gap-3.5 text-left shadow-lg">
            <div className="p-3 rounded-xl bg-bio-emerald/15 border border-bio-emerald/30 text-bio-mint shrink-0">
              <HeartPulse className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[11px] font-mono text-bio-mint uppercase block">Frontier Application 02</span>
              <h2 className="text-sm font-bold text-white">Bioabsorbable Surgical Sutures</h2>
              <p className="text-xs text-slate-400 mt-0.5">Enzymatic biodegradation without secondary surgery (Preclinical Models)</p>
            </div>
          </div>
        </div>

        {/* Action Button Bar */}
        <div className="flex flex-wrap items-center justify-center gap-3 mt-4">
          <button
            type="button"
            onClick={onStartPresentation}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-synth-cyan to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-black font-bold text-sm flex items-center gap-2.5 shadow-[0_0_25px_rgba(0,240,255,0.35)] transition transform hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-synth-cyan focus:outline-none"
          >
            <Play className="w-4 h-4 fill-black" />
            <span>Launch 15-Section Exhibition Mode</span>
          </button>

          <button
            type="button"
            onClick={onExploreLab}
            className="px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-white font-semibold text-sm flex items-center gap-2 transition focus-visible:ring-2 focus-visible:ring-synth-cyan focus:outline-none"
          >
            <FlaskConical className="w-4 h-4 text-silk-gold" />
            <span>Interactive Science Sandbox</span>
          </button>

          <button
            type="button"
            onClick={onExploreSection1}
            className="px-5 py-3 rounded-xl bg-slate-900/60 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white font-semibold text-sm flex items-center gap-2 transition focus-visible:ring-2 focus-visible:ring-synth-cyan focus:outline-none"
          >
            <span>Begin Poster (Section 01)</span>
            <ArrowDown className="w-4 h-4" />
          </button>
        </div>

        {/* Key Metrics Banner */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full max-w-4xl mt-8 pt-8 border-t border-slate-800/80">
          <div className="p-3 bg-midnight-900/60 rounded-xl border border-slate-800/70">
            <span className="text-xl sm:text-2xl font-mono font-bold text-silk-gold block">160 MJ/m³</span>
            <span className="text-[11px] text-slate-400 mt-1 block">Toughness Work-to-Fracture</span>
          </div>
          <div className="p-3 bg-midnight-900/60 rounded-xl border border-slate-800/70">
            <span className="text-xl sm:text-2xl font-mono font-bold text-synth-cyan block">1.3 g/cm³</span>
            <span className="text-[11px] text-slate-400 mt-1 block">Low Fiber Density</span>
          </div>
          <div className="p-3 bg-midnight-900/60 rounded-xl border border-slate-800/70">
            <span className="text-xl sm:text-2xl font-mono font-bold text-bio-mint block">30% Strain</span>
            <span className="text-[11px] text-slate-400 mt-1 block">Plastic Elongation Capacity</span>
          </div>
          <div className="p-3 bg-midnight-900/60 rounded-xl border border-slate-800/70">
            <span className="text-xl sm:text-2xl font-mono font-bold text-white block">15 Sections</span>
            <span className="text-[11px] text-slate-400 mt-1 block">Exhibition Presentation System</span>
          </div>
        </div>
      </div>
    </div>
  );
};
