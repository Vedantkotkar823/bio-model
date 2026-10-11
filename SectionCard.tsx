import React, { useState } from 'react';
import { SectionData } from '../types';
import {
  ChevronDown,
  ChevronUp,
  Clock,
  Sparkles,
  ArrowRight,
  Maximize2,
  CheckCircle2,
  Info
} from 'lucide-react';
import { ImageHotspotViewer } from './ImageHotspotViewer';
import {
  InteractiveSpiderWeb,
  InteractiveStressStrainGraph,
  InteractiveMolecularZoom,
  InteractiveImpactSimulator,
  InteractiveBiodegradationTimeline,
  InteractiveBiomimicryPipeline
} from './InteractiveScienceLab';
import {
  MicroscopicFibreExplorer,
  FibreForceStretchingSim,
  ProtectiveVestLayerInspector,
  SurgicalSutureClosureSim,
  BiomimicryManufacturingFlow,
  GlandExtrusionSim,
  MaterialsFailureRadar,
  MicrosurgicalGaugeSimulator,
  NerveRegenerationScaffoldSim,
  DualApplicationSplitScreen,
  SustainabilityLcaCalculator,
  ThreeHorizonsMatrix,
  GrandSynthesisVisualizer
} from './InteractiveVisualComponents';

interface SectionCardProps {
  section: SectionData;
  isActiveSection: boolean;
  onOpenExhibitionMode: (sectionIndex: number) => void;
  onJumpToNext: () => void;
  isLastSection: boolean;
  reducedMotion?: boolean;
}

