import React, { useState, useEffect, useRef } from 'react';
import { Hotspot } from '../types';
import { ZoomIn, ZoomOut, X, Sparkles, RotateCcw, Maximize2, Minimize2, Info, Eye } from 'lucide-react';

interface ImageHotspotViewerProps {
  imageSrc: string;
  imageAlt: string;
  imageCaption: string;
  hotspots?: Hotspot[];
  onOpenExpandedView?: () => void;
}

export const ImageHotspotViewer: React.FC<ImageHotspotViewerProps> = ({
  imageSrc,
  imageAlt,
  imageCaption,
  hotspots = [],
  onOpenExpandedView,
}) => {
  const [activeHotspot, setActiveHotspot] = useState<Hotspot | null>(null);
  const [isZoomed, setIsZoomed] = useState<boolean>(false);
  const [imageError, setImageError] = useState<boolean>(false);
  const [isExplorerOpen, setIsExplorerOpen] = useState<boolean>(false);
  const [explorerZoom, setExplorerZoom] = useState<number>(1.0);
  const [explorerPan, setExplorerPan] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  const triggerButtonRef = useRef<HTMLButtonElement | null>(null);
  const explorerCloseButtonRef = useRef<HTMLButtonElement | null>(null);

  // Body scroll lock when explorer modal is open
  useEffect(() => {
    if (isExplorerOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      // Focus the close button when opened
      setTimeout(() => {
        explorerCloseButtonRef.current?.focus();
      }, 50);
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [isExplorerOpen]);

  // Escape key handler
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (isExplorerOpen) {
          e.preventDefault();
          closeExplorer();
        } else if (activeHotspot) {
          e.preventDefault();
          setActiveHotspot(null);
        } else if (isZoomed) {
          setIsZoomed(false);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isExplorerOpen, activeHotspot, isZoomed]);

  const openExplorer = () => {
    setExplorerZoom(1.0);
    setExplorerPan({ x: 0, y: 0 });
    setIsExplorerOpen(true);
  };

  const closeExplorer = () => {
    setIsExplorerOpen(false);
    // Return focus to trigger button
    triggerButtonRef.current?.focus();
  };

  const handleZoomIn = () => {
    setExplorerZoom((prev) => Math.min(3.0, Math.round((prev + 0.5) * 10) / 10));
  };

  const handleZoomOut = () => {
    setExplorerZoom((prev) => {
      const next = Math.max(1.0, Math.round((prev - 0.5) * 10) / 10);
      if (next === 1.0) setExplorerPan({ x: 0, y: 0 });
      return next;
    });
  };

  const handleResetExplorer = () => {
    setExplorerZoom(1.0);
    setExplorerPan({ x: 0, y: 0 });
    setActiveHotspot(null);
  };

  const focusHotspotInExplorer = (hs: Hotspot) => {
    setActiveHotspot(hs);
    // Auto zoom and pan to the hotspot
    setExplorerZoom(1.8);
    // Center calculation: (50 - hs.x)% * scale factor
    setExplorerPan({
      x: (50 - hs.x) * 3,
      y: (50 - hs.y) * 2,
    });
  };

  return (
    <>
      <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-midnight-950 group shadow-2xl transition-all">
        {/* Zoom / Fullscreen Explorer Controls on Top Right */}
        <div className="absolute top-3 right-3 z-20 flex items-center gap-1.5">
          <button
            type="button"
            onClick={() => setIsZoomed(!isZoomed)}
            className="p-2 rounded-xl bg-midnight-950/80 backdrop-blur-md text-slate-300 hover:text-white border border-slate-700/80 hover:bg-slate-800 transition shadow-lg focus-visible:ring-2 focus-visible:ring-synth-cyan focus:outline-none"
            title={isZoomed ? "Reset Inline Zoom (Esc)" : "Zoom In (Inline)"}
            aria-label={isZoomed ? "Reset zoom" : "Zoom in image"}
          >
            {isZoomed ? <ZoomOut className="w-4 h-4" /> : <ZoomIn className="w-4 h-4" />}
          </button>

          <button
            ref={triggerButtonRef}
            type="button"
            onClick={openExplorer}
            className="p-2 rounded-xl bg-midnight-950/80 backdrop-blur-md text-synth-cyan hover:text-white border border-synth-cyan/50 hover:bg-slate-800 transition shadow-lg focus-visible:ring-2 focus-visible:ring-synth-cyan focus:outline-none"
            title="Open Interactive Image Explorer (Lightbox Zoom)"
            aria-label="Open Interactive Image Explorer"
          >
            <Maximize2 className="w-4 h-4" />
          </button>

          {onOpenExpandedView && (
            <button
              type="button"
              onClick={onOpenExpandedView}
              className="p-2 rounded-xl bg-midnight-950/80 backdrop-blur-md text-silk-gold hover:text-white border border-silk-gold/50 hover:bg-slate-800 transition shadow-lg focus-visible:ring-2 focus-visible:ring-silk-gold focus:outline-none hidden sm:inline-flex"
              title="Launch Fullscreen Presentation for this Section"
              aria-label="Present section in fullscreen exhibition mode"
            >
              <Eye className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Interaction Cue Badge */}
        <div className="absolute top-3 left-3 z-20 pointer-events-none">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-midnight-950/85 backdrop-blur-md border border-synth-cyan/40 text-[11px] font-mono font-medium text-synth-cyan shadow-[0_0_15px_rgba(0,240,255,0.2)]">
            <span className="w-2 h-2 rounded-full bg-synth-cyan animate-ping motion-reduce:animate-none"></span>
            <span>Click Pins or Image to Explore</span>
          </div>
        </div>

        {/* Image Container with Zoom & Hotspots */}
        <div
          className="relative overflow-hidden cursor-pointer"
          onClick={() => {
            if (!activeHotspot) openExplorer();
          }}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              openExplorer();
            }
          }}
          aria-label={`Inspect ${imageAlt}. Press Enter to open interactive explorer.`}
        >
          {!imageError ? (
            <img
              src={imageSrc}
              alt={imageAlt}
              onError={() => setImageError(true)}
              loading="lazy"
              className={`w-full max-h-[440px] object-cover transition-all duration-700 ${
                isZoomed ? 'scale-125 translate-y-2' : 'group-hover:scale-102'
              }`}
            />
          ) : (
            <div className="w-full h-80 bg-slate-900 flex flex-col items-center justify-center text-slate-400 text-sm gap-2">
              <Info className="w-6 h-6 text-synth-cyan" />
              <span>Scientific Diagram: {imageAlt}</span>
            </div>
          )}

          {/* Ambient Overlay Vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-midnight-950 via-transparent to-transparent pointer-events-none"></div>

          {/* Interactive Hotspot Radar Pins */}
          {hotspots.map((hs) => {
            const isActive = activeHotspot?.id === hs.id;
            return (
              <div
                key={hs.id}
                style={{ left: `${hs.x}%`, top: `${hs.y}%` }}
                className="absolute -translate-x-1/2 -translate-y-1/2 z-10"
              >
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveHotspot(isActive ? null : hs);
                  }}
                  className="relative group/pin focus:outline-none focus-visible:ring-2 focus-visible:ring-synth-cyan rounded-full"
                  title={hs.title}
                  aria-label={`Hotspot: ${hs.title}. ${hs.description}`}
                  aria-expanded={isActive}
                >
                  {/* Pulsing ring */}
                  <span className="absolute -inset-2 rounded-full bg-synth-cyan/30 animate-ping opacity-75 motion-reduce:animate-none"></span>
                  {/* Center marker */}
                  <span
                    className={`relative flex items-center justify-center w-6 h-6 rounded-full border-2 transition-transform transform ${
                      isActive
                        ? 'bg-synth-cyan border-white scale-125 shadow-[0_0_15px_rgba(0,240,255,0.8)]'
                        : 'bg-midnight-950/90 border-synth-cyan hover:scale-110 shadow-md'
                    }`}
                  >
                    <span className={`w-2 h-2 rounded-full ${isActive ? 'bg-black' : 'bg-synth-cyan'}`}></span>
                  </span>
                  {/* Tooltip hint on hover */}
                  <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1.5 px-2 py-0.5 rounded bg-midnight-950/90 border border-slate-700 text-[10px] font-mono text-white whitespace-nowrap opacity-0 group-hover/pin:opacity-100 pointer-events-none transition-opacity shadow-lg">
                    {hs.title}
                  </span>
                </button>
              </div>
            );
          })}
        </div>

        {/* Active Hotspot Inspector Card Popup (Inline) */}
        {activeHotspot && (
          <div
            className="absolute bottom-14 left-4 right-4 z-30 bg-midnight-950/95 backdrop-blur-md border border-synth-cyan/60 rounded-xl p-4 shadow-2xl animate-in fade-in slide-in-from-bottom-2 duration-200"
            role="region"
            aria-label={`Details for ${activeHotspot.title}`}
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono text-synth-cyan uppercase tracking-wider block">
                    Internal Structural Hotspot
                  </span>
                  {activeHotspot.metric && (
                    <span className="text-xs font-mono font-bold text-silk-gold">
                      • {activeHotspot.metric}
                    </span>
                  )}
                </div>
                <h4 className="text-sm font-bold text-white mt-0.5">{activeHotspot.title}</h4>
              </div>

              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={() => focusHotspotInExplorer(activeHotspot)}
                  className="px-2 py-1 rounded-lg text-[10px] font-mono bg-synth-cyan/15 text-synth-cyan hover:bg-synth-cyan/25 border border-synth-cyan/30 transition flex items-center gap-1"
                  title="Zoom into this hotspot in full explorer"
                >
                  <ZoomIn className="w-3 h-3" /> Explore in Detail
                </button>
                <button
                  type="button"
                  onClick={() => setActiveHotspot(null)}
                  className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition"
                  title="Close inspection"
                  aria-label="Close hotspot detail"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            <p className="text-xs text-slate-300 mt-2 leading-relaxed">
              {activeHotspot.description}
            </p>

            <p className="text-[11px] text-slate-400 mt-2 bg-slate-900/80 p-2.5 rounded-lg border border-slate-800/80">
              <strong className="text-synth-cyan">Engineering Insight: </strong>
              {activeHotspot.detail}
            </p>
          </div>
        )}

        {/* Image Caption Footer */}
        <div className="p-3 bg-midnight-950/90 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
          <span className="truncate pr-2">{imageCaption}</span>
          <div className="flex items-center gap-3 shrink-0">
            {isZoomed && (
              <button
                type="button"
                onClick={() => setIsZoomed(false)}
                className="text-[11px] text-synth-cyan hover:underline flex items-center gap-1 font-mono"
              >
                <RotateCcw className="w-3 h-3" /> Reset Zoom
              </button>
            )}
            <button
              type="button"
              onClick={openExplorer}
              className="text-[11px] text-synth-cyan hover:underline flex items-center gap-1 font-mono font-semibold"
            >
              <Maximize2 className="w-3 h-3" /> Open Explorer
            </button>
          </div>
        </div>
      </div>

      {/* FULL INTERACTIVE IMAGE EXPLORER LIGHTBOX MODAL */}
      {isExplorerOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl p-2 sm:p-6 overflow-hidden select-none animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
          aria-labelledby="image-explorer-title"
        >
          <div className="relative w-full h-full max-w-6xl flex flex-col justify-between overflow-hidden bg-midnight-950 border border-slate-800 rounded-2xl shadow-2xl">
            {/* Top Bar Controls */}
            <div className="px-6 py-4 bg-midnight-900/90 border-b border-slate-800 flex items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 text-[10px] font-mono bg-synth-cyan/15 text-synth-cyan rounded border border-synth-cyan/30">
                    High-Resolution Scientific Explorer
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    Zoom: {Math.round(explorerZoom * 100)}% (Limit: 100%–300%)
                  </span>
                </div>
                <h3 id="image-explorer-title" className="text-sm sm:text-base font-bold text-white mt-0.5">
                  {imageCaption}
                </h3>
              </div>

              <div className="flex items-center gap-2">
                {/* Zoom Controls */}
                <div className="flex items-center bg-slate-900 rounded-xl border border-slate-700/80 p-0.5">
                  <button
                    type="button"
                    onClick={handleZoomOut}
                    disabled={explorerZoom <= 1.0}
                    className="p-1.5 rounded-lg text-slate-300 hover:text-white disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-800 transition"
                    title="Zoom Out (Min 100%)"
                    aria-label="Zoom out"
                  >
                    <ZoomOut className="w-4 h-4" />
                  </button>
                  <span className="px-2 text-xs font-mono text-slate-300">
                    {Math.round(explorerZoom * 100)}%
                  </span>
                  <button
                    type="button"
                    onClick={handleZoomIn}
                    disabled={explorerZoom >= 3.0}
                    className="p-1.5 rounded-lg text-slate-300 hover:text-white disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-800 transition"
                    title="Zoom In (Max 300%)"
                    aria-label="Zoom in"
                  >
                    <ZoomIn className="w-4 h-4" />
                  </button>
                </div>

                <button
                  type="button"
                  onClick={handleResetExplorer}
                  className="px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-700/80 text-xs font-mono text-slate-300 hover:text-white hover:bg-slate-800 transition flex items-center gap-1.5"
                  title="Reset Zoom & Pan"
                  aria-label="Reset zoom and overview"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Overview</span>
                </button>

                <button
                  ref={explorerCloseButtonRef}
                  type="button"
                  onClick={closeExplorer}
                  className="px-3.5 py-1.5 text-xs font-semibold text-slate-300 hover:text-white rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 transition flex items-center gap-1.5 focus-visible:ring-2 focus-visible:ring-synth-cyan focus:outline-none"
                  aria-label="Close image explorer"
                >
                  <X className="w-4 h-4" />
                  <span>Close (Esc)</span>
                </button>
              </div>
            </div>

            {/* Hotspot Quick Selector Pills */}
            {hotspots.length > 0 && (
              <div className="px-6 py-2.5 bg-midnight-900/60 border-b border-slate-800/80 flex items-center gap-2 overflow-x-auto scrollbar-none">
                <span className="text-[11px] font-mono text-slate-400 shrink-0">Hotspots:</span>
                {hotspots.map((hs, i) => {
                  const isSelected = activeHotspot?.id === hs.id;
                  return (
                    <button
                      key={hs.id}
                      type="button"
                      onClick={() => focusHotspotInExplorer(hs)}
                      className={`px-2.5 py-1 rounded-lg text-xs font-mono shrink-0 transition flex items-center gap-1.5 border ${
                        isSelected
                          ? 'bg-synth-cyan/20 border-synth-cyan text-white shadow-[0_0_10px_rgba(0,240,255,0.4)]'
                          : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800'
                      }`}
                    >
                      <span className={`w-1.5 h-1.5 rounded-full ${isSelected ? 'bg-synth-cyan' : 'bg-slate-500'}`}></span>
                      <span>Pin {i + 1}: {hs.title}</span>
                    </button>
                  );
                })}
              </div>
            )}

            {/* Main Stage Viewport */}
            <div className="relative flex-1 overflow-hidden flex items-center justify-center p-4 bg-black/60">
              <div
                className="relative max-w-full max-h-full transition-transform duration-300 ease-out"
                style={{
                  transform: `scale(${explorerZoom}) translate(${explorerPan.x}px, ${explorerPan.y}px)`,
                  transformOrigin: 'center center',
                }}
              >
                <img
                  src={imageSrc}
                  alt={imageAlt}
                  className="max-h-[70vh] w-auto object-contain rounded-xl shadow-2xl pointer-events-none select-none"
                />

                {/* Hotspot pins inside explorer */}
                {hotspots.map((hs) => {
                  const isSelected = activeHotspot?.id === hs.id;
                  return (
                    <div
                      key={`exp-${hs.id}`}
                      style={{ left: `${hs.x}%`, top: `${hs.y}%` }}
                      className="absolute -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-auto"
                    >
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          focusHotspotInExplorer(hs);
                        }}
                        className="relative group/pin focus:outline-none focus-visible:ring-2 focus-visible:ring-synth-cyan rounded-full"
                        title={hs.title}
                        aria-label={`Hotspot: ${hs.title}`}
                      >
                        <span className="absolute -inset-2.5 rounded-full bg-synth-cyan/35 animate-ping opacity-80 motion-reduce:animate-none"></span>
                        <span
                          className={`relative flex items-center justify-center w-7 h-7 rounded-full border-2 transition-transform transform ${
                            isSelected
                              ? 'bg-synth-cyan border-white scale-125 shadow-[0_0_20px_rgba(0,240,255,0.9)]'
                              : 'bg-midnight-950/95 border-synth-cyan hover:scale-115 shadow-md'
                          }`}
                        >
                          <span className={`w-2.5 h-2.5 rounded-full ${isSelected ? 'bg-black' : 'bg-synth-cyan'}`}></span>
                        </span>
                      </button>
                    </div>
                  );
                })}
              </div>

              {/* Active Hotspot Inspector Card (Explorer Floating Card) */}
              {activeHotspot && (
                <div className="absolute bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-md z-30 bg-midnight-950/95 backdrop-blur-md border border-synth-cyan/70 rounded-2xl p-4 shadow-2xl animate-in fade-in slide-in-from-bottom-2 duration-150">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-mono text-synth-cyan uppercase tracking-wider block font-bold">
                          Selected Scientific Hotspot
                        </span>
                        {activeHotspot.metric && (
                          <span className="text-xs font-mono font-bold text-silk-gold">
                            • {activeHotspot.metric}
                          </span>
                        )}
                      </div>
                      <h4 className="text-sm font-bold text-white mt-0.5">{activeHotspot.title}</h4>
                    </div>

                    <button
                      type="button"
                      onClick={() => setActiveHotspot(null)}
                      className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition"
                      title="Deselect hotspot"
                      aria-label="Close hotspot explanation"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>

                  <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                    {activeHotspot.description}
                  </p>

                  <p className="text-[11px] text-slate-300 mt-2 bg-slate-900/90 p-2.5 rounded-xl border border-slate-800">
                    <strong className="text-synth-cyan">Engineering Insight: </strong>
                    {activeHotspot.detail}
                  </p>
                </div>
              )}
            </div>

            {/* Bottom Telemetry Bar */}
            <div className="px-6 py-3 bg-midnight-900/90 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
              <span className="font-mono text-[11px]">
                Tip: Click any radar pin to zoom in directly. Press Esc or click Close to return.
              </span>
              <button
                type="button"
                onClick={closeExplorer}
                className="text-synth-cyan hover:underline font-mono text-xs font-semibold"
              >
                Back to Poster Flow
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
