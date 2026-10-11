import React, { useState, useEffect, useRef } from 'react';
import { MATERIALS_DATA, SUTURE_DEGRADATION_DATA } from '../data/materialsData';
import { Play, RotateCcw, Activity, Shield, HeartPulse, Layers, Sparkles, Microscope, Dna, Info, CheckCircle2 } from 'lucide-react';

// ==========================================
// 1. INTERACTIVE SPIDER WEB DEW CANVAS SIMULATOR
// ==========================================
export const InteractiveSpiderWeb: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [dewCount, setDewCount] = useState<number>(36);
  const [windVibration, setWindVibration] = useState<boolean>(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let t = 0;

    const render = () => {
      t += 0.03;
      const w = canvas.width;
      const h = canvas.height;
      const cx = w / 2;
      const cy = h / 2;
      const maxRadius = Math.min(w, h) * 0.44;

      ctx.clearRect(0, 0, w, h);

      // Radial threads (Major Ampullate Dragline)
      const radials = 16;
      ctx.lineWidth = 1.2;
      for (let i = 0; i < radials; i++) {
        const angle = (i * Math.PI * 2) / radials;
        const vib = windVibration ? Math.sin(t * 2 + i) * 1.5 : 0;
        const x2 = cx + Math.cos(angle) * (maxRadius + vib);
        const y2 = cy + Math.sin(angle) * (maxRadius + vib);

        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(x2, y2);
        ctx.strokeStyle = 'rgba(245, 158, 11, 0.45)';
        ctx.stroke();
      }

      // Spiral capture threads (Flagelliform silk)
      const spiralRings = 10;
      for (let r = 1; r <= spiralRings; r++) {
        const radius = (r / spiralRings) * maxRadius;
        ctx.beginPath();
        for (let i = 0; i <= radials; i++) {
          const angle = (i * Math.PI * 2) / radials;
          const sag = windVibration ? Math.sin(t * 3 + r + i) * 2 : 0;
          const px = cx + Math.cos(angle) * (radius + sag);
          const py = cy + Math.sin(angle) * (radius + sag);
          if (i === 0) ctx.moveTo(px, py);
          else ctx.lineTo(px, py);
        }
        ctx.strokeStyle = 'rgba(0, 240, 255, 0.35)';
        ctx.lineWidth = 0.9;
        ctx.stroke();
      }

      // Dew droplets with surface tension highlights
      for (let d = 0; d < dewCount; d++) {
        const ringIdx = (d % spiralRings) + 1;
        const radIdx = Math.floor(d / spiralRings) % radials;
        const angle = (radIdx * Math.PI * 2) / radials + (ringIdx * 0.12);
        const radius = (ringIdx / spiralRings) * maxRadius;
        const pulse = Math.sin(t * 2 + d) * 0.6;

        const dx = cx + Math.cos(angle) * radius;
        const dy = cy + Math.sin(angle) * radius;

        ctx.beginPath();
        ctx.arc(dx, dy, 2.5 + pulse, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
        ctx.shadowBlur = 8;
        ctx.shadowColor = 'rgba(0, 240, 255, 0.8)';
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      animId = requestAnimationFrame(render);
    };

    render();
    return () => cancelAnimationFrame(animId);
  }, [dewCount, windVibration]);

  return (
    <div className="bg-midnight-900/90 border border-slate-800 rounded-2xl p-5 backdrop-blur-md">
      <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-silk-gold animate-pulse motion-reduce:animate-none"></span>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-silk-gold">
              Interactive Web & Surface Tension Physics
            </h3>
          </div>
          <p className="text-xs text-slate-400 mt-0.5">
            Radial dragline spokes provide structural stiffness; viscous spiral captures kinetic impact.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setWindVibration(!windVibration)}
            className={`px-3 py-1 text-xs rounded-lg border transition-all focus-visible:ring-2 focus-visible:ring-synth-cyan focus:outline-none ${
              windVibration
                ? 'bg-synth-cyan/20 border-synth-cyan text-synth-cyan shadow-[0_0_12px_rgba(0,240,255,0.3)]'
                : 'bg-slate-800 border-slate-700 text-slate-400 hover:text-white'
            }`}
          >
            {windVibration ? 'Aerodynamic Oscillations: ON' : 'Oscillations: OFF'}
          </button>
          <button
            type="button"
            onClick={() => setDewCount((c) => (c >= 60 ? 15 : c + 15))}
            className="px-3 py-1 text-xs rounded-lg border border-slate-700 bg-slate-800 text-slate-300 hover:border-silk-gold hover:text-silk-gold transition-all focus-visible:ring-2 focus-visible:ring-silk-gold focus:outline-none"
          >
            Dew Droplets: {dewCount}
          </button>
        </div>
      </div>

      <div className="relative aspect-video max-h-[340px] w-full rounded-xl overflow-hidden bg-midnight-950 flex items-center justify-center border border-slate-800/80">
        <canvas ref={canvasRef} width={640} height={340} className="w-full h-full object-contain" />
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] text-slate-400 bg-midnight-900/80 px-3 py-1.5 rounded-lg border border-slate-800 pointer-events-none">
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-silk-gold inline-block"></span>
            Radial Spoke: Major Ampullate Silk (E ≈ 10 GPa)
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-synth-cyan inline-block"></span>
            Viscid Spiral: Flagelliform (Strain &gt; 200%)
          </span>
        </div>
      </div>
    </div>
  );
};

