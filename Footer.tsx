import React from 'react';
import { ArrowUp, Sparkles, BookOpen, ShieldCheck, Maximize2 } from 'lucide-react';

interface FooterProps {
  onBackToTop: () => void;
  onOpenSpeakerModal: () => void;
  onOpenReferencesModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onBackToTop,
  onOpenSpeakerModal,
  onOpenReferencesModal,
}) => {
  return (
    <footer className="w-full bg-midnight-950 border-t border-slate-800 text-slate-400 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col gap-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-synth-cyan"></span>
              <h3 className="text-base font-bold text-white tracking-wide">
                SPIDER SILK-INSPIRED FIBERS
              </h3>
            </div>
            <p className="text-xs text-slate-400 mt-1 max-w-xl">
              An interactive digital science poster engineered for first-year engineering college exhibition. 15 students, 45 minutes of synchronized oral presentation.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={onOpenSpeakerModal}
              className="px-3.5 py-2 text-xs font-semibold rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 text-white flex items-center gap-2 transition focus-visible:ring-2 focus-visible:ring-synth-cyan focus:outline-none"
            >
              <Maximize2 className="w-3.5 h-3.5 text-synth-cyan" />
              15-Section Exhibition Mode
            </button>
            <button
              type="button"
              onClick={onOpenReferencesModal}
              className="px-3.5 py-2 text-xs font-semibold rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 text-white flex items-center gap-2 transition focus-visible:ring-2 focus-visible:ring-silk-gold focus:outline-none"
            >
              <BookOpen className="w-3.5 h-3.5 text-silk-gold" />
              Peer-Reviewed References
            </button>
            <button
              type="button"
              onClick={onBackToTop}
              className="p-2 text-xs rounded-xl bg-slate-800 hover:bg-slate-700 text-white transition flex items-center justify-center focus-visible:ring-2 focus-visible:ring-synth-cyan focus:outline-none"
              title="Back to Top"
              aria-label="Scroll back to top of page"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <p>© 2026 First-Year Engineering Materials & Biomimicry Research Group. Academic Non-Commercial Project.</p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-bio-mint" /> NIJ & ISO Standards Referenced (Preclinical & Target Benchmarks)
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-silk-gold" /> 70% Visuals / 30% Text
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
