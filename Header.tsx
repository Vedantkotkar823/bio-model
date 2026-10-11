import React, { useState, useEffect, useRef } from 'react';
import { SectionData } from '../types';
import {
  Sparkles,
  BookOpen,
  Maximize2,
  ChevronDown,
  Eye,
  EyeOff,
  Zap,
  ZapOff
} from 'lucide-react';

interface HeaderProps {
  sections: SectionData[];
  activeSectionId: string;
  onJumpToSection: (id: string) => void;
  onOpenSpeakerModal: () => void;
  onOpenReferencesModal: () => void;
  reducedMotion: boolean;
  onToggleReducedMotion: () => void;
  currentSpeakerIndex: number;
}

export const Header: React.FC<HeaderProps> = ({
  sections,
  activeSectionId,
  onJumpToSection,
  onOpenSpeakerModal,
  onOpenReferencesModal,
  reducedMotion,
  onToggleReducedMotion,
  currentSpeakerIndex,
}) => {
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [navDropdownOpen, setNavDropdownOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight =
        document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (windowHeight > 0) {
        setScrollProgress((totalScroll / windowHeight) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on outside click or Escape key
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setNavDropdownOpen(false);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && navDropdownOpen) {
        setNavDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [navDropdownOpen]);

  const speakerNumberFormatted = `S${(currentSpeakerIndex + 1).toString().padStart(2, '0')}`;

  return (
    <header className="sticky top-0 z-40 w-full bg-midnight-950/90 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        {/* Brand / Title */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-500 to-cyan-500 p-0.5 flex items-center justify-center shadow-[0_0_15px_rgba(0,240,255,0.3)] shrink-0">
            <div className="w-full h-full bg-midnight-950 rounded-[10px] flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-synth-cyan" />
            </div>
          </div>
          <div>
            <h1 className="text-sm font-bold tracking-tight text-white flex items-center gap-2">
              SPIDER SILK-INSPIRED FIBERS
              <span className="hidden sm:inline-block px-2 py-0.5 text-[10px] font-mono bg-synth-cyan/15 text-synth-cyan rounded border border-synth-cyan/30">
                1st-Year Engineering
              </span>
            </h1>
            <p className="text-[11px] text-slate-400 truncate max-w-xs sm:max-w-md">
              Ultra-Lightweight Protective Vests & Biodegradable Surgical Sutures
            </p>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-1.5 sm:gap-2.5">
          {/* Quick Jump Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              type="button"
              onClick={() => setNavDropdownOpen(!navDropdownOpen)}
              className="px-2.5 sm:px-3 py-1.5 text-xs font-medium rounded-lg border border-slate-700 bg-slate-900/80 hover:bg-slate-800 text-slate-300 flex items-center gap-1.5 transition focus-visible:ring-2 focus-visible:ring-synth-cyan focus:outline-none"
              aria-haspopup="true"
              aria-expanded={navDropdownOpen}
              aria-label="Jump to section (1 to 15)"
            >
              <span>Sections (1–15)</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform ${navDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {navDropdownOpen && (
              <div
                className="absolute right-0 mt-2 w-72 max-h-96 overflow-y-auto bg-midnight-950 border border-slate-800 rounded-xl shadow-2xl py-2 z-50 divide-y divide-slate-800/60"
                role="menu"
              >
                {sections.map((sec) => (
                  <button
                    key={sec.id}
                    type="button"
                    onClick={() => {
                      onJumpToSection(sec.id);
                      setNavDropdownOpen(false);
                    }}
                    className={`w-full text-left px-3.5 py-2 hover:bg-slate-800/70 transition flex items-center gap-2 text-xs ${
                      activeSectionId === sec.id ? 'bg-synth-cyan/10 text-white font-semibold' : 'text-slate-300'
                    }`}
                    role="menuitem"
                  >
                    <span className="font-mono text-[11px] font-bold text-silk-gold shrink-0">
                      S{sec.sectionNumber.toString().padStart(2, '0')}
                    </span>
                    <span className="truncate">{sec.title}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Reduced Motion Toggle Button */}
          <button
            type="button"
            onClick={onToggleReducedMotion}
            className={`p-2 sm:px-2.5 sm:py-1.5 text-xs font-medium rounded-lg border transition flex items-center gap-1.5 focus-visible:ring-2 focus-visible:ring-synth-cyan focus:outline-none ${
              reducedMotion
                ? 'bg-amber-500/20 border-silk-gold text-silk-gold'
                : 'border-slate-700 bg-slate-900/80 text-slate-400 hover:text-slate-200 hover:bg-slate-800'
            }`}
            title={reducedMotion ? "Reduced Motion: ON (Click to enable animations)" : "Animations: ON (Click to reduce motion)"}
            aria-pressed={reducedMotion}
            aria-label={reducedMotion ? "Disable reduced motion" : "Enable reduced motion"}
          >
            {reducedMotion ? <ZapOff className="w-3.5 h-3.5 text-silk-gold" /> : <Zap className="w-3.5 h-3.5 text-synth-cyan" />}
            <span className="hidden lg:inline text-[11px] font-mono">
              {reducedMotion ? 'Static' : 'Motion'}
            </span>
          </button>

          {/* References Modal Button */}
          <button
            type="button"
            onClick={onOpenReferencesModal}
            className="p-2 sm:px-3 sm:py-1.5 text-xs font-medium rounded-lg border border-slate-700 bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white flex items-center gap-1.5 transition focus-visible:ring-2 focus-visible:ring-silk-gold focus:outline-none"
            title="Peer-Reviewed Scientific Citations"
            aria-label="Open peer-reviewed references dialog"
          >
            <BookOpen className="w-3.5 h-3.5 text-silk-gold" />
            <span className="hidden md:inline">Citations</span>
          </button>

          {/* 15-Section Exhibition Mode Button */}
          <button
            type="button"
            onClick={onOpenSpeakerModal}
            className="px-3 sm:px-3.5 py-1.5 text-xs font-bold rounded-lg bg-gradient-to-r from-synth-cyan to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-black flex items-center gap-1.5 sm:gap-2 shadow-[0_0_15px_rgba(0,240,255,0.3)] transition focus-visible:ring-2 focus-visible:ring-synth-cyan focus:outline-none"
            aria-label={`Launch Exhibition Mode for speaker ${speakerNumberFormatted}`}
          >
            <Maximize2 className="w-3.5 h-3.5" />
            <span>Exhibition Mode ({speakerNumberFormatted})</span>
          </button>
        </div>
      </div>

      {/* Progress Bar Indicator */}
      <div className="w-full h-0.5 bg-slate-800">
        <div
          className="h-full bg-gradient-to-r from-silk-gold via-synth-cyan to-bio-emerald transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>
    </header>
  );
};