// ==========================================
// 2. INTERACTIVE STRESS-STRAIN SCHEMATIC WITH REAL COMPARISONS
// ==========================================
export const InteractiveStressStrainGraph: React.FC = () => {
  const [selectedMaterial, setSelectedMaterial] = useState<string>("Spider Dragline Silk (Major Ampullate)");
  const [hoverStrain, setHoverStrain] = useState<number | null>(null);

  const current = MATERIALS_DATA.find((m) => m.name === selectedMaterial) || MATERIALS_DATA[0];

  // SVG Chart Dimensions
  const width = 560;
  const height = 300;
  const padding = { top: 25, right: 30, bottom: 45, left: 55 };
  const graphW = width - padding.left - padding.right;
  const graphH = height - padding.top - padding.bottom;

  // Max axis scales: Strain 0 to 35%, Stress 0 to 4.0 GPa
  const maxStrain = 35;
  const maxStress = 4.0;

  const scaleX = (strain: number) => padding.left + (strain / maxStrain) * graphW;
  const scaleY = (stress: number) => height - padding.bottom - (stress / maxStress) * graphH;

  const getStressAtStrain = (mat: typeof current, s: number) => {
    const peakStrain = mat.elasticity;
    const peakStress = mat.tensileStrength;
    if (s > peakStrain) return 0;

    if (mat.name.includes("Spider Dragline")) {
      const yieldStrain = 3.5;
      const yieldStress = 0.55;
      if (s <= yieldStrain) {
        return (s / yieldStrain) * yieldStress;
      } else {
        const plasticProgress = (s - yieldStrain) / (peakStrain - yieldStrain);
        return yieldStress + (peakStress - yieldStress) * Math.pow(plasticProgress, 0.7);
      }
    } else if (mat.name.includes("Nylon")) {
      return peakStress * Math.pow(s / peakStrain, 0.65);
    } else {
      return (s / peakStrain) * peakStress;
    }
  };

  // Generate SVG curve points based on material parameters
  const generatePath = (mat: typeof current) => {
    const points: [number, number][] = [];
    const steps = 40;
    const peakStrain = mat.elasticity;

    for (let i = 0; i <= steps; i++) {
      const s = (i / steps) * peakStrain;
      const stress = getStressAtStrain(mat, s);
      points.push([scaleX(s), scaleY(stress)]);
    }

    const d = points.reduce((acc, [x, y], idx) => `${acc} ${idx === 0 ? 'M' : 'L'} ${x.toFixed(1)} ${y.toFixed(1)}`, '');
    const fillD = `${d} L ${scaleX(peakStrain)} ${scaleY(0)} L ${scaleX(0)} ${scaleY(0)} Z`;
    return { d, fillD };
  };

  const activePath = generatePath(current);
  const hoverStress = hoverStrain !== null && hoverStrain <= current.elasticity ? getStressAtStrain(current, hoverStrain) : null;

  return (
    <div className="bg-midnight-900/90 border border-slate-800 rounded-2xl p-6 backdrop-blur-md">
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 mb-6">
        <div>
          <div className="flex items-center gap-2">
            <Activity className="w-5 h-5 text-synth-cyan" />
            <h3 className="text-base font-bold text-white tracking-wide">
              Engineering Stress–Strain Kinetics & Toughness Integral
            </h3>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            Compare ultimate tensile strength (peak height) versus modulus of toughness (shaded area under curve ∫ σ dε).
          </p>
        </div>

        {/* Material Selector Pills */}
        <div className="flex flex-wrap gap-1.5 bg-midnight-950/80 p-1.5 rounded-xl border border-slate-800">
          {MATERIALS_DATA.map((mat) => (
            <button
              key={mat.name}
              type="button"
              onClick={() => setSelectedMaterial(mat.name)}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all focus-visible:ring-2 focus-visible:ring-synth-cyan focus:outline-none ${
                selectedMaterial === mat.name
                  ? 'bg-slate-800 text-white shadow-sm border border-slate-600'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
              }`}
              style={{
                borderColor: selectedMaterial === mat.name ? mat.color : undefined,
                color: selectedMaterial === mat.name ? '#ffffff' : undefined,
              }}
            >
              <span
                className="inline-block w-2 h-2 rounded-full mr-1.5"
                style={{ backgroundColor: mat.color }}
              ></span>
              {mat.name.split(' ')[0]}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        {/* SVG Graph View */}
        <div className="lg:col-span-8 bg-midnight-950 rounded-xl p-3 border border-slate-800/80 relative">
          <svg
            viewBox={`0 0 ${width} ${height}`}
            className="w-full h-auto cursor-crosshair"
            onMouseMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const mouseX = e.clientX - rect.left;
              const ratio = (mouseX / rect.width) * width;
              const mappedStrain = Math.max(0, Math.min(maxStrain, ((ratio - padding.left) / graphW) * maxStrain));
              setHoverStrain(mappedStrain);
            }}
            onMouseLeave={() => setHoverStrain(null)}
          >
            <defs>
              <linearGradient id="areaGlow" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={current.color} stopOpacity="0.45" />
                <stop offset="100%" stopColor={current.color} stopOpacity="0.05" />
              </linearGradient>
            </defs>

            {/* Grid Lines */}
            {[1, 2, 3, 4].map((stressVal) => (
              <g key={`y-grid-${stressVal}`}>
                <line
                  x1={padding.left}
                  y1={scaleY(stressVal)}
                  x2={width - padding.right}
                  y2={scaleY(stressVal)}
                  stroke="#1e293b"
                  strokeDasharray="4 4"
                />
                <text
                  x={padding.left - 8}
                  y={scaleY(stressVal) + 4}
                  fill="#64748b"
                  fontSize="10"
                  textAnchor="end"
                  fontFamily="monospace"
                >
                  {stressVal.toFixed(1)}
                </text>
              </g>
            ))}

            {[5, 10, 15, 20, 25, 30, 35].map((strainVal) => (
              <g key={`x-grid-${strainVal}`}>
                <line
                  x1={scaleX(strainVal)}
                  y1={padding.top}
                  x2={scaleX(strainVal)}
                  y2={height - padding.bottom}
                  stroke="#1e293b"
                  strokeDasharray="4 4"
                />
                <text
                  x={scaleX(strainVal)}
                  y={height - padding.bottom + 16}
                  fill="#64748b"
                  fontSize="10"
                  textAnchor="middle"
                  fontFamily="monospace"
                >
                  {strainVal}%
                </text>
              </g>
            ))}

            {/* Axes */}
            <line
              x1={padding.left}
              y1={height - padding.bottom}
              x2={width - padding.right}
              y2={height - padding.bottom}
              stroke="#475569"
              strokeWidth="1.5"
            />
            <line
              x1={padding.left}
              y1={padding.top}
              x2={padding.left}
              y2={height - padding.bottom}
              stroke="#475569"
              strokeWidth="1.5"
            />

            {/* Axis Labels */}
            <text
              x={width / 2}
              y={height - 8}
              fill="#94a3b8"
              fontSize="11"
              textAnchor="middle"
              fontWeight="600"
            >
              Engineering Strain ε (% Elongation at Break)
            </text>
            <text
              x={18}
              y={height / 2}
              fill="#94a3b8"
              fontSize="11"
              textAnchor="middle"
              transform={`rotate(-90 18 ${height / 2})`}
              fontWeight="600"
            >
              Engineering Stress σ (GPa)
            </text>

            {/* Background reference lines for other materials */}
            {MATERIALS_DATA.map((mat) => {
              if (mat.name === current.name) return null;
              const { d } = generatePath(mat);
              return (
                <path
                  key={`bg-${mat.name}`}
                  d={d}
                  fill="none"
                  stroke={mat.color}
                  strokeWidth="1"
                  strokeOpacity="0.25"
                  strokeDasharray="3 3"
                />
              );
            })}

            {/* Active Shaded Area (Toughness) */}
            <path d={activePath.fillD} fill="url(#areaGlow)" />

            {/* Active Stress-Strain Curve */}
            <path
              d={activePath.d}
              fill="none"
              stroke={current.color}
              strokeWidth="3.2"
              strokeLinecap="round"
            />

            {/* Rupture Point Marker */}
            <circle
              cx={scaleX(current.elasticity)}
              cy={scaleY(current.tensileStrength)}
              r="5"
              fill={current.color}
              stroke="#ffffff"
              strokeWidth="2"
            />
            <text
              x={scaleX(current.elasticity) - 10}
              y={scaleY(current.tensileStrength) - 12}
              fill="#ffffff"
              fontSize="10"
              fontWeight="bold"
            >
              Rupture ({current.elasticity}%, {current.tensileStrength} GPa)
            </text>

            {/* Interactive hover crosshair */}
            {hoverStrain !== null && hoverStrain <= current.elasticity && hoverStress !== null && (
              <g>
                <line
                  x1={scaleX(hoverStrain)}
                  y1={padding.top}
                  x2={scaleX(hoverStrain)}
                  y2={height - padding.bottom}
                  stroke="#ffffff"
                  strokeWidth="1"
                  strokeDasharray="2 2"
                />
                <circle
                  cx={scaleX(hoverStrain)}
                  cy={scaleY(hoverStress)}
                  r="4"
                  fill="#ffffff"
                  stroke={current.color}
                  strokeWidth="2"
                />
              </g>
            )}
          </svg>

          {/* Hover Telemetry Readout */}
          {hoverStrain !== null && hoverStrain <= current.elasticity && hoverStress !== null && (
            <div className="absolute top-4 right-4 bg-midnight-950/90 border border-slate-700 px-3 py-1.5 rounded-lg text-xs font-mono shadow-lg pointer-events-none">
              <span className="text-slate-400">Strain ε: </span>
              <span className="text-synth-cyan font-bold">{hoverStrain.toFixed(1)}%</span>
              <span className="text-slate-400 ml-2">Stress σ: </span>
              <span className="text-white font-bold">{hoverStress.toFixed(2)} GPa</span>
            </div>
          )}
        </div>

        {/* Quantified Data Card */}
        <div className="lg:col-span-4 flex flex-col gap-3">
          <div className="bg-midnight-950 p-4 rounded-xl border border-slate-800">
            <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
              Active Material Analysis
            </span>
            <h4 className="text-base font-bold text-white mt-1" style={{ color: current.color }}>
              {current.name}
            </h4>

            <div className="grid grid-cols-2 gap-3 mt-4">
              <div className="bg-slate-900/90 p-2.5 rounded-lg border border-slate-800">
                <span className="text-[10px] text-slate-400 block">Tensile Strength</span>
                <span className="text-lg font-mono font-bold text-white">{current.tensileStrength} GPa</span>
              </div>
              <div className="bg-slate-900/90 p-2.5 rounded-lg border border-slate-800">
                <span className="text-[10px] text-slate-400 block">Elongation at Break</span>
                <span className="text-lg font-mono font-bold text-white">{current.elasticity}%</span>
              </div>
              <div className="bg-slate-900/90 p-2.5 rounded-lg border border-slate-800">
                <span className="text-[10px] text-slate-400 block">Modulus of Toughness</span>
                <span className="text-lg font-mono font-bold text-silk-gold">{current.toughness} MJ/m³</span>
              </div>
              <div className="bg-slate-900/90 p-2.5 rounded-lg border border-slate-800">
                <span className="text-[10px] text-slate-400 block">Volumetric Density</span>
                <span className="text-lg font-mono font-bold text-synth-cyan">{current.density} g/cm³</span>
              </div>
            </div>

            <div className="mt-3.5 pt-3 border-t border-slate-800/80">
              <div className="flex items-start gap-2">
                <Info className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                <p className="text-[11px] text-slate-300 leading-relaxed">
                  {current.caveat}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ==========================================
// 3. INTERACTIVE MOLECULAR ZOOM MICROSCOPE
// ==========================================
export const InteractiveMolecularZoom: React.FC = () => {
  const [zoomLevel, setZoomLevel] = useState<number>(3); // 1 = Macro, 2 = Micro, 3 = Nano, 4 = Atomic

  const levels = [
    {
      level: 1,
      scale: "20 µm (Macroscopic)",
      name: "Native Dragline Silk Strand",
      desc: "Smooth continuous cylindrical filament extruded from anterior spinneret. Exhibits core-sheath skin layer protecting internal fibril bundles.",
      badge: "Optical Macro",
      color: "#f59e0b"
    },
    {
      level: 2,
      scale: "100 nm (Mesoscopic)",
      name: "Interlocking Nanofibril Fibrils",
      desc: "Cross-sectional bundle of thousands of parallel nanofibrils (~20-100 nm wide) bound together by lipid/glycoprotein inter-fibrillar cement.",
      badge: "SEM Micrograph",
      color: "#38bdf8"
    },
    {
      level: 3,
      scale: "2 - 5 nm (Nanoscale)",
      name: "Poly-Alanine β-Sheet Nanocrystals",
      desc: "Tightly packed anti-parallel beta-sheets stabilized by dense hydrogen-bonding lattices. Confined to 2-3 nm, maximizing cooperative bond resistance.",
      badge: "Atomistic Model",
      color: "#00f0ff"
    },
    {
      level: 4,
      scale: "0.3 nm (Molecular)",
      name: "Glycine-Rich Amorphous Coils & H-Bonds",
      desc: "GPGXX molecular springs and sacrificial hydrogen bonds that reversibly uncoil under tension, absorbing kinetic impact without backbone rupture.",
      badge: "Quantum Mechanics",
      color: "#10b981"
    }
  ];

  const active = levels[zoomLevel - 1];

  return (
    <div className="bg-midnight-900/90 border border-slate-800 rounded-2xl p-6 backdrop-blur-md">
      <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
        <div className="flex items-center gap-2">
          <Microscope className="w-5 h-5 text-silk-gold" />
          <h3 className="text-base font-bold text-white tracking-wide">
            Interactive Nanoscale Structural Zoom
          </h3>
        </div>
        <span className="text-xs font-mono px-3 py-1 bg-slate-800 text-slate-300 rounded-lg border border-slate-700">
          Scale: {active.scale}
        </span>
      </div>

      {/* Zoom Level Stepper */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6">
        {levels.map((lvl) => (
          <button
            key={lvl.level}
            type="button"
            onClick={() => setZoomLevel(lvl.level)}
            aria-pressed={zoomLevel === lvl.level}
            className={`p-3 rounded-xl border text-left transition-all focus-visible:ring-2 focus-visible:ring-synth-cyan focus:outline-none ${
              zoomLevel === lvl.level
                ? 'bg-slate-800/90 border-synth-cyan shadow-[0_0_15px_rgba(0,240,255,0.2)]'
                : 'bg-midnight-950/70 border-slate-800 hover:border-slate-700 text-slate-400'
            }`}
          >
            <span className="text-[10px] font-mono block text-slate-400">Step {lvl.level}</span>
            <span className={`text-xs font-bold block mt-0.5 ${zoomLevel === lvl.level ? 'text-white' : 'text-slate-300'}`}>
              {lvl.badge}
            </span>
          </button>
        ))}
      </div>

      {/* Visual Canvas Representation */}
      <div className="relative aspect-video max-h-[300px] w-full bg-midnight-950 rounded-xl overflow-hidden border border-slate-800 flex items-center justify-center p-6">
        {zoomLevel === 1 && (
          <div className="relative w-full h-full flex items-center justify-center">
            <div className="w-3/4 h-8 bg-gradient-to-r from-amber-600 via-amber-400 to-amber-600 rounded-full shadow-[0_0_30px_rgba(245,158,11,0.5)] flex items-center justify-center relative">
              <span className="text-xs font-mono font-bold text-black uppercase tracking-wider">
                Spider Dragline Thread (d ≈ 20 µm)
              </span>
            </div>
            <div className="absolute bottom-4 text-center text-xs text-slate-400">
              Macroscopic fiber with high surface tension and lipid outer sheath
            </div>
          </div>
        )}

        {zoomLevel === 2 && (
          <div className="relative w-full h-full flex items-center justify-center gap-2">
            {[...Array(9)].map((_, i) => (
              <div
                key={i}
                className="w-7 h-48 bg-gradient-to-b from-cyan-600 via-cyan-400 to-blue-600 rounded-lg shadow-lg flex items-center justify-center opacity-85"
              >
                <div className="w-1 h-full bg-white/20"></div>
              </div>
            ))}
            <div className="absolute top-4 text-xs font-mono text-cyan-300 bg-midnight-900/80 px-3 py-1 rounded-md border border-cyan-800">
              Parallel Nanofibril Array (Each ~50 nm diameter)
            </div>
          </div>
        )}

        {zoomLevel === 3 && (
          <div className="relative w-full h-full flex items-center justify-center">
            <div className="grid grid-cols-3 gap-6 items-center">
              {[1, 2, 3].map((b) => (
                <div key={b} className="p-4 bg-cyan-950/80 border-2 border-synth-cyan rounded-xl text-center shadow-[0_0_20px_rgba(0,240,255,0.3)]">
                  <span className="text-[10px] font-mono text-cyan-400 block">Anti-Parallel β-Sheet</span>
                  <div className="flex flex-col gap-1.5 my-2">
                    <div className="h-1.5 bg-synth-cyan rounded-full"></div>
                    <div className="h-1.5 bg-synth-cyan rounded-full"></div>
                    <div className="h-1.5 bg-synth-cyan rounded-full"></div>
                  </div>
                  <span className="text-[11px] font-bold text-white">2.5 nm Crystal Block</span>
                </div>
              ))}
            </div>
            <div className="absolute bottom-3 text-xs text-slate-400">
              High-density hydrogen bonding conferring &gt; 1.3 GPa tensile strength
            </div>
          </div>
        )}

        {zoomLevel === 4 && (
          <div className="relative w-full h-full flex flex-col items-center justify-center gap-3">
            <div className="flex items-center gap-3 text-emerald-400 font-mono text-sm">
              <span className="px-2 py-1 bg-emerald-950 border border-emerald-500 rounded">Gly</span>
              <span>—</span>
              <span className="px-2 py-1 bg-emerald-950 border border-emerald-500 rounded">Pro</span>
              <span>—</span>
              <span className="px-2 py-1 bg-emerald-950 border border-emerald-500 rounded">Gly</span>
              <span>—</span>
              <span className="px-2 py-1 bg-amber-950 border border-amber-500 text-amber-300 rounded">Ala</span>
              <span>—</span>
              <span className="px-2 py-1 bg-amber-950 border border-amber-500 text-amber-300 rounded">Ala</span>
            </div>
            <div className="text-center max-w-md text-xs text-slate-300 mt-2">
              Glycine-rich motifs form flexible helical springs. Under mechanical strain, sacrificial hydrogen bonds rupture progressively, soaking up 160 MJ/m³ of energy.
            </div>
          </div>
        )}
      </div>

      <div className="mt-4 p-4 bg-midnight-950 rounded-xl border border-slate-800">
        <h4 className="text-sm font-bold text-white flex items-center gap-2" style={{ color: active.color }}>
          <Sparkles className="w-4 h-4" />
          {active.name}
        </h4>
        <p className="text-xs text-slate-300 mt-1 leading-relaxed">
          {active.desc}
        </p>
      </div>
    </div>
  );
};

// ==========================================
// 4. INTERACTIVE IMPACT FORCE & DISSIPATION SIMULATOR
// ==========================================
export const InteractiveImpactSimulator: React.FC = () => {
  const [impactTriggered, setImpactTriggered] = useState<boolean>(false);
  const [waveRadius, setWaveRadius] = useState<number>(0);
  const [dissipatedEnergy, setDissipatedEnergy] = useState<number>(0);

  useEffect(() => {
    let animId: number;
    if (impactTriggered) {
      setWaveRadius(0);
      setDissipatedEnergy(0);
      const start = performance.now();
      const duration = 1800; // ms

      const step = (now: number) => {
        const elapsed = now - start;
        if (elapsed >= duration) {
          setWaveRadius(160);
          setDissipatedEnergy(220);
          setImpactTriggered(false);
        } else {
          setWaveRadius((elapsed / duration) * 160);
          setDissipatedEnergy(Math.min(220, Math.round((elapsed / duration) * 220)));
          animId = requestAnimationFrame(step);
        }
      };

      animId = requestAnimationFrame(step);
      return () => cancelAnimationFrame(animId);
    }
  }, [impactTriggered]);

  return (
    <div className="bg-midnight-900/90 border border-slate-800 rounded-2xl p-6 backdrop-blur-md">
      <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
        <div>
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-synth-cyan" />
            <h3 className="text-base font-bold text-white tracking-wide">
              Kinetic Energy Dissipation in Woven Orthogonal Mesh
            </h3>
          </div>
          <p className="text-xs text-slate-400 mt-0.5">
            Visualize transverse acoustic wave propagation (c = √(E/ρ)) across warp and weft yarns.
          </p>
        </div>

        <button
          type="button"
          onClick={() => setImpactTriggered(true)}
          disabled={impactTriggered}
          className={`px-4 py-2 text-xs font-semibold rounded-xl border transition-all flex items-center gap-2 focus-visible:ring-2 focus-visible:ring-synth-cyan focus:outline-none ${
            impactTriggered
              ? 'bg-amber-500/20 border-amber-500 text-amber-300 cursor-not-allowed'
              : 'bg-synth-cyan/20 border-synth-cyan text-synth-cyan hover:bg-synth-cyan/30 shadow-[0_0_15px_rgba(0,240,255,0.25)]'
          }`}
        >
          <Play className="w-3.5 h-3.5" />
          {impactTriggered ? 'Dissipating Kinetic Shockwave...' : 'Trigger Kinetic Impact (220 Joules)'}
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-center">
        {/* Orthogonal Grid Canvas Simulation */}
        <div className="md:col-span-8 relative aspect-video max-h-[300px] bg-midnight-950 rounded-xl overflow-hidden border border-slate-800 flex items-center justify-center">
          {/* 2D Woven Fabric Grid */}
          <svg className="w-full h-full" viewBox="0 0 400 240">
            {/* Warp threads (vertical) */}
            {[40, 80, 120, 160, 200, 240, 280, 320, 360].map((x) => (
              <line
                key={`warp-${x}`}
                x1={x}
                y1={10}
                x2={x}
                y2={230}
                stroke={impactTriggered && Math.abs(x - 200) < waveRadius ? '#00f0ff' : '#1e293b'}
                strokeWidth={impactTriggered && Math.abs(x - 200) < waveRadius ? '2.5' : '1'}
                strokeOpacity={impactTriggered ? '0.9' : '0.4'}
              />
            ))}

            {/* Weft threads (horizontal) */}
            {[30, 60, 90, 120, 150, 180, 210].map((y) => (
              <line
                key={`weft-${y}`}
                x1={20}
                y1={y}
                x2={380}
                y2={y}
                stroke={impactTriggered && Math.abs(y - 120) < waveRadius ? '#00f0ff' : '#1e293b'}
                strokeWidth={impactTriggered && Math.abs(y - 120) < waveRadius ? '2.5' : '1'}
                strokeOpacity={impactTriggered ? '0.9' : '0.4'}
              />
            ))}

            {/* Transverse wave propagation ring */}
            {impactTriggered && (
              <circle
                cx={200}
                cy={120}
                r={waveRadius}
                fill="none"
                stroke="#00f0ff"
                strokeWidth="2.5"
                strokeDasharray="4 4"
                className="animate-pulse motion-reduce:animate-none"
              />
            )}

            {/* Center impact node */}
            <circle
              cx={200}
              cy={120}
              r={impactTriggered ? 8 : 5}
              fill={impactTriggered ? '#f59e0b' : '#38bdf8'}
              stroke="#ffffff"
              strokeWidth="2"
            />
          </svg>

          <div className="absolute bottom-2.5 left-3 text-[11px] font-mono text-slate-400 bg-midnight-900/80 px-2.5 py-1 rounded border border-slate-800">
            Radial Wave Radius: {Math.round(waveRadius)} mm
          </div>
        </div>

        {/* Shockwave Telemetry Card */}
        <div className="md:col-span-4 flex flex-col gap-3">
          <div className="bg-midnight-950 p-4 rounded-xl border border-slate-800">
            <span className="text-[10px] font-mono text-slate-400 uppercase">Impact Telemetry</span>
            <div className="mt-2 flex items-baseline justify-between">
              <span className="text-2xl font-mono font-bold text-synth-cyan">{dissipatedEnergy} J</span>
              <span className="text-xs text-slate-400">of 220 J Kinetic Load</span>
            </div>

            {/* Progress Bar */}
            <div className="w-full h-2 bg-slate-800 rounded-full mt-2 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-synth-cyan to-silk-gold transition-all duration-100"
                style={{ width: `${(dissipatedEnergy / 220) * 100}%` }}
              ></div>
            </div>

            <div className="mt-4 flex flex-col gap-2 text-xs text-slate-300">
              <div className="flex items-center justify-between border-b border-slate-800/80 pb-1.5">
                <span className="text-slate-400">Wave Velocity (c):</span>
                <span className="font-mono text-white">~3,100 m/s</span>
              </div>
              <div className="flex items-center justify-between border-b border-slate-800/80 pb-1.5">
                <span className="text-slate-400">Yarn Friction Conversion:</span>
                <span className="font-mono text-silk-gold">34% to Micro-heat</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Plastic Strain Damping:</span>
                <span className="font-mono text-synth-cyan">66% Molecular Draw</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ==========================================
// 5. INTERACTIVE BIODEGRADATION & HEALING SYNCHRONIZED TIMELINE
// ==========================================
export const InteractiveBiodegradationTimeline: React.FC = () => {
  const [selectedDay, setSelectedDay] = useState<number>(14);

  // Interpolate data for the selected slider day
  const getInterpolatedData = (day: number) => {
    const pts = SUTURE_DEGRADATION_DATA;
    let prev = pts[0];
    let next = pts[pts.length - 1];

    for (let i = 0; i < pts.length; i++) {
      if (pts[i].day <= day) prev = pts[i];
      if (pts[i].day >= day) {
        next = pts[i];
        break;
      }
    }

    if (prev.day === next.day) return prev;
    const factor = (day - prev.day) / (next.day - prev.day);
    return {
      day,
      sutureStrengthPercent: Math.round(prev.sutureStrengthPercent + factor * (next.sutureStrengthPercent - prev.sutureStrengthPercent)),
      tissueRecoveryPercent: Math.round(prev.tissueRecoveryPercent + factor * (next.tissueRecoveryPercent - prev.tissueRecoveryPercent)),
      status: day < 21 ? prev.status : next.status
    };
  };

  const current = getInterpolatedData(selectedDay);

  return (
    <div className="bg-midnight-900/90 border border-slate-800 rounded-2xl p-6 backdrop-blur-md">
      <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
        <div className="flex items-center gap-2">
          <HeartPulse className="w-5 h-5 text-bio-emerald" />
          <h3 className="text-base font-bold text-white tracking-wide">
            Biomedical Suture Absorption & Tissue Collagen Kinetics
          </h3>
        </div>
        <span className="text-xs font-mono px-3 py-1 bg-emerald-950/80 text-bio-mint rounded-lg border border-emerald-800">
          Day {selectedDay} Post-Op
        </span>
      </div>

      {/* Slider Control */}
      <div className="mb-6">
        <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
          <span>Day 0 (Immediate Closure)</span>
          <span className="font-bold text-white font-mono">Current: Day {selectedDay}</span>
          <span>Day 60 (Complete Absorption)</span>
        </div>
        <input
          type="range"
          min="0"
          max="60"
          value={selectedDay}
          onChange={(e) => setSelectedDay(parseInt(e.target.value, 10))}
          aria-label="Post-Operative Healing Day (0 to 60 days)"
          className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
        />
      </div>

      {/* Synchronized Twin Progress Display */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        {/* Suture Tensile Strength */}
        <div className="bg-midnight-950 p-4 rounded-xl border border-slate-800">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-synth-cyan">Suture Mechanical Tensile Retention</span>
            <span className="text-lg font-mono font-bold text-synth-cyan">{current.sutureStrengthPercent}%</span>
          </div>
          <div className="w-full h-3 bg-slate-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-synth-cyan transition-all duration-150"
              style={{ width: `${current.sutureStrengthPercent}%` }}
            ></div>
          </div>
          <p className="text-[11px] text-slate-400 mt-2">
            Gradual enzymatic cleaving by native proteases into inert glycine and alanine amino acids.
          </p>
        </div>

        {/* Tissue Recovery */}
        <div className="bg-midnight-950 p-4 rounded-xl border border-slate-800">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-bio-emerald">Native Tissue Collagen Load-Bearing Capacity</span>
            <span className="text-lg font-mono font-bold text-bio-emerald">{current.tissueRecoveryPercent}%</span>
          </div>
          <div className="w-full h-3 bg-slate-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-bio-emerald transition-all duration-150"
              style={{ width: `${current.tissueRecoveryPercent}%` }}
            ></div>
          </div>
          <p className="text-[11px] text-slate-400 mt-2">
            Fibroblast proliferation and neo-vascular collagen synthesis regaining endogenous strength.
          </p>
        </div>
      </div>

      {/* Clinical Status Callout */}
      <div className="p-3.5 bg-emerald-950/40 rounded-xl border border-emerald-800/80 flex items-start gap-3">
        <CheckCircle2 className="w-4 h-4 text-bio-mint shrink-0 mt-0.5" />
        <div>
          <span className="text-xs font-bold text-bio-mint block uppercase tracking-wider">
            Physiological Healing Milestone
          </span>
          <p className="text-xs text-slate-200 mt-0.5">
            {current.status}
          </p>
          <p className="text-[10px] text-slate-400 mt-1 italic">
            * Note: In vivo enzymatic degradation kinetics vary based on local protease activity, tissue vascularity, mechanical movement, and interstitial pH.
          </p>
        </div>
      </div>
    </div>
  );
};

// ==========================================
// 6. INTERACTIVE BIOMIMICRY PIPELINE STEPPER
// ==========================================
export const InteractiveBiomimicryPipeline: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(1);

  const steps = [
    {
      num: 1,
      title: "Nature's Sequence",
      sub: "Spider Dragline Genome",
      detail: "Isolate repetitive DNA sequences encoding Major Ampullate Spidroins (MaSp1 and MaSp2) from Golden Orb Weavers.",
      icon: Dna
    },
    {
      num: 2,
      title: "Host Expression",
      sub: "Recombinant Microbes",
      detail: "Insert synthetic spidroin plasmids into engineered E. coli or Pichia pastoris yeast for scalable expression.",
      icon: Layers
    },
    {
      num: 3,
      title: "Precision Fermentation",
      sub: "Industrial Bioreactors",
      detail: "Feed microbial cultures with renewable plant sugars; harvest concentrated liquid protein dope at 30% concentration.",
      icon: Sparkles
    },
    {
      num: 4,
      title: "Microfluidic Wet Spinning",
      sub: "Aqueous Phase Inversion",
      detail: "Extrude dope through tapered microfluidic channels with pH shift (7.6 → 5.7) and shear stress into alcohol coagulation bath.",
      icon: Activity
    },
    {
      num: 5,
      title: "Post-Draw Orientation",
      sub: "Mechanical Drawing Rollers",
      detail: "Draw solid fiber 2× to 5× through tension rollers to orient beta-sheet nanocrystals along the longitudinal axis.",
      icon: Shield
    }
  ];

  const current = steps[activeStep - 1];

  return (
    <div className="bg-midnight-900/90 border border-slate-800 rounded-2xl p-6 backdrop-blur-md">
      <div className="flex items-center gap-2 mb-4">
        <Dna className="w-5 h-5 text-bio-emerald" />
        <h3 className="text-base font-bold text-white tracking-wide">
          End-to-End Biomimicry Manufacturing Pipeline
        </h3>
      </div>

      {/* Stepper Tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 mb-5">
        {steps.map((st) => (
          <button
            key={st.num}
            type="button"
            onClick={() => setActiveStep(st.num)}
            aria-pressed={activeStep === st.num}
            className={`p-2.5 rounded-xl border text-center transition-all focus-visible:ring-2 focus-visible:ring-bio-emerald focus:outline-none ${
              activeStep === st.num
                ? 'bg-slate-800 border-bio-emerald shadow-[0_0_12px_rgba(16,185,129,0.3)]'
                : 'bg-midnight-950 border-slate-800 text-slate-400 hover:text-white'
            }`}
          >
            <span className="text-[10px] font-mono block text-bio-emerald">Stage 0{st.num}</span>
            <span className="text-xs font-bold block truncate mt-0.5">{st.title}</span>
          </button>
        ))}
      </div>

      <div className="p-4 bg-midnight-950 rounded-xl border border-slate-800 flex items-start gap-4">
        <div className="p-3 bg-emerald-950 rounded-lg border border-emerald-700/80 shrink-0">
          <current.icon className="w-6 h-6 text-bio-mint" />
        </div>
        <div>
          <span className="text-[11px] font-mono text-bio-emerald uppercase">{current.sub}</span>
          <h4 className="text-sm font-bold text-white mt-0.5">{current.title}</h4>
          <p className="text-xs text-slate-300 mt-1 leading-relaxed">
            {current.detail}
          </p>
        </div>
      </div>
    </div>
  );
};
