import React, { useState } from 'react';
import {
  Layers,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  Sparkles,
  Shield,
  HeartPulse,
  Dna,
  ArrowRight,
  Info,
  CheckCircle2,
  AlertCircle,
  Activity,
  Play,
  Pause
} from 'lucide-react';

// =========================================================================
// COMPONENT A: MICROSCOPIC FIBRE CUTAWAY & MOLECULAR ORGANISATION EXPLORER
// =========================================================================
export const MicroscopicFibreExplorer: React.FC = () => {
  const [viewMode, setViewMode] = useState<'overview' | 'cross-section' | 'nanoscale'>('overview');
  const [activeDomain, setActiveDomain] = useState<string>('beta-sheet');
  const [isStrained, setIsStrained] = useState<boolean>(false);

  const domains = {
    'outer-skin': {
      title: "Outer Glycoprotein / Lipid Cuticle (~20 nm)",
      category: "Surface Boundary",
      desc: "A thin hydrophobic coating protecting internal structural fibrils from environmental water absorption and fungal attack.",
      role: "Environmental sealing & moisture resistance without adding bulk."
    },
    'core-nanofibrils': {
      title: "Axially Aligned Nanofibrils (20–100 nm)",
      category: "Mesoscale Structure",
      desc: "Thousands of parallel nanofibrils packed densely along the drawing axis, providing anisotropic tensile strength.",
      role: "Transmits axial loads smoothly across the fiber cross-section."
    },
    'beta-sheet': {
      title: "Poly-Alanine β-Sheet Nanocrystals (2–5 nm)",
      category: "Rigid Crosslinks",
      desc: "Hydrophobic anti-parallel beta-sheets crosslinked by dense hydrogen bonds. Nanoconfined to 2–5 nm to prevent brittle fracture.",
      role: "Confers extreme tensile strength (~1.3 GPa) and high Young's modulus."
    },
    'amorphous-matrix': {
      title: "Glycine-Rich Amorphous Coils (GPGXX Motifs)",
      category: "Elastic Springs",
      desc: "Disordered, rubber-like molecular coils and beta-turn spirals filling 60–70% of the fiber volume.",
      role: "Provides 30% extensibility and absorbs work through sacrificial bond unfolding."
    }
  };

  const current = domains[activeDomain as keyof typeof domains] || domains['beta-sheet'];

  return (
    <div className="bg-midnight-900/90 border border-slate-800 rounded-2xl p-6 backdrop-blur-md">
      {/* Header Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-silk-gold animate-pulse"></span>
            <h3 className="text-base font-bold text-white tracking-wide">
              Microscopic Spider Silk: Cutaway & Molecular Architecture
            </h3>
          </div>
          <p className="text-xs text-slate-400 mt-0.5">
            Click view levels or internal regions to zoom from fiber diameter down to crystalline hydrogen bonds.
          </p>
        </div>

        {/* View Level Controls */}
        <div className="flex items-center gap-1.5 bg-midnight-950 p-1.5 rounded-xl border border-slate-800">
          <button type="button"
            onClick={() => setViewMode('overview')}
            className={`px-3 py-1 text-xs font-semibold rounded-lg transition-all ${
              viewMode === 'overview'
                ? 'bg-silk-gold text-black shadow-[0_0_12px_rgba(245,158,11,0.4)]'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Fibre Overview (20µm)
          </button>
          <button type="button"
            onClick={() => setViewMode('cross-section')}
            className={`px-3 py-1 text-xs font-semibold rounded-lg transition-all ${
              viewMode === 'cross-section'
                ? 'bg-synth-cyan text-black shadow-[0_0_12px_rgba(0,240,255,0.4)]'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Cutaway Cross-Section
          </button>
          <button type="button"
            onClick={() => setViewMode('nanoscale')}
            className={`px-3 py-1 text-xs font-semibold rounded-lg transition-all ${
              viewMode === 'nanoscale'
                ? 'bg-bio-emerald text-black shadow-[0_0_12px_rgba(16,185,129,0.4)]'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Nanoscale Matrix (2nm)
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        {/* Interactive Visual Canvas Area */}
        <div className="lg:col-span-8 relative aspect-video max-h-[340px] bg-midnight-950 rounded-xl overflow-hidden border border-slate-800 flex items-center justify-center p-4">
          {/* LEVEL 1: OVERVIEW */}
          {viewMode === 'overview' && (
            <div className="relative w-full h-full flex flex-col items-center justify-center">
              <div
                onClick={() => setViewMode('cross-section')}
                className="cursor-pointer group relative w-4/5 h-16 bg-gradient-to-r from-amber-600 via-yellow-400 to-amber-600 rounded-full shadow-[0_0_35px_rgba(245,158,11,0.5)] flex items-center justify-center transition-transform hover:scale-102"
              >
                <span className="text-xs font-mono font-bold text-black uppercase tracking-wider flex items-center gap-2">
                  <ZoomIn className="w-4 h-4" /> Click to Reveal Internal Cross-Section
                </span>
                {/* Hotspot indicator */}
                <span className="absolute -top-3 right-1/4 px-2 py-0.5 rounded-full bg-synth-cyan text-black text-[10px] font-mono font-bold animate-bounce">
                  Cutaway Point
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-6 text-center max-w-md">
                Continuous dragline filament (~2.5–4.5 µm diameter). Highly smooth cylindrical profile optimized for aerodynamic tension in orb webs.
              </p>
            </div>
          )}

          {/* LEVEL 2: CUTAWAY CROSS-SECTION */}
          {viewMode === 'cross-section' && (
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Concentric layered cutaway cylinder */}
              <div className="relative w-56 h-56 rounded-full border-4 border-amber-500/80 bg-midnight-900 shadow-[0_0_30px_rgba(245,158,11,0.3)] flex items-center justify-center">
                {/* Outer Cuticle Ring */}
                <button type="button"
                  onClick={() => setActiveDomain('outer-skin')}
                  className={`absolute inset-2 rounded-full border-2 border-dashed transition-all ${
                    activeDomain === 'outer-skin' ? 'border-amber-400 bg-amber-400/20' : 'border-amber-600/40 hover:border-amber-400'
                  }`}
                  title="Outer Cuticle"
                ></button>

                {/* Core Fibril Matrix */}
                <div
                  onClick={() => setActiveDomain('core-nanofibrils')}
                  className="w-36 h-36 rounded-full bg-slate-900 border-2 border-cyan-500/60 flex flex-wrap items-center justify-center gap-1.5 p-2 cursor-pointer hover:border-cyan-400 transition"
                >
                  {[...Array(16)].map((_, i) => (
                    <div
                      key={i}
                      className="w-4 h-4 rounded-full bg-gradient-to-tr from-cyan-600 to-blue-400 shadow-sm opacity-80"
                    ></div>
                  ))}
                </div>

                {/* Zoom to Nanoscale Prompt */}
                <button type="button"
                  onClick={() => setViewMode('nanoscale')}
                  className="absolute bottom-2 px-3 py-1 bg-synth-cyan/90 text-black text-[10px] font-bold rounded-full shadow hover:bg-cyan-300 transition flex items-center gap-1"
                >
                  <ZoomIn className="w-3 h-3" /> Zoom to Nanocrystals
                </button>
              </div>

              {/* Hotspot callout tags */}
              <div className="absolute top-4 left-6 text-[11px] font-mono text-amber-300 bg-midnight-900/90 px-2 py-1 rounded border border-amber-800">
                Outer Cuticle (Lipid Sheath)
              </div>
              <div className="absolute bottom-4 right-6 text-[11px] font-mono text-cyan-300 bg-midnight-900/90 px-2 py-1 rounded border border-cyan-800">
                Core Nanofibril Array (~50nm)
              </div>
            </div>
          )}

          {/* LEVEL 3: NANOSCALE MATRIX */}
          {viewMode === 'nanoscale' && (
            <div className="relative w-full h-full flex flex-col items-center justify-center gap-3">
              {/* Dynamic Strain Toggle */}
              <div className="flex items-center gap-2 bg-midnight-900/90 px-3 py-1.5 rounded-xl border border-slate-700">
                <span className="text-[11px] font-mono text-slate-300">Cooperative Mechanics:</span>
                <button type="button"
                  onClick={() => setIsStrained(!isStrained)}
                  className={`px-2.5 py-0.5 rounded-lg text-xs font-mono font-bold transition ${
                    isStrained
                      ? 'bg-amber-500 text-black shadow-[0_0_10px_rgba(245,158,11,0.5)]'
                      : 'bg-slate-800 text-slate-300 hover:text-white'
                  }`}
                >
                  {isStrained ? 'Under Load (30% Strain) — ACTIVE' : 'Resting State (0% Load) — SIMULATE'}
                </button>
              </div>

              <div className="grid grid-cols-2 gap-4 w-full max-w-md">
                {/* Beta sheet crystal block */}
                <button type="button"
                  onClick={() => setActiveDomain('beta-sheet')}
                  className={`p-3 rounded-xl border text-center transition-all ${
                    activeDomain === 'beta-sheet'
                      ? 'bg-cyan-950 border-synth-cyan shadow-[0_0_15px_rgba(0,240,255,0.4)]'
                      : 'bg-midnight-900 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <span className="text-[10px] font-mono text-cyan-400 block">Rigid Phase (Anchors)</span>
                  <div className="flex flex-col gap-1 my-2">
                    <div className={`h-1.5 bg-synth-cyan rounded-full transition-all ${isStrained ? 'shadow-[0_0_8px_#00f0ff]' : ''}`}></div>
                    <div className={`h-1.5 bg-synth-cyan rounded-full transition-all ${isStrained ? 'shadow-[0_0_8px_#00f0ff]' : ''}`}></div>
                    <div className={`h-1.5 bg-synth-cyan rounded-full transition-all ${isStrained ? 'shadow-[0_0_8px_#00f0ff]' : ''}`}></div>
                  </div>
                  <span className="text-xs font-bold text-white">β-Sheet Nanocrystal</span>
                  <span className="text-[10px] text-slate-400 block mt-0.5">
                    {isStrained ? 'Anchoring & Resisting Fracture' : '2–5 nm Confinement'}
                  </span>
                </button>

                {/* Amorphous glycine coil */}
                <button type="button"
                  onClick={() => setActiveDomain('amorphous-matrix')}
                  className={`p-3 rounded-xl border text-center transition-all ${
                    activeDomain === 'amorphous-matrix'
                      ? 'bg-amber-950 border-silk-gold shadow-[0_0_15px_rgba(245,158,11,0.4)]'
                      : 'bg-midnight-900 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <span className="text-[10px] font-mono text-silk-gold block">Flexible Phase (Springs)</span>
                  <div className={`h-6 flex items-center justify-center text-silk-gold text-lg tracking-widest font-mono transition-all duration-300 ${isStrained ? 'scale-x-150 text-amber-300' : ''}`}>
                    {isStrained ? '— ~ — ~ —' : '~∿∿∿~'}
                  </div>
                  <span className="text-xs font-bold text-white">Amorphous Glycine Coils</span>
                  <span className="text-[10px] text-slate-400 block mt-0.5">
                    {isStrained ? 'Uncoiling & Sacrificial H-Bonds Rupturing' : '30% Strain Springs'}
                  </span>
                </button>
              </div>

              <div className="text-[11px] text-slate-400 text-center font-mono">
                {isStrained
                  ? 'Cooperative deformation active: Glycine coils uncoil to absorb kinetic work while β-sheets lock to provide 1.3 GPa strength.'
                  : 'Click either domain above or toggle "SIMULATE" to watch cooperative deformation under load.'}
              </div>
            </div>
          )}

          {/* Reset View Button */}
          {viewMode !== 'overview' && (
            <button type="button"
              onClick={() => {
                setViewMode('overview');
                setActiveDomain('beta-sheet');
                setIsStrained(false);
              }}
              className="absolute top-3 right-3 px-2.5 py-1 text-xs font-mono rounded-lg bg-slate-800 text-slate-300 hover:text-white border border-slate-700 flex items-center gap-1.5 transition"
            >
              <RotateCcw className="w-3 h-3" /> Reset View
            </button>
          )}
        </div>

        {/* Informational Inspector Panel */}
        <div className="lg:col-span-4 flex flex-col gap-3">
          <div className="bg-midnight-950 p-4 rounded-xl border border-slate-800">
            <span className="text-[10px] font-mono uppercase text-silk-gold block">
              {current.category}
            </span>
            <h4 className="text-base font-bold text-white mt-0.5">{current.title}</h4>

            <p className="text-xs text-slate-300 mt-2.5 leading-relaxed">
              {current.desc}
            </p>

            <div className="mt-3.5 pt-3 border-t border-slate-800/80">
              <span className="text-[10px] font-mono text-synth-cyan uppercase block">
                Mechanical Engineering Role:
              </span>
              <p className="text-xs text-slate-200 mt-0.5 font-medium leading-snug">
                {current.role}
              </p>
            </div>

            <div className="mt-4 p-2.5 bg-slate-900/80 rounded-lg border border-slate-800 flex items-start gap-2">
              <Info className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
              <p className="text-[10px] text-slate-400 leading-normal">
                <strong>Scientific Note:</strong> Conceptual diagram based on atomistic molecular dynamics simulations (Buehler et al., Nature Materials 2010), clearly distinguished from direct microscopy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// =========================================================================
// COMPONENT B: HOW THE FIBRE RESPONDS TO FORCE (TENSILE STRETCHING SIMULATOR)
// =========================================================================
export const FibreForceStretchingSim: React.FC = () => {
  const [appliedStress, setAppliedStress] = useState<number>(0.4); // 0 to 1.5 GPa

  // Calculate physical responses based on applied stress
  const maxStress = 1.35; // GPa ultimate tensile strength
  const isBroken = appliedStress >= maxStress;

  // Strain calculation:
  // 0 to 0.3 GPa: Linear elastic (0 to 3% strain)
  // 0.3 to 1.35 GPa: Plastic uncoiling (3% to 30% strain)
  let strainPercent = 0;
  let regime = "Initial Linear Elastic (Young's Modulus E ≈ 11 GPa)";
  let energyAbsorption = 0;

  if (isBroken) {
    strainPercent = 32;
    regime = "CATASTROPHIC FRACTURE (Ultimate Tensile Limit Exceeded)";
    energyAbsorption = 165;
  } else if (appliedStress <= 0.3) {
    strainPercent = (appliedStress / 0.3) * 3.5;
    regime = "Elastic Regime: Hydrogen bonds stretched elastically (fully reversible)";
    energyAbsorption = Math.round(appliedStress * 15);
  } else {
    const plasticRatio = (appliedStress - 0.3) / (maxStress - 0.3);
    strainPercent = 3.5 + Math.pow(plasticRatio, 0.75) * 26.5;
    regime = "Plastic Regime: Glycine amorphous coils uncoiling; sacrificial H-bonds rupturing progressively";
    energyAbsorption = Math.round(15 + plasticRatio * 150);
  }

  // Visual fiber dimensions: width elongates, thickness thins due to Poisson's ratio
  const visualLength = isBroken ? 200 : 200 + strainPercent * 5;
  const visualThickness = isBroken ? 0 : Math.max(4, 18 - (strainPercent / 30) * 8);

  return (
    <div className="bg-midnight-900/90 border border-slate-800 rounded-2xl p-6 backdrop-blur-md">
      <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
        <div>
          <div className="flex items-center gap-2">
            <Activity className="w-5 h-5 text-synth-cyan" />
            <h3 className="text-base font-bold text-white tracking-wide">
              Interactive Tensile Loading & Strain Energy Response
            </h3>
          </div>
          <p className="text-xs text-slate-400 mt-0.5">
            Drag the tension slider to observe molecular deformation, Poisson necking, and work-to-fracture energy absorption.
          </p>
        </div>

        <button type="button"
          onClick={() => setAppliedStress(0.4)}
          className="px-3 py-1 text-xs font-mono rounded-lg bg-slate-800 text-slate-300 hover:text-white border border-slate-700 flex items-center gap-1.5 transition"
        >
          <RotateCcw className="w-3 h-3" /> Reset Load
        </button>
      </div>

      {/* Slider Control */}
      <div className="bg-midnight-950 p-4 rounded-xl border border-slate-800 mb-6">
        <div className="flex items-center justify-between text-xs text-slate-300 mb-2">
          <span>0.0 GPa (Resting)</span>
          <span className="font-mono font-bold text-synth-cyan text-sm">
            Applied Tensile Load: {appliedStress.toFixed(2)} GPa
          </span>
          <span>1.5 GPa (Failure)</span>
        </div>
        <input
          type="range"
          min="0"
          max="1.5"
          step="0.05"
          value={appliedStress}
          aria-label="Applied Tensile Load in GPa"
          onChange={(e) => setAppliedStress(parseFloat(e.target.value))}
          className="w-full h-2.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        {/* Dynamic Animated Fiber View */}
        <div className="lg:col-span-8 relative aspect-video max-h-[300px] bg-midnight-950 rounded-xl overflow-hidden border border-slate-800 flex items-center justify-center p-6">
          {/* Tension clamps */}
          <div className="absolute left-6 w-10 h-32 bg-slate-800 border-2 border-slate-600 rounded-lg flex items-center justify-center shadow-lg">
            <span className="text-[9px] font-mono text-slate-400 transform -rotate-90">FIXED</span>
          </div>
          <div className="absolute right-6 w-10 h-32 bg-slate-800 border-2 border-slate-600 rounded-lg flex items-center justify-center shadow-lg">
            <span className="text-[9px] font-mono text-slate-400 transform -rotate-90">PULL &gt;</span>
          </div>

          {/* Tensile Force Arrows */}
          {!isBroken && (
            <div className="absolute right-20 flex items-center gap-1 text-amber-400 font-mono text-xs animate-pulse">
              <span>F = {(appliedStress * 100).toFixed(0)} MPa</span>
              <ArrowRight className="w-5 h-5 text-amber-400" />
            </div>
          )}

          {/* The Fiber Graphic */}
          {!isBroken ? (
            <div
              className="bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500 rounded-full shadow-[0_0_20px_rgba(245,158,11,0.6)] transition-all duration-150 flex items-center justify-center"
              style={{
                width: `${visualLength}px`,
                height: `${visualThickness}px`
              }}
            ></div>
          ) : (
            /* Ruptured Fiber Ends */
            <div className="flex items-center gap-16">
              <div className="w-24 h-4 bg-gradient-to-r from-amber-600 to-rose-600 rounded-l-full shadow-lg"></div>
              <div className="text-rose-500 font-bold font-mono text-xs animate-bounce">
                RUPTURE (1.35 GPa)
              </div>
              <div className="w-24 h-4 bg-gradient-to-r from-rose-600 to-amber-600 rounded-r-full shadow-lg"></div>
            </div>
          )}

          <div className="absolute bottom-3 left-6 right-6 flex items-center justify-between text-[11px] font-mono text-slate-400 bg-midnight-900/90 px-3 py-1.5 rounded-lg border border-slate-800">
            <span>Strain ε: {strainPercent.toFixed(1)}%</span>
            <span>Energy Absorbed: {energyAbsorption} MJ/m³</span>
          </div>
        </div>

        {/* Live Engineering Telemetry */}
        <div className="lg:col-span-4 flex flex-col gap-3">
          <div className="bg-midnight-950 p-4 rounded-xl border border-slate-800">
            <span className="text-[10px] font-mono uppercase text-synth-cyan block">
              Deformation State Analysis
            </span>
            <h4 className={`text-sm font-bold mt-1 ${isBroken ? 'text-rose-400' : 'text-white'}`}>
              {regime}
            </h4>

            <div className="grid grid-cols-2 gap-2 mt-4 text-xs font-mono">
              <div className="bg-slate-900 p-2.5 rounded-lg border border-slate-800">
                <span className="text-[10px] text-slate-400 block font-sans">Tensile Stress</span>
                <span className="font-bold text-white">{appliedStress.toFixed(2)} GPa</span>
              </div>
              <div className="bg-slate-900 p-2.5 rounded-lg border border-slate-800">
                <span className="text-[10px] text-slate-400 block font-sans">Elongation (Strain)</span>
                <span className="font-bold text-synth-cyan">{strainPercent.toFixed(1)}%</span>
              </div>
              <div className="bg-slate-900 p-2.5 rounded-lg border border-slate-800 col-span-2">
                <span className="text-[10px] text-slate-400 block font-sans">Work-to-Fracture Area (∫ σ dε)</span>
                <span className="text-base font-bold text-silk-gold">{energyAbsorption} MJ/m³</span>
              </div>
            </div>

            {/* Distinct Physical Properties Explanation */}
            <div className="mt-4 pt-3 border-t border-slate-800 space-y-1.5 text-[10px]">
              <span className="font-mono text-slate-400 uppercase tracking-wider block font-bold">
                Physical Properties Distinction:
              </span>
              <div className="flex items-start gap-1.5 text-slate-300">
                <span className="text-synth-cyan font-bold shrink-0">Strength:</span>
                <span>Peak stress resisting permanent deformation or break (~1.35 GPa).</span>
              </div>
              <div className="flex items-start gap-1.5 text-slate-300">
                <span className="text-amber-400 font-bold shrink-0">Toughness:</span>
                <span>Total kinetic energy absorbed before rupture (~160 MJ/m³).</span>
              </div>
              <div className="flex items-start gap-1.5 text-slate-300">
                <span className="text-bio-mint font-bold shrink-0">Flexibility:</span>
                <span>Low bending stiffness allowing tight knots and pliable textiles.</span>
              </div>
              <div className="flex items-start gap-1.5 text-slate-300">
                <span className="text-purple-400 font-bold shrink-0">Energy Absorption:</span>
                <span>Volumetric dissipation via sacrificial molecular uncoiling.</span>
              </div>
            </div>

            <div className="mt-3 pt-2 border-t border-slate-800 text-[9px] text-slate-500 italic">
              * Educational schematic model illustrating physical mechanics; not certified experimental measurement values.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// =========================================================================
// COMPONENT C: ULTRA-LIGHTWEIGHT PROTECTIVE VEST LAYERED INSPECTOR
// =========================================================================
export const ProtectiveVestLayerInspector: React.FC = () => {
  const [activeLayer, setActiveLayer] = useState<number>(2); // 1 = Strike Face, 2 = 3D Energy Interlock, 3 = Backing
  const [showShockwave, setShowShockwave] = useState<boolean>(true);
  const [vestViewMode, setVestViewMode] = useState<'layers' | 'weave' | 'comparison'>('layers');

  const layers = [
    {
      num: 1,
      name: "Strike-Face Primary Textile (Outer Ply)",
      material: "High-twist Micro-Denier Bio-Silk / UHMWPE Hybrid",
      thickness: "0.8 mm",
      role: "Blunts and mushrooms projectile tip; rapidly initiates transverse sonic energy dispersion (c = √(E/ρ) ≈ 3,200 m/s).",
      waveBehavior: "High acoustic velocity reflects initial impact shockwave."
    },
    {
      num: 2,
      name: "Intermediate 3D Energy-Absorbing Matrix (Core Plies)",
      material: "Multi-Axial Orthogonal Woven Spidroin Weave",
      thickness: "2.4 mm",
      role: "Coulomb yarn-to-yarn friction converts 35% kinetic energy directly to micro-heat; 30% plastic strain plateau dissipates work-to-fracture.",
      waveBehavior: "Forms expanding tension cone across hundreds of orthogonal yarns."
    },
    {
      num: 3,
      name: "Trauma Management Backing (Inner Liner)",
      material: "Compliant High-Toughness Silk Damping Composite",
      thickness: "1.2 mm",
      role: "Spreads residual momentum across the torso to restrict blunt backface deformation below the NIJ-0101.07 threshold (<44 mm).",
      waveBehavior: "Prevents localized blunt organ trauma in underlying chest wall."
    }
  ];

  const current = layers[activeLayer - 1];

  return (
    <div className="bg-midnight-900/90 border border-slate-800 rounded-2xl p-6 backdrop-blur-md">
      <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
        <div>
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-synth-cyan" />
            <h3 className="text-base font-bold text-white tracking-wide">
              Ultra-Lightweight Protective Vest & Ballistic Architecture
            </h3>
          </div>
          <p className="text-xs text-slate-400 mt-0.5">
            Explore multi-ply textile cutaway, orthogonal yarn weave friction, and comparative material benchmarks.
          </p>
        </div>

        {/* View Mode Switcher */}
        <div className="flex items-center gap-1.5 bg-midnight-950 p-1.5 rounded-xl border border-slate-800">
          <button type="button"
            onClick={() => setVestViewMode('layers')}
            className={`px-3 py-1 text-xs font-semibold rounded-lg transition-all ${
              vestViewMode === 'layers'
                ? 'bg-synth-cyan text-black shadow-[0_0_12px_rgba(0,240,255,0.4)]'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            3-Layer Cutaway
          </button>
          <button type="button"
            onClick={() => setVestViewMode('weave')}
            className={`px-3 py-1 text-xs font-semibold rounded-lg transition-all ${
              vestViewMode === 'weave'
                ? 'bg-silk-gold text-black shadow-[0_0_12px_rgba(245,158,11,0.4)]'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Fibre Weave & Friction
          </button>
          <button type="button"
            onClick={() => setVestViewMode('comparison')}
            className={`px-3 py-1 text-xs font-semibold rounded-lg transition-all ${
              vestViewMode === 'comparison'
                ? 'bg-bio-emerald text-black shadow-[0_0_12px_rgba(16,185,129,0.4)]'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Materials Comparison
          </button>
        </div>
      </div>

      {/* Layer Tabs (Shown when in layers view mode) */}
      {vestViewMode === 'layers' && (
        <div className="grid grid-cols-3 gap-2 mb-5">
          {layers.map((l) => (
            <button type="button"
              key={l.num}
              onClick={() => setActiveLayer(l.num)}
              className={`p-3 rounded-xl border text-left transition-all ${
                activeLayer === l.num
                  ? 'bg-slate-800/90 border-synth-cyan shadow-[0_0_15px_rgba(0,240,255,0.2)]'
                  : 'bg-midnight-950 border-slate-800 hover:border-slate-700 text-slate-400'
              }`}
            >
              <span className="text-[10px] font-mono text-synth-cyan block">Layer 0{l.num}</span>
              <span className="text-xs font-bold block truncate mt-0.5 text-white">{l.name.split(' ')[0]} {l.name.split(' ')[1]}</span>
            </button>
          ))}
        </div>
      )}

      {/* VIEW 1: 3-LAYER CUTAWAY */}
      {vestViewMode === 'layers' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          <div className="lg:col-span-8 relative aspect-video max-h-[320px] bg-midnight-950 rounded-xl overflow-hidden border border-slate-800 flex items-center justify-center p-6">
            <svg className="w-full h-full" viewBox="0 0 440 240">
              <path d="M 20 120 L 70 110 L 80 120 L 70 130 Z" fill="#94a3b8" stroke="#ffffff" strokeWidth="1.5" />
              <text x="30" y="100" fill="#94a3b8" fontSize="10" fontFamily="monospace">Incident Impactor</text>

              {/* Layer 1 */}
              <g onClick={() => setActiveLayer(1)} className="cursor-pointer">
                <rect
                  x="90"
                  y="30"
                  width="30"
                  height="180"
                  rx="6"
                  fill={activeLayer === 1 ? '#0284c7' : '#0f172a'}
                  stroke={activeLayer === 1 ? '#00f0ff' : '#334155'}
                  strokeWidth={activeLayer === 1 ? '2.5' : '1'}
                />
                <text x="105" y="224" fill="#38bdf8" fontSize="9" textAnchor="middle" fontFamily="monospace">L1 Strike</text>
              </g>

              {/* Layer 2 */}
              <g onClick={() => setActiveLayer(2)} className="cursor-pointer">
                <rect
                  x="135"
                  y="20"
                  width="60"
                  height="200"
                  rx="8"
                  fill={activeLayer === 2 ? '#0369a1' : '#1e293b'}
                  stroke={activeLayer === 2 ? '#00f0ff' : '#475569'}
                  strokeWidth={activeLayer === 2 ? '2.5' : '1'}
                />
                <text x="165" y="232" fill="#38bdf8" fontSize="9" textAnchor="middle" fontFamily="monospace">L2 Core</text>
              </g>

              {/* Layer 3 */}
              <g onClick={() => setActiveLayer(3)} className="cursor-pointer">
                <rect
                  x="210"
                  y="30"
                  width="40"
                  height="180"
                  rx="6"
                  fill={activeLayer === 3 ? '#075985' : '#0f172a'}
                  stroke={activeLayer === 3 ? '#00f0ff' : '#334155'}
                  strokeWidth={activeLayer === 3 ? '2.5' : '1'}
                />
                <text x="230" y="224" fill="#38bdf8" fontSize="9" textAnchor="middle" fontFamily="monospace">L3 Backing</text>
              </g>

              {/* Shockwave Radial Vectors */}
              {showShockwave && (
                <g className="animate-pulse">
                  <line x1="90" y1="120" x2="165" y2="40" stroke="#00f0ff" strokeWidth="2" strokeDasharray="3 3" />
                  <line x1="90" y1="120" x2="165" y2="200" stroke="#00f0ff" strokeWidth="2" strokeDasharray="3 3" />
                  <line x1="165" y1="120" x2="250" y2="60" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="3 3" />
                  <line x1="165" y1="120" x2="250" y2="180" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="3 3" />
                  <circle cx="90" cy="120" r="14" fill="none" stroke="#f59e0b" strokeWidth="2" />
                  <circle cx="90" cy="120" r="28" fill="none" stroke="#00f0ff" strokeWidth="1.5" opacity="0.6" />
                </g>
              )}

              <path d="M 280 20 Q 310 120 280 220" fill="none" stroke="#64748b" strokeWidth="3" strokeDasharray="4 4" />
              <text x="320" y="125" fill="#64748b" fontSize="10" fontFamily="sans-serif">Torso Barrier</text>
            </svg>

            <div className="absolute bottom-2 left-4 text-[10px] font-mono text-slate-400 bg-midnight-900/90 px-2 py-1 rounded border border-slate-800">
              Active: Layer 0{current.num} ({current.thickness})
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col gap-3">
            <div className="bg-midnight-950 p-4 rounded-xl border border-slate-800">
              <span className="text-[10px] font-mono uppercase text-synth-cyan block">
                Layer 0{current.num} Technical Specification
              </span>
              <h4 className="text-sm font-bold text-white mt-0.5">{current.name}</h4>

              <div className="mt-3 text-xs space-y-2">
                <div className="bg-slate-900 p-2 rounded border border-slate-800">
                  <span className="text-[10px] text-slate-400 block">Engineered Material:</span>
                  <span className="text-white font-medium">{current.material}</span>
                </div>
                <p className="text-slate-300 leading-relaxed text-xs">
                  {current.role}
                </p>
              </div>

              <div className="mt-3 p-2 bg-cyan-950/40 rounded border border-cyan-800/60 text-[10px] text-cyan-200">
                <strong>Wave Dynamics: </strong>{current.waveBehavior}
              </div>

              <div className="mt-3 text-[10px] text-slate-400 flex items-start gap-1.5">
                <AlertCircle className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                <span>Conceptual multi-layer energy dispersion schematic. Official body armor requires NIJ-0101.07 ballistic certification.</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* VIEW 2: ORTHOGONAL FIBRE WEAVE */}
      {vestViewMode === 'weave' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          <div className="lg:col-span-8 relative aspect-video max-h-[320px] bg-midnight-950 rounded-xl overflow-hidden border border-slate-800 flex items-center justify-center p-6">
            <svg className="w-full h-full" viewBox="0 0 400 220">
              {/* Warp yarns (vertical) */}
              {[60, 110, 160, 210, 260, 310].map((x) => (
                <rect key={`warp-${x}`} x={x} y="20" width="20" height="180" rx="4" fill="#0369a1" stroke="#00f0ff" strokeWidth="1" opacity="0.8" />
              ))}
              {/* Weft yarns (horizontal interlaced) */}
              {[40, 80, 120, 160].map((y, idx) => (
                <rect key={`weft-${y}`} x="40" y={y} width="310" height="18" rx="4" fill={idx % 2 === 0 ? "#b45309" : "#d97706"} stroke="#fbbf24" strokeWidth="1" opacity="0.9" />
              ))}
              {/* Friction hotspot nodes */}
              {[60, 160, 260].map((x) => (
                <circle key={`fric-${x}`} cx={x + 10} cy="129" r="6" fill="#ef4444" className="animate-ping opacity-75" />
              ))}
              <text x="200" y="210" textAnchor="middle" fill="#94a3b8" fontSize="10" fontFamily="monospace">
                Yarn-to-Yarn Coulomb Friction Nodes (Transforms Kinetic Energy to Micro-Heat)
              </text>
            </svg>
            <div className="absolute top-3 left-4 text-[10px] font-mono text-silk-gold bg-midnight-900/90 px-2 py-1 rounded border border-amber-800">
              Sonic Velocity: c = √(E/ρ) ≈ 3,200 m/s
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col gap-3">
            <div className="bg-midnight-950 p-4 rounded-xl border border-slate-800">
              <span className="text-[10px] font-mono uppercase text-silk-gold block">
                Fibre Weave Mechanics
              </span>
              <h4 className="text-sm font-bold text-white mt-0.5">3D Multi-Axial Orthogonal Interlock</h4>
              <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                When a high-velocity projectile strikes the fabric, yarn decrimping and transverse acoustic waves travel along the fiber axis at over 3,000 m/s. Inter-fiber Coulomb friction dissipates up to 35% of bullet energy as localized micro-heat before individual filaments can snap.
              </p>
              <div className="mt-3 p-2 bg-slate-900 rounded border border-slate-800 text-[10px] text-slate-400">
                <strong>Toughness Synergy:</strong> High elongation (30%) prevents catastrophic through-penetration, letting the fabric stretch into a deep energy-absorbing tension cone.
              </div>
            </div>
          </div>
        </div>
      )}

      {/* VIEW 3: MATERIALS BENCHMARK COMPARISON */}
      {vestViewMode === 'comparison' && (
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs font-mono border-collapse bg-midnight-950 rounded-xl overflow-hidden border border-slate-800">
            <thead>
              <tr className="bg-slate-900/90 text-slate-400 border-b border-slate-800">
                <th className="p-3">Material</th>
                <th className="p-3">Density (g/cm³)</th>
                <th className="p-3">Strength (GPa)</th>
                <th className="p-3">Elongation (%)</th>
                <th className="p-3">Toughness (MJ/m³)</th>
                <th className="p-3">Critical Tactical Trade-off</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60">
              <tr className="bg-cyan-950/20 text-cyan-200 font-bold">
                <td className="p-3 text-white flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-synth-cyan"></span> Bio-Silk Hybrid
                </td>
                <td className="p-3">1.30</td>
                <td className="p-3">1.3–1.4</td>
                <td className="p-3 text-amber-300">30–35%</td>
                <td className="p-3 text-silk-gold font-bold">160</td>
                <td className="p-3 font-normal text-slate-300">Requires high-volume bio-production scale-up</td>
              </tr>
              <tr className="text-slate-300">
                <td className="p-3 text-white">Kevlar® 29 (Aramid)</td>
                <td className="p-3">1.44</td>
                <td className="p-3 font-bold text-white">3.0</td>
                <td className="p-3 text-rose-400">3.5% (Brittle)</td>
                <td className="p-3">50</td>
                <td className="p-3 text-slate-400">Degrades under UV sunlight & moisture</td>
              </tr>
              <tr className="text-slate-300">
                <td className="p-3 text-white">Dyneema® (UHMWPE)</td>
                <td className="p-3 text-bio-mint">0.97</td>
                <td className="p-3 font-bold text-white">3.4</td>
                <td className="p-3 text-rose-400">3.8%</td>
                <td className="p-3">45</td>
                <td className="p-3 text-slate-400">Low melting point (~135°C), creeps under friction heat</td>
              </tr>
              <tr className="text-slate-300">
                <td className="p-3 text-white">Structural Armor Steel</td>
                <td className="p-3 text-rose-400">7.85 (Heavy)</td>
                <td className="p-3">1.2</td>
                <td className="p-3">12.0%</td>
                <td className="p-3 text-rose-400">6</td>
                <td className="p-3 text-slate-400">6× heavier; limits infantry endurance and speed</td>
              </tr>
            </tbody>
          </table>
          <div className="mt-3 text-[10px] text-slate-400 text-center">
            * Note: Values compiled from peer-reviewed literature. Real-world armor effectiveness requires standardized testing under NIJ-0101.07.
          </div>
        </div>
      )}
    </div>
  );
};

// =========================================================================
// COMPONENT D: BIODEGRADABLE SURGICAL SUTURES & TISSUE HEALING SIMULATOR
// =========================================================================
export const SurgicalSutureClosureSim: React.FC = () => {
  const [sutureViewMode, setSutureViewMode] = useState<'closure' | 'nanofibril' | 'timeline'>('closure');
  const [woundTension, setWoundTension] = useState<number>(85); // 0 = open, 100 = fully closed
  const [activeDay, setActiveDay] = useState<number>(14);

  // Degradation metrics
  const sutureStrength = Math.max(0, Math.round(100 - (activeDay / 60) * 100));
  const tissueCollagen = Math.min(100, Math.round((activeDay / 50) * 100));

  return (
    <div className="bg-midnight-900/90 border border-slate-800 rounded-2xl p-6 backdrop-blur-md">
      <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
        <div>
          <div className="flex items-center gap-2">
            <HeartPulse className="w-5 h-5 text-bio-emerald" />
            <h3 className="text-base font-bold text-white tracking-wide">
              Biodegradable Surgical Sutures & Tissue Healing Simulator
            </h3>
          </div>
          <p className="text-xs text-slate-400 mt-0.5">
            Test wound apposition, inspect internal spidroin nanofibril alignment, and simulate 60-day in vivo enzymatic bio-resorption.
          </p>
        </div>

        {/* View Mode Selector */}
        <div className="flex items-center gap-1.5 bg-midnight-950 p-1.5 rounded-xl border border-slate-800">
          <button type="button"
            onClick={() => setSutureViewMode('closure')}
            className={`px-3 py-1 text-xs font-semibold rounded-lg transition-all ${
              sutureViewMode === 'closure'
                ? 'bg-bio-emerald text-black shadow-[0_0_12px_rgba(16,185,129,0.4)]'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Wound Apposition
          </button>
          <button type="button"
            onClick={() => setSutureViewMode('nanofibril')}
            className={`px-3 py-1 text-xs font-semibold rounded-lg transition-all ${
              sutureViewMode === 'nanofibril'
                ? 'bg-synth-cyan text-black shadow-[0_0_12px_rgba(0,240,255,0.4)]'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Filament Micro-Structure
          </button>
          <button type="button"
            onClick={() => setSutureViewMode('timeline')}
            className={`px-3 py-1 text-xs font-semibold rounded-lg transition-all ${
              sutureViewMode === 'timeline'
                ? 'bg-silk-gold text-black shadow-[0_0_12px_rgba(245,158,11,0.4)]'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Resorption Timeline
          </button>
        </div>
      </div>

      {/* VIEW 1: WOUND APPOSITION SIMULATOR */}
      {sutureViewMode === 'closure' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          <div className="lg:col-span-8 relative aspect-video max-h-[300px] bg-midnight-950 rounded-xl overflow-hidden border border-slate-800 flex items-center justify-center p-4">
            <svg className="w-full h-full" viewBox="0 0 400 220">
              <rect x="20" y="30" width="360" height="160" rx="10" fill="#0f172a" stroke="#1e293b" />
              <text x="35" y="50" fill="#64748b" fontSize="10" fontFamily="sans-serif">Epidermis & Dermis</text>

              {/* Left tissue flap */}
              <path
                d={`M 40 40 L ${180 - (100 - woundTension) * 0.4} 40 L ${180 - (100 - woundTension) * 0.4} 170 L 40 170 Z`}
                fill="#1e293b"
                stroke="#334155"
                strokeWidth="2"
              />

              {/* Right tissue flap */}
              <path
                d={`M ${220 + (100 - woundTension) * 0.4} 40 L 360 40 L 360 170 L ${220 + (100 - woundTension) * 0.4} 170 Z`}
                fill="#1e293b"
                stroke="#334155"
                strokeWidth="2"
              />

              {/* Clickable Suture Thread */}
              <g onClick={() => setSutureViewMode('nanofibril')} className="cursor-pointer group">
                <path
                  d={`M 140 100 Q 200 ${100 + (100 - woundTension) * 0.3} 260 100`}
                  fill="none"
                  stroke="#10b981"
                  strokeWidth={Math.max(2, (sutureStrength / 100) * 4.5)}
                  strokeDasharray={sutureStrength < 30 ? "4 4" : "none"}
                  className="transition-all duration-200"
                />
                <circle cx="200" cy="100" r={Math.max(3, (sutureStrength / 100) * 6)} fill="#34d399" stroke="#ffffff" strokeWidth="1.5" />
              </g>

              {/* Collagen healing cross-bridges */}
              {activeDay >= 7 && (
                <g opacity={tissueCollagen / 100}>
                  {[60, 80, 120, 140].map((y) => (
                    <line key={y} x1="170" y1={y} x2="230" y2={y} stroke="#00f0ff" strokeWidth="1.5" strokeDasharray="2 2" />
                  ))}
                </g>
              )}
            </svg>

            <button type="button"
              onClick={() => setSutureViewMode('nanofibril')}
              className="absolute top-3 right-3 px-2 py-1 rounded bg-midnight-900/90 border border-emerald-600/70 text-[10px] font-mono text-bio-mint flex items-center gap-1 hover:bg-emerald-950 transition"
            >
              <ZoomIn className="w-3 h-3" /> Click Thread for Nanoscale Zoom
            </button>

            <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-[11px] font-mono text-slate-400 bg-midnight-900/90 px-3 py-1.5 rounded-lg border border-slate-800">
              <span>Suture Tension: {woundTension}%</span>
              <span>Wound Gap: {((100 - woundTension) * 0.08).toFixed(1)} mm</span>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col gap-3">
            <div className="bg-midnight-950 p-4 rounded-xl border border-slate-800">
              <span className="text-[10px] font-mono uppercase text-bio-mint block">
                Surgical Knot Tension Control
              </span>
              <div className="mt-2 flex items-center justify-between text-xs text-slate-300">
                <span>Loose Margin</span>
                <span className="font-mono font-bold text-white">{woundTension}% Tension</span>
                <span>Approximated</span>
              </div>
              <input
                type="range"
                min="20"
                max="100"
                value={woundTension}
                aria-label="Surgical Knot Tension percentage"
                onChange={(e) => setWoundTension(parseInt(e.target.value, 10))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-500 mt-1"
              />

              <div className="mt-4 pt-3 border-t border-slate-800 space-y-1.5 text-[10px] text-slate-300">
                <span className="font-mono font-bold text-slate-400 uppercase block">Clinical Observation:</span>
                <p>
                  {woundTension > 80
                    ? "Optimal Margin Apposition: Wound edges touch evenly without tissue strangulation, promoting rapid primary intention re-epithelialization."
                    : "Wound Dehiscence Risk: Insufficient suture tension leaves a dead-space gap, slowing healing and increasing bacterial infection probability."}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* VIEW 2: NANOFIBRIL MICRO-STRUCTURE */}
      {sutureViewMode === 'nanofibril' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          <div className="lg:col-span-8 relative aspect-video max-h-[300px] bg-midnight-950 rounded-xl overflow-hidden border border-slate-800 flex items-center justify-center p-6">
            <svg className="w-full h-full" viewBox="0 0 400 200">
              {/* Outer filament boundary */}
              <rect x="50" y="40" width="300" height="120" rx="20" fill="#0f172a" stroke="#10b981" strokeWidth="2" />
              {/* Parallel axially oriented spidroin nanofibrils */}
              {[60, 80, 100, 120, 140].map((y) => (
                <line key={`fibril-${y}`} x1="70" y1={y} x2="330" y2={y} stroke="#34d399" strokeWidth="2.5" strokeDasharray="6 3" />
              ))}
              {/* Hydrophilic enzyme cleavage sites */}
              {[120, 200, 280].map((x) => (
                <g key={`cleave-${x}`}>
                  <circle cx={x} cy="100" r="10" fill="#0284c7" fillOpacity="0.4" stroke="#38bdf8" strokeWidth="1" />
                  <text x={x} y="104" textAnchor="middle" fill="#ffffff" fontSize="9" fontFamily="monospace">Enz</text>
                </g>
              ))}
              <text x="200" y="185" textAnchor="middle" fill="#94a3b8" fontSize="10" fontFamily="monospace">
                Axially Aligned Spidroin Nanofibrils with Endogenous Proteolytic Cleavage Targets
              </text>
            </svg>
            <div className="absolute top-3 left-4 text-[10px] font-mono text-cyan-300 bg-midnight-900/90 px-2 py-1 rounded border border-cyan-800">
              USP 4-0 Monofilament (150 µm)
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col gap-3">
            <div className="bg-midnight-950 p-4 rounded-xl border border-slate-800">
              <span className="text-[10px] font-mono uppercase text-synth-cyan block">
                Fibre Micro-Architecture
              </span>
              <h4 className="text-sm font-bold text-white mt-0.5">Smooth Monofilament Extrusion</h4>
              <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                Unlike rough multifilament braided silks (Bombyx mori) that harbor bacteria in inter-fiber crevices, recombinant bio-silk sutures can be wet-spun as smooth monofilaments. This prevents capillary fluid wicking and lowers tissue drag coefficient by 60%.
              </p>
              <div className="mt-3 p-2 bg-slate-900 rounded border border-slate-800 text-[10px] text-bio-mint">
                <strong>Non-Cytotoxic Breakdown:</strong> Endogenous proteases cleave spidroin into benign glycine and alanine amino acids.
              </div>
            </div>
          </div>
        </div>
      )}

      {/* VIEW 3: IN VIVO RESORPTION TIMELINE */}
      {sutureViewMode === 'timeline' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          <div className="lg:col-span-8 relative aspect-video max-h-[300px] bg-midnight-950 rounded-xl overflow-hidden border border-slate-800 flex flex-col justify-between p-6">
            <div className="flex items-center justify-between text-xs font-mono text-slate-300">
              <span className="text-bio-mint">Suture Tensile Retention: {sutureStrength}%</span>
              <span className="text-synth-cyan">Native Collagen Recovery: {tissueCollagen}%</span>
            </div>

            {/* Dynamic Degradation Cross-Curves SVG */}
            <svg className="w-full h-32" viewBox="0 0 360 120">
              {/* Axes */}
              <line x1="30" y1="10" x2="30" y2="100" stroke="#334155" strokeWidth="1" />
              <line x1="30" y1="100" x2="340" y2="100" stroke="#334155" strokeWidth="1" />
              <text x="25" y="15" fill="#64748b" fontSize="8" textAnchor="end">100%</text>
              <text x="25" y="100" fill="#64748b" fontSize="8" textAnchor="end">0%</text>
              <text x="30" y="112" fill="#64748b" fontSize="8">Day 0</text>
              <text x="180" y="112" fill="#64748b" fontSize="8">Day 30</text>
              <text x="330" y="112" fill="#64748b" fontSize="8">Day 60</text>

              {/* Suture Decay Curve */}
              <path d="M 30 10 Q 180 50 330 100" fill="none" stroke="#10b981" strokeWidth="2.5" />

              {/* Tissue Recovery Curve */}
              <path d="M 30 100 Q 150 70 300 10" fill="none" stroke="#00f0ff" strokeWidth="2.5" />

              {/* Active Day Vertical Line */}
              <line
                x1={30 + (activeDay / 60) * 300}
                y1="10"
                x2={30 + (activeDay / 60) * 300}
                y2="100"
                stroke="#f59e0b"
                strokeWidth="2"
                strokeDasharray="3 3"
              />
              <circle cx={30 + (activeDay / 60) * 300} cy={10 + (1 - sutureStrength / 100) * 90} r="4" fill="#f59e0b" />
            </svg>

            <div className="flex items-center gap-3">
              <span className="text-[10px] font-mono text-slate-400">Day 0</span>
              <input
                type="range"
                min="0"
                max="60"
                value={activeDay}
                aria-label="Suture Resorption Timeline Day"
                onChange={(e) => setActiveDay(parseInt(e.target.value, 10))}
                className="flex-1 h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-400"
              />
              <span className="text-[10px] font-mono text-slate-400">Day 60</span>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col gap-3">
            <div className="bg-midnight-950 p-4 rounded-xl border border-slate-800">
              <span className="text-[10px] font-mono uppercase text-silk-gold block">
                Synchronized Healing Transition
              </span>
              <h4 className="text-sm font-bold text-white mt-0.5">Day {activeDay} Biological Status</h4>
              <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                {activeDay < 14
                  ? "Acute Phase (Days 0–14): Suture maintains high mechanical load (>75%) while inflammatory cytokines signal fibroblast migration."
                  : activeDay < 35
                  ? "Crossover Hand-off (Days 14–35): Suture gradually yields load to newly synthesized Type I collagen fibrils. Proteases degrade spidroin chains."
                  : "Complete Assimilation (Days 35–60): Native scar tissue bears 100% of physiological stress; suture is completely metabolized without secondary surgery."}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* 4 Essential Suture Criteria Grid */}
      <div className="mt-6 pt-5 border-t border-slate-800/80">
        <span className="text-[11px] font-mono uppercase text-slate-400 font-bold block mb-3">
          The 4 Essential Engineering Criteria for Surgical Sutures:
        </span>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
          <div className="bg-midnight-950 p-3 rounded-xl border border-slate-800">
            <div className="flex items-center gap-1.5 text-bio-mint font-bold mb-1">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>1. Adequate Strength</span>
            </div>
            <p className="text-[11px] text-slate-400 leading-snug">
              Retains sufficient tensile strength across USP gauges to prevent wound dehiscence during early healing.
            </p>
          </div>
          <div className="bg-midnight-950 p-3 rounded-xl border border-slate-800">
            <div className="flex items-center gap-1.5 text-synth-cyan font-bold mb-1">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>2. Biocompatibility</span>
            </div>
            <p className="text-[11px] text-slate-400 leading-snug">
              Negligible foreign-body giant cell response; degrades into non-toxic amino acids without acidic tissue necrosis.
            </p>
          </div>
          <div className="bg-midnight-950 p-3 rounded-xl border border-slate-800">
            <div className="flex items-center gap-1.5 text-silk-gold font-bold mb-1">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>3. Controlled Resorption</span>
            </div>
            <p className="text-[11px] text-slate-400 leading-snug">
              Predictable kinetic decay curve synchronized with native tissue collagen synthesis (14–60 days).
            </p>
          </div>
          <div className="bg-midnight-950 p-3 rounded-xl border border-slate-800">
            <div className="flex items-center gap-1.5 text-purple-400 font-bold mb-1">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>4. Knot Security & Handling</span>
            </div>
            <p className="text-[11px] text-slate-400 leading-snug">
              Low flexural rigidity for surgeon knot tying, zero memory coiling, and high knot break resistance.
            </p>
          </div>
        </div>

        {/* Medical Regulatory Caveat */}
        <div className="mt-4 p-3 bg-slate-900/90 rounded-xl border border-slate-800 flex items-start gap-2.5 text-xs text-slate-400">
          <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
          <div>
            <strong className="text-amber-300">Biomedical R&D Regulatory Caveat: </strong>
            Spider-silk-inspired fibers for biomedical applications represent an active investigational research field. Suture degradation kinetics and safety depend entirely on chemical cross-linking, recombinant purity, and sterilization. Not every engineered spider silk is biodegradable or cleared for human clinical use without certified ISO 10993 and regulatory body (FDA/CE) approval.
          </div>
        </div>
      </div>
    </div>
  );
};

// =========================================================================
// COMPONENT E: BIOMIMICRY & MANUFACTURING (6-STAGE INTERACTIVE PROCESS FLOW)
// =========================================================================
export const BiomimicryManufacturingFlow: React.FC = () => {
  const [activeStage, setActiveStage] = useState<number>(1);

  const stages = [
    {
      step: 1,
      title: "Spider Silk in Nature",
      subtitle: "Evolutionary Discovery",
      icon: Sparkles,
      desc: "Orb weavers secrete liquid crystalline dope stored at 30–50% concentration inside the major ampullate gland.",
      bottleneck: "Spiders cannot be farmed due to territorial cannibalism.",
      color: "#f59e0b"
    },
    {
      step: 2,
      title: "Protein Sequencing",
      subtitle: "DNA Codon Optimization",
      icon: Dna,
      desc: "Isolate and sequence the genetic motifs of Major Ampullate Spidroin 1 and 2 (MaSp1/MaSp2). Optimize codons for microbial expression.",
      bottleneck: "Repetitive GC-rich sequences cause genetic recombination errors.",
      color: "#00f0ff"
    },
    {
      step: 3,
      title: "Material Design & Plasmids",
      subtitle: "Recombinant Host Engineering",
      icon: Layers,
      desc: "Insert synthetic gene cassettes into host organisms: Escherichia coli, Pichia pastoris yeast, or transgenic silkworms.",
      bottleneck: "Metabolic burden on bacterial host cells.",
      color: "#38bdf8"
    },
    {
      step: 4,
      title: "Precision Bio-Fermentation",
      subtitle: "Aqueous Bioreactor Vats",
      icon: Activity,
      desc: "Feed recombinant microbes on renewable plant sugars (glucose, molasses) in stainless steel bioreactors to synthesize spidroin dope.",
      bottleneck: "Expression titers hover around 5–15 g/L; requires high electrical power.",
      color: "#10b981"
    },
    {
      step: 5,
      title: "Microfluidic Wet-Spinning",
      subtitle: "Biomimetic Extrusion",
      icon: Shield,
      desc: "Extrude aqueous dope through tapered microfluidic channels mimicking the spider duct. Drop pH from 7.6 to 5.7 and apply shear flow.",
      bottleneck: "Precise phase inversion requires exact buffer and alcohol ratios.",
      color: "#a855f7"
    },
    {
      step: 6,
      title: "Post-Draw & Application Testing",
      subtitle: "Mechanical Crystallization",
      icon: CheckCircle2,
      desc: "Mechanically stretch nascent fiber by 2× to 5× through tension rollers to orient beta-sheet nanocrystals along the draw axis.",
      bottleneck: "Achieving batch-to-batch structural uniformity across continuous kilometers.",
      color: "#f43f5e"
    }
  ];

  const current = stages[activeStage - 1];

  return (
    <div className="bg-midnight-900/90 border border-slate-800 rounded-2xl p-6 backdrop-blur-md">
      <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
        <div>
          <div className="flex items-center gap-2">
            <Dna className="w-5 h-5 text-bio-emerald" />
            <h3 className="text-base font-bold text-white tracking-wide">
              The 6-Stage Biomimetic Manufacturing Pipeline
            </h3>
          </div>
          <p className="text-xs text-slate-400 mt-0.5">
            Click through each industrial stage: from genetic blueprint to microfluidic spinning and post-draw crystallization.
          </p>
        </div>

        <span className="text-xs font-mono text-slate-400">
          Stage 0{activeStage} of 06
        </span>
      </div>

      {/* 6 Stage Buttons */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 mb-6">
        {stages.map((st) => (
          <button type="button"
            key={st.step}
            onClick={() => setActiveStage(st.step)}
            className={`p-2.5 rounded-xl border text-left transition-all ${
              activeStage === st.step
                ? 'bg-slate-800 border-synth-cyan shadow-[0_0_12px_rgba(0,240,255,0.3)]'
                : 'bg-midnight-950 border-slate-800 hover:border-slate-700 text-slate-400'
            }`}
          >
            <span className="text-[10px] font-mono block text-synth-cyan">Stage 0{st.step}</span>
            <span className="text-xs font-bold block truncate mt-0.5 text-white">{st.title.split(' ')[0]}</span>
          </button>
        ))}
      </div>

      {/* Active Stage Callout Card */}
      <div className="bg-midnight-950 p-5 rounded-xl border border-slate-800 flex flex-col md:flex-row items-start gap-4">
        <div
          className="p-3.5 rounded-xl border shrink-0 flex items-center justify-center"
          style={{ borderColor: current.color, backgroundColor: `${current.color}15` }}
        >
          <current.icon className="w-7 h-7" style={{ color: current.color }} />
        </div>

        <div className="flex-1">
          <div className="flex items-baseline justify-between gap-2">
            <span className="text-[11px] font-mono uppercase" style={{ color: current.color }}>
              {current.subtitle}
            </span>
            <span className="text-xs font-mono text-slate-400">Step {current.step}</span>
          </div>
          <h4 className="text-base font-bold text-white mt-0.5">{current.title}</h4>
          <p className="text-xs text-slate-300 mt-1.5 leading-relaxed">{current.desc}</p>

          <div className="mt-3 p-2.5 bg-slate-900 rounded-lg border border-slate-800/80 flex items-start gap-2 text-xs">
            <AlertCircle className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
            <span className="text-slate-300">
              <strong className="text-amber-300">Engineering Bottleneck: </strong>
              {current.bottleneck}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

// =========================================================================
// COMPONENT F: GLAND EXTRUSION & SPINNERET MICROFLUIDIC SIMULATOR (SECTION 02)
// =========================================================================
export const GlandExtrusionSim: React.FC = () => {
  const [ductPosition, setDuctPosition] = useState<number>(50); // 0 = Sac, 50 = Duct, 100 = Spigot

  // Physics calculation along the 3.5 mm gland duct
  const pH = (7.6 - (ductPosition / 100) * 1.9).toFixed(1); // 7.6 to 5.7
  const shearRate = Math.round(100 + Math.pow(ductPosition / 100, 2) * 1200); // 100 to 1300 s⁻¹
  const phaseState = ductPosition < 30 ? "Soluble Liquid Crystalline Dope" : ductPosition < 75 ? "Shear-Induced Dimerization & Hydrophobic Assembly" : "Solid Insoluble Nanocrystalline Silk Thread";
  const fiberDiameter = (15 - (ductPosition / 100) * 12).toFixed(1); // 15µm to 3µm

  return (
    <div className="bg-midnight-900/90 border border-slate-800 rounded-2xl p-6 backdrop-blur-md">
      <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
        <div>
          <div className="flex items-center gap-2">
            <Activity className="w-5 h-5 text-synth-cyan" />
            <h3 className="text-base font-bold text-white tracking-wide">
              Major Ampullate Gland: Microfluidic Phase Inversion
            </h3>
          </div>
          <p className="text-xs text-slate-400 mt-0.5">
            Slide through the 3.5 mm duct to watch pH drop and shear stress convert liquid spidroin dope into solid silk.
          </p>
        </div>

        <span className="text-xs font-mono px-3 py-1 bg-midnight-950 border border-cyan-800 text-synth-cyan rounded-lg">
          Duct Position: {ductPosition}%
        </span>
      </div>

      {/* Duct Position Slider */}
      <div className="bg-midnight-950 p-4 rounded-xl border border-slate-800 mb-5">
        <div className="flex items-center justify-between text-xs text-slate-300 mb-2">
          <span>1. Storage Sac (pH 7.6)</span>
          <span className="font-mono font-bold text-synth-cyan text-sm">Zone: {ductPosition < 35 ? 'Storage Sac' : ductPosition < 75 ? 'Tapered S-Duct' : 'Spinneret Spigot'}</span>
          <span>3. Spigot Exit (pH 5.7)</span>
        </div>
        <input
          type="range"
          min="0"
          max="100"
          value={ductPosition}
          aria-label="Major Ampullate Gland Duct Position percentage"
          onChange={(e) => setDuctPosition(parseInt(e.target.value, 10))}
          className="w-full h-2.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-center">
        {/* Animated Duct SVG */}
        <div className="lg:col-span-8 relative aspect-video max-h-[280px] bg-midnight-950 rounded-xl overflow-hidden border border-slate-800 flex items-center justify-center p-4">
          <svg className="w-full h-full" viewBox="0 0 440 220">
            {/* Tapered Duct Shape */}
            <path
              d="M 20 60 Q 150 50 250 80 T 400 105 L 400 115 T 250 140 Q 150 170 20 160 Z"
              fill="#082f49"
              stroke="#0284c7"
              strokeWidth="2"
            />

            {/* Protein Particles flowing and aligning */}
            {[...Array(14)].map((_, i) => {
              const xPos = 40 + i * 26;
              const progressRatio = xPos / 400;
              const ySpread = (1 - progressRatio) * 35;
              const isAligned = progressRatio > 0.6;
              return (
                <g key={i}>
                  <line
                    x1={xPos}
                    y1={110 - ySpread * (i % 2 === 0 ? 1 : -0.8)}
                    x2={xPos + (isAligned ? 14 : 6)}
                    y2={110 - ySpread * (i % 2 === 0 ? 1 : -0.8) + (isAligned ? 0 : 4)}
                    stroke={progressRatio > 0.7 ? '#f59e0b' : '#38bdf8'}
                    strokeWidth={isAligned ? '2.5' : '1.5'}
                  />
                  <circle
                    cx={xPos}
                    cy={110 - ySpread * (i % 2 === 0 ? 1 : -0.8)}
                    r={isAligned ? 2 : 3}
                    fill={progressRatio > 0.7 ? '#fde047' : '#00f0ff'}
                  />
                </g>
              );
            })}

            {/* Solid Silk Filament Emerging at right */}
            <line x1="400" y1="110" x2="435" y2="110" stroke="#f59e0b" strokeWidth="4" strokeLinecap="round" />

            {/* Marker cursor for current slider */}
            <line
              x1={20 + (ductPosition / 100) * 380}
              y1="20"
              x2={20 + (ductPosition / 100) * 380}
              y2="200"
              stroke="#ffffff"
              strokeWidth="2"
              strokeDasharray="4 4"
            />
          </svg>

          <div className="absolute bottom-2 left-4 right-4 flex items-center justify-between text-[11px] font-mono text-slate-300 bg-midnight-900/90 px-3 py-1 rounded border border-slate-800">
            <span>pH Level: {pH}</span>
            <span>Shear Rate: {shearRate} s⁻¹</span>
            <span>Diameter: {fiberDiameter} µm</span>
          </div>
        </div>

        {/* Telemetry Card */}
        <div className="lg:col-span-4 flex flex-col gap-3">
          <div className="bg-midnight-950 p-4 rounded-xl border border-slate-800">
            <span className="text-[10px] font-mono uppercase text-synth-cyan block">Extrusion Phase State</span>
            <h4 className="text-xs font-bold text-white mt-1 leading-snug">{phaseState}</h4>

            <div className="mt-3 space-y-2 text-xs">
              <div className="flex justify-between border-b border-slate-800 pb-1">
                <span className="text-slate-400">Chemical Trigger:</span>
                <span className="font-mono text-silk-gold">pH {pH} Acidification</span>
              </div>
              <div className="flex justify-between border-b border-slate-800 pb-1">
                <span className="text-slate-400">Ion Exchange:</span>
                <span className="font-mono text-white">Na⁺/Cl⁻ → K⁺/PO₄³⁻</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Extensional Flow:</span>
                <span className="font-mono text-synth-cyan">{shearRate} s⁻¹</span>
              </div>
            </div>

            <p className="text-[10px] text-slate-400 mt-3 pt-2 border-t border-slate-800 leading-relaxed">
              No elevated temperature or petroleum acids required. Phase change is driven purely by chemical gradient and geometry.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// =========================================================================
// COMPONENT G: CONVENTIONAL MATERIALS LIMITATIONS & RADAR (SECTION 06)
// =========================================================================
export const MaterialsFailureRadar: React.FC = () => {
  const [selectedMaterial, setSelectedMaterial] = useState<'Kevlar' | 'UHMWPE' | 'Carbon' | 'SpiderSilk'>('Kevlar');

  const materials = {
    'Kevlar': {
      title: "Kevlar 29 (Aramid Fiber)",
      uvResistance: 25, // %
      flexibility: 40,
      thermalCeiling: 90, // up to 400°C
      ecoFriendliness: 20,
      toughness: 50,
      flaw: "Photolytic UV breakdown causes up to 30% tensile loss; requires bulky waterproof carrier seals.",
      pros: "High modulus and heat stability."
    },
    'UHMWPE': {
      title: "UHMWPE (Dyneema / Spectra)",
      uvResistance: 75,
      flexibility: 65,
      thermalCeiling: 30, // melts at 140°C
      ecoFriendliness: 30,
      toughness: 70,
      flaw: "Low thermal softening limit (~135–145°C); subject to viscoelastic creep under sustained static loads.",
      pros: "Very light (floats on water) and high specific strength."
    },
    'Carbon': {
      title: "Carbon Fiber (Standard Modulus)",
      uvResistance: 95,
      flexibility: 15,
      thermalCeiling: 95,
      ecoFriendliness: 25,
      toughness: 25,
      flaw: "Brittle failure mode: virtually zero plastic strain (<1.5%), causing catastrophic fracture under blunt impact.",
      pros: "Extreme specific stiffness (Young's modulus >230 GPa)."
    },
    'SpiderSilk': {
      title: "Engineered Bio-Silk (Spidroin)",
      uvResistance: 80,
      flexibility: 95,
      thermalCeiling: 75, // stable to 200°C
      ecoFriendliness: 90,
      toughness: 98, // 160 MJ/m³
      flaw: "Industrial bio-fermentation yields currently modest (5–15 g/L); unit cost higher than mature synthetics.",
      pros: "Triples Kevlar's toughness; ultra-flexible, biocompatible, and petroleum-free."
    }
  };

  const cur = materials[selectedMaterial];

  return (
    <div className="bg-midnight-900/90 border border-slate-800 rounded-2xl p-6 backdrop-blur-md">
      <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
        <div>
          <div className="flex items-center gap-2">
            <AlertCircle className="w-5 h-5 text-silk-gold" />
            <h3 className="text-base font-bold text-white tracking-wide">
              Conventional Synthetics vs Bio-Silk: Failure Modes & Trade-offs
            </h3>
          </div>
          <p className="text-xs text-slate-400 mt-0.5">
            Compare industrial vulnerabilities: UV decay, thermal softening, and ergonomic stiffness.
          </p>
        </div>

        {/* Material Pills */}
        <div className="flex gap-1.5 bg-midnight-950 p-1 rounded-xl border border-slate-800">
          {(['Kevlar', 'UHMWPE', 'Carbon', 'SpiderSilk'] as const).map((m) => (
            <button type="button"
              key={m}
              onClick={() => setSelectedMaterial(m)}
              className={`px-3 py-1 text-xs font-semibold rounded-lg transition-all ${
                selectedMaterial === m
                  ? 'bg-synth-cyan text-black shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {m === 'SpiderSilk' ? 'Bio-Silk' : m}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        {/* Comparative Bar Metrology */}
        <div className="lg:col-span-8 bg-midnight-950 p-5 rounded-xl border border-slate-800 space-y-3.5">
          <div>
            <div className="flex justify-between text-xs mb-1">
              <span className="text-slate-300">Work-to-Fracture Toughness (Energy Absorption):</span>
              <span className="font-mono font-bold text-silk-gold">{cur.toughness}%</span>
            </div>
            <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
              <div className="h-full bg-silk-gold transition-all duration-300" style={{ width: `${cur.toughness}%` }}></div>
            </div>
          </div>

          <div>
            <div className="flex justify-between text-xs mb-1">
              <span className="text-slate-300">Ergonomic Flexibility & Low Stiffness:</span>
              <span className="font-mono font-bold text-synth-cyan">{cur.flexibility}%</span>
            </div>
            <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
              <div className="h-full bg-synth-cyan transition-all duration-300" style={{ width: `${cur.flexibility}%` }}></div>
            </div>
          </div>

          <div>
            <div className="flex justify-between text-xs mb-1">
              <span className="text-slate-300">UV Photodegradation Resistance:</span>
              <span className="font-mono font-bold text-emerald-400">{cur.uvResistance}%</span>
            </div>
            <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
              <div className="h-full bg-emerald-400 transition-all duration-300" style={{ width: `${cur.uvResistance}%` }}></div>
            </div>
          </div>

          <div>
            <div className="flex justify-between text-xs mb-1">
              <span className="text-slate-300">Thermal Integrity Threshold:</span>
              <span className="font-mono font-bold text-amber-300">{cur.thermalCeiling}%</span>
            </div>
            <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
              <div className="h-full bg-amber-300 transition-all duration-300" style={{ width: `${cur.thermalCeiling}%` }}></div>
            </div>
          </div>

          <div>
            <div className="flex justify-between text-xs mb-1">
              <span className="text-slate-300">Environmental & Solvent Sustainability:</span>
              <span className="font-mono font-bold text-bio-mint">{cur.ecoFriendliness}%</span>
            </div>
            <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
              <div className="h-full bg-bio-mint transition-all duration-300" style={{ width: `${cur.ecoFriendliness}%` }}></div>
            </div>
          </div>
        </div>

        {/* Scientific Analysis Panel */}
        <div className="lg:col-span-4 flex flex-col gap-3">
          <div className="bg-midnight-950 p-4 rounded-xl border border-slate-800">
            <span className="text-[10px] font-mono uppercase text-synth-cyan block">Material Failure Profile</span>
            <h4 className="text-sm font-bold text-white mt-1">{cur.title}</h4>

            <div className="mt-3 p-2.5 bg-rose-950/30 border border-rose-800/50 rounded-lg text-xs text-rose-200">
              <strong className="block text-rose-400 mb-0.5">Primary Engineering Achilles Heel:</strong>
              {cur.flaw}
            </div>

            <div className="mt-2.5 p-2.5 bg-emerald-950/30 border border-emerald-800/50 rounded-lg text-xs text-emerald-200">
              <strong className="block text-emerald-400 mb-0.5">Key Advantage:</strong>
              {cur.pros}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// =========================================================================
// COMPONENT H: MICROSURGICAL SUTURE GAUGE & FLEXIBILITY SIM (SECTION 09)
// =========================================================================
export const MicrosurgicalGaugeSimulator: React.FC = () => {
  const [gaugeIndex, setGaugeIndex] = useState<number>(3); // 0 = 2-0, 1 = 4-0, 2 = 7-0, 3 = 10-0 (Bio-Silk)

  const gauges = [
    {
      usp: "USP 2-0",
      diameter: "320 µm",
      material: "Braided Silk / Polyester",
      application: "Abdominal wall, orthopedic tendon repair",
      stiffness: "High (Rigid loop tie-down)",
      tissueDrag: "High (Can saw friable tissue)",
      color: "#94a3b8"
    },
    {
      usp: "USP 4-0",
      diameter: "160 µm",
      material: "Monofilament Polypropylene / Nylon",
      application: "Skin closure, subcuticular dermis",
      stiffness: "Moderate bending resistance",
      tissueDrag: "Moderate drag",
      color: "#38bdf8"
    },
    {
      usp: "USP 7-0",
      diameter: "50 µm",
      material: "Precision Micro-Nylon",
      application: "Facial plastics, peripheral vascular anastomosis",
      stiffness: "Pliable handling",
      tissueDrag: "Low drag",
      color: "#00f0ff"
    },
    {
      usp: "USP 10-0 (Bio-Silk)",
      diameter: "20 µm (Spider Silk Dimension)",
      material: "Engineered Recombinant Spidroin",
      application: "Ophthalmic corneal grafts, neurosurgical nerve repair",
      stiffness: "Ultra-low flexural rigidity (Zero cheese-cutting)",
      tissueDrag: "Minimal friction; gentle apposition",
      color: "#10b981"
    }
  ];

  const cur = gauges[gaugeIndex];

  return (
    <div className="bg-midnight-900/90 border border-slate-800 rounded-2xl p-6 backdrop-blur-md">
      <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
        <div>
          <div className="flex items-center gap-2">
            <HeartPulse className="w-5 h-5 text-bio-emerald" />
            <h3 className="text-base font-bold text-white tracking-wide">
              Microsurgical Suture Gauge & Flexural Bending Rigidity
            </h3>
          </div>
          <p className="text-xs text-slate-400 mt-0.5">
            Explore why fine gauges (USP 7-0 to 10-0) matching spider silk are required for delicate nerve and eye surgery.
          </p>
        </div>

        <span className="text-xs font-mono px-3 py-1 bg-emerald-950 border border-emerald-800 text-bio-mint rounded-lg">
          Active Gauge: {cur.usp}
        </span>
      </div>

      {/* Gauge Selector Buttons */}
      <div className="grid grid-cols-4 gap-2 mb-5">
        {gauges.map((g, idx) => (
          <button type="button"
            key={g.usp}
            onClick={() => setGaugeIndex(idx)}
            className={`p-2.5 rounded-xl border text-center transition-all ${
              gaugeIndex === idx
                ? 'bg-slate-800 border-bio-emerald shadow-[0_0_12px_rgba(16,185,129,0.3)]'
                : 'bg-midnight-950 border-slate-800 text-slate-400 hover:text-white'
            }`}
          >
            <span className="text-xs font-bold block text-white">{g.usp}</span>
            <span className="text-[10px] font-mono block text-bio-mint mt-0.5">{g.diameter}</span>
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-center">
        {/* Fiber Diameter Comparison Graphic */}
        <div className="lg:col-span-8 relative aspect-video max-h-[260px] bg-midnight-950 rounded-xl overflow-hidden border border-slate-800 flex items-center justify-center p-6">
          <div className="flex flex-col items-center justify-center gap-3 w-full">
            <div className="flex items-center justify-center w-full">
              <div
                className="rounded-full shadow-lg transition-all duration-300"
                style={{
                  height: gaugeIndex === 0 ? '48px' : gaugeIndex === 1 ? '24px' : gaugeIndex === 2 ? '8px' : '3px',
                  width: '75%',
                  backgroundColor: cur.color,
                  boxShadow: `0 0 20px ${cur.color}60`
                }}
              ></div>
            </div>

            <div className="text-center font-mono text-xs text-slate-300 mt-2">
              Cross-Sectional Scale: <strong style={{ color: cur.color }}>{cur.diameter}</strong> ({cur.material})
            </div>
          </div>

          <div className="absolute bottom-2 text-[10px] text-slate-400 font-mono">
            Human Hair benchmark ≈ 70 µm • Red Blood Cell ≈ 7 µm
          </div>
        </div>

        {/* Medical Properties Card */}
        <div className="lg:col-span-4 flex flex-col gap-3">
          <div className="bg-midnight-950 p-4 rounded-xl border border-slate-800">
            <span className="text-[10px] font-mono uppercase text-bio-emerald block">Clinical Surgical Utility</span>
            <h4 className="text-sm font-bold text-white mt-1">{cur.application}</h4>

            <div className="mt-3 text-xs space-y-2">
              <div className="bg-slate-900 p-2 rounded border border-slate-800">
                <span className="text-[10px] text-slate-400 block">Flexural Rigidity (E·I):</span>
                <span className="font-medium text-white">{cur.stiffness}</span>
              </div>
              <div className="bg-slate-900 p-2 rounded border border-slate-800">
                <span className="text-[10px] text-slate-400 block">Tissue Trauma Risk:</span>
                <span className="font-medium text-slate-200">{cur.tissueDrag}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// =========================================================================
// COMPONENT I: NERVE CONDUIT REGENERATION & BIOACTIVE FUNCTIONALIZATION (SECTION 11)
// =========================================================================
export const NerveRegenerationScaffoldSim: React.FC = () => {
  const [hasBioactiveRGD, setHasBioactiveRGD] = useState<boolean>(true);
  const [axonGrowthMm, setAxonGrowthMm] = useState<number>(45); // 0 to 60 mm

  return (
    <div className="bg-midnight-900/90 border border-slate-800 rounded-2xl p-6 backdrop-blur-md">
      <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
        <div>
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-bio-emerald" />
            <h3 className="text-base font-bold text-white tracking-wide">
              Neurosurgical Nerve Conduit & Axonal Regeneration
            </h3>
          </div>
          <p className="text-xs text-slate-400 mt-0.5">
            Schwann cells migrate along spider silk micro-scaffolds to bridge critical 60 mm peripheral nerve lesions.
          </p>
        </div>

        <button type="button"
          onClick={() => setHasBioactiveRGD(!hasBioactiveRGD)}
          className={`px-3 py-1.5 text-xs font-semibold rounded-lg border transition ${
            hasBioactiveRGD
              ? 'bg-bio-emerald/20 border-bio-emerald text-bio-mint shadow-[0_0_12px_rgba(16,185,129,0.3)]'
              : 'bg-slate-800 border-slate-700 text-slate-400'
          }`}
        >
          {hasBioactiveRGD ? 'Bioactive RGD Peptides: ACTIVE' : 'Unmodified Silk: BASIC'}
        </button>
      </div>

      {/* Lesion Growth Slider */}
      <div className="bg-midnight-950 p-4 rounded-xl border border-slate-800 mb-5">
        <div className="flex items-center justify-between text-xs text-slate-300 mb-2">
          <span>Proximal Nerve Stump (0 mm)</span>
          <span className="font-mono font-bold text-bio-mint text-sm">Axonal Outgrowth: {axonGrowthMm} mm / 60 mm Gap</span>
          <span>Distal Muscle Target (60 mm)</span>
        </div>
        <input
          type="range"
          min="5"
          max="60"
          value={axonGrowthMm}
          aria-label="Axonal Outgrowth Distance in millimeters"
          onChange={(e) => setAxonGrowthMm(parseInt(e.target.value, 10))}
          className="w-full h-2.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-center">
        {/* Animated Nerve Conduit SVG */}
        <div className="lg:col-span-8 relative aspect-video max-h-[260px] bg-midnight-950 rounded-xl overflow-hidden border border-slate-800 flex items-center justify-center p-4">
          <svg className="w-full h-full" viewBox="0 0 420 200">
            {/* Outer Guidance Tube */}
            <rect x="30" y="50" width="360" height="100" rx="14" fill="#0f172a" stroke="#334155" strokeWidth="2" strokeDasharray="4 4" />
            <text x="45" y="70" fill="#64748b" fontSize="9" fontFamily="monospace">60 mm Nerve Conduit Scaffold</text>

            {/* Parallel Silk Guidance Filaments */}
            {[80, 100, 120].map((y) => (
              <line key={y} x1="40" y1={y} x2="380" y2={y} stroke="#f59e0b" strokeWidth="1.5" strokeOpacity="0.6" />
            ))}

            {/* Growing Axonal Filaments bridging from left to right */}
            {[80, 100, 120].map((y, idx) => (
              <line
                key={`axon-${y}`}
                x1="40"
                y1={y}
                x2={40 + (axonGrowthMm / 60) * 340}
                y2={y}
                stroke="#10b981"
                strokeWidth="3.5"
                strokeLinecap="round"
                className="transition-all duration-150"
              />
            ))}

            {/* Schwann Cells migrating along silk */}
            {[...Array(Math.floor(axonGrowthMm / 8))].map((_, i) => (
              <circle
                key={`schwann-${i}`}
                cx={55 + i * 44}
                cy={100 + (i % 2 === 0 ? 12 : -12)}
                r="4.5"
                fill="#38bdf8"
                stroke="#ffffff"
                strokeWidth="1"
              />
            ))}
          </svg>

          <div className="absolute bottom-2 left-4 text-[11px] font-mono text-slate-300 bg-midnight-900/90 px-2.5 py-1 rounded border border-slate-800">
            {axonGrowthMm === 60 ? "★ Target Reinnervation Complete (Motor Function Restored)" : `Spanning Lesion (${Math.round((axonGrowthMm / 60) * 100)}% Complete)`}
          </div>
        </div>

        {/* Preclinical Evidence Card */}
        <div className="lg:col-span-4 flex flex-col gap-3">
          <div className="bg-midnight-950 p-4 rounded-xl border border-slate-800">
            <span className="text-[10px] font-mono uppercase text-bio-mint block">Preclinical Animal Trial</span>
            <h4 className="text-xs font-bold text-white mt-1">Allmeling, Vogt & Radtke (2008)</h4>

            <p className="text-xs text-slate-300 mt-2 leading-relaxed">
              Native and recombinant spider silk contains no sericin glue, producing zero toxic giant-cell inflammatory reaction.
            </p>

            <div className="mt-3 p-2 bg-emerald-950/40 rounded border border-emerald-800/60 text-[10px] text-emerald-200">
              {hasBioactiveRGD
                ? "Bioactive RGD tags accelerate Schwann cell adhesion and axonal elongation speed by +40%."
                : "Basic unmodified spidroin provides physical contact guidance."}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// =========================================================================
// COMPONENT J: DUAL APPLICATION SPLIT-SCREEN COMPARISON (SECTION 12)
// =========================================================================
export const DualApplicationSplitScreen: React.FC = () => {
  const [splitBalance, setSplitBalance] = useState<number>(50); // 0 = 100% Armor, 100 = 100% Suture

  return (
    <div className="bg-midnight-900/90 border border-slate-800 rounded-2xl p-6 backdrop-blur-md">
      <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
        <div>
          <div className="flex items-center gap-2">
            <Layers className="w-5 h-5 text-purple-400" />
            <h3 className="text-base font-bold text-white tracking-wide">
              One Biological Inspiration — Two Radically Opposing Engineering Realities
            </h3>
          </div>
          <p className="text-xs text-slate-400 mt-0.5">
            Compare how the exact same spidroin protein is engineered for external ballistic survivability vs in vivo tissue healing.
          </p>
        </div>

        <span className="text-xs font-mono px-3 py-1 bg-midnight-950 border border-purple-800 text-purple-300 rounded-lg">
          Focus: {splitBalance < 45 ? "Protective Armor Focus" : splitBalance > 55 ? "Medical Suture Focus" : "Side-by-Side Balance"}
        </span>
      </div>

      {/* Perspective Slider */}
      <div className="bg-midnight-950 p-3 rounded-xl border border-slate-800 mb-5">
        <div className="flex items-center justify-between text-xs text-slate-400 mb-1.5 font-mono">
          <span className="text-synth-cyan">◀ DEFENSE: Impact Armor</span>
          <span className="text-silk-gold">COMMON INSPIRATION</span>
          <span className="text-bio-mint">MEDICINE: Surgical Suture ▶</span>
        </div>
        <input
          type="range"
          min="0"
          max="100"
          value={splitBalance}
          aria-label="Perspective Balance between Defense Armor and Surgical Suture"
          onChange={(e) => setSplitBalance(parseInt(e.target.value, 10))}
          className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-purple-400"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Left: Ballistic Armor */}
        <div
          className={`p-5 rounded-xl border transition-all duration-300 flex flex-col justify-between ${
            splitBalance <= 60
              ? 'bg-cyan-950/40 border-synth-cyan shadow-[0_0_20px_rgba(0,240,255,0.15)]'
              : 'bg-midnight-950/70 border-slate-800 opacity-60'
          }`}
        >
          <div>
            <div className="flex items-center gap-2 text-synth-cyan mb-2">
              <Shield className="w-5 h-5" />
              <span className="text-xs font-mono font-bold uppercase">Frontier A: Protective Armor</span>
            </div>
            <h4 className="text-base font-bold text-white">Multi-Ply Kinetic Wave Dissipation</h4>

            <ul className="mt-3 space-y-2 text-xs text-slate-300">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-synth-cyan shrink-0 mt-1.5"></span>
                <span><strong>Mechanical Goal:</strong> Maximum work-to-fracture (160 MJ/m³) to arrest supersonic impact.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-synth-cyan shrink-0 mt-1.5"></span>
                <span><strong>Environment:</strong> External weathering (-40°C to +50°C, rain, UV, sweat).</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-synth-cyan shrink-0 mt-1.5"></span>
                <span><strong>Material Fate:</strong> Permanent environmental durability (decay is catastrophic failure).</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-synth-cyan shrink-0 mt-1.5"></span>
                <span><strong>Governing Standard:</strong> NIJ Standard-0101.07 (V50 limit and &lt;44 mm blunt signature).</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Right: Surgical Suture */}
        <div
          className={`p-5 rounded-xl border transition-all duration-300 flex flex-col justify-between ${
            splitBalance >= 40
              ? 'bg-emerald-950/40 border-bio-emerald shadow-[0_0_20px_rgba(16,185,129,0.15)]'
              : 'bg-midnight-950/70 border-slate-800 opacity-60'
          }`}
        >
          <div>
            <div className="flex items-center gap-2 text-bio-mint mb-2">
              <HeartPulse className="w-5 h-5" />
              <span className="text-xs font-mono font-bold uppercase">Frontier B: Surgical Sutures</span>
            </div>
            <h4 className="text-base font-bold text-white">Gentle Apposition & Bio-Resorption</h4>

            <ul className="mt-3 space-y-2 text-xs text-slate-300">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-bio-mint shrink-0 mt-1.5"></span>
                <span><strong>Mechanical Goal:</strong> Soft-tissue compliance, knot security without cheese-cutting.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-bio-mint shrink-0 mt-1.5"></span>
                <span><strong>Environment:</strong> Protected in vivo tissue (37°C, neutral pH 7.4).</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-bio-mint shrink-0 mt-1.5"></span>
                <span><strong>Material Fate:</strong> Programmed enzymatic bio-resorption into harmless amino acids.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-bio-mint shrink-0 mt-1.5"></span>
                <span><strong>Governing Standard:</strong> FDA 510(k) and ISO 10993 cytotoxicity and hemocompatibility.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

// =========================================================================
// COMPONENT K: CRADLE-TO-GRAVE LIFE CYCLE ASSESSMENT (LCA) (SECTION 13)
// =========================================================================
export const SustainabilityLcaCalculator: React.FC = () => {
  const [useRenewableGrid, setUseRenewableGrid] = useState<boolean>(true);

  // Carbon metrics
  const fossilCarbonKg = 24.5; // kg CO2 eq per kg Kevlar
  const bioCarbonKg = useRenewableGrid ? 4.2 : 18.5; // kg CO2 eq per kg Recombinant Silk

  return (
    <div className="bg-midnight-900/90 border border-slate-800 rounded-2xl p-6 backdrop-blur-md">
      <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
        <div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-bio-mint" />
            <h3 className="text-base font-bold text-white tracking-wide">
              Cradle-to-Grave Life Cycle Assessment (LCA)
            </h3>
          </div>
          <p className="text-xs text-slate-400 mt-0.5">
            Objective environmental balance: decoupling from petroleum vs bioreactor electricity consumption.
          </p>
        </div>

        <button type="button"
          onClick={() => setUseRenewableGrid(!useRenewableGrid)}
          className={`px-3 py-1.5 text-xs font-semibold rounded-lg border transition ${
            useRenewableGrid
              ? 'bg-emerald-500/20 border-emerald-500 text-bio-mint shadow-[0_0_12px_rgba(16,185,129,0.3)]'
              : 'bg-slate-800 border-slate-700 text-slate-400'
          }`}
        >
          {useRenewableGrid ? 'Grid: 100% Solar & Wind' : 'Grid: Standard Fossil Mix'}
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center">
        {/* Carbon Comparison Graphic */}
        <div className="bg-midnight-950 p-5 rounded-xl border border-slate-800 space-y-4">
          <div>
            <div className="flex justify-between text-xs mb-1">
              <span className="text-slate-300">Petroleum Aramid (Kevlar) Carbon Footprint:</span>
              <span className="font-mono font-bold text-rose-400">{fossilCarbonKg} kg CO₂ / kg</span>
            </div>
            <div className="h-3 w-full bg-slate-800 rounded-full overflow-hidden">
              <div className="h-full bg-rose-500" style={{ width: '85%' }}></div>
            </div>
            <span className="text-[10px] text-slate-400">Requires boiling sulfuric acid & crude oil feedstocks</span>
          </div>

          <div>
            <div className="flex justify-between text-xs mb-1">
              <span className="text-slate-300">Recombinant Spider Silk Carbon Footprint:</span>
              <span className="font-mono font-bold text-bio-mint">{bioCarbonKg} kg CO₂ / kg</span>
            </div>
            <div className="h-3 w-full bg-slate-800 rounded-full overflow-hidden">
              <div className="h-full bg-bio-mint transition-all duration-300" style={{ width: `${(bioCarbonKg / fossilCarbonKg) * 85}%` }}></div>
            </div>
            <span className="text-[10px] text-slate-400">
              {useRenewableGrid ? "-82% Carbon Reduction via Clean Grid" : "Bioreactor aeration demands substantial electrical power"}
            </span>
          </div>
        </div>

        {/* Circularity Features */}
        <div className="bg-midnight-950 p-5 rounded-xl border border-slate-800 text-xs space-y-2.5">
          <div className="p-2.5 bg-slate-900 rounded-lg border border-slate-800 flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-bio-mint shrink-0 mt-0.5" />
            <span><strong>Feedstocks:</strong> Recombinant fermentation uses renewable agricultural plant sugars.</span>
          </div>
          <div className="p-2.5 bg-slate-900 rounded-lg border border-slate-800 flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-bio-mint shrink-0 mt-0.5" />
            <span><strong>Solvents:</strong> Water-based buffer spinning with closed-loop recyclable alcohols.</span>
          </div>
          <div className="p-2.5 bg-slate-900 rounded-lg border border-slate-800 flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-bio-mint shrink-0 mt-0.5" />
            <span><strong>End-of-Life:</strong> Natural enzymatic bio-assimilation into nitrogen-rich amino acids (zero microplastics).</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// =========================================================================
// COMPONENT L: THREE HORIZONS MATRIX & INDUSTRIAL SCALING (SECTION 14)
// =========================================================================
export const ThreeHorizonsMatrix: React.FC = () => {
  const [activeHorizon, setActiveHorizon] = useState<number>(2); // 1 = Nature, 2 = Lab, 3 = Future

  const horizons = [
    {
      num: 1,
      title: "Horizon 1: What Nature Demonstrates",
      badge: "Evolutionary Fact",
      color: "#f59e0b",
      points: [
        "380 million years of field-tested tensile performance.",
        "Ambient-temperature aqueous liquid-to-solid extrusion.",
        "Unrivaled 160 MJ/m³ work-to-fracture energy absorption."
      ],
      verdict: "Demonstrates that the physics and chemistry are fully viable in the real world."
    },
    {
      num: 2,
      title: "Horizon 2: What Labs Have Engineered",
      badge: "Current Lab Prototype",
      color: "#00f0ff",
      points: [
        "Recombinant spidroin gene expression in E. coli and yeast.",
        "Laboratory microfluidic wet-spinning extrusion nozzles.",
        "Preclinical peripheral nerve guides bridging 6 cm gaps in animal trials."
      ],
      verdict: "Proves technical feasibility, but yields currently limited to 5–15 g/L fermentation broths."
    },
    {
      num: 3,
      title: "Horizon 3: Commercial Validation Gateway",
      badge: "Future Engineering Challenge",
      color: "#a855f7",
      points: [
        "Multi-layer NIJ Standard-0101.07 ballistic qualification.",
        "FDA 510(k) clearances and medical device sterilization validation.",
        "Unit cost parity with mature petrochemical synthetics ($35/kg Kevlar)."
      ],
      verdict: "Requires industrial bioreactor scale-up and multi-center clinical trials before hospital and defense deployment."
    }
  ];

  const cur = horizons[activeHorizon - 1];

  return (
    <div className="bg-midnight-900/90 border border-slate-800 rounded-2xl p-6 backdrop-blur-md">
      <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
        <div>
          <div className="flex items-center gap-2">
            <AlertCircle className="w-5 h-5 text-silk-gold" />
            <h3 className="text-base font-bold text-white tracking-wide">
              The Three Horizons Framework: Science Meets Reality
            </h3>
          </div>
          <p className="text-xs text-slate-400 mt-0.5">
            Strictly distinguishing established evolutionary facts from laboratory prototypes and commercial validation hurdles.
          </p>
        </div>

        <span className="text-xs font-mono px-3 py-1 bg-midnight-950 border border-slate-700 text-slate-300 rounded-lg">
          Horizon 0{cur.num}
        </span>
      </div>

      {/* 3 Horizon Selector Tabs */}
      <div className="grid grid-cols-3 gap-2 mb-5">
        {horizons.map((h) => (
          <button type="button"
            key={h.num}
            onClick={() => setActiveHorizon(h.num)}
            className={`p-3 rounded-xl border text-left transition-all ${
              activeHorizon === h.num
                ? 'bg-slate-800/90 shadow-md'
                : 'bg-midnight-950 border-slate-800 text-slate-400 hover:text-white'
            }`}
            style={{ borderColor: activeHorizon === h.num ? h.color : undefined }}
          >
            <span className="text-[10px] font-mono block uppercase" style={{ color: h.color }}>{h.badge}</span>
            <span className="text-xs font-bold block truncate mt-0.5 text-white">{h.title.split(':')[1]}</span>
          </button>
        ))}
      </div>

      <div className="bg-midnight-950 p-5 rounded-xl border border-slate-800">
        <h4 className="text-sm font-bold text-white flex items-center gap-2" style={{ color: cur.color }}>
          <Sparkles className="w-4 h-4" />
          {cur.title}
        </h4>

        <ul className="mt-3 space-y-2 text-xs text-slate-300">
          {cur.points.map((pt, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full shrink-0 mt-1.5" style={{ backgroundColor: cur.color }}></span>
              <span>{pt}</span>
            </li>
          ))}
        </ul>

        <div className="mt-4 p-3 bg-slate-900 rounded-lg border border-slate-800 text-xs text-slate-300">
          <strong className="text-white block mb-0.5">Engineering Readiness Assessment:</strong>
          {cur.verdict}
        </div>
      </div>
    </div>
  );
};

// =========================================================================
// COMPONENT M: GRAND SYNTHESIS & EXHIBITION Q&A KNOWLEDGE HUB (SECTION 15)
// =========================================================================
export const GrandSynthesisVisualizer: React.FC = () => {
  const [activeQuestion, setActiveQuestion] = useState<number>(0);

  const qaList = [
    {
      q: "Why is spider silk tougher than Kevlar when Kevlar has higher tensile strength?",
      a: "Because toughness is the integral under the stress-strain curve (work-to-fracture). While Kevlar has a high peak stress (2.8 GPa), it snaps at only 3.6% strain. Spider silk sustains ~1.3 GPa across a massive 30% strain plateau, absorbing triple the energy (~160 MJ/m³ vs ~50 MJ/m³)."
    },
    {
      q: "Why can't spider silk body armor be purchased commercially today?",
      a: "Ballistic vests are complete multi-ply systems requiring official NIJ-0101.07 certified testing for backface deformation (<44 mm). Additionally, recombinant fermentation yields (5–15 g/L) make production cost hundreds of dollars per kg, compared to $35/kg for mature aramids."
    },
    {
      q: "What makes spider-silk-inspired sutures safer than synthetic absorbable sutures?",
      a: "Synthetic absorbable sutures (PGA/PLGA) degrade via bulk hydrolysis, releasing acidic byproducts that can cause sterile inflammation. Engineered spider silk degrades via surface enzymatic cleavage into natural amino acids that native human tissue safely reabsorbs."
    },
    {
      q: "What is the universal molecular motif underlying both applications?",
      a: "The two-phase protein architecture: poly-alanine anti-parallel beta-sheet nanocrystals (2–5 nm) providing tensile strength, crosslinked with flexible glycine-rich amorphous coils providing high extensibility and sacrificial energy dissipation."
    }
  ];

  return (
    <div className="bg-midnight-900/90 border border-slate-800 rounded-2xl p-6 backdrop-blur-md">
      <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
        <div>
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-silk-gold" />
            <h3 className="text-base font-bold text-white tracking-wide">
              Exhibition Grand Synthesis & Faculty Examination Q&A Hub
            </h3>
          </div>
          <p className="text-xs text-slate-400 mt-0.5">
            Quick-access answers for the college judging panel on ballistic mechanics, FDA qualification, and nanoscale physics.
          </p>
        </div>

        <span className="text-xs font-mono px-3 py-1 bg-amber-950/60 border border-amber-800 text-silk-gold rounded-lg">
          Master Axiom
        </span>
      </div>

      {/* Core Synthesis Axiom Banner */}
      <div className="p-4 bg-gradient-to-r from-amber-950/40 via-midnight-950 to-cyan-950/40 rounded-xl border border-slate-800 text-center mb-5">
        <p className="text-xs sm:text-sm font-serif italic text-slate-100 max-w-2xl mx-auto leading-relaxed">
          "The future of materials engineering may not begin with inventing something new — but with understanding something nature already does remarkably well."
        </p>
      </div>

      {/* Q&A Interactive Selector */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
        <div className="md:col-span-5 flex flex-col gap-2">
          {qaList.map((item, idx) => (
            <button type="button"
              key={idx}
              onClick={() => setActiveQuestion(idx)}
              className={`p-3 rounded-xl border text-left transition-all text-xs ${
                activeQuestion === idx
                  ? 'bg-slate-800 border-synth-cyan text-white shadow-md'
                  : 'bg-midnight-950 border-slate-800 text-slate-400 hover:text-slate-200'
              }`}
            >
              <span className="text-[10px] font-mono text-synth-cyan block">Question 0{idx + 1}</span>
              <span className="font-semibold block truncate mt-0.5">{item.q}</span>
            </button>
          ))}
        </div>

        <div className="md:col-span-7 bg-midnight-950 p-5 rounded-xl border border-slate-800 flex flex-col justify-between">
          <div>
            <span className="text-[10px] font-mono text-silk-gold uppercase block">Faculty Examination Question</span>
            <h4 className="text-sm font-bold text-white mt-1 leading-snug">{qaList[activeQuestion].q}</h4>
            <div className="mt-3.5 pt-3 border-t border-slate-800 text-xs text-slate-300 leading-relaxed">
              <strong className="text-synth-cyan block mb-1">Scientific Answer:</strong>
              {qaList[activeQuestion].a}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