export const SectionCard: React.FC<SectionCardProps> = ({
  section,
  isActiveSection,
  onOpenExhibitionMode,
  onJumpToNext,
  isLastSection,
  reducedMotion = false,
}) => {
  const [deepDiveExpanded, setDeepDiveExpanded] = useState<boolean>(false);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);

  // Badge styling
  const badgeClasses = {
    amber: 'bg-amber-500/15 text-silk-gold border-amber-500/30',
    cyan: 'bg-cyan-500/15 text-synth-cyan border-cyan-500/30',
    emerald: 'bg-emerald-500/15 text-bio-mint border-emerald-500/30',
    blue: 'bg-blue-500/15 text-blue-300 border-blue-500/30',
    purple: 'bg-purple-500/15 text-purple-300 border-purple-500/30',
  }[section.badgeColor] || 'bg-slate-800 text-slate-300 border-slate-700';

  // Render the dedicated interactive experience for this section
  const renderInteractiveElement = () => {
    switch (section.sectionNumber) {
      case 1:
        return <InteractiveSpiderWeb />;
      case 2:
        return <GlandExtrusionSim />;
      case 3:
        return <FibreForceStretchingSim />;
      case 4:
        return <MicroscopicFibreExplorer />;
      case 5:
        return <BiomimicryManufacturingFlow />;
      case 6:
        return <MaterialsFailureRadar />;
      case 7:
        return <ProtectiveVestLayerInspector />;
      case 8:
        return <InteractiveImpactSimulator />;
      case 9:
        return <MicrosurgicalGaugeSimulator />;
      case 10:
        return <InteractiveBiodegradationTimeline />;
      case 11:
        return <NerveRegenerationScaffoldSim />;
      case 12:
        return <DualApplicationSplitScreen />;
      case 13:
        return <SustainabilityLcaCalculator />;
      case 14:
        return <ThreeHorizonsMatrix />;
      case 15:
        return <GrandSynthesisVisualizer />;
      default:
        return null;
    }
  };

  const isWideLayout = [1, 4, 7, 12, 15].includes(section.sectionNumber);
  const isAlternate = section.sectionNumber % 2 === 0;

  const handleNextTransition = () => {
    if (reducedMotion) {
      onJumpToNext();
      return;
    }

    setIsTransitioning(true);
    onJumpToNext();
    setTimeout(() => {
      setIsTransitioning(false);
    }, 400);
  };

  return (
    <section
      id={section.id}
      className={`relative scroll-mt-20 py-14 px-4 sm:px-6 lg:px-8 border-b border-slate-800/80 transition-colors duration-300 ${
        isActiveSection ? 'bg-midnight-900/30' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-8">
        {/* Section Header Meta */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800/70 pb-4">
          <div className="flex items-center gap-3">
            <span className="text-3xl sm:text-4xl font-mono font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-silk-gold to-synth-cyan">
              {section.sectionNumber.toString().padStart(2, '0')}
            </span>
            <div>
              <div className="flex items-center gap-2">
                <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-mono border ${badgeClasses}`}>
                  {section.categoryLabel}
                </span>
                <span className="text-xs text-slate-400 flex items-center gap-1 font-mono">
                  <Clock className="w-3.5 h-3.5 text-slate-500" />
                  ~3 Minutes Focus
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white tracking-tight mt-1">
                {section.title}
              </h2>
            </div>
          </div>

          {/* Fullscreen Presentation Mode Trigger for this Section */}
          <button
            type="button"
            onClick={() => onOpenExhibitionMode(section.sectionNumber - 1)}
            className="px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-synth-cyan/15 hover:bg-synth-cyan/25 text-synth-cyan border border-synth-cyan/30 flex items-center gap-2 transition shadow-sm focus-visible:ring-2 focus-visible:ring-synth-cyan focus:outline-none"
            title="Open Presentation Mode for this Section"
            aria-label={`Present Section ${section.sectionNumber} in fullscreen`}
          >
            <Maximize2 className="w-3.5 h-3.5" />
            <span>Present Section in Fullscreen</span>
          </button>
        </div>

        {/* Section Subtitle Tagline */}
        <p className="text-sm sm:text-base text-slate-300 italic font-serif max-w-3xl">
          "{section.subtitle}"
        </p>

        {/* Section Body: Visual Centerpiece & Scientific Points */}
        {isWideLayout ? (
          /* Wide Hero Panoramic Layout (Sections 1, 4, 7, 12, 15) */
          <div className="flex flex-col gap-6">
            <ImageHotspotViewer
              imageSrc={section.imageSrc}
              imageAlt={section.imageAlt}
              imageCaption={section.imageCaption}
              hotspots={section.hotspots}
              onOpenExpandedView={() => onOpenExhibitionMode(section.sectionNumber - 1)}
            />

            {/* Scientific Points Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {section.scientificPoints.map((pt, idx) => (
                <div
                  key={idx}
                  className="bg-midnight-900/80 border border-slate-800/80 rounded-xl p-4 hover:border-slate-700 transition flex flex-col justify-between"
                >
                  <div>
                    {pt.metric && (
                      <span className="text-base font-mono font-bold text-synth-cyan block mb-1">
                        {pt.metric}
                      </span>
                    )}
                    <h3 className="text-xs font-bold text-white leading-snug">{pt.title}</h3>
                    <p className="text-xs text-slate-300 mt-2 leading-relaxed">{pt.description}</p>
                  </div>
                  {pt.metricContext && (
                    <span className="text-[10px] font-mono text-slate-400 mt-3 pt-2 border-t border-slate-800 block">
                      {pt.metricContext}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        ) : (
          /* Asymmetric Editorial 2-Column Layout */
          <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${isAlternate ? '' : 'lg:flex-row-reverse'}`}>
            {/* Visual Centerpiece with Hotspots Column */}
            <div className={`lg:col-span-6 ${isAlternate ? 'order-1 lg:order-1' : 'order-1 lg:order-2'}`}>
              <ImageHotspotViewer
                imageSrc={section.imageSrc}
                imageAlt={section.imageAlt}
                imageCaption={section.imageCaption}
                hotspots={section.hotspots}
                onOpenExpandedView={() => onOpenExhibitionMode(section.sectionNumber - 1)}
              />
            </div>

            {/* Scientific Points Column */}
            <div className={`lg:col-span-6 flex flex-col gap-4 ${isAlternate ? 'order-2 lg:order-2' : 'order-2 lg:order-1'}`}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {section.scientificPoints.map((pt, idx) => (
                  <div
                    key={idx}
                    className="bg-midnight-900/80 border border-slate-800/80 rounded-xl p-4 hover:border-slate-700 transition"
                  >
                    {pt.metric && (
                      <span className="text-sm font-mono font-bold text-silk-gold block mb-1">
                        {pt.metric}
                      </span>
                    )}
                    <h3 className="text-xs font-bold text-white">{pt.title}</h3>
                    <p className="text-[11px] text-slate-300 mt-1.5 leading-relaxed">{pt.description}</p>
                  </div>
                ))}
              </div>

              {/* Engineering Summary Paragraph */}
              <div className="p-4 bg-slate-900/60 rounded-xl border border-slate-800 text-xs text-slate-300 leading-relaxed">
                <strong className="text-white block mb-1">First-Year Engineering Context:</strong>
                {section.engineeringSummary}
              </div>
            </div>
          </div>
        )}

        {/* Dedicated Embedded Interactive Experience */}
        {renderInteractiveElement()}

        {/* Expandable Engineering Deep Dive Drawer */}
        <div className="bg-midnight-900/90 border border-slate-800/80 rounded-2xl overflow-hidden">
          <button
            type="button"
            onClick={() => setDeepDiveExpanded(!deepDiveExpanded)}
            className="w-full px-5 py-3.5 flex items-center justify-between text-left hover:bg-slate-800/50 transition focus-visible:ring-2 focus-visible:ring-synth-cyan focus:outline-none"
            aria-expanded={deepDiveExpanded}
          >
            <div className="flex items-center gap-2.5">
              <Sparkles className="w-4 h-4 text-synth-cyan" />
              <span className="text-xs font-bold uppercase tracking-wider text-slate-200">
                Section {section.sectionNumber.toString().padStart(2, '0')} Deep Dive: Key Takeaways & Technical Keywords
              </span>
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <span>{deepDiveExpanded ? 'Collapse Deep Dive' : 'Expand Scientific Takeaways'}</span>
              {deepDiveExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </div>
          </button>

          {deepDiveExpanded && (
            <div className="p-5 border-t border-slate-800/80 bg-slate-950/70 space-y-4 text-xs animate-in fade-in duration-150">
              {/* Technical Keywords Pills */}
              <div>
                <span className="text-synth-cyan font-bold block mb-2 font-mono uppercase tracking-wider text-[10px]">
                  Core Scientific Keywords:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {section.presentation.technicalKeywords.map((kw, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-lg bg-slate-800 border border-slate-700 text-slate-200 font-mono text-[11px]"
                    >
                      {kw}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Takeaways */}
              <div className="p-4 bg-slate-900 rounded-xl border border-slate-800">
                <span className="text-silk-gold font-bold block mb-2 font-mono uppercase tracking-wider text-[10px]">
                  Key Engineering Takeaways:
                </span>
                <ul className="space-y-1.5 text-slate-200">
                  {section.presentation.keyTakeaways.map((kt, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-bio-mint shrink-0 mt-0.5" />
                      <span>{kt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Visual Focus Description */}
              <div className="p-3 bg-midnight-900 rounded-lg border border-slate-800 text-[11px] text-slate-400 flex items-start gap-2">
                <Info className="w-4 h-4 text-synth-cyan shrink-0 mt-0.5" />
                <span>
                  <strong className="text-slate-300">Visual Focus: </strong>
                  {section.presentation.visualFocus}
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Transition Link to Next Section with Spider-Web Thread Effect */}
        {!isLastSection && (
          <div className="relative">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 p-4 bg-slate-950/70 rounded-xl border border-slate-800/70 text-xs shadow-md">
              <span className="text-slate-400 italic">
                <strong className="text-slate-200 not-italic">Speaker Handoff: </strong>
                {section.transitionText}
              </span>
              <button
                type="button"
                onClick={handleNextTransition}
                className="group/btn text-synth-cyan hover:text-white px-3 py-1.5 rounded-lg bg-synth-cyan/10 hover:bg-synth-cyan/20 border border-synth-cyan/30 flex items-center gap-1.5 font-semibold shrink-0 transition focus-visible:ring-2 focus-visible:ring-synth-cyan focus:outline-none"
                aria-label={`Advance to Section ${section.sectionNumber + 1}`}
              >
                <span>Advance to Section {(section.sectionNumber + 1).toString().padStart(2, '0')}</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Connecting Silk Filament Line */}
            <div className="flex justify-center -mb-8 mt-2 pointer-events-none" aria-hidden="true">
              <div
                className={`w-0.5 h-8 transition-all duration-300 ${
                  isTransitioning
                    ? 'bg-synth-cyan shadow-[0_0_12px_rgba(0,240,255,1)] scale-y-125'
                    : 'bg-gradient-to-b from-slate-700 via-silk-gold/40 to-slate-800'
                }`}
              ></div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
