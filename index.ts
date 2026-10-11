export interface Citation {
  id: string;
  authors: string;
  title: string;
  journal: string;
  year: number;
  doi?: string;
  url?: string;
  annotation: string;
}

export interface Hotspot {
  id: string;
  x: number; // percentage from left (0 to 100)
  y: number; // percentage from top (0 to 100)
  title: string;
  description: string;
  detail: string;
  metric?: string;
}

export interface SectionPresentationData {
  sectionNumber: number;
  sectionTitle: string;
  allocatedMinutes: number;
  keyTakeaways: string[];
  technicalKeywords: string[];
  visualFocus: string;
}

export interface SectionData {
  id: string;
  sectionNumber: number;
  title: string;
  subtitle: string;
  category: 'nature' | 'biology' | 'materials' | 'molecular' | 'biotech' | 'limits' | 'armor' | 'mechanics' | 'biomed' | 'sutures' | 'research' | 'comparison' | 'sustainability' | 'future' | 'conclusion';
  categoryLabel: string;
  badgeColor: 'amber' | 'cyan' | 'emerald' | 'blue' | 'purple';
  imageSrc: string;
  imageAlt: string;
  imageCaption: string;
  interactiveComponentId?: string;
  hotspots: Hotspot[];
  scientificPoints: {
    title: string;
    description: string;
    metric?: string;
    metricContext?: string;
  }[];
  engineeringSummary: string;
  transitionText: string;
  presentation: SectionPresentationData;
  citations: Citation[];
}

export interface MaterialComparison {
  name: string;
  density: number; // g/cm³
  tensileStrength: number; // GPa
  elasticity: number; // % elongation at break
  toughness: number; // MJ/m³ (Energy absorption)
  youngsModulus: number; // GPa
  category: 'natural' | 'synthetic' | 'metal' | 'polymer';
  color: string;
  caveat: string;
}
