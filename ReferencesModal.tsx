import React, { useEffect, useRef } from 'react';
import { CITATIONS } from '../data/citationsData';
import { BookOpen, ExternalLink, X, ShieldCheck } from 'lucide-react';

interface ReferencesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ReferencesModal: React.FC<ReferencesModalProps> = ({ isOpen, onClose }) => {
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);

  // Background scrolling lock & auto-focus close button
  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      setTimeout(() => {
        closeButtonRef.current?.focus();
      }, 50);
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [isOpen]);

  // Escape key handler
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        e.preventDefault();
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 overflow-y-auto animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="references-modal-title"
    >
      <div className="relative w-full max-w-4xl bg-midnight-950 border border-slate-700 rounded-2xl shadow-2xl flex flex-col max-h-[88vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-midnight-900 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-synth-cyan/10 rounded-lg border border-synth-cyan/30 text-synth-cyan">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <h2 id="references-modal-title" className="text-base font-bold text-white tracking-wide">
                Verified Scientific References & Further Reading
              </h2>
              <p className="text-xs text-slate-400">
                Peer-reviewed literature, official standards organizations, and materials engineering sources
              </p>
            </div>
          </div>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition focus-visible:ring-2 focus-visible:ring-synth-cyan focus:outline-none"
            aria-label="Close references dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content list */}
        <div className="p-6 overflow-y-auto space-y-4">
          <div className="p-3 bg-slate-900/80 rounded-xl border border-slate-800 flex items-center gap-2.5 text-xs text-slate-300">
            <ShieldCheck className="w-4 h-4 text-bio-mint shrink-0" />
            <span>
              All citations represent genuine peer-reviewed studies published in indexed journals (Nature, Science, Acta Biomaterialia) or official government standards (NIJ, ISO, ASTM).
            </span>
          </div>

          <div className="space-y-3">
            {CITATIONS.map((cit, i) => (
              <div
                key={cit.id}
                className="p-4 bg-midnight-900/90 rounded-xl border border-slate-800/80 hover:border-slate-700 transition flex flex-col gap-1.5"
              >
                <div className="flex items-start justify-between gap-3">
                  <span className="text-xs font-mono font-bold text-silk-gold">
                    [{i + 1}] {cit.authors} ({cit.year})
                  </span>
                  {cit.url && (
                    <a
                      href={cit.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-synth-cyan hover:underline flex items-center gap-1 shrink-0 font-mono"
                    >
                      View Source <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>

                <h3 className="text-sm font-semibold text-white leading-snug">
                  "{cit.title}"
                </h3>

                <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
                  <span className="italic">{cit.journal}</span>
                  {cit.doi && <span>• DOI: {cit.doi}</span>}
                </div>

                <p className="text-xs text-slate-300 mt-1 bg-midnight-950 p-2.5 rounded-lg border border-slate-800/60 leading-relaxed">
                  <strong className="text-slate-400">Scientific Context: </strong>
                  {cit.annotation}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-3 bg-midnight-900 border-t border-slate-800 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-1.5 text-xs font-semibold rounded-lg bg-slate-800 hover:bg-slate-700 text-white transition focus-visible:ring-2 focus-visible:ring-synth-cyan focus:outline-none"
          >
            Close References (Esc)
          </button>
        </div>
      </div>
    </div>
  );
};
