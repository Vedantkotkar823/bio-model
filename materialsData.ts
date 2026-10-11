import { MaterialComparison } from '../types';

export const MATERIALS_DATA: MaterialComparison[] = [
  {
    name: "Spider Dragline Silk (Major Ampullate)",
    density: 1.31,
    tensileStrength: 1.3, // GPa
    elasticity: 30, // %
    toughness: 165, // MJ/m³
    youngsModulus: 11, // GPa
    category: 'natural',
    color: '#f59e0b',
    caveat: "Properties measured in pristine natural Araneus / Nephila fibers at standard relative humidity (50%). Hydration induces supercontraction."
  },
  {
    name: "Kevlar 29 (Aramid Fiber)",
    density: 1.44,
    tensileStrength: 2.8, // GPa
    elasticity: 3.6, // %
    toughness: 50, // MJ/m³
    youngsModulus: 70, // GPa
    category: 'synthetic',
    color: '#00f0ff',
    caveat: "High tensile modulus and strength, but limited extensibility results in lower total strain energy absorption per volume than silk."
  },
  {
    name: "High-Tensile Steel Wire",
    density: 7.85,
    tensileStrength: 1.6, // GPa
    elasticity: 1.5, // %
    toughness: 6, // MJ/m³
    youngsModulus: 205, // GPa
    category: 'metal',
    color: '#94a3b8',
    caveat: "Very stiff with high yield strength, but high density (6× heavier than silk) and brittle failure limit mass-specific energy absorption."
  },
  {
    name: "Nylon 6,6 (Polyamide)",
    density: 1.14,
    tensileStrength: 0.9, // GPa
    elasticity: 22, // %
    toughness: 80, // MJ/m³
    youngsModulus: 4.5, // GPa
    category: 'polymer',
    color: '#a855f7',
    caveat: "High elasticity and good energy absorption, but lower tensile strength and high viscoelastic creep under continuous sustained load."
  },
  {
    name: "Carbon Fiber (Standard Modulus)",
    density: 1.78,
    tensileStrength: 3.5, // GPa
    elasticity: 1.6, // %
    toughness: 28, // MJ/m³
    youngsModulus: 230, // GPa
    category: 'synthetic',
    color: '#38bdf8',
    caveat: "Exceptional specific stiffness and strength; however, brittle failure mode prevents large plastic deformation during blunt impact."
  }
];

export const SUTURE_DEGRADATION_DATA = [
  { day: 0, sutureStrengthPercent: 100, tissueRecoveryPercent: 5, status: "Immediate Wound Closure (Tension holding)" },
  { day: 7, sutureStrengthPercent: 88, tissueRecoveryPercent: 20, status: "Acute Inflammatory Phase / Fibroblast Migration" },
  { day: 14, sutureStrengthPercent: 72, tissueRecoveryPercent: 42, status: "Proliferative Phase / Early Collagen Synthesis" },
  { day: 21, sutureStrengthPercent: 52, tissueRecoveryPercent: 65, status: "Neo-vascularization & Granulation Matrix" },
  { day: 28, sutureStrengthPercent: 30, tissueRecoveryPercent: 82, status: "Enzymatic Hydrolysis of Spidroin Backbone" },
  { day: 42, sutureStrengthPercent: 12, tissueRecoveryPercent: 93, status: "Remodeling Phase / Native Tissue Takes Primary Load" },
  { day: 60, sutureStrengthPercent: 0, tissueRecoveryPercent: 99, status: "Complete Bio-resorption into Harmless Amino Acids" }
];
