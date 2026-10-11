import { SectionData } from '../types';
import { CITATIONS } from './citationsData';

export const SECTIONS_DATA: SectionData[] = [
  {
    id: "sec-01",
    sectionNumber: 1,
    title: "THE AMAZING WORLD OF SPIDER SILK",
    subtitle: "Nature's Masterpiece of Mechanical Performance",
    category: "nature",
    categoryLabel: "Evolutionary Biomaterials",
    badgeColor: "amber",
    imageSrc: "/assets/images/spider_silk_hero.jpg",
    imageAlt: "Golden orb-weaver spider web with glistening morning dew drops against a dark midnight background",
    imageCaption: "Figure 1.1: Natural orb web (Nephila clavipes) displaying radial dragline threads supporting dew droplets under high surface tension.",
    interactiveComponentId: "interactive-web-dew",
    hotspots: [
      {
        id: "hs-1-1",
        x: 48,
        y: 45,
        title: "Major Ampullate Radial Draglines",
        description: "Stiff radial structural threads bearing primary flight impacts. Young's modulus E ≈ 10–12 GPa.",
        detail: "Acts as the rigid structural framework of the web, conducting sonic vibrations to the spider.",
        metric: "160 MJ/m³"
      },
      {
        id: "hs-1-2",
        x: 35,
        y: 28,
        title: "Viscid Spiral Capture Droplets",
        description: "Flagelliform silk coated with hygroscopic glue droplets, stretching over 200% without breaking.",
        detail: "Absorbs the bulk of kinetic prey energy via viscoelastic dissipation and capillary adhesion.",
        metric: ">200% Strain"
      },
      {
        id: "hs-1-3",
        x: 65,
        y: 60,
        title: "Surface Tension Dew Aggregation",
        description: "Microscopic dew droplets condense along spindle knots via the wettability gradient mechanism.",
        detail: "Maintains fiber hydration, preventing brittleness under ambient desert or forest conditions.",
        metric: "γ ≈ 72 mN/m"
      }
    ],
    scientificPoints: [
      {
        title: "Evolutionary Perfection Over 380 Million Years",
        description: "Spiders evolved specialized silk glands long before modern mammals existed, optimizing fibers to arrest high-kinetic-energy prey.",
        metric: "380+ Myr",
        metricContext: "Evolutionary optimization timeline"
      },
      {
        title: "Distinct Glandular Specializations",
        description: "A single orb-weaver can produce up to seven distinct silk varieties, each chemically tailored for distinct mechanical functions.",
        metric: "7 Glands",
        metricContext: "Dedicated protein extrusion glands"
      },
      {
        title: "Unmatched Energy Absorption (Toughness)",
        description: "Major ampullate dragline silk absorbs up to 160 MJ/m³ of kinetic energy before failure—exceeding both structural steel and Kevlar.",
        metric: "160 MJ/m³",
        metricContext: "Tensile toughness (work-to-fracture)"
      },
      {
        title: "The Central Engineering Question",
        description: "Can materials engineers reverse-engineer nature's molecular architecture to manufacture ultralight protective armor and biocompatible medical implants?",
        metric: "1.3 g/cm³",
        metricContext: "Low fiber density (1/6th of steel)"
      }
    ],
    engineeringSummary: "Natural spider dragline silk represents an engineering benchmark: it achieves high tensile strength (~1.3 GPa) while maintaining 30% elongation before breaking. In classical metallurgy and polymer engineering, materials are either strong but brittle, or ductile but weak. Spider silk defies this traditional trade-off through a hierarchical protein architecture.",
    transitionText: "To replicate these macroscopic properties, we first have to understand the biological machinery inside the spider that manufactures this fiber from liquid solution. Let us examine Section 02.",
    presentation: {
      sectionNumber: 1,
      sectionTitle: "Introduction to Spider Silk & Biomimetic Engineering",
      allocatedMinutes: 3,
      keyTakeaways: [
        "Major ampullate silk absorbs ~160 MJ/m³, outclassing Kevlar in energy density.",
        "Density is ~1.3 g/cm³, nearly one-sixth the weight of structural steel.",
        "Synthesized entirely at room temperature in aqueous solution without harsh solvents."
      ],
      technicalKeywords: ["Major Ampullate", "Toughness", "Work-to-Fracture", "Specific Energy"],
      visualFocus: "Full-width orb web with dew droplets and interactive radial/spiral tension canvas."
    },
    citations: [CITATIONS[0], CITATIONS[1]]
  },
  {
    id: "sec-02",
    sectionNumber: 2,
    title: "WHAT IS SPIDER SILK? GLANDS & SPINNERETS",
    subtitle: "The Biological Extrusion Factory",
    category: "biology",
    categoryLabel: "Functional Anatomy & Extrusion",
    badgeColor: "cyan",
    imageSrc: "/assets/images/spider_gland_anatomy.jpg",
    imageAlt: "Scientific medical 3D diagram showing spider abdomen major ampullate silk gland, duct zones, and spinneret spigot",
    imageCaption: "Figure 2.1: Micro-anatomy of the major ampullate gland. High-concentration liquid crystalline spidroins undergo shear stress and acidification in the duct.",
    interactiveComponentId: "interactive-spinneret",
    hotspots: [
      {
        id: "hs-2-1",
        x: 25,
        y: 42,
        title: "Major Ampullate Gland Sac",
        description: "Stores spidroin proteins at 30–50% w/v concentration in a stabilized liquid crystalline phase.",
        detail: "Prevents premature protein aggregation via specialized globular N- and C-terminal control caps.",
        metric: "30-50% w/v"
      },
      {
        id: "hs-2-2",
        x: 52,
        y: 46,
        title: "S-Shaped Extrusion Duct",
        description: "Tapering channel where pH drops sharply from 7.6 to 5.7 with active potassium/phosphate exchange.",
        detail: "Forces terminal domains to dimerize, initiating hydrophobic alignment along the draw axis.",
        metric: "pH 7.6 → 5.7"
      },
      {
        id: "hs-2-3",
        x: 74,
        y: 60,
        title: "Spinneret Spigot Exit",
        description: "Microscopic exit valve applying extensional shear stress exceeding 1,000 s⁻¹ to solid silk.",
        detail: "Water is rapidly extracted, triggering irreversible phase transition into solid fiber (2.5–4.5 µm).",
        metric: "d ≈ 3 µm"
      }
    ],
    scientificPoints: [
      {
        title: "Major Ampullate Gland Reservoirs",
        description: "The ampullate gland stores a concentrated (up to 50% w/v) liquid crystalline solution of large structural proteins known as spidroins.",
        metric: "30-50% w/v",
        metricContext: "Dope protein concentration in vivo"
      },
      {
        title: "Microfluidic Acidification Gradient",
        description: "As the protein dope flows through the tapering S-shaped duct, pH drops sharply from 7.6 to 5.7, triggering conformational rearrangement of the terminal domains.",
        metric: "pH 7.6 → 5.7",
        metricContext: "Intra-ductal chemical gradient"
      },
      {
        title: "Extensional Shear Stress & Phase Inversion",
        description: "The physical tapering of the duct subjects the liquid to extensional shear flow, aligning protein chains and driving hydrophobic self-assembly into solid beta-sheets.",
        metric: "~10³ s⁻¹",
        metricContext: "Shear rate inside spinneret canal"
      },
      {
        title: "Anterior Lateral Spinneret Spigots",
        description: "Microscopic spigot valves at the abdominal tip actively regulate fiber diameter (~2.5–4.5 µm) and draw rate as the spider pulls the solid thread.",
        metric: "2.5-4.5 µm",
        metricContext: "Native dragline fiber diameter"
      }
    ],
    engineeringSummary: "The spider's spinning apparatus functions as an advanced microfluidic reactor. Unlike synthetic polymers like Kevlar—which require toxic concentrated sulfuric acid at elevated temperatures—the spider accomplishes liquid-to-solid phase inversion entirely in an aqueous buffer via controlled ionic exchange, pH drop, and laminar shear alignment.",
    transitionText: "Now that we understand the biological extrusion mechanism, how does it translate into macroscopic mechanical numbers? Section 03 analyzes Nature's Material Science.",
    presentation: {
      sectionNumber: 2,
      sectionTitle: "Glands, Spinnerets, and Shear-Induced Extrusion",
      allocatedMinutes: 3,
      keyTakeaways: [
        "Spidroins are stored as liquid crystals at 30–50% concentration without clumping.",
        "The duct lowers pH from 7.6 to 5.7, driving rapid terminal domain dimerization.",
        "Extensional shear flow forces protein alignment at room temperature without toxic acids."
      ],
      technicalKeywords: ["Spidroin", "Liquid Crystal", "Shear-Induced Extrusion", "Microfluidic Duct"],
      visualFocus: "Gland micro-anatomy, S-duct zones, and spigot solid silk exit."
    },
    citations: [CITATIONS[0], CITATIONS[9]]
  },
  {
    id: "sec-03",
    sectionNumber: 3,
    title: "NATURE'S MATERIAL SCIENCE: STRENGTH VS TOUGHNESS",
    subtitle: "Deconstructing the Stress–Strain Curve",
    category: "materials",
    categoryLabel: "Mechanical Characterization",
    badgeColor: "amber",
    imageSrc: "/assets/images/future_materials_lab.jpg",
    imageAlt: "Materials testing laboratory showing automated tensile testing frame measuring spider silk stress-strain curve on display",
    imageCaption: "Figure 3.1: Precision tensile testing rig analyzing load-displacement kinetics of spider dragline silk versus structural engineering benchmarks.",
    interactiveComponentId: "interactive-stress-strain",
    hotspots: [
      {
        id: "hs-3-1",
        x: 62,
        y: 42,
        title: "Holographic Stress-Strain Display",
        description: "Real-time load-displacement plot showing initial elastic modulus, yield point, and extensive plastic plateau.",
        detail: "Demonstrates that toughness is the mathematical integral under the curve (∫ σ dε).",
        metric: "160 MJ/m³"
      },
      {
        id: "hs-3-2",
        x: 75,
        y: 52,
        title: "Automated Tensile Testing Grips",
        description: "Micro-pneumatic clamps loading single silk filaments at strain rates from 0.001 to 10 s⁻¹.",
        detail: "Silk exhibits strain-rate hardening: higher strain rates increase tensile strength.",
        metric: "1.3 GPa Peak"
      },
      {
        id: "hs-3-3",
        x: 22,
        y: 65,
        title: "Precision Take-Up Bobbins",
        description: "High-speed winding spools collecting continuous drawn filaments under controlled tension.",
        detail: "Controls pre-stress tension to prevent premature environmental supercontraction.",
        metric: "1.31 g/cm³"
      }
    ],
    scientificPoints: [
      {
        title: "Tensile Strength (Peak Stress)",
        description: "Dragline silk withstands ~1.1 to 1.4 GPa before rupture. While lower than pristine Kevlar (2.8 GPa), it matches high-tensile structural steel.",
        metric: "1.1 - 1.4 GPa",
        metricContext: "Ultimate tensile strength"
      },
      {
        title: "High Extensibility (Strain at Break)",
        description: "Unlike synthetic aramid fibers which fail at ~3.5% strain, dragline silk deforms elastically and plastically up to 25–35% before breaking.",
        metric: "25 - 35%",
        metricContext: "Elongation at break"
      },
      {
        title: "Toughness: Work-to-Fracture Area",
        description: "Toughness represents the mathematical integral under the stress-strain curve (∫ σ dε). Spider silk achieves ~160 MJ/m³, more than triple Kevlar 29 (~50 MJ/m³).",
        metric: "160 MJ/m³",
        metricContext: "Modulus of toughness"
      },
      {
        title: "Specific Energy Absorption Density",
        description: "Because silk has a low density of ~1.31 g/cm³, its strength-to-weight and toughness-to-weight ratios dramatically outclass traditional structural metals.",
        metric: "122 kJ/kg",
        metricContext: "Gravimetric energy absorption"
      }
    ],
    engineeringSummary: "Engineers must strictly separate strength (how much load a material can bear before yielding) from toughness (how much total energy a material absorbs before catastrophic rupture). High-tensile steel is strong but brittle; rubber is extensible but weak. Dragline silk delivers moderate-to-high strength coupled with high strain, maximizing the integral under the stress–strain curve.",
    transitionText: "Why can spider silk stretch by 30% while retaining gigapascal strength? The secret lies in its nanoscale molecular hierarchy. Section 04 zooms inside the protein chains.",
    presentation: {
      sectionNumber: 3,
      sectionTitle: "Tensile Strength, Modulus, and Toughness Area",
      allocatedMinutes: 3,
      keyTakeaways: [
        "Tensile strength is peak load; toughness is total energy absorption (∫ σ dε).",
        "Spider silk absorbs ~160 MJ/m³, surpassing Kevlar 29 (~50 MJ/m³) and steel (~6 MJ/m³).",
        "Low density (~1.31 g/cm³) provides unmatched gravimetric energy density (122 kJ/kg)."
      ],
      technicalKeywords: ["Young's Modulus", "Strain-at-Break", "Toughness Integral", "Specific Strength"],
      visualFocus: "Interactive stress-strain curve comparison and tensile testing frame."
    },
    citations: [CITATIONS[1], CITATIONS[4]]
  },
  {
    id: "sec-04",
    sectionNumber: 4,
    title: "THE SECRET AT THE MOLECULAR LEVEL",
    subtitle: "Beta-Sheet Nanocrystals & Amorphous Matrix",
    category: "molecular",
    categoryLabel: "Nanoscale Hierarchy",
    badgeColor: "cyan",
    imageSrc: "/assets/images/molecular_betasheet.jpg",
    imageAlt: "Scientific 3D nanoscale molecular model showing poly-alanine beta-sheet nanocrystals embedded in glycine-rich amorphous helical coils",
    imageCaption: "Figure 4.1: Atomic-scale hierarchy of spidroin: Poly-alanine anti-parallel β-sheet nanocrystals (2–5 nm) crosslinked by Glycine-rich amorphous coils.",
    interactiveComponentId: "interactive-molecular-zoom",
    hotspots: [
      {
        id: "hs-4-1",
        x: 32,
        y: 40,
        title: "Poly-Alanine β-Sheet Nanocrystals",
        description: "Anti-parallel beta-sheets crosslinked by dense hydrogen bonds, confined to 2–5 nm dimensions.",
        detail: "Buehler (2010) proved 2–5 nm nanoconfinement is critical: prevents crack propagation via cooperative bonding.",
        metric: "2–5 nm Block"
      },
      {
        id: "hs-4-2",
        x: 58,
        y: 42,
        title: "Glycine-Rich Amorphous Coils",
        description: "Disordered polypeptide coils containing GPGXX and GPGQQ motifs forming molecular springs.",
        detail: "Uncoil progressively under tensile strain, providing 30% extensibility before load transfers to crystals.",
        metric: "~65% Volume"
      },
      {
        id: "hs-4-3",
        x: 74,
        y: 65,
        title: "Sacrificial Hydrogen-Bond Network",
        description: "Secondary hydrogen bonds that rupture sequentially under dynamic load, dissipating impact as micro-heat.",
        detail: "Absorbs shockwaves without breaking the primary covalent peptide backbone.",
        metric: "Cooperativity"
      }
    ],
    scientificPoints: [
      {
        title: "Major Spidroin Proteins (MaSp1 & MaSp2)",
        description: "Dragline silk is composed of two primary repetitive giant proteins: Major Ampullate Spidroin 1 (MaSp1) and Spidroin 2 (MaSp2), with molecular weights exceeding 250–350 kDa.",
        metric: "250-350 kDa",
        metricContext: "Molecular weight of native spidroins"
      },
      {
        title: "Poly-Alanine β-Sheet Nanocrystals",
        description: "Repetitive poly-alanine blocks self-assemble into tightly packed anti-parallel β-sheet nanocrystals measuring 2–5 nm. These act as rigid physical crosslinks conferring high tensile strength.",
        metric: "2 - 5 nm",
        metricContext: "Nanocrystal confinement dimension"
      },
      {
        title: "Glycine-Rich Amorphous Coils (GPGXX Motifs)",
        description: "Between the crystalline blocks lie flexible, glycine-rich regions containing beta-turn spirals and random coils that unfold reversibly under tension, conferring 30% extensibility.",
        metric: "~60-70%",
        metricContext: "Amorphous volume fraction in fiber"
      },
      {
        title: "Sacrificial Hydrogen-Bond Networks",
        description: "Under mechanical loading, weak hydrogen bonds rupture sequentially, dissipating shockwave energy as heat without breaking the primary covalent backbone.",
        metric: "Cooperativity",
        metricContext: "Hydrogen-bond cluster dynamics"
      }
    ],
    engineeringSummary: "Spider dragline silk is nature's nanocomposite: rigid crystalline domains embedded in a flexible amorphous matrix. Nanomechanics research (Keten & Buehler, Nature Materials 2010) proved that confining β-sheet crystals to 2–5 nm is essential: if crystals are larger, they undergo brittle shear cleavage; at 2–5 nm, hydrogen bonds deform cooperatively, resisting fracture.",
    transitionText: "Understanding this molecular composite is thrilling, but how do human engineers manufacture these gigantic proteins without harvesting spiders? Section 05 presents the recombinant pipeline.",
    presentation: {
      sectionNumber: 4,
      sectionTitle: "Protein Hierarchy: Beta-Sheet Nanocrystals and Amorphous Matrix",
      allocatedMinutes: 3,
      keyTakeaways: [
        "Spidroin is a two-phase nanocomposite: rigid crystalline blocks in flexible amorphous coils.",
        "Poly-alanine beta-sheet crystals provide gigapascal tensile strength.",
        "Buehler's 2–5 nm nanoconfinement discovery: cooperative H-bonds prevent brittle crack growth."
      ],
      technicalKeywords: ["β-Sheet Nanocrystal", "MaSp1 / MaSp2", "GPGXX Motif", "Sacrificial Bonds"],
      visualFocus: "Interactive molecular zoom from 20µm thread to 0.3nm hydrogen bonds."
    },
    citations: [CITATIONS[3], CITATIONS[4]]
  },
  {
    id: "sec-05",
    sectionNumber: 5,
    title: "FROM SPIDER SILK TO ENGINEERED FIBERS",
    subtitle: "The 5-Stage Recombinant Biomimicry Pipeline",
    category: "biotech",
    categoryLabel: "Recombinant Biotechnology",
    badgeColor: "emerald",
    imageSrc: "/assets/images/recombinant_biomimicry.jpg",
    imageAlt: "Futuristic biotechnology biomimicry laboratory showing genetic sequencing, microbial fermentation bioreactor, and microfluidic wet spinning nozzle",
    imageCaption: "Figure 5.1: The end-to-end engineered biomaterials pipeline: Gene design → Microbial fermentation → Aqueous purification → Microfluidic wet-spinning → Post-draw alignment.",
    interactiveComponentId: "interactive-biomimicry-pipeline",
    hotspots: [
      {
        id: "hs-5-1",
        x: 44,
        y: 45,
        title: "Genetic Sequencing & Host Plasmids",
        description: "Synthesized codon-optimized spidroin genes cloned into E. coli or Pichia pastoris expression vectors.",
        detail: "Eliminates need for live spiders; produces pure single-protein dope formulations.",
        metric: "Codon Optimized"
      },
      {
        id: "hs-5-2",
        x: 58,
        y: 68,
        title: "Precision Bioreactor Fermentation",
        description: "Stainless steel industrial fermenter growing engineered microbes on renewable plant sugar broths.",
        detail: "Produces recombinant spidroin proteins in liquid suspension at 5–15 g/L titers.",
        metric: "5–15 g/L Titer"
      },
      {
        id: "hs-5-3",
        x: 82,
        y: 35,
        title: "Microfluidic Wet-Spinning Nozzle",
        description: "Aqueous dope extruded into isopropanol coagulation bath, mimicking spider duct shear alignment.",
        detail: "Solidifies liquid dope into continuous monofilament without toxic sulfuric acid solvents.",
        metric: "Shear ≈ 10³ s⁻¹"
      }
    ],
    scientificPoints: [
      {
        title: "Why Spiders Cannot Be Farmed",
        description: "Unlike silkworms (Bombyx mori), spiders are territorial predators that practice cannibalism when crowded, rendering traditional sericulture impossible.",
        metric: "Cannibalism",
        metricContext: "Biological farming limitation"
      },
      {
        title: "Synthetic Gene Synthesis & Host Systems",
        description: "Engineers synthesize codon-optimized spidroin genes and insert them into recombinant host organisms: Escherichia coli, Pichia pastoris yeast, or transgenic silkworms.",
        metric: "Host Vectors",
        metricContext: "E. coli, Yeast, Plant expression"
      },
      {
        title: "Precision Industrial Fermentation",
        description: "Industrial bioreactors culture engineered microbes using simple renewable sugar feeds, producing recombinant spidroin proteins in liquid dope suspensions.",
        metric: "Fermentation",
        metricContext: "Controlled aqueous bioreactors"
      },
      {
        title: "Biomimetic Microfluidic Wet-Spinning",
        description: "The purified protein dope is extruded through microfluidic nozzles into coagulation baths, followed by post-drawing rollers that stretch and align beta-sheets.",
        metric: "Post-Draw",
        metricContext: "Mechanical strain alignment ratio"
      }
    ],
    engineeringSummary: "Because agricultural farming of spiders is biologically infeasible, materials scientists utilize recombinant biotechnology. By synthesizing synthetic spidroin genes, expressing them in industrial fermentation tanks, and extruding the dope through biomimetic microfluidic nozzles with post-spin draw ratios of 2× to 5×, engineers can produce continuous synthetic silk filaments.",
    transitionText: "Why go through all this biotechnology effort when conventional materials already exist? Section 06 examines the critical vulnerabilities of modern industrial fibers.",
    presentation: {
      sectionNumber: 5,
      sectionTitle: "Recombinant DNA Expression and Microfluidic Wet-Spinning",
      allocatedMinutes: 3,
      keyTakeaways: [
        "Spiders cannot be farmed due to territorial cannibalism; recombinant biology is mandatory.",
        "Recombinant E. coli and yeast hosts produce spidroin protein from plant sugars.",
        "Post-spinning mechanical drawing (2–5×) is essential to physically orient beta-sheet crystals."
      ],
      technicalKeywords: ["Recombinant DNA", "Pichia pastoris", "Wet-Spinning", "Post-Draw Alignment"],
      visualFocus: "Interactive 6-stage biomimicry manufacturing pipeline with animated flow."
    },
    citations: [CITATIONS[2], CITATIONS[8]]
  },
  {
    id: "sec-06",
    sectionNumber: 6,
    title: "WHY DO WE NEED NEXT-GENERATION FIBERS?",
    subtitle: "The Limitations of Modern Synthetics",
    category: "limits",
    categoryLabel: "Industrial Motivation & Benchmarking",
    badgeColor: "amber",
    imageSrc: "/assets/images/future_materials_lab.jpg",
    imageAlt: "Comparative material science laboratory showing thermal, UV, and tensile testing of conventional aramid textiles versus next-generation bio-fibers",
    imageCaption: "Figure 6.1: Material degradation analysis: Conventional aramid fibers suffer UV photodegradation, moisture sensitivity, and high operational stiffness.",
    interactiveComponentId: "interactive-materials-tradeoff",
    hotspots: [
      {
        id: "hs-6-1",
        x: 35,
        y: 40,
        title: "Aramid Photolytic Degradation Chamber",
        description: "Accelerated UV and moisture exposure chambers showing up to 30% tensile loss in Kevlar.",
        detail: "Requires heavy hermetically sealed waterproof covers, adding bulk to protective gear.",
        metric: "-30% Strength UV"
      },
      {
        id: "hs-6-2",
        x: 65,
        y: 50,
        title: "Modulus & Ergonomic Stiffness Gauge",
        description: "Kevlar's high Young's modulus (70–110 GPa) restricts chest and joint articulation in protective vests.",
        detail: "Causes significant physical and thermal fatigue for law enforcement and first responders.",
        metric: "70–110 GPa Rigidity"
      },
      {
        id: "hs-6-3",
        x: 82,
        y: 65,
        title: "UHMWPE Thermal Softening Boundary",
        description: "Dyneema fibers begin viscoelastic creep and softening at ~130–140°C, limiting high-temperature duty.",
        detail: "Spider silk maintains structural thermal stability up to ~200°C.",
        metric: "~140°C Limit"
      }
    ],
    scientificPoints: [
      {
        title: "Kevlar UV & Moisture Susceptibility",
        description: "Aramid fibers (Kevlar/Twaron) degrade significantly when exposed to ultraviolet radiation and ambient humidity, requiring sealed protective covers to prevent tensile loss.",
        metric: "UV Decay",
        metricContext: "Photolytic aromatic ring cleavage"
      },
      {
        title: "Extreme Rigidity & Mobility Fatigue",
        description: "High tensile modulus (~70–110 GPa) makes conventional ballistic vests stiff, bulky, and ergonomically restrictive, leading to physical fatigue in security personnel.",
        metric: "70-110 GPa",
        metricContext: "High stiffness causing wearer fatigue"
      },
      {
        title: "Viscoelastic Creep in Nylons & UHMWPE",
        description: "Polymer synthetics like Nylon and Ultra-High-Molecular-Weight Polyethylene suffer from creep deformation under sustained loads and low melting temperatures (~130–150°C).",
        metric: "~140°C",
        metricContext: "Thermal softening limit of UHMWPE"
      },
      {
        title: "Petrochemical Environmental Footprint",
        description: "Aramid synthesis relies on hazardous aromatic amines and concentrated sulfuric acid, creating substantial hazardous chemical waste and permanent non-biodegradable landfill accumulation.",
        metric: "H₂SO₄ Solvent",
        metricContext: "Harsh synthesis solvent requirements"
      }
    ],
    engineeringSummary: "Modern engineering materials like Kevlar, UHMWPE (Dyneema), and carbon fiber have revolutionized structural protection, but each possesses severe trade-offs. Kevlar suffers from UV photolysis and poor compressive fatigue; UHMWPE softens at moderate heat (~140°C); and both require energy-intensive, petrochemical refining. Bio-inspired fibers offer an alternative pathway: high flexibility, superior energy damping, and lower ecological burdens.",
    transitionText: "This brings us to our first major engineering application: protective armor. Section 07 examines the design of ultra-lightweight protective vests.",
    presentation: {
      sectionNumber: 6,
      sectionTitle: "Limitations of Conventional Synthetics & The Case for Bio-Fibers",
      allocatedMinutes: 3,
      keyTakeaways: [
        "Kevlar degrades under UV radiation and moisture, imposing strict 5-year replacement cycles.",
        "High modulus (70–110 GPa) creates heavy, rigid armor restricting operator mobility.",
        "Aramids require boiling sulfuric acid solvents; bio-fibers are spun in mild aqueous buffers."
      ],
      technicalKeywords: ["Photodegradation", "Aramid Creep", "Areal Density", "Thermal Softening"],
      visualFocus: "Material degradation trade-off radar and comparative failure points."
    },
    citations: [CITATIONS[6], CITATIONS[8]]
  },
  {
    id: "sec-07",
    sectionNumber: 7,
    title: "ULTRA-LIGHTWEIGHT PROTECTIVE VESTS",
    subtitle: "High-Toughness Textiles & Energy Dissipation",
    category: "armor",
    categoryLabel: "Protective Textiles Engineering",
    badgeColor: "cyan",
    imageSrc: "/assets/images/impact_textile_weave.jpg",
    imageAlt: "Materials science engineering diagram of an advanced high-toughness protective woven textile showing multi-layer microscopic fiber weave dissipating kinetic impact energy",
    imageCaption: "Figure 7.1: Multi-layer textile architecture: Transverse kinetic impact waves propagate radially through interconnected warp and weft yarns, dissipating localized stress.",
    interactiveComponentId: "interactive-impact-absorber",
    hotspots: [
      {
        id: "hs-7-1",
        x: 28,
        y: 35,
        title: "Layer 1: Primary Strike-Face Textile",
        description: "Tightly woven micro-denier bio-silk hybrid yarn designed to mushroom projectile tips.",
        detail: "Initiates instantaneous transverse sonic acoustic wave propagation (c = √(E/ρ) ≈ 3,200 m/s).",
        metric: "c ≈ 3,200 m/s"
      },
      {
        id: "hs-7-2",
        x: 48,
        y: 52,
        title: "Layer 2: 3D Interlocking Energy Matrix",
        description: "Orthogonal woven core where inter-yarn Coulomb friction converts 35% kinetic energy directly to micro-heat.",
        detail: "Extensive 30% plastic strain plateau absorbs work-to-fracture without sudden brittle fiber shattering.",
        metric: "35% Friction Damping"
      },
      {
        id: "hs-7-3",
        x: 75,
        y: 65,
        title: "Layer 3: Trauma Management Backing",
        description: "Compliant load-distributing backing that disperses residual momentum across the chest.",
        detail: "Guarantees backface deformation cavity remains strictly below the NIJ-0101.07 threshold (<44 mm).",
        metric: "<44 mm NIJ Limit"
      }
    ],
    scientificPoints: [
      {
        title: "Transverse Wave Propagation Velocity",
        description: "When an impactor strikes a woven textile, energy is carried away along the fibers via transverse and longitudinal acoustic waves. Wave speed depends on specific modulus: c = √(E/ρ).",
        metric: "c = √(E/ρ)",
        metricContext: "Sonic wave velocity equation"
      },
      {
        title: "Multi-Layer Progressive Deceleration",
        description: "A complete protective system utilizes multi-ply architecture: primary strike-face plies engage the projectile, intermediate layers deform plastically to spread force, and backing layers prevent trauma.",
        metric: "Multi-Ply",
        metricContext: "3D interlocking woven matrix"
      },
      {
        title: "Reduction of Blunt Trauma (Backface Signature)",
        description: "Preventing penetration is only half the battle. Standard NIJ-0101.07 requires backface deformation under 44 mm in ballistic clay to prevent internal blunt-force organ damage.",
        metric: "< 44 mm",
        metricContext: "NIJ backface signature limit"
      },
      {
        title: "Weight Reduction & Ergonomic Flexibility",
        description: "Because silk-inspired fibers absorb more work-to-fracture per unit volume, textile designers could theoretically reduce vest areal density (kg/m²) while maintaining flexibility.",
        metric: "-25% Mass",
        metricContext: "Targeted areal density reduction"
      }
    ],
    engineeringSummary: "Ballistic performance is a property of a complete engineered system—not a single fiber. Woven spider-silk-inspired textiles utilize high work-to-fracture to arrest projectile motion, distributing localized kinetic energy across hundreds of orthogonal yarns through fiber-to-fiber friction, transverse deflection, and molecular bond stretching. Certified systems require rigorous NIJ-0101.07 validation.",
    transitionText: "To visualize the exact mechanics of how a woven textile absorbs impact energy without snapping, Section 08 walks through our interactive force simulator.",
    presentation: {
      sectionNumber: 7,
      sectionTitle: "Multi-Layer Protective Vests: Energy Dispersion and NIJ Standards",
      allocatedMinutes: 3,
      keyTakeaways: [
        "A protective vest is a complete engineered multi-ply system, not a raw loose fiber.",
        "Sonic wave velocity c = √(E/ρ) determines how rapidly kinetic energy travels outward.",
        "NIJ Standard-0101.07 mandates backface blunt trauma cavity under 44 mm in backing clay."
      ],
      technicalKeywords: ["Transverse Wave", "NIJ-0101.07", "Backface Signature", "Areal Density"],
      visualFocus: "Interactive 3-layer cutaway inspector with acoustic shockwave vectors."
    },
    citations: [CITATIONS[1], CITATIONS[6]]
  },
  {
    id: "sec-08",
    sectionNumber: 8,
    title: "HOW A FIBER CAN ABSORB ENERGY",
    subtitle: "Dynamic Deformation, Yarn Friction & Failure Modes",
    category: "mechanics",
    categoryLabel: "Dynamic Mechanics & Simulation",
    badgeColor: "amber",
    imageSrc: "/assets/images/impact_textile_weave.jpg",
    imageAlt: "Magnified SEM graphic of orthogonal woven fiber mesh demonstrating yarn crimp, inter-fiber friction, and progressive tensile strain sharing",
    imageCaption: "Figure 8.1: Conceptual load-distribution model: Orthogonal warp and weft yarn crossover points redistribute localized point loads across surrounding nodes.",
    interactiveComponentId: "interactive-fiber-network",
    hotspots: [
      {
        id: "hs-8-1",
        x: 48,
        y: 42,
        title: "Impact Center / Primary Contact Node",
        description: "Point of maximum transverse indentation where the impactor transfers kinetic energy to warp/weft yarns.",
        detail: "Initial deceleration cushions impact via geometric yarn crimp straightening before molecular bonds stretch.",
        metric: "Crimp Straightening"
      },
      {
        id: "hs-8-2",
        x: 32,
        y: 65,
        title: "Orthogonal Crossover Friction Points",
        description: "Microscopic Coulomb contact friction between yarns sliding past each other under intense pressure.",
        detail: "Converts high-frequency mechanical shock energy directly into harmless micro-thermal heat.",
        metric: "Coulomb Damping"
      },
      {
        id: "hs-8-3",
        x: 75,
        y: 35,
        title: "Radial Tension Cone Boundary",
        description: "Expanding pyramidal tension wave pulling surrounding secondary yarns into load sharing.",
        detail: "Spreads force over a wide area, reducing local peak stress below the ultimate tensile limit.",
        metric: "Radial Dispersion"
      }
    ],
    scientificPoints: [
      {
        title: "Yarn Crimp & Geometric Decoupling",
        description: "In a woven fabric, yarns are bent over and under one another (crimp). Initial impact energy is absorbed non-destructively simply by pulling this crimp straight.",
        metric: "Crimp Decouple",
        metricContext: "Geometric strain compliance"
      },
      {
        title: "Inter-Fiber Frictional Dissipation",
        description: "As yarns slide past each other at orthogonal crossover points, microscopic Coulomb friction converts mechanical kinetic energy directly into micro-thermal heat.",
        metric: "Friction Damping",
        metricContext: "Coulomb contact dissipation"
      },
      {
        title: "Progressive Tensile Strain Sharing",
        description: "Rather than isolating stress at the point of contact, tension is mechanically shared with secondary yarns in the orthogonal weave, creating an expanding tension cone.",
        metric: "Tension Cone",
        metricContext: "Radial load redistribution"
      },
      {
        title: "Controlled Plastic Yielding",
        description: "If force exceeds the elastic limit, the fiber undergoes extensive plastic elongation (molecular uncoiling), soaking up energy without sudden catastrophic shattering.",
        metric: "Work-to-Fracture",
        metricContext: "Total dissipated energy integral"
      }
    ],
    engineeringSummary: "An impact on a textile is not resisted by a single strand in isolation. Through weave geometry (crimp interchange), inter-yarn contact friction, and rapid radial wave dispersion, localized kinetic energy is partitioned among thousands of interconnected filaments. Spider silk's unique advantage is that even after absorbing immense elastic energy, its extensive plastic deformation regime provides a secondary safety buffer before fiber rupture.",
    transitionText: "While high-energy absorption protects soldiers and police on the outside, the exact same protein inspiration is revolutionizing internal medicine. Section 09 transitions from armor to surgical sutures.",
    presentation: {
      sectionNumber: 8,
      sectionTitle: "Interactive Load Distribution and Inter-Fiber Physics",
      allocatedMinutes: 3,
      keyTakeaways: [
        "Energy absorption occurs in 3 phases: crimp straightening, inter-yarn friction, tensile sharing.",
        "Coulomb friction at weave crossover points converts kinetic impact into harmless micro-heat.",
        "Plastic uncoiling of spidroin chains prevents the catastrophic brittle shattering seen in carbon fiber."
      ],
      technicalKeywords: ["Yarn Crimp", "Coulomb Friction", "Tension Cone", "Plastic Plateau"],
      visualFocus: "Interactive 220-joule shockwave simulator with expanding radial wave rings."
    },
    citations: [CITATIONS[1], CITATIONS[4]]
  },
  {
    id: "sec-09",
    sectionNumber: 9,
    title: "FROM PROTECTION TO MEDICINE",
    subtitle: "The Biomedical Engineering Frontier",
    category: "biomed",
    categoryLabel: "Biomedical Engineering & Suture Requirements",
    badgeColor: "emerald",
    imageSrc: "/assets/images/surgical_suture_healing.jpg",
    imageAlt: "Clean medical scientific illustration showing ultra-fine bioabsorbable surgical sutures closing delicate tissue with cellular collagen healing",
    imageCaption: "Figure 9.1: Delicate surgical wound closure: Precision micro-sutures holding dermal wound margins under continuous physiological tension.",
    interactiveComponentId: "interactive-suture-demo",
    hotspots: [
      {
        id: "hs-9-1",
        x: 42,
        y: 35,
        title: "Microsurgical Suture Filament (USP 7-0 to 10-0)",
        description: "Extraordinarily fine suture thread (10–50 µm diameter) matching native spider dragline dimensions.",
        detail: "Crucial for delicate ophthalmic corneal grafts, neurosurgery, and pediatric cardiovascular repair.",
        metric: "10–50 µm Gauge"
      },
      {
        id: "hs-9-2",
        x: 55,
        y: 52,
        title: "Surgical Knot Security Loop",
        description: "High pliability allows smooth tying without knot slippage under blood pressure or patient motion.",
        detail: "Low flexural rigidity avoids the 'cheese-cutter' effect of slicing through soft, friable liver or brain tissue.",
        metric: "High Loop Security"
      },
      {
        id: "hs-9-3",
        x: 72,
        y: 65,
        title: "Fibroblast & Collagen Healing Margins",
        description: "Dermal margins held in intimate mechanical apposition to facilitate natural capillary angiogenesis.",
        detail: "Pyrogen-free, sterile spidroin scaffolds avoid foreign-body granulomas and chronic fibrosis.",
        metric: "ISO 10993 Biocompatible"
      }
    ],
    scientificPoints: [
      {
        title: "The Core Purpose of Surgical Sutures",
        description: "Sutures provide mechanical apposition: holding separated wound edges in intimate physical contact so natural cellular clotting, angiogenesis, and collagen synthesis can occur.",
        metric: "Apposition",
        metricContext: "Mechanical tissue approximation"
      },
      {
        title: "High Knot Security & Handling Pliability",
        description: "Surgeons require fibers with low flexural rigidity and high knot security: the suture must tie down smoothly without knot slippage, snapping, or cutting into delicate soft organs.",
        metric: "Knot Security",
        metricContext: "Frictional loop holding capacity"
      },
      {
        title: "Ultra-Fine Micron Diameters (USP 7-0 to 10-0)",
        description: "In ophthalmic, neurosurgical, and plastic microsurgery, sutures must be extraordinarily fine (10–50 µm)—a dimension perfectly matching natural spider dragline silk.",
        metric: "10-50 µm",
        metricContext: "Microsurgical suture gauge"
      },
      {
        title: "Biocompatibility & Low Foreign-Body Response",
        description: "Protective fibers rely on synthetic additives that trigger severe inflammation in vivo. Medical sutures must be pyrogen-free, sterile, non-cytotoxic, and non-immunogenic.",
        metric: "ISO 10993",
        metricContext: "Biocompatibility testing standard"
      }
    ],
    engineeringSummary: "A material optimized for high-impact ballistic armor cannot simply be transferred into an operating room. Medical sutures face a completely different suite of engineering criteria: biological non-immunogenicity, flexible handling, ultra-fine gauge for microsurgery, and the ability to maintain mechanical tension throughout the critical wound healing window without causing chronic inflammation.",
    transitionText: "To design an ideal medical suture, we must understand the fundamental difference between absorbable and non-absorbable materials. Section 10 explains biodegradable sutures.",
    presentation: {
      sectionNumber: 9,
      sectionTitle: "Microsurgical Requirements: Apposition, Knot Security, and Gauge",
      allocatedMinutes: 3,
      keyTakeaways: [
        "Armor fibers cannot be implanted due to cytotoxic finishes and excessive bending stiffness.",
        "Microsurgery demands ultra-fine diameters (USP 7-0 to 10-0, 10–50 µm) matching spider silk.",
        "Must satisfy ISO 10993 standards: non-pyrogenic, non-cytotoxic, and hemocompatible."
      ],
      technicalKeywords: ["Tissue Apposition", "Knot Security", "USP Suture Scale", "ISO 10993"],
      visualFocus: "Dermal wound closure, needle entry path, and monofilament tissue compliance."
    },
    citations: [CITATIONS[5], CITATIONS[7]]
  },
  {
    id: "sec-10",
    sectionNumber: 10,
    title: "WHAT ARE BIODEGRADABLE SURGICAL SUTURES?",
    subtitle: "Absorbable Chemistry & Tensile Retention Kinetics",
    category: "sutures",
    categoryLabel: "Biomaterials Degradation Mechanics",
    badgeColor: "emerald",
    imageSrc: "/assets/images/surgical_suture_healing.jpg",
    imageAlt: "Scientific diagram comparing absorbable vs non-absorbable sutures and showing gradual enzymatic biodegradation timeline across 60 days",
    imageCaption: "Figure 10.1: Enzymatic degradation dynamics: Spidroin chains degrade via endogenous proteases into biocompatible amino acids as healing tissue regains tensile strength.",
    interactiveComponentId: "interactive-biodegradation-timeline",
    hotspots: [
      {
        id: "hs-10-1",
        x: 35,
        y: 42,
        title: "Day 0: Initial Mechanical Load Bearing",
        description: "Suture carries 100% of physiological tension across the surgical incision immediately post-op.",
        detail: "Holds delicate tissue margins aligned before early fibrin clots can establish mechanical strength.",
        metric: "100% Initial Strength"
      },
      {
        id: "hs-10-2",
        x: 62,
        y: 48,
        title: "Day 14–21: Critical Strength Retention Cross-Over",
        description: "Suture retains at least 50% tensile strength while fibroblasts deposit new native collagen matrix.",
        detail: "If suture strength drops before Day 14, catastrophic wound dehiscence occurs.",
        metric: ">50% Strength Retention"
      },
      {
        id: "hs-10-3",
        x: 82,
        y: 70,
        title: "Day 60: Complete Enzymatic Bio-Resorption",
        description: "Native proteases cleave spidroin chains into inert glycine and alanine amino acids.",
        detail: "Unlike synthetic PGA/PLGA, spidroins do NOT release acidic degradation byproducts, preventing sterile inflammation.",
        metric: "Zero Foreign Residue"
      }
    ],
    scientificPoints: [
      {
        title: "Absorbable vs Non-Absorbable Classification",
        description: "Non-absorbable sutures (Nylon, Polypropylene) remain indefinitely or require painful removal. Absorbable sutures degrade in vivo, eliminating secondary extraction procedures.",
        metric: "Two Classes",
        metricContext: "Permanent vs Bio-resorbable"
      },
      {
        title: "Mechanism of Breakdown: Hydrolysis vs Enzymatic",
        description: "Synthetic polymers (like PGA/PLGA) degrade via non-specific bulk hydrolysis, releasing acidic glycolic/lactic acid byproducts that can cause localized inflammatory tissue irritation.",
        metric: "Bulk Acidic",
        metricContext: "PGA/PLGA hydrolysis byproducts"
      },
      {
        title: "Enzymatic Surface Cleavage of Spidroins",
        description: "Engineered spider silk degrades primarily through gentle surface enzymatic cleavage by endogenous proteases, breaking down into natural, metabolizable amino acids (glycine, alanine).",
        metric: "Amino Acids",
        metricContext: "Benign natural degradation metabolites"
      },
      {
        title: "Tensile Strength Retention vs Mass Loss",
        description: "Mass loss is not the same as strength retention. A suture must retain at least 50% of its initial tensile strength during the first 14–21 critical days while healing tissue regains load-bearing ability.",
        metric: "14-21 Days",
        metricContext: "Critical tensile retention window"
      }
    ],
    engineeringSummary: "A biodegradable suture must balance two opposing curves: as the suture gradually degrades and loses tensile capacity, the healing biological tissue must synthesize collagen and regain structural integrity. If the suture dissolves too quickly, wound dehiscence occurs; if it persists too long, foreign-body fibrosis and chronic inflammation develop.",
    transitionText: "Given these strict physiological demands, how does recombinant spider silk measure up against commercial synthetic polymers? Section 11 analyzes clinical research trials.",
    presentation: {
      sectionNumber: 10,
      sectionTitle: "Absorbable Sutures: Degradation Pathways and Strength Retention",
      allocatedMinutes: 3,
      keyTakeaways: [
        "Synthetic sutures (PGA/PLGA) release acidic byproducts that can cause localized inflammation.",
        "Engineered spider silk degrades via gentle enzymatic surface cleavage into natural amino acids.",
        "Tensile strength retention must cross over with collagen synthesis to prevent wound dehiscence."
      ],
      technicalKeywords: ["Bulk Hydrolysis", "Enzymatic Cleavage", "Tensile Retention", "Wound Dehiscence"],
      visualFocus: "Interactive Day 0 to Day 60 degradation slider synchronized with tissue healing."
    },
    citations: [CITATIONS[5], CITATIONS[7]]
  },
  {
    id: "sec-11",
    sectionNumber: 11,
    title: "CAN SPIDER SILK INSPIRE BETTER SUTURES?",
    subtitle: "Preclinical Evidence, Nerve Regeneration & Sterilization",
    category: "research",
    categoryLabel: "Preclinical Translational Research",
    badgeColor: "emerald",
    imageSrc: "/assets/images/surgical_suture_healing.jpg",
    imageAlt: "Biomedical electron micrograph and cellular assay illustration showing fibroblast and Schwann cell adhesion along engineered spider silk micro-scaffolds",
    imageCaption: "Figure 11.1: Cellular biocompatibility: Schwann cells and fibroblasts adhere and proliferate along recombinant spidroin microfibers without toxic cytokine release.",
    interactiveComponentId: "interactive-tissue-healing",
    hotspots: [
      {
        id: "hs-11-1",
        x: 32,
        y: 35,
        title: "Sericin-Free Native Biocompatibility",
        description: "Unlike silkworm silk (Bombyx mori), spider silk lacks allergenic sericin coating.",
        detail: "Preclinical animal models elicit virtually zero foreign-body giant cell response or granuloma.",
        metric: "Sericin-Free"
      },
      {
        id: "hs-11-2",
        x: 58,
        y: 50,
        title: "6 cm Peripheral Nerve Regeneration Conduit",
        description: "Bundles of spidroin microfibers guiding Schwann cell migration across critical 6 cm nerve lesions.",
        detail: "Restored motor and sensory function in mammalian paralyzed nerve gap models (Allmeling et al., 2008).",
        metric: "6 cm Nerve Gap"
      },
      {
        id: "hs-11-3",
        x: 82,
        y: 65,
        title: "Bioactive Genetic Peptide Functionalization",
        description: "Direct genetic splicing of RGD cell-adhesion and antimicrobial peptide sequences into the spidroin gene.",
        detail: "Accelerates endothelial vascularization while preventing surgical site bacterial colonizations.",
        metric: "RGD & AMP Motifs"
      }
    ],
    scientificPoints: [
      {
        title: "Remarkable In Vivo Biocompatibility",
        description: "Preclinical animal models (Allmeling et al., Biomedical Materials 2008) showed native and recombinant spider silk elicited virtually no foreign-body granuloma or toxic macrophage response.",
        metric: "Low Macrophage",
        metricContext: "Minimal foreign-body inflammatory response"
      },
      {
        title: "Bioactive Functionalization Potential",
        description: "Because spidroins are genetically engineered, scientists can splice bioactive peptide motifs—such as RGD cell-adhesion sequences or antimicrobial peptides—directly into the protein backbone.",
        metric: "RGD Peptides",
        metricContext: "Cell-adhesion sequence integration"
      },
      {
        title: "Guided Peripheral Nerve Regeneration",
        description: "In neurosurgical nerve gap repair, spider silk filaments act as microscopic physical guidance scaffolds, directing axonal regrowth across 6 cm peripheral nerve lesions in animal trials.",
        metric: "6 cm Gaps",
        metricContext: "Axonal nerve regeneration spanning"
      },
      {
        title: "The Medical Qualification Gap",
        description: "Translating an academic fiber into an FDA 510(k) or CE-marked medical suture requires validated ethylene oxide/gamma sterilization compatibility, endotoxin removal, and Phase III clinical trials.",
        metric: "FDA 510(k)",
        metricContext: "Medical device regulatory approval gateway"
      }
    ],
    engineeringSummary: "Peer-reviewed studies confirm that spider silk proteins support excellent cell attachment and low immunogenicity. Recombinant engineering enables tailored functionalization with antimicrobial and wound-healing peptides. However, significant hurdles remain before commercial hospital adoption: rigorous batch-to-batch protein purity, validated medical sterilization without structural denaturation, and extensive regulatory trials.",
    transitionText: "We have now examined both protective vests and surgical sutures. How do these two applications compare side-by-side? Section 12 presents our interactive comparative matrix.",
    presentation: {
      sectionNumber: 11,
      sectionTitle: "Spider Silk in Surgery: Preclinical Proof, Nerve Guides, and FDA Hurdles",
      allocatedMinutes: 3,
      keyTakeaways: [
        "Spider silk is inherently sericin-free, avoiding the severe allergic reactions of silkworm silk.",
        "Demonstrated guided peripheral nerve axonal regeneration across critical 6 cm lesions.",
        "FDA 510(k) clearance requires rigorous endotoxin removal (<0.5 EU/mL) and validated sterilization."
      ],
      technicalKeywords: ["Sericin-Free", "Schwann Cells", "RGD Motifs", "Endotoxin Removal"],
      visualFocus: "Cellular proliferation on spidroin scaffolds and nerve conduit guidance."
    },
    citations: [CITATIONS[5], CITATIONS[8]]
  },
  {
    id: "sec-12",
    sectionNumber: 12,
    title: "COMPARING THE TWO APPLICATIONS",
    subtitle: "One Biological Inspiration, Two Radically Different Engineering Realities",
    category: "comparison",
    categoryLabel: "Dual-Application Comparative Synthesis",
    badgeColor: "purple",
    imageSrc: "/assets/images/split_vest_suture.jpg",
    imageAlt: "Scientific split-screen infographic: Left side shows high-impact protective woven textile glowing with cyan energy vectors; Right side shows emerald-green glowing bioabsorbable surgical micro-suture stitching tissue",
    imageCaption: "Figure 12.1: The Engineering Duality: Ballistic armor demands high kinetic work-to-fracture and multi-ply weave geometry; Surgical sutures demand biocompatibility and programmed degradation.",
    interactiveComponentId: "interactive-vest-vs-suture",
    hotspots: [
      {
        id: "hs-12-1",
        x: 24,
        y: 48,
        title: "Protective Armor Frontier (Left Side)",
        description: "External severe operating regime (-40°C to +50°C, UV, rain, abrasion). Target lifespan: 5+ years.",
        detail: "Biodegradation is a catastrophic failure mode here; requires maximum kinetic work-to-fracture.",
        metric: "Permanent Durability"
      },
      {
        id: "hs-12-2",
        x: 50,
        y: 48,
        title: "Center: The Spidroin Protein Link",
        description: "A single natural inspiration (spidroin beta-sheet + amorphous coils) adapted for two opposite goals.",
        detail: "Biomimicry is translation of physical principles—not a copy-paste identical formulation.",
        metric: "Common Principle"
      },
      {
        id: "hs-12-3",
        x: 78,
        y: 48,
        title: "Biomedical Suture Frontier (Right Side)",
        description: "Protected internal regime (37°C, pH 7.4). Target lifespan: 14–60 days.",
        detail: "Biodegradation is the entire functional requirement; breaks down safely into natural amino acids.",
        metric: "Programmed Resorption"
      }
    ],
    scientificPoints: [
      {
        title: "Contrasting Mechanical Design Objectives",
        description: "Protective vests optimize for maximum gravimetric work-to-fracture (MJ/m³), transverse acoustic velocity, and projectile blunting. Sutures optimize for flexibility, knot retention, and soft-tissue compliance.",
        metric: "Divergent Objectives",
        metricContext: "High-impact dissipation vs Gentle apposition"
      },
      {
        title: "Operational Environment & Lifespan",
        description: "Vests operate externally across extreme temperatures (-40°C to +50°C), weathering rain and abrasion over 5+ years. Sutures operate in a tightly regulated in vivo environment (37°C, pH 7.4) for 2 to 8 weeks.",
        metric: "5 Yrs vs 60 Days",
        metricContext: "Operational lifespan comparison"
      },
      {
        title: "Fate of the Material: Durability vs Resorption",
        description: "In armor, biodegradation is a catastrophic failure mode—the fiber must resist microbial and enzymatic decay. In absorbable sutures, controlled biodegradation is the primary functional requirement.",
        metric: "Opposite Fates",
        metricContext: "Permanent stability vs Programmed clearance"
      },
      {
        title: "Testing & Regulatory Certification Pathways",
        description: "Vests are certified under defense ballistic standards (NIJ-0101.07 / STANAG 2920) testing V50 limits. Sutures are governed by medical device authorities (FDA CDRH / ISO 10993) under strict cGMP.",
        metric: "NIJ vs FDA",
        metricContext: "Defense standards vs Medical compliance"
      }
    ],
    engineeringSummary: "The core lesson of biomimicry is that nature provides principles—not finished blueprints. The same underlying protein molecule (spidroin) must be formulated and spun under entirely different engineering regimes: tight 3D orthogonal ballistic weaving for protective vests, versus ultra-pure, micro-diameter, monofilament bio-resorbable cords for medical wound closure.",
    transitionText: "Can we manufacture either of these applications without harming the planet? Section 13 analyzes the sustainability and life-cycle economics of engineered biomaterials.",
    presentation: {
      sectionNumber: 12,
      sectionTitle: "One Biological Inspiration, Two Opposing Engineering Realities",
      allocatedMinutes: 3,
      keyTakeaways: [
        "One biological inspiration does NOT mean one identical finished material.",
        "In protective armor, biodegradation is failure; in surgical sutures, biodegradation is the goal.",
        "Divergent standards: Defense ballistic (NIJ-0101.07) vs Medical biocompatibility (FDA/ISO 10993)."
      ],
      technicalKeywords: ["Comparative Synthesis", "Lifespan Inversion", "NIJ vs FDA", "Design Duality"],
      visualFocus: "Split-screen visualization showing cyan kinetic weave vs emerald suture thread."
    },
    citations: [CITATIONS[1], CITATIONS[6], CITATIONS[7]]
  },
  {
    id: "sec-13",
    sectionNumber: 13,
    title: "SUSTAINABILITY AND ENVIRONMENTAL IMPACT",
    subtitle: "Life-Cycle Assessment (LCA) of Bio-Engineered Materials",
    category: "sustainability",
    categoryLabel: "Circular Bioeconomy & Life-Cycle Analysis",
    badgeColor: "emerald",
    imageSrc: "/assets/images/sustainability_lifecycle.jpg",
    imageAlt: "Materials science circular economy infographic diagram showing 5-stage life cycle of engineered spider silk biomaterials",
    imageCaption: "Figure 13.1: Circular Bioeconomy Life Cycle: 1. Renewable bio-feedstocks → 2. Precision fermentation → 3. Green microfluidic spinning → 4. High-performance application → 5. Controlled enzymatic biodegradation.",
    interactiveComponentId: "interactive-sustainability-lca",
    hotspots: [
      {
        id: "hs-13-1",
        x: 28,
        y: 28,
        title: "Stage 1: Renewable Feedstocks",
        description: "Uses agricultural sugarcane residues, corn glucose, or non-food cellulosic biomass.",
        detail: "Completely decouples high-strength textile synthesis from fossil crude oil extraction.",
        metric: "Petroleum-Free"
      },
      {
        id: "hs-13-2",
        x: 75,
        y: 42,
        title: "Stage 3: Green Microfluidic Spinning",
        description: "Uses mild aqueous buffers and closed-loop recyclable alcohols instead of boiling sulfuric acid.",
        detail: "Eliminates toxic chemical effluent streams typical of industrial aramid processing.",
        metric: "Closed-Loop Solvents"
      },
      {
        id: "hs-13-3",
        x: 25,
        y: 72,
        title: "Stage 5: Non-Toxic Bio-Assimilation",
        description: "Enzymatically digested by soil and marine bacteria into natural amino acids without microplastics.",
        detail: "Returns bio-available nitrogen and carbon directly into ecological nutrient cycles.",
        metric: "Zero Microplastics"
      }
    ],
    scientificPoints: [
      {
        title: "Decoupling from Petrochemical Hydrocarbons",
        description: "Conventional synthetic fibers (Kevlar, Nylon, Polyester) consume non-renewable petroleum feedstocks. Recombinant spidroin proteins utilize plant sugars and agricultural residues.",
        metric: "Petro-Free",
        metricContext: "Elimination of crude oil feedstocks"
      },
      {
        title: "Aqueous vs Toxic Organic Solvents",
        description: "Aramid manufacturing requires boiling concentrated sulfuric acid and hazardous NMP solvents. Spider silk spinning uses mild aqueous buffers with recyclable alcohol coagulation baths.",
        metric: "Green Solvents",
        metricContext: "Mild aqueous extrusion processing"
      },
      {
        title: "The Fermentation Energy Bottleneck",
        description: "A rigorous Life-Cycle Assessment (LCA) reveals that large-scale microbial fermentation requires significant electrical energy for bioreactor aeration, stirring, and steam sterilization.",
        metric: "Electricity Input",
        metricContext: "Bioreactor energy balance consideration"
      },
      {
        title: "End-of-Life Biodegradation & Circularity",
        description: "Unlike persistent microplastics, engineered silk fibers naturally break down into non-toxic amino acids under industrial composting or biological soil microbiomes.",
        metric: "Zero Microplastics",
        metricContext: "Natural enzymatic bio-assimilation"
      }
    ],
    engineeringSummary: "As conscientious engineers, we must not greenwash bio-synthetic materials. While recombinant spider silk eliminates petroleum extraction and harsh sulfuric acid wastes, industrial microbial fermentation demands substantial electrical energy and steam sterilization. A comprehensive cradle-to-grave Life Cycle Assessment (LCA) shows that the true sustainability of engineered fibers depends on powering bioreactors with renewable grid electricity and utilizing non-food agricultural waste feedstocks.",
    transitionText: "With such promising environmental and mechanical advantages, what is holding this technology back from immediate mass adoption? Section 14 delivers our reality check on engineering challenges.",
    presentation: {
      sectionNumber: 13,
      sectionTitle: "Circular Bioeconomy: Life-Cycle Analysis and Energy Realities",
      allocatedMinutes: 3,
      keyTakeaways: [
        "Replaces petroleum hydrocarbons with renewable agricultural feedstocks.",
        "Replaces boiling sulfuric acid with closed-loop aqueous buffers.",
        "Bioreactor fermentation requires substantial electricity, necessitating clean energy grids."
      ],
      technicalKeywords: ["Life-Cycle Assessment", "Circular Bioeconomy", "Closed-Loop Spinning", "Carbon Footprint"],
      visualFocus: "5-stage circular bioeconomy life cycle infographic."
    },
    citations: [CITATIONS[2], CITATIONS[8]]
  },
  {
    id: "sec-14",
    sectionNumber: 14,
    title: "CHALLENGES, LIMITATIONS AND THE FUTURE",
    subtitle: "Science Meets Reality: Three Horizons of Validation",
    category: "future",
    categoryLabel: "Commercialization & Scaling Bottlenecks",
    badgeColor: "amber",
    imageSrc: "/assets/images/future_materials_lab.jpg",
    imageAlt: "High-tech materials engineering research facility with automated spinning bobbins, tensile rigs, and quality control diagnostic monitors",
    imageCaption: "Figure 14.1: The Three Horizons of Biomaterials: Categorizing established biological facts, lab-scale engineering prototypes, and future commercial hurdles.",
    interactiveComponentId: "interactive-reality-check",
    hotspots: [
      {
        id: "hs-14-1",
        x: 35,
        y: 45,
        title: "Horizon 1: Nature's Evolutionary Proof",
        description: "Established science: 380 million years of proven high work-to-fracture and biocompatibility.",
        detail: "Provides the mathematical and physical inspiration; not a finished mass-production method.",
        metric: "Proven Science"
      },
      {
        id: "hs-14-2",
        x: 62,
        y: 52,
        title: "Horizon 2: Lab-Scale Prototype Production",
        description: "Recombinant fermentation yields hover around 5–15 g/L with microfluidic extrusion rigs.",
        detail: "Demonstrates technical feasibility; production costs remain significantly higher than mature aramids.",
        metric: "5–15 g/L Titer"
      },
      {
        id: "hs-14-3",
        x: 82,
        y: 35,
        title: "Horizon 3: Commercial Qualification Hurdles",
        description: "Requires multi-layer NIJ-0101.07 ballistic testing, FDA 510(k) clearances, and cost parity.",
        detail: "Initial commercial beachheads will be high-margin biomedical devices rather than bulk commodity textiles.",
        metric: "Validation Gateway"
      }
    ],
    scientificPoints: [
      {
        title: "Scale-Up & Fermentation Protein Yields",
        description: "Large repetitive spidroin proteins are difficult for host bacteria to synthesize, leading to genetic recombination errors and modest yields (~5–15 g/L).",
        metric: "5-15 g/L",
        metricContext: "Current recombinant protein titer"
      },
      {
        title: "High Production Cost Bottleneck",
        description: "While raw Kevlar costs roughly $30–$40 per kilogram, recombinant spider silk currently costs hundreds of dollars per kilogram, restricting initial applications to high-margin niches.",
        metric: "Cost Disparity",
        metricContext: "Commercial pricing vs mature synthetics"
      },
      {
        title: "Batch-to-Batch Structural Uniformity",
        description: "Maintaining identical molecular weight distributions, post-draw crystalline alignment, and knot consistency across metric tons of continuous fiber remains an open chemical engineering challenge.",
        metric: "Consistency",
        metricContext: "Industrial quality-control tolerance"
      },
      {
        title: "Three Horizons Framework",
        description: "1. What Nature Demonstrates (evolutionary facts) | 2. What Labs Have Built (working prototypes) | 3. What Still Requires Validation (commercial certification & scaling).",
        metric: "3 Horizons",
        metricContext: "Evidence-based readiness classification"
      }
    ],
    engineeringSummary: "Transforming a brilliant laboratory discovery into a mass-market commercial product is the ultimate engineering challenge. Recombinant spider silk faces three primary hurdles: genetic instability during large-scale fermentation, high unit costs compared to mature petroleum synthetics, and stringent regulatory qualification. Distinguishing between lab-scale proof-of-concept and certified mass production is essential for scientific integrity.",
    transitionText: "Having confronted these engineering challenges honestly, what is the ultimate vision for nature-inspired materials? Section 15 synthesizes the core takeaways.",
    presentation: {
      sectionNumber: 14,
      sectionTitle: "Industrial Bottlenecks, Cost Realities, and The Three Horizons",
      allocatedMinutes: 3,
      keyTakeaways: [
        "Repetitive spidroin genes limit bacterial expression yields to ~5–15 g/L.",
        "Production cost remains significantly higher than mature petrochemical aramids ($30–40/kg).",
        "The Three Horizons distinguish nature's proofs, lab prototypes, and unvalidated future goals."
      ],
      technicalKeywords: ["Fermentation Titer", "Unit Cost Parity", "Three Horizons", "Batch Uniformity"],
      visualFocus: "Industrial scalability bottlenecks and commercial readiness matrix."
    },
    citations: [CITATIONS[2], CITATIONS[3]]
  },
  {
    id: "sec-15",
    sectionNumber: 15,
    title: "THE FUTURE IS INSPIRED BY NATURE",
    subtitle: "Synthesis, Vision & The Next Generation of Engineers",
    category: "conclusion",
    categoryLabel: "Grand Synthesis & Exhibition Q&A",
    badgeColor: "cyan",
    imageSrc: "/assets/images/split_vest_suture.jpg",
    imageAlt: "Cinematic final visual showing a glowing golden spider silk strand splitting dynamically into protective woven mesh and surgical suture",
    imageCaption: "Figure 15.1: The Grand Synthesis: From the forest canopy to defense armor and operating rooms—responsible biomimicry uniting biology and engineering.",
    interactiveComponentId: "interactive-future-reveal",
    hotspots: [
      {
        id: "hs-15-1",
        x: 48,
        y: 48,
        title: "The Universal Molecular Motif",
        description: "Beta-sheet nanocrystals for strength + amorphous coils for energy dissipation.",
        detail: "Solves the fundamental trade-off between strength and toughness across defense and medicine.",
        metric: "β-Sheet + Coils"
      },
      {
        id: "hs-15-2",
        x: 25,
        y: 35,
        title: "Frontier 1: Ultra-Lightweight Defense Textiles",
        description: "Flexible, breathable protective armor reducing physical fatigue and saving lives.",
        detail: "High work-to-fracture energy absorption dissipating impact shockwaves.",
        metric: "Protective Textiles"
      },
      {
        id: "hs-15-3",
        x: 75,
        y: 65,
        title: "Frontier 2: Bioabsorbable Microsurgical Sutures",
        description: "Controlled enzymatic resorption into natural amino acids without secondary removal surgery.",
        detail: "Biocompatible scaffolds supporting nerve and vascular collagen healing.",
        metric: "Tissue Regeneration"
      }
    ],
    scientificPoints: [
      {
        title: "Nature as the Ultimate Engineering Textbook",
        description: "Evolutionary pressure has conducted 3.8 billion years of materials R&D, solving complex trade-offs between strength, extensibility, and environmental integration.",
        metric: "3.8 Billion Yrs",
        metricContext: "Evolutionary optimization timeline"
      },
      {
        title: "Two Frontiers, One Underlying Truth",
        description: "Whether arresting a projectile or knitting delicate living tissue, the secret is molecular architecture: beta-sheet nanocrystals providing strength and amorphous coils dissipating energy.",
        metric: "β-Sheet + Coils",
        metricContext: "The universal molecular motif"
      },
      {
        title: "Responsible Engineering Methodology",
        description: "True biomimicry does not blindly copy biology; it translates natural principles using rigorous synthetic biology, precision mechanics, and objective safety standards.",
        metric: "Integrity",
        metricContext: "Evidence-based engineering standard"
      },
      {
        title: "The Guiding Engineering Axiom",
        description: "The future of materials engineering may not begin with inventing something new—but with understanding something nature already does remarkably well.",
        metric: "Vision",
        metricContext: "Core philosophical project takeaway"
      }
    ],
    engineeringSummary: "As first-year engineering students, our study of spider-silk-inspired fibers demonstrates that the boundaries between mechanical engineering, biotechnology, materials science, and medicine are dissolving. By combining nature's proven nanoscale architecture with modern synthetic biology and precision manufacturing, our generation has the opportunity to design protective materials that save lives both on the frontlines of defense and in operating theatres worldwide.",
    transitionText: "Thank you for exploring our interactive digital science poster. The floor is now open for examination questions.",
    presentation: {
      sectionNumber: 15,
      sectionTitle: "The Grand Synthesis: Nature-Inspired Engineering & Vision",
      allocatedMinutes: 3,
      keyTakeaways: [
        "Unites mechanical engineering, chemical engineering, and biotechnology into one framework.",
        "Beta-sheet nanocrystals (strength) + amorphous coils (energy dissipation) is the universal secret.",
        "Guiding Axiom: The future of materials engineering begins with understanding what nature already does remarkably well."
      ],
      technicalKeywords: ["Multidisciplinary", "Biomimicry", "Energy Dissipation", "Regenerative Medicine"],
      visualFocus: "Grand synthesis visual uniting defense armor and surgical suture threads."
    },
    citations: [CITATIONS[0], CITATIONS[1], CITATIONS[4], CITATIONS[5]]
  }
];
