import React, { useState, useEffect } from 'react';
import { SECTIONS_DATA } from './data/sectionsData';
import { Header } from './components/Header';
import { HeroBanner } from './components/HeroBanner';
import { SectionCard } from './components/SectionCard';
import { ScienceLabSection } from './components/ScienceLabSection';
import { Footer } from './components/Footer';
import { SpiderSilkBackground } from './components/SpiderSilkBackground';
import { ExhibitionPresentationMode } from './components/ExhibitionPresentationMode';
import { ReferencesModal } from './components/ReferencesModal';

export const App: React.FC = () => {
  const [currentSectionIndex, setCurrentSectionIndex] = useState<number>(0);
  const [isExhibitionModeOpen, setIsExhibitionModeOpen] = useState<boolean>(false);
  const [isReferencesModalOpen, setIsReferencesModalOpen] = useState<boolean>(false);
  const [reducedMotion, setReducedMotion] = useState<boolean>(false);
  const [activeSectionId, setActiveSectionId] = useState<string>('sec-01');

  // Handle system prefers-reduced-motion dynamically
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);

    const listener = (event: MediaQueryListEvent) => {
      setReducedMotion(event.matches);
    };

    mediaQuery.addEventListener('change', listener);
    return () => mediaQuery.removeEventListener('change', listener);
  }, []);

  // Intersection Observer to highlight current active section on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSectionId(entry.target.id);
            const foundIndex = SECTIONS_DATA.findIndex((s) => s.id === entry.target.id);
            if (foundIndex !== -1) {
              setCurrentSectionIndex(foundIndex);
            }
          }
        });
      },
      { threshold: 0.35 }
    );

    SECTIONS_DATA.forEach((sec) => {
      const el = document.getElementById(sec.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const jumpToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth' });
    }
  };

  const handleStartExhibition = () => {
    setCurrentSectionIndex(0);
    setIsExhibitionModeOpen(true);
  };

  const handleOpenExhibitionForSection = (sectionIdx: number) => {
    setCurrentSectionIndex(sectionIdx);
    setIsExhibitionModeOpen(true);
  };

  return (
    <div className="relative min-h-screen bg-midnight-950 text-slate-100 font-sans selection:bg-synth-cyan selection:text-black">
      {/* Background Animated Canvas */}
      <SpiderSilkBackground reducedMotion={reducedMotion} />

      {/* Sticky Navigation Header */}
      <Header
        sections={SECTIONS_DATA}
        activeSectionId={activeSectionId}
        onJumpToSection={jumpToSection}
        onOpenSpeakerModal={handleStartExhibition}
        onOpenReferencesModal={() => setIsReferencesModalOpen(true)}
        reducedMotion={reducedMotion}
        onToggleReducedMotion={() => setReducedMotion((prev) => !prev)}
        currentSpeakerIndex={currentSectionIndex}
      />

      <main className="relative z-10">
        {/* Cinematic Hero Banner */}
        <HeroBanner
          onStartPresentation={handleStartExhibition}
          onExploreLab={() => jumpToSection('science-lab')}
          onExploreSection1={() => jumpToSection('sec-01')}
        />

        {/* 15 Major Sequential Presentation Sections */}
        <div className="flex flex-col">
          {SECTIONS_DATA.map((sec, idx) => (
            <SectionCard
              key={sec.id}
              section={sec}
              isActiveSection={currentSectionIndex === idx}
              onOpenExhibitionMode={handleOpenExhibitionForSection}
              onJumpToNext={() => {
                if (idx < SECTIONS_DATA.length - 1) {
                  jumpToSection(SECTIONS_DATA[idx + 1].id);
                }
              }}
              isLastSection={idx === SECTIONS_DATA.length - 1}
              reducedMotion={reducedMotion}
            />
          ))}
        </div>

        {/* Standalone Interactive Science Lab Sandbox */}
        <ScienceLabSection />
      </main>

      {/* Global Footer */}
      <Footer
        onBackToTop={() => window.scrollTo({ top: 0, behavior: reducedMotion ? 'auto' : 'smooth' })}
        onOpenSpeakerModal={handleStartExhibition}
        onOpenReferencesModal={() => setIsReferencesModalOpen(true)}
      />

      {/* 15-Section Guided Exhibition Presentation Mode */}
      <ExhibitionPresentationMode
        sections={SECTIONS_DATA}
        currentIndex={currentSectionIndex}
        onSelectSection={setCurrentSectionIndex}
        isOpen={isExhibitionModeOpen}
        onClose={() => setIsExhibitionModeOpen(false)}
      />

      {/* Verified References & Literature Modal */}
      <ReferencesModal
        isOpen={isReferencesModalOpen}
        onClose={() => setIsReferencesModalOpen(false)}
      />
    </div>
  );
};

export default App;
