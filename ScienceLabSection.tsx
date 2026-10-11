import React, { useState } from 'react';
import {
  InteractiveSpiderWeb,
  InteractiveStressStrainGraph,
  InteractiveMolecularZoom,
  InteractiveImpactSimulator,
  InteractiveBiodegradationTimeline,
  InteractiveBiomimicryPipeline
} from './InteractiveScienceLab';
import {
  FlaskConical,
  Activity,
  Microscope,
  Shield,
  HeartPulse,
  Dna,
  Sparkles
} from 'lucide-react';

export const ScienceLabSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('stress-strain');

  const tabs = [
    { id: 'stress-strain', label: 'Stress–Strain Curve', icon: Activity },
    { id: 'molecular-zoom', label: 'Nanoscale Hierarchy', icon: Microscope },
    { id: 'impact-dissipation', label: 'Impact Wave Dissipation', icon: Shield },
    { id: 'suture-timeline', label: 'Suture Degradation Kinetics', icon: HeartPulse },
    { id: 'biomimicry-pipeline', label: 'Biomimicry Pipeline', icon: Dna },
    { id: 'spider-dew', label: 'Spider Web Surface Tension', icon: Sparkles },
  ];

  return (
    <section id="science-lab" className="py-16 px-4 sm:px-6 lg:px-8 bg-midnight-950/80 border-b border-slate-800 scroll-mt-20">
      <div className="max-w-7xl mx-auto flex flex-col gap-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-slate-800 pb-6">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-synth-cyan/15 border border-synth-cyan/30 text-synth-cyan shadow-[0_0_15px_rgba(0,240,255,0.2)]">
              <FlaskConical className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-mono text-synth-cyan uppercase tracking-wider block">
                Interactive Engineering Sandbox
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Explore The Science Lab
              </h2>
            </div>
          </div>
          <p className="text-xs text-slate-400 max-w-md">
            Manipulate mechanical strain, impact shockwaves, enzymatic degradation rates, and nanoscale beta-sheets in real time.
          </p>
        </div>

        {/* Tab selection navigation */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin" role="tablist" aria-label="Science Lab Modules">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                id={`tab-${tab.id}`}
                aria-selected={isActive}
                aria-controls={`panel-${tab.id}`}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2.5 rounded-xl text-xs font-semibold shrink-0 transition-all flex items-center gap-2 border focus-visible:ring-2 focus-visible:ring-synth-cyan focus:outline-none ${
                  isActive
                    ? 'bg-synth-cyan/20 border-synth-cyan text-white shadow-[0_0_15px_rgba(0,240,255,0.25)]'
                    : 'bg-midnight-900 border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-synth-cyan' : 'text-slate-500'}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content Display */}
        <div className="mt-2" role="tabpanel" id={`panel-${activeTab}`} aria-labelledby={`tab-${activeTab}`}>
          {activeTab === 'stress-strain' && <InteractiveStressStrainGraph />}
          {activeTab === 'molecular-zoom' && <InteractiveMolecularZoom />}
          {activeTab === 'impact-dissipation' && <InteractiveImpactSimulator />}
          {activeTab === 'suture-timeline' && <InteractiveBiodegradationTimeline />}
          {activeTab === 'biomimicry-pipeline' && <InteractiveBiomimicryPipeline />}
          {activeTab === 'spider-dew' && <InteractiveSpiderWeb />}
        </div>
      </div>
    </section>
  );
};
