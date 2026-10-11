import React, { useState, useEffect, useRef } from 'react';
import { SectionData } from '../types';
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Minimize2,
  X,
  Clock,
  Play,
  Pause,
  RotateCcw,
  Sparkles,
  ArrowRight,
  User,
  Shield,
  HeartPulse,
  Activity,
  Layers,
  Dna
} from 'lucide-react';
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

interface ExhibitionModeProps {
  sections: SectionData[];
  currentIndex: number;
  onSelectSection: (index: number) => void;
  isOpen: boolean;
  onClose: () => void;
}

export const ExhibitionPresentationMode: React.FC<ExhibitionModeProps> = ({
  sections,
  currentIndex,
  onSelectSection,
  isOpen,
  onClose,
}) => {
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  // Presenter timer: does NOT start automatically; does NOT reset on section change
  const [timerSeconds, setTimerSeconds] = useState<number>(0);
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(false);

  const activeSection = sections[currentIndex] || sections[0];
  const allocatedSeconds = (activeSection?.presentation?.allocatedMinutes || 3) * 60;
  const isOvertime = timerSeconds > allocatedSeconds;

  // Background scrolling lock when presentation mode is open
  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [isOpen]);

  // Fullscreen change listener to sync state with browser / OS fullscreen transitions
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  // Presenter timer ticker
  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | null = null;
    if (isOpen && isTimerRunning) {
      interval = setInterval(() => {
        setTimerSeconds((prev) => prev + 1);
      }, 1000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isOpen, isTimerRunning]);

  // Stop timer and clean up when presentation mode is closed
  useEffect(() => {
    if (!isOpen) {
      setIsTimerRunning(false);
      setTimerSeconds(0);
    }
  }, [isOpen]);

  // Keyboard navigation & shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      // Do NOT trigger keyboard shortcuts if user is currently interacting with an input or slider
      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.tagName === 'INPUT' ||
          target.tagName === 'TEXTAREA' ||
          target.tagName === 'SELECT' ||
          target.isContentEditable)
      ) {
        return;
      }

      if (e.key === 'ArrowRight' || e.key === 'PageDown' || e.key === ' ') {
        e.preventDefault();
        if (currentIndex < sections.length - 1) {
          onSelectSection(currentIndex + 1);
        }
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault();
        if (currentIndex > 0) {
          onSelectSection(currentIndex - 1);
        }
      } else if (e.key === 'Escape') {
        if (document.fullscreenElement) {
          document.exitFullscreen().catch(() => {});
        } else {
          onClose();
        }
      } else if (e.key === 'f' || e.key === 'F') {
        e.preventDefault();
        toggleFullscreen();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentIndex, sections.length, onSelectSection, onClose]);

  if (!isOpen) return null;

  const toggleFullscreen = () => {
    if (!document.fullscreenEnabled) return;

    if (!document.fullscreenElement) {
      document.documentElement
        .requestFullscreen()
        .then(() => setIsFullscreen(true))
        .catch(() => {});
    } else {
      document
        .exitFullscreen()
        .then(() => setIsFullscreen(false))
        .catch(() => {});
    }
  };

  const formatTimer = (totalSecs: number) => {
    const mins = Math.floor(totalSecs / 60);
    const secs = totalSecs % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // Render dedicated interactive demonstration for this section
  const renderInteractiveModule = () => {
    switch (activeSection.sectionNumber) {
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

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl p-2 sm:p-5 overflow-hidden select-none animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-label="15-Section Guided Exhibition Presentation Mode"
    >
      <div className="relative w-full h-full max-w-7xl flex flex-col justify-between overflow-hidden bg-midnight-950 border border-slate-800 rounded-3xl shadow-2xl">
        {/* Top Control Header: Presenter Info & Presentation Timer */}
        <div className="px-5 py-3.5 bg-midnight-900/95 border-b border-slate-800/80 flex flex-wrap items-center justify-between gap-3">
          {/* Section & Presenter Title */}
          <div className="flex items-center gap-3">
            <span className="text-xl sm:text-2xl font-mono font-extrabold text-synth-cyan">
              {activeSection.sectionNumber.toString().padStart(2, '0')}
            </span>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold text-silk-gold uppercase tracking-wider">
                  {activeSection.categoryLabel}
                </span>
                <span className="text-[11px] font-mono text-slate-400">
                  • Student Presenter {activeSection.sectionNumber} of 15
                </span>
              </div>
              <h2 className="text-base sm:text-lg font-extrabold text-white tracking-tight line-clamp-1">
                {activeSection.title}
              </h2>
            </div>
          </div>

          {/* Presentation Timer & Controls */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Presenter Timer Control Widget */}
            <div
              className={`flex items-center gap-2 px-3 py-1.5 rounded-xl border transition ${
                isOvertime
                  ? 'bg-rose-950/40 border-rose-500/80 text-rose-300'
                  : 'bg-slate-900 border-slate-700/80 text-slate-300'
              }`}
            >
              <Clock className={`w-3.5 h-3.5 ${isTimerRunning ? 'text-synth-cyan animate-pulse' : 'text-slate-400'}`} />
              <div className="flex flex-col">
                <span className="font-mono text-xs font-bold leading-none">
                  {formatTimer(timerSeconds)}
                  <span className="text-[10px] text-slate-400 font-normal"> / {formatTimer(allocatedSeconds)}</span>
                </span>
                <span className="text-[9px] font-mono text-slate-400">
                  {isOvertime ? 'Overtime' : isTimerRunning ? 'Timer Active' : 'Timer Ready'}
                </span>
              </div>

              {/* Start / Pause Button */}
              <button
                type="button"
                onClick={() => setIsTimerRunning(!isTimerRunning)}
                className={`p-1 rounded-lg transition ${
                  isTimerRunning
                    ? 'bg-amber-500/20 text-silk-gold hover:bg-amber-500/30'
                    : 'bg-synth-cyan/20 text-synth-cyan hover:bg-synth-cyan/30'
                }`}
                title={isTimerRunning ? 'Pause Timer' : 'Start Timer'}
                aria-label={isTimerRunning ? 'Pause presentation timer' : 'Start presentation timer'}
              >
                {isTimerRunning ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 fill-current" />}
              </button>

              {/* Reset Timer Button */}
              <button
                type="button"
                onClick={() => {
                  setTimerSeconds(0);
                  setIsTimerRunning(false);
                }}
                className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition"
                title="Reset Timer"
                aria-label="Reset presentation timer to zero"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Fullscreen Button */}
            <button
              type="button"
              onClick={toggleFullscreen}
              className="p-2 text-slate-400 hover:text-white rounded-xl bg-slate-800/80 hover:bg-slate-700 transition focus-visible:ring-2 focus-visible:ring-synth-cyan focus:outline-none"
              title="Toggle Fullscreen (F)"
              aria-label={isFullscreen ? 'Exit fullscreen' : 'Enter fullscreen'}
            >
              {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
            </button>

            {/* Exit Exhibition Mode */}
            <button
              type="button"
              onClick={onClose}
              className="px-3 py-1.5 text-xs font-semibold text-slate-300 hover:text-white rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 transition flex items-center gap-1.5 focus-visible:ring-2 focus-visible:ring-synth-cyan focus:outline-none"
              aria-label="Exit exhibition presentation mode"
            >
              <X className="w-4 h-4" />
              <span className="hidden sm:inline">Exit Mode</span>
            </button>
          </div>
        </div>

        {/* 15-Section Step Bar (Student Navigation) */}
        <div className="flex items-center gap-1 px-5 py-2 bg-midnight-900/40 border-b border-slate-800/60 overflow-x-auto scrollbar-none">
          {sections.map((sec, idx) => (
            <button
              key={sec.id}
              type="button"
              onClick={() => onSelectSection(idx)}
              className={`h-2.5 flex-1 rounded-full transition-all focus:outline-none focus-visible:ring-1 focus-visible:ring-synth-cyan ${
                idx === currentIndex
                  ? 'bg-synth-cyan shadow-[0_0_10px_rgba(0,240,255,0.8)] scale-y-125'
                  : idx < currentIndex
                  ? 'bg-silk-gold/60 hover:bg-silk-gold'
                  : 'bg-slate-800 hover:bg-slate-700'
              }`}
              title={`Section ${sec.sectionNumber}: ${sec.title}`}
              aria-label={`Go to section ${sec.sectionNumber}: ${sec.title}`}
              aria-current={idx === currentIndex ? 'step' : undefined}
            ></button>
          ))}
        </div>

        {/* Main Stage: Large Visual Dominance (~70% Screen) */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 grid grid-cols-1 lg:grid-cols-12 gap-5 items-center">
          {/* Visual Showcase (Left/Center Column) */}
          <div className="lg:col-span-8 flex flex-col gap-4">
            <div className="w-full">
              {renderInteractiveModule()}
            </div>
          </div>

          {/* Scientific Highlights (Right Column) */}
          <div className="lg:col-span-4 flex flex-col gap-3.5 h-full justify-center">
            {/* Tagline */}
            <p className="text-xs sm:text-sm italic text-slate-300 font-serif border-l-2 border-synth-cyan pl-3">
              "{activeSection.subtitle}"
            </p>

            {/* Scientific Points */}
            <div className="space-y-2">
              {activeSection.scientificPoints.slice(0, 3).map((pt, i) => (
                <div key={i} className="p-3 bg-midnight-900/90 rounded-xl border border-slate-800">
                  {pt.metric && (
                    <span className="text-xs font-mono font-bold text-synth-cyan block mb-0.5">
                      {pt.metric} • {pt.metricContext}
                    </span>
                  )}
                  <h4 className="text-xs font-bold text-white">{pt.title}</h4>
                  <p className="text-[11px] text-slate-300 mt-1 leading-relaxed">{pt.description}</p>
                </div>
              ))}
            </div>

            {/* Concise Engineering Takeaway */}
            <div className="p-3 bg-slate-900/80 rounded-xl border border-slate-800 text-[11px] text-slate-300 leading-relaxed">
              <strong className="text-white block mb-0.5">Key Engineering Principle:</strong>
              {activeSection.engineeringSummary}
            </div>

            {/* Student Handoff Note */}
            <div className="p-2.5 bg-midnight-950 rounded-lg border border-slate-800/80 text-[10px] text-slate-400 italic">
              <strong>Handoff to next presenter: </strong>{activeSection.transitionText}
            </div>
          </div>
        </div>

        {/* Bottom Student Navigation Controls Bar */}
        <div className="px-5 py-3.5 bg-midnight-900/95 border-t border-slate-800 flex items-center justify-between">
          <button
            type="button"
            onClick={() => onSelectSection(Math.max(0, currentIndex - 1))}
            disabled={currentIndex === 0}
            className="px-4 py-2 text-xs font-semibold rounded-xl bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-1.5 transition focus-visible:ring-2 focus-visible:ring-synth-cyan focus:outline-none"
            aria-label="Previous presenter section"
          >
            <ChevronLeft className="w-4 h-4" /> Previous Section
          </button>

          <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
            <span className="hidden sm:inline">Use Left / Right arrow keys to navigate</span>
            <span className="sm:hidden">{currentIndex + 1} / {sections.length}</span>
          </div>

          <button
            type="button"
            onClick={() => onSelectSection(Math.min(sections.length - 1, currentIndex + 1))}
            disabled={currentIndex === sections.length - 1}
            className="px-5 py-2 text-xs font-bold rounded-xl bg-synth-cyan text-black hover:bg-cyan-300 disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-1.5 transition shadow-[0_0_15px_rgba(0,240,255,0.3)] focus-visible:ring-2 focus-visible:ring-synth-cyan focus:outline-none"
            aria-label="Next presenter section"
          >
            Next Section <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
