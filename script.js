console.log('JS LOADED v10');

// ===== TAB SWITCHING FUNCTIONALITY =====
document.addEventListener('DOMContentLoaded', function() {
    initializeTabs();
    initializeTeam();
    initializeProjects();
    initializeCollaborators();
    initializeVideos();
});

function initializeTabs() {
    const tabLinks = document.querySelectorAll('.tab-link');
    const tabContents = document.querySelectorAll('.tab-content');

    tabLinks.forEach(tab => {
        tab.addEventListener('click', function(e) {
            e.preventDefault();
            const tabId = this.getAttribute('data-tab');

            // Remove active class from all tabs and contents
            tabLinks.forEach(t => t.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));

            // Add active class to current tab and content
            this.classList.add('active');
            document.getElementById(tabId).classList.add('active');

            // Load publications if needed
            if (tabId === 'publications') {
                loadPublications();
            }
        });
    });
}
// ===== VIDEO DATA =====
const videoData = [
    {
        title: "Cases of application of AI in science",
        preview: "assets/videos/sber.video.png",
        url: "https://vk.com/video-212217448_456240008",
        description: "29.10 // 16:20 (Moscow time). Cases of AI application in science. Alexander Kvashnin: AI in materials science.",
        duration: "02:00:31",
        date: "October 29, 2025",
        source: "VK Video"
    },
    {
        title: "Alexander Kvashnin about superhard materials",
        preview: "assets/videos/nauka.rf.video.png",
        url: "https://vk.com/video-215364149_456240011",
        description: "Alexander Kvashnin discusses the role of platinum, rhodium and palladium in science and industry.",
        duration: "53:29",
        date: "March 22, 2025",
        source: "VK Video"
    },
    {
        title: "Science for Everyone – Kvashnin episode",
        preview: "assets/videos/nauka.vse.png",
        url: "https://rutube.ru/video/2046a38aa1db5eb4bbb4c765150f9570/",
        description: "Episode about programmable materials and invisibility cloak concepts.",
        duration: "30:59",
        date: "November 05, 2024",
        source: "Rutube"
    },
    {
        title: "The loud voice of Russian Science – Zaryadye",
        preview: "assets/videos/zariadye.png",
        url: "https://vkvideo.ru/video-152260072_456245412?t=2h9m7s",
        description: "Popular science lecture at Zaryadye.",
        duration: "--:--",
        date: "February 08, 2024",
        source: "VK Video"
    },
    {
        title: "Almanac '16 ways to change the world'",
        preview: "assets/videos/16.png",
        url: "https://vkvideo.ru/video-91851618_456239316?t=9m25s",
        description: "Short film about our investigations.",
        duration: "--:--",
        date: "February 16, 2024",
        source: "VK Video"
    },
    {
        title: "Aleksandra Radina. Serendipity — the Catalyst of Science.",
        preview: "assets/videos/preview_aleksandra_radina_video.png",
        url: "https://vkvideo.ru/video-220903431_456239237?list=f45c2b105738f3a17e&t=2m53s",
        description: "A talk by a student of our laboratory about catalyst design.",
        duration: "--:--",
        date: "December 17, 2024",
        source: "VK Video"
    }
];


// ===== TEAM DATA =====
const teamData = [
  {
    id: 1,
    name: "Alexander Kvashnin",
    position: "Principal Investigator",
    bio: "Prof. Alexander Kvashnin holds the position of Full Professor at the Skolkovo Institute of Science and Technology. Prof. Kvashnin is a renowned researcher with over 15 years of experience in the field of computational materials science. His work focuses on applications of modern methods of computational materials science and artificial intelligence to complex problems.",
    website: "https://scholar.google.com/citations?user=6x6tbTYAAAAJ&hl=en",
    photo: "assets/team/Kvashnin.PNG"
  },
  {
    id: 2,
    name: "Ilia Chepkasov",
    position: "Senior Research Scientist",
    bio: "Dr. Chepkasov specializes in computational methods and data analysis. He has published numerous papers in top-tier journals.",
    website: "https://scholar.google.com/citations?user=uld736gAAAAJ&hl=ru",
    photo: "assets/team/Chepkasov.jpg"
  },
  {
    id: 3,
    name: "Viktor S. Baidyshev",
    position: "Research Scientist",
    bio: "Dr. Baidyshev specializes in computational methods and data analysis. He has published numerous papers in top-tier journals.",
    website: "https://scholar.google.com/citations?user=Ludi0DIAAAAJ&hl=ru",
    photo: "assets/team/Baidyshev.jpg"
  },
  {
    id: 4,
    name: "Faridun Jalolov",
    position: "PhD Student",
    bio: "Faridun Jalolov became a PhD student at the Skolkovo Institute of Science and Technology in 2022. His work focuses on studying the mechanical properties of complex materials using machine-learning-driven methods.",
    website: "https://scholar.google.com/citations?user=a03dBGcAAAAJ&hl=ru",
    photo: "assets/team/Jalolov.jpg"
  },
  {
    id: 5,
    name: "Michel Lukanov",
    position: "PhD Student",
    bio: "Mikhail Lukanov holds a master's degree in chemistry with a specialization in theoretical and experimental chemistry. His work focuses on quantum-mechanical methods and machine learning for molecular systems.",
    website: "https://scholar.google.com/citations?user=J0-7stAAAAAJ&hl=ru&oi=ru",
    photo: "assets/team/Lukanov.jpg"
  },
  {
    id: 6,
    name: "Khasan Akhmadiev",
    position: "PhD Student",
    bio: "Young scientist focusing on materials design using machine learning and AI; experience with low-dimensional materials (carbon nanotubes, graphene, diamane).",
    website: "https://scholar.google.com/citations?user=NaPKRbwAAAAJ&hl=ru",
    photo: "assets/team/Akhmadiev.jpg"
  },
  {
    id: 7,
    name: "Aleksandra Radina",
    position: "PhD Student",
    bio: "Studying the catalytic processes, dreams to make a new effective catalyst. Also involved in projects devoted to the studies of the chemical bonding changes in thermoelectrics, phase transitions and properties of the 2D materials.",
    website: "https://scholar.google.com/citations?user=iymrPcMAAAAJ&hl=ru",
    photo: "assets/team/Radina.jpg"
  },
  {
    id: 8,
    name: "Anastasiia Iosimovska",
    position: "MSc Student",
    bio: "Anastasiia is a Master's student at the Skolkovo Institute of Science and Technology. Her research focuses on computational modeling of catalytic nanomaterials. She holds a Bachelor's degree in Chemistry from Lomonosov Moscow State University (MSU).",
    website: "https://scholar.google.com/citations?hl=ru&user=Qqe_yZQAAAAJ",
    photo: "assets/team/Iosimovska.jpg"
  },
  {
    id: 9,
    name: "Olga Pushkova",
    position: "MSc Student",
    bio: "Olga Pushkova is a 2st year graduate student at the Skolkovo Institute of Science and Technology, specializing in Applied Computational Mechanics. In 2024, she completed her bachelor's degree at NUST MISIS. Currently, he works in the industrial-oriented materials search group at Skoltech. Research area: prediction of the catalytic properties of nanoclusters using ML, investigation of the characteristics of catalytic materials by the SISSO method.",
    website: "",
    photo: "assets/team/Pushkova.jpg"
  },
  {
    id: 10,
    name: "Daria Fedotova",
    position: "MSc Student",
    bio: "During her Bachelor's studies at Mendeleev University, Daria focused on the surface reconstruction and surface chemistry of (111)-SiC, employing Molecular Dynamics simulations with the USPEX algorithm and DFT calculations. Currently, she is a first-year Master's student in Materials Science at Skoltech.",
    website: "",
    photo: "assets/team/Fedotova.jpg"
  },
  {
    id: 11,
    name: "Daniil Alekseev",
    position: "MSc Student",
    bio: "",
    website: "",
    photo: "assets/team/Alekseev.jpg"
  },
  {
    id: 12,
    name: "Grigory Bychkov",
    position: "MSc Student",
    bio: "",
    website: "",
    photo: "assets/team/Gr.jpg"
  }
];

// ===== PROJECTS DATA =====
const projectsData = [
  {
    id: 1,
    name: "Higher tungsten boride",
    description: "",
    publications: [
      {
        title: "New Tungsten Borides, Their Stability and Outstanding Mechanical Properties",
        abstract: "Predicted new tungsten borides with wide stability ranges. WB<sub>5</sub> is superhard (≈45 GPa) and tough (~4 MPa·m<sup>0.5</sup>), retaining performance at high temperatures.",
        pdfUrl: "assets/pdfs/Higher_Tungtsen_Boride/2018_new_tungtsen_borides.pdf",
        image: ""
      },
      {
        title: "WB<sub>5−x</sub>: Synthesis, Properties, and Crystal Structure — New Insights into the Long-Debated Compound",
        abstract: "Experiment + DFT resolve disordered WB<sub>5−x</sub> (not 'WB<sub>4</sub>'). Models (e.g., WB<sub>4.18</sub>) match XRD and are energetically favored; excellent mechanical properties and scalable synthesis.",
        pdfUrl: "assets/pdfs/Higher_Tungtsen_Boride/2020_wb5x.pdf",
        image: ""
      },
      {
        title: "Efficient Synthesis of WB<sub>5−x</sub>–WB<sub>2</sub> Powders with Selectivity for WB<sub>5−x</sub> Content",
        abstract: "Vacuumless DC arc discharge enables efficient WB<sub>5−x</sub> synthesis. Optimal parameters yield ~61.5% WB<sub>5−x</sub> by volume; nanoparticles mostly ≤100 nm. Low-cost route without vacuum systems.",
        pdfUrl: "assets/pdfs/Higher_Tungtsen_Boride/2021_synthesis_wb5x.pdf",
        image: ""
      },
      {
        title: "Photocatalytic H<sub>2</sub> Generation and CO<sub>2</sub> Reduction by WB<sub>5−x</sub> Cocatalyst of TiO<sub>2</sub> Catalyst",
        abstract: "WB<sub>5−x</sub>–WB<sub>2</sub>/TiO<sub>2</sub> composites greatly enhance TiO<sub>2</sub> activity: up to ×23 in H<sub>2</sub> evolution and ×4 in CO<sub>2</sub> reduction under 410 nm. DFT supports observed efficiency gains.",
        pdfUrl: "assets/pdfs/Higher_Tungtsen_Boride/2024_photocatalytic_h2_generation.pdf",
        image: ""
      },
      {
        title: "Theoretical Study of Adsorption and CO Oxidation on Higher Tungsten Boride Surfaces",
        abstract: "DFT shows WB<sub>5−x</sub> surfaces exhibit favorable adsorption and low CO-oxidation barriers. Wulff shape predicts exposed (010)/(101) facets; broad gas adsorption suggests catalytic potential.",
        pdfUrl: "assets/pdfs/Higher_Tungtsen_Boride/2024_scientific_reports.pdf",
        image: ""
      },
      {
        title: "Discovery of Chemically Modified Higher Tungsten Boride by a Hybrid GNN/DFT Approach",
        abstract: "GNN (trained on ~200 DFT entries) screens >375k structures; Ta substitution broadens stability and boosts hardness. Vacuumless arc synthesis and Vickers tests validate predictions.",
        pdfUrl: "assets/pdfs/Higher_Tungtsen_Boride/2025_discovery_of_chemically.pdf",
        image: ""
      }
    ]
  },
  {
    id: 2,
    name: "High-entropy materials",
    description: "",
    publications: [
      {
        title: "Machine Learning-Driven Synthesis of TiZrNbHfTaC<sub>5</sub> High-Entropy Carbide",
        abstract: "CMC with ML potentials maps temperatures yielding single-phase vs multi-phase HEC. Arc discharge at ~2000 K gives single-phase TiZrNbHfTaC<sub>5</sub>; below ~1200 K phase separation occurs.",
        pdfUrl: "assets/pdfs/High_Entropy_Materials/2023_ml.pdf",
        image: ""
      },
      {
        title: "Melting Simulations of High-Entropy Carbonitrides by Deep Learning Potentials",
        abstract: "DNN potential predicts melting in (TiZrTaHfNb)C<sub>x</sub>N<sub>1−x</sub>. Melting temperature increases with N, peaking near 25% N (≈3580±30 K) due to structural/entropy effects in the liquid.",
        pdfUrl: "assets/pdfs/High_Entropy_Materials/2024_scirep_28678.pdf",
        image: ""
      },
      {
        title: "Synthesis of High-Entropy Ti–Zr–Nb–Hf–Ta Carbides and Carbonitrides in a High-Speed Arc Plasma Jet",
        abstract: "One-step plasma method produces single-crystal HE carbides and carbonitrides (N up to ~8 wt%). Ab initio + ML guide composition; process works with metals or oxides as precursors.",
        pdfUrl: "assets/pdfs/High_Entropy_Materials/2025_jalcom_177178.pdf",
        image: ""
      },
     {
        title: "High-entropy Ti-Zr-Nb-Hf-Ta carbide and carbonitride coatings fabricated by high-speed arc discharge plasma jet",
        abstract: "We develop and demonstrate a new method for preparing high-entropy carbide and carbonitride coatings of IV-V transition metal compounds, using (TiZrNbHfTa)CxNy as an example.",
        pdfUrl: "assets/pdfs/High_Entropy_Materials/2026_HECN.pdf",
        image: ""
      }

    ]
  },
  {
    id: 3,
    name: "Functional materials",
    description: "",
    publications: [
      {
        title: "Computational Search for New W–Mo–B Compounds",
        abstract: "Evolutionary prediction identified five stable W–Mo–B ternaries and composition–temperature phase diagrams; links between electronic structure, crystal structure, composition, and mechanical properties were established.",
        pdfUrl: "assets/pdfs/Functional_Materials/2020_comp_search.pdf",
        image: ""
      },
      {
        title: "Computational Modeling of 2D Materials under High Pressure and Their Chemical Bonding: Silicene as Possible Field-Effect Transistor",
        abstract: "Ab initio analysis shows pressure and anisotropic stress alter silicene hybridization; results indicate feasibility of silicene-based FET pressure sensing and a general approach to study stressed 2D materials.",
        pdfUrl: "assets/pdfs/Functional_Materials/2021_tantardini.pdf",
        image: ""
      },
      {
        title: "Large-Scale Synthesis and Applications of Hafnium–Tantalum Carbides",
        abstract: "Evolutionary search + plasma-dynamic synthesis enable selective HfTaC coatings with controlled stoichiometry and properties; a route toward broader families of functional and high-entropy carbides.",
        pdfUrl: "assets/pdfs/Functional_Materials/2022_large_scale.pdf",
        image: ""
      },
      {
        title: "Synthesis and Characterization of Niobium Carbide Thin Films on Diamond Surface for Superconductive Application",
        abstract: "Few-nanometer NbC films on diamond exhibit superconductivity up to ~12.4 K (record for NbC); DFT supports stability and potential for sensitive superconductive detectors.",
        pdfUrl: "assets/pdfs/Functional_Materials/2024_NbC_site.pdf",
        image: ""
      },
              {
        title: "Polyaromatic Hydrocarbons as Prospective Anode Materials for Metal-Ion Batteries",
        abstract: "First-principles show intercalated PAH crystals (e.g., pentacene) sustain low volume change and can exceed graphite capacity (~1.2–1.3× with Li/Na/K/Rb; ~2.3–2.6× with Mg/Ca).",
        pdfUrl: "assets/pdfs/High_Entropy_Materials/2025_jes.pdf",
        image: ""
      },
      {
        title: "Vacuum-free arc synthesis and characterization of crystalline molybdenum borides as instrumental material",
        abstract: "Crystalline molybdenum borides were synthesized for the first time via DC arc discharge in ambient air. By varying current, arc duration, and Mo:B ratio, multiple phases including MoB, Mo₂B, MoB₂, MoB₃, and MoB<sub>5−x</sub> were obtained. XRD data analyzed with a CNN confirmed phase compositions. Optimal conditions (200 A, 40 s, Mo:B = 1:17) yielded ~70 wt% MoB<sub>5−x</sub>, providing a fast, low-cost route to high-performance boride ceramics.",
        pdfUrl: "assets/pdfs/Functional_Materials/2025_vacuum_free_arc.pdf",
        image: ""
      },
      {
        title: "Tuning of Mechanical Properties of Doped PbTe-Based Thermoelectric Materials Driven by Intrinsic Defects",
        abstract: "DFT+COHP and DNN potentials reveal how dopants and intrinsic defects control brittleness and elasticity in PbTe; guidelines for tailoring mechanical properties are proposed.",
        pdfUrl: "assets/pdfs/Functional_Materials/2025_tuning_of_mechanical.pdf",
        image: ""
      }
    ]
  },
  {
    id: 4,
    name: "Catalysts",
    description: "",
    publications: [
      {
        title: "Cu–Au Nanoparticles Produced by Aggregation of Gas-Phase Metal Atoms for CO Oxidation",
        abstract: "MD of PVD synthesis yields non-equilibrium Cu–Au nanoparticles with size- and time-dependent composition. DFT shows CO-oxidation activity depends on local structure (fcc/icosahedral/amorphous) and is not simply tied to d-band centers.",
        pdfUrl: "assets/pdfs/Catalyst/2022_aggregate.pdf",
        image: ""
      },
      {
        title: "Structure-Driven Tuning of O and CO Adsorption on AuCu Nanoparticles: A DFT Study",
        abstract: "For ~2 nm Au–Cu (core–shell vs alloy; fcc/icosahedral/amorphous), adjusting the core–shell ratio precisely controls O/CO adsorption energies, especially for fcc; alloys cannot reach equivalently narrow ranges.",
        pdfUrl: "assets/pdfs/Catalyst/2023_structure_driven_tuning.pdf",
        image: ""
      },
      {
        title: "Structure-Driven Tuning of Catalytic Properties of Core–Shell Nanostructures",
        abstract: "Review of recent progress showing how core–shell architectures and theory (incl. DFT) enable structural control of catalytic performance; promising directions and materials are outlined.",
        pdfUrl: "assets/pdfs/Catalyst/2024_nanoscale.pdf",
        image: ""
      },
      {
        title: "Adsorption Properties of Crystalline and Amorphous PdIr Nanoparticles: A Systematic First-Principles Study",
        abstract: "For Pd–Ir (core–shell and alloy; 79/321 atoms; fcc and amorphous), tuning core–shell ratios narrows adsorption-energy spreads in fcc particles; amorphous particles show wide variability due to many nonequivalent sites.",
        pdfUrl: "assets/pdfs/Catalyst/2025_journal_of_catalysis.pdf",
        image: ""
      },
      {
        title: "Tuning the Surface Properties of AuPd Nanoparticles for Adsorption of O and CO",
        abstract: "Ab initio results link surface charge redistribution and d-band centers to O/CO adsorption in Au–Pd; varying structure and composition (core–shell vs alloy; fcc/icosahedral) enables targeted tuning.",
        pdfUrl: "assets/pdfs/Catalyst/2023_PCCP_AuPd.pdf",
        image: ""
      },
      {
        title: "Boosting the Performance of Pt/C Catalysts via Nitrogen-Doped Carbon Support: Insights from Structural and Electrochemical Characterization",
        abstract: "This study demonstrates a rapid melamine-assisted N-doping method for conductive carbon black (Ketjenblack EC600JD). Density functional theory (DFT) calculations highlight the critical role of pyridinic-N defects in stabilizing atomic Pt, enhancing activity via charge transfer, and improving stability via strong Pt anchoring.",
        pdfUrl: "assets/pdfs/Catalyst/2025_Small.pdf",
        image: ""
      }
    ]
  },
  {
    id: 5,
    name: "New computational methods",
    description: "",
    publications: [
      {
        title: "Nanohardness from First Principles with Active Learning on Atomic Environments",
        abstract: "On-the-fly ML potentials coupled to QM enable nanoindentation simulations and nanohardness prediction across materials (e.g., diamond, AlN, SiC, BC<sub>2</sub>N, Si), matching experimental/macroscopic trends.",
        pdfUrl: "assets/pdfs/New_Computational_Methods/2021_podryabinkin.pdf",
        image: ""
      },
      {
        title: "GIPAW Pseudopotentials of d Elements for Solid-State NMR",
        abstract: "Developed GIPAW-capable pseudopotentials for 21 d-elements and validated chemical shifts/quadrupolar couplings on oxides/nitrides. Foundations for ML-aided NMR structure analysis.",
        pdfUrl: "assets/pdfs/New_Computational_Methods/2022_tantardini.pdf",
        image: ""
      },
      {
        title: "Generating and Grading 34 Optimised Norm-Conserving Vanderbilt Pseudopotentials for Actinides and Super-Heavy Elements in the PseudoDojo",
        abstract: "Released scalar/fully-relativistic ONCV pseudopotentials (PBE/PBEsol/LDA) for 34 elements; validated vs all-electron ZORA using Δ-gauges; available in psp8/UPF2 formats.",
        pdfUrl: "assets/pdfs/New_Computational_Methods/2023_tantardini.pdf",
        image: ""
      },
      {
        title: "Melting Simulations of High-Entropy Carbonitrides by Deep Learning Potentials",
        abstract: "New procedure of training DNN potential is proposed and used to predict melting behavior in (TiZrTaHfNb)C<sub>x</sub>N<sub>1−x</sub>; peak T<sub>m</sub> near 25% N (~3580±30 K) is bserved and comprehensively analyzed.",
        pdfUrl: "assets/pdfs/New_Computational_Methods/2024_baidyshev.pdf",
        image: ""
      },
      {
        title: "Physically Intuitive Anisotropic Model of Hardness",
        abstract: "New model of hardness is proposed based on shear/bulk moduli and their spatial variation; model accounts for anisotropy and temperature via EoS-derived parameters; quantities accessible from DFT or experiment.",
        pdfUrl: "assets/pdfs/New_Computational_Methods/2024_jalolov.pdf",
        image: ""
      },
      {
        title: "Mechanical Properties of Single and Polycrystalline Solids from Machine Learning",
        abstract: "Active-learning MLIPs on local fragments enable accurate, affordable elasticity for complex polycrystals/composites; demonstrated on polycrystalline diamond with grain-size dependence.",
        pdfUrl: "assets/pdfs/New_Computational_Methods/2024_jalolov_mechanical_properties_of_single.pdf",
        image: ""
      },
      {
        title: "Material Hardness Descriptor Derived by Symbolic Regression",
        abstract: "SISSO uncovers compact descriptor for Vickers hardness using bulk/shear moduli and Poisson's ratio; screens 635 compounds, highlighting routes to harder materials via metastable mixing.",
        pdfUrl: "assets/pdfs/New_Computational_Methods/2024_tantardini.pdf",
        image: ""
      }
    ]
  }
];

// ===== COLLABORATORS DATA =====
const collaboratorsData = [
  {
    id: 1,
    name: "Ekaterina Kozlova",
    position: "Professor of RAS, DSc in Physics and Mathematics",
    affiliation: "Boreskov Institute of Catalysis",
    website: "https://scholar.google.com/citations?user=ADaJ2iIAAAAJ&hl=en"
  },
  {
    id: 2,
    name: "Alexander Pak",
    position: "DSc in Technical Science, Head of the Energy of the Future strategic project",
    affiliation: "National Research Tomsk Polytechnic University",
    website: "https://scholar.google.com/citations?user=lyLIYDoAAAAJ&hl=ru"
  },
  {
    id: 3,
    name: "Anastasia Alekseenko",
    position: "PhD in Chemical Sciences",
    affiliation: "Southern Federal University",
    website: "https://scholar.google.com/citations?user=078eav0AAAAJ&hl=en"
  },
  {
    id: 4,
    name: "Jian Sun",
    position: "Professor of Physics",
    affiliation: "National Laboratory of Solid State Microstructures, Nanjing University",
    website: "https://scholar.google.com/citations?user=nYzR4oAAAAAJ&hl=en"
  },
  {
    id: 5,
    name: "Dmitrii Semenok",
    position: "PhD in Materials Science",
    affiliation: "Center for High Pressure Science & Technology Advanced Research, Beijing, China",
    website: "https://scholar.google.com/citations?user=ZDUeitwAAAAJ&hl=en"
  },
  {
    id: 6,
    name: "Dmitry Kvashnin",
    position: "DSc in Physics and Mathematics, Head of the Center for Computer Modeling of Inorganic and Composite Nanoscale Materials",
    affiliation: "Emanuel Institute of Biochemical Physics, RAS",
    website: "https://scholar.google.ru/citations?user=iD1tun0AAAAJ"
  },
  {
    id: 7,
    name: "Christian Tantardini",
    position: "PhD in Materials Science, Research Scientist III (Assistant Professor)",
    affiliation: "Center for Integrative Petroleum Research",
    website: "https://scholar.google.com/citations?hl=en&user=QCZdlUQAAAAJ"
  },
  {
    id: 8,
    name: "Alexander Shapeev",
    position: "PhD, Head of Laboratory of Artificial Intelligence for Materials Design",
    affiliation: "Skolkovo Institute of Science and Technology",
    website: "https://scholar.google.com/citations?user=NMyIbIwAAAAJ&hl=en"
  },
  {
    id: 9,
    name: "Boris Yakobson",
    position: "Professor of Materials Science & NanoEngineering, and of Chemistry",
    affiliation: "Rice University",
    website: "https://scholar.google.com/citations?user=OYtx5csAAAAJ&hl=en"
  },
  {
    id: 10,
    name: "Hayk Zakaryan",
    position: "PhD in Materials Science",
    affiliation: "Computational Materials Science Lab, Yerevan State University",
    website: "https://scholar.google.com/citations?user=j4e2qYUAAAAJ&hl=ru"
  },
    {
        id: 11,
        name: "Stanislav Evlashin",
        position: "DSc in Physics and Mathematics, Assistant Professor in the Center for Materials Technologies",
        affiliation: " Skolkovo Institute of Science and Technology",
        website: "https://scholar.google.com/citations?user=-MlPGEwAAAAJ&hl=ru"
    },
    {
        id: 12,
        name: "Sergey Kozlov",
        position: "PhD in Chemistry, Assistant Professor in the Department of Chemical and Biomolecular Engineering",
        affiliation: "National University of Singapore",
        website: "https://scholar.google.com/citations?user=vZCaqdkAAAAJ"
    }
];

// ===== TEAM FUNCTIONS =====
function initializeTeam() {
    const teamGrid = document.querySelector('.team-grid');
    if (!teamGrid) return;
    
    teamGrid.innerHTML = '';
    teamData.forEach(member => {
        const el = document.createElement('div');
        el.className = 'team-member';
        el.innerHTML = `
            <div class="member-photo">
                <img src="${member.photo}" alt="${member.name}" onerror="this.style.display='none'">
            </div>
            <h3>${member.name}</h3>
            <p>${member.position}</p>
        `;
        el.addEventListener('click', () => openTeamModal(member));
        teamGrid.appendChild(el);
    });
}

function openTeamModal(member) {
    const modal = document.getElementById('teamModal');
    const body = modal.querySelector('.modal-body');
    if (!modal || !body) return;
    
    body.innerHTML = `
        <div class="modal-team-member">
            <div class="modal-photo">
                <img src="${member.photo}" alt="${member.name}" onerror="this.style.display='none'">
            </div>
            <div class="modal-info">
                <h2>${member.name}</h2>
                <p><strong>Position:</strong> ${member.position}</p>
                <p><strong>Bio:</strong> ${member.bio}</p>
                ${member.website ? `<a href="${member.website}" target="_blank" class="download-btn">Visit Personal Website</a>` : ''}
            </div>
        </div>
    `;
    modal.style.display = 'block';
}

// ===== PROJECTS FUNCTIONS =====
function initializeProjects() {
    updateProjectTabs();
    if (projectsData.length > 0) showProject(projectsData[0].id);
}

function updateProjectTabs() {
    const projectTabs = document.querySelector('.project-tabs');
    if (!projectTabs) return;
    
    projectTabs.innerHTML = '';
    projectsData.forEach(project => {
        const tab = document.createElement('button');
        tab.className = 'project-tab';
        tab.textContent = project.name;
        tab.setAttribute('data-id', project.id);
        tab.addEventListener('click', () => showProject(project.id));
        projectTabs.appendChild(tab);
    });
    if (projectTabs.firstChild) projectTabs.firstChild.classList.add('active');
}

function showProject(projectId) {
    const project = projectsData.find(p => p.id === projectId);
    const projectContent = document.querySelector('.project-content');
    if (!project || !projectContent) return;

    document.querySelectorAll('.project-tab').forEach(tab => {
        tab.classList.toggle('active', tab.getAttribute('data-id') === String(projectId));
    });

    const sortedPubs = sortPublicationsDescByYear(project.publications);

    projectContent.innerHTML = `
        <div class="project-details active">
            <h2>${project.name}</h2>
            ${project.description ? `<p>${project.description}</p>` : ''}
            ${renderPublications(sortedPubs)}
        </div>
    `;
}

function getYearFromPdfUrl(url) {
    const file = url.split('/').pop() || '';
    const m = file.match(/^(\d{4})/);
    return m ? parseInt(m[1], 10) : 0;
}

function sortPublicationsDescByYear(list) {
    return [...(list || [])].sort((a, b) => {
        const ya = getYearFromPdfUrl(a.pdfUrl || '');
        const yb = getYearFromPdfUrl(b.pdfUrl || '');
        if (yb !== ya) return yb - ya;
        return (b.title || '').localeCompare(a.title || '');
    });
}

function renderPublications(list) {
    if (!list || !list.length) {
        return `<p>No publications yet.</p>`;
    }
    return `
        <div class="publications-grid">
            ${list.map(pub => `
                <div class="pub-card">
                    <div class="pub-thumb">
                        ${pub.image ? `<img src="${pub.image}" alt="thumbnail" onerror="this.style.display='none'">` : `<div class="thumb-placeholder"></div>`}
                    </div>
                    <div class="pub-info">
                        <h4 class="pub-title">${pub.title}</h4>
                        ${pub.abstract ? `<p class="pub-abstract">${pub.abstract}</p>` : ''}
                        <a class="download-btn" href="${pub.pdfUrl}" target="_blank" rel="noopener" download>pdf</a>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
}

// ===== COLLABORATORS FUNCTIONS =====
function initializeCollaborators() {
  const collaboratorsGrid = document.querySelector('.collaborators-grid');
  if (!collaboratorsGrid) return;

  collaboratorsGrid.innerHTML = '';
  collaboratorsData.forEach(person => {
    const el = document.createElement('div');
    el.className = 'collaborator-card';
    el.innerHTML = `
      <h3>${person.name}</h3>
      <p><strong>${person.position}</strong></p>
      <p>${person.affiliation}</p>
      <a href="${person.website}" target="_blank" class="collaborator-link">Google Scholar</a>
    `;
    collaboratorsGrid.appendChild(el);
  });
}

// ===== PUBLICATIONS FUNCTIONS =====
async function loadPublications() {
    const publicationsList = document.querySelector('.publications-list');
    if (!publicationsList) return;
    
    publicationsList.innerHTML = '<p>Loading publications...</p>';
    try {
        const publications = await simulateGoogleScholarFetch();
        publicationsList.innerHTML = '';
        publications.forEach(pub => {
            const el = document.createElement('div');
            el.className = 'publication-item';
            el.innerHTML = `
                <h3>${pub.title}</h3>
                <p><strong>Authors:</strong> ${pub.authors}</p>
                <p><strong>Journal:</strong> ${pub.journal}</p>
                <p><strong>Year:</strong> ${pub.year}</p>
                <a href="${pub.url}" target="_blank">View Publication</a>
            `;
            publicationsList.appendChild(el);
        });
    } catch {
        publicationsList.innerHTML = '<p>Error loading publications. Please try again later.</p>';
    }
}

function simulateGoogleScholarFetch() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                { title: "Boosting the Performance of Pt/C Catalysts via Nitrogen-Doped Carbon Support: Insights from Structural and Electrochemical Characterization", authors: "Yu.A. Bayan, E.R. Beskopylny, E.U. Gerasimov, E.E. Aydakov, K.K. Volik, I.V. Pankov, I.V. Chepkasov, M.M. Lukanov, A.G. Kvashnin, A.A. Alekseenko", journal: "Small", year: "2025", url: "/assets/pdfs/Catalyst/2025_Small.pdf" },
                { title: "Vacuum-free arc synthesis and characterization of crystalline molybdenum borides as instrumental material", authors: "Yu. Vassilyeva, Yu. Neklya, M. Lukanov, A. Kvashnin, A. Pak", journal: "Thermal Science and Engineering Progress", year: "2025", url: "/assets/pdfs/Functional_Materials/2025_vacuum_free_arc.pdf" },
                { title: "Charge density waves and structural phase transition in the high-𝑇𝑐 superconducting LaH10 quantum crystal", authors: "C. Tantardini, A.G. Kvashnin, M. Giantomassi, M. Iliaš, B.I. Yakobson, R.J. Hemley, X. Gonze", journal: "Physical Review B", year: "2025", url: "#" },
                { title: "Encapsulated Nickel Nanowires Inside Plasma-treated Single-Walled Carbon Nanotubes for Urea Oxidation", authors: "A.R. Vildanova, A.E. Goldt, S.V. Porokhin, A.G. Kvashnin, V.S. Baidyshev, I.V. Chepkasov, F.S. Fedorov, K.A. Litvintseva, A.V. Lalov, V.A. Dmitrieva, M.M. Tepliakova, A.G. Nasibulin", journal: "Small", year: "2025", url: "#" },
                { title: "Designing high-efficiency cryogenic regenerators: The role of microstructure and geometry in magnetocaloric cooling", authors: "D.Yu. Karpenkov, R.A. Makarin, C. Tantardini, A.G. Kvashnin, A.Yu. Karpenkov, E.V. Argunov, T.A. Sviridova, T.B. Shapaeva, M.V. Zheleznyi", journal: "Journal of Alloys and Compounds", year: "2025", url: "#" },
                { title: "Tuning of Mechanical Properties of doped PbTe-based Thermoelectric Material Driven by Intrinsic Defects", authors: "I.V. Chepkasov, A.D. Radina, V.S. Baidyshev, M. Polovinkin, N. Rybin, A. Shapeev, A.A. Krikorov, A.R. Oganov, Z. Dashevsky, D.G. Kvashnin, A.G. Kvashnin", journal: "Journal of Materials Chemistry A", year: "2025", url: "/assets/pdfs/Functional_Materials/2025_tuning_of_mechanical.pdf" },
                { title: "SbIV, an Unusual Player in 2D Spintronic Devices", authors: "C. Tantardini, M. Azizi, T. Altalhi, A.G. Kvashnin, A. Filippetti, C. Gatti, B.I. Yakobson, X. Gonze", journal: "ACS Nano", year: "2025", url: "#" },
                { title: "Discovery of chemically modified higher tungsten boride by means of hybrid GNN/DFT approach", authors: "N.A. Matsokin, R.A. Eremin, A.A. Kuznetsova, I.S. Humonen, A.V. Krautsou, V.D. Lazarev, Y.Z. Vassilyeva, A.Ya. Pak, S.A. Budennyy, A.G. Kvashnin, A.A. Osiptsov", journal: "npj Computational Materials", year: "2025", url: "/assets/pdfs/Functional_Materials/2025_discovery_of_chemically.pdf" },
                { title: "Polyaromatic hydrocarbons as prospective anode materials for metal ion battery", authors: "I.V Chepkasov, V.S Baidyshev, A.G Kvashnin", journal: "Journal of Energy Storage", year: "2025", url: "#" },
                { title: "Adsorption properties of crystalline and amorphous PdIr nanoparticles. A systematic first-principles study", authors: "I.V. Chepkasov, V.S. Baidyshev, A.V. Iosimovska, I.S. Zamulin, A.G. Kvashnin", journal: "Journal of Catalysis", year: "2025", url: "#" },
                { title: "Synthesis of high-entropy Ti-Zr-Nb-Hf-Ta carbides and carbonitrides in high-speed arc discharge plasma jet", authors: "D.S. Nikitin, I.I. Shanenkov, A.R. Nassyrbayev, A.A. Sivkov, V.S. Baidyshev, Yu.A. Kvashnina, N.A. Matsokin, A.Ya. Pak, A.G. Kvashnin", journal: "Journal of Alloys and Compounds", year: "2025", url: "/assets/pdfs/all_publications/2025_synthesis_ti_zr_nb_hf_ta.pdf" },
                { title: "Physically intuitive anisotropic model of hardness", authors: "F.N. Jalolov and A.G. Kvashnin", journal: "Physical Review Materials", year: "2024", url: "/assets/pdfs/all_publications/2024_physically_intuitive.pdf" },
                { title: "Melting simulations of high-entropy carbonitrides by deep learning potentials", authors: "V.S. Baidyshev, C. Tantardini, A.G. Kvashnin", journal: "Scientific Reports", year: "2024", url: "/assets/pdfs/all_publications/2024_melting_simulations.pdf" },
                { title: "Material hardness descriptor derived by symbolic regression", authors: "C. Tantardini, H.A. Zakaryan, Z.-K. Han, T. Altalhi, S.V. Levchenko, A.G. Kvashnin, B.I. Yakobson", journal: "Journal of Computational Science", year: "2024", url: "/assets/pdfs/all_publications/2024_material_hardness_descriptor.pdf" },
                { title: "Chemical bonding within AIIIBVI materials under uniaxial compression", authors: "R.S. Stepanov, A.D. Radina, C. Tantardini, A.G. Kvashnin, A.V. Kolobov", journal: "Physical Chemistry Chemical Physics", year: "2024", url: "#" },
                { title: "Theoretical study of adsorption properties and CO oxidation reaction on surfaces of higher tungsten boride", authors: "A.D. Radina, V.S. Baidyshev, I.V. Chepkasov, N.A. Matsokin, T. Altalhi, B.I. Yakobson, A.G. Kvashnin", journal: "Scientific Reports", year: "2024", url: "/assets/pdfs/all_publications/2024_theoretical_study_of_adsorption.pdf" },
                { title: "Electrical current-assisted reactive crucible melting technique: Case study of the Fe-Sn system", authors: "F. Bochkanov, D. Karpenkov, V. Fomin, A. Tukmakova, A. Kvashnin, A. Novotelnova, O. Kutsemako, N. Kulesh, V. Kurichenko, I. Bajenova, A. Khvan", journal: "Materialia", year: "2024", url: "#" },
                { title: "Photocatalytic H2 generation and CO2 reduction by WB5-x cocatalyst of TiO2 catalyst", authors: "A.Yu. Kurenkova, A.D. Radina, V.S. Baidyshev, P.V. Povalyaev, E.E. Aidakov, E.Yu. Gerasimov, D.D. Mishchenko, A.V. Zhurenok, A.Ya. Pak, E.A. Kozlova, A.G. Kvashnin", journal: "Applied Surface Science", year: "2024", url: "/assets/pdfs/all_publications/2024_photocatalytic.pdf" },
                { title: "Mechanical Properties of Single and Polycrystalline Solids from Machine Learning", authors: "F.N. Jalolov, E.V. Podryabinkin, A.R. Oganov, A.V. Shapeev, A.G. Kvashnin", journal: "Advanced Theory and Simulations", year: "2024", url: "/assets/pdfs/all_publications/2024_mechanical_properties.pdf" },
                { title: "Structure-driven tuning of catalytic properties of core–shell nanostructures", authors: "I.V. Chepkasov, A.D. Radina, A.G. Kvashnin", journal: "Nanoscale", year: "2024", url: "/assets/pdfs/all_publications/2024_nanoscale_str.pdf" },
                { title: "Origin of brittle behavior of doped PbTe-based thermoelectric materials", authors: "I.V. Chepkasov, A.G. Kvashnin, A.D. Radina, N.A. Matsokin, F.N. Jalolov, D.G. Kvashnin, A.R. Oganov, Z. Dashevsky", journal: "Applied Physics Letters", year: "2024", url: "/assets/pdfs/all_publications/2024_apl_pb_te.pdf" },
                { title: "Synthesis and Characterization of Niobium Carbide Thin Films on Diamond Surface for Superconductive Application", authors: "R.A. Khmelnitsky, V.P. Martovitsky, J.V. Bondareva, A.I. Kolbatova, N. Titova, G.N. Goltsman, F.S. Fedorov, A.V. Egorov, N.A. Matsokin, A.G. Kvashnin, D.G. Kvashnin, S.A. Evlashin", journal: "Journal of Alloys and Compounds", year: "2024", url: "/assets/pdfs/all_publications/2024_NbC_site.pdf" },
                { title: "Generating and grading 34 optimised norm-conserving Vanderbilt pseudopotentials for actinides and super-heavy elements in the PseudoDojo", authors: "С. Tantardini, M. Iliaš, M. Giantomassi, A.G. Kvashnin, V. Pershina, X. Gonze", journal: "Computer Physics Communications", year: "2024", url: "/assets/pdfs/all_publications/2024_theoretical_study_of_adsorption.pdf" },
                { title: "Tuning the surface properties of AuPd nanoparticles for adsorption of O and CO", authors: "I.V. Chepkasov, I.S. Zamulin, V.S. Baidyshev, A.G. Kvashnin", journal: "Physical Chemistry Chemical Physics", year: "2023", url: "/assets/pdfs/all_publications/2024_PCCP_AuPd.pdf" },
                { title: "Structure-driven tuning of O and CO adsorption on AuCu nanoparticles. A DFT Study", authors: "I.V. Chepkasov, V.S. Baidyshev, A.G. Kvashnin", journal: "Physical Review B", year: "2023", url: "/assets/pdfs/all_publications/2023_PRB.pdf" },
                { title: "Non-Fermi-Liquid Behavior of Superconducting SnH4", authors: "I.A. Troyan, D.V. Semenok, A.G. Ivanova, A.V. Sadakov, D. Zhou, A.G. Kvashnin, I.A. Kruglov, O.A. Sobolevskiy, M.V. Lyubutina, T. Helm, S.W. Tozer, M. Bykov, A.F. Goncharov, V.M. Pudalov, I.S. Lyubutin", journal: "Advanced Science", year: "2023", url: "#" },
                { title: "Cluster structure of ultrahard fullerite revealed by Raman spectroscopy", authors: "F. Khorobrykh, S. Klimin, B. Kulnitskiy, F.N. Jalolov, A.G. Kvashnin, A. Eliseev, A. Kirichenko, V. Prenas, V. Denisov, N. Mel'nik, P. Sorokin, M. Popov", journal: "Carbon", year: "2023", url: "#" },
                { title: "Ionic Conductivity of Lithium Phosphides", authors: "A.P. Maltsev, I.V. Chepkasov, A.G. Kvashnin, and A.R. Oganov", journal: "Crystals", year: "2023", url: "#" },
                { title: "Reactivity of diamanes against oxidation: A DFT study", authors: "S Kaya, H. Dua, U. Sarkar, V.A. Demin, A.G. Kvashnin", journal: "Chemical Physics", year: "2023", url: "#" },
                { title: "Electronic Properties of Functionalized Diamanes for Field-Emission Displays", authors: "C. Tantardini, A.G. Kvashnin, M. Azizi, X. Gonze, C. Gatti, T. Altalhi, B.I. Yakobson", journal: "ACS Applied Materials & Interfaces", year: "2023", url: "#" },
                { title: "Surface Tamm States of 2–5 nm Nanodiamond via Raman Spectroscopy", authors: "M. Popov, F. Khorobrykh, S. Klimin, V. Churkin, D. Ovsyannikov, A. Kvashnin", journal: "Nanomaterials", year: "2023", url: "#" },
                { title: "Machine learning-Driven Synthesis of TiZrNbHfTaC5 High-Entropy Carbide", authors: "A.Ya. Pak, V. Sotskov, A.A. Gumovskaya, Yu.Z. Vassilyeva, Z.S. Bolatova, Yu.A. Kvashnina, G.Ya. Mamontov, A.V. Shapeev, A.G. Kvashnin", journal: "npj Computational Materials", year: "2023", url: "#" },
                { title: "Ultra-Low Thermal Conductivity of Moiré Diamanes", authors: "S. Chowdhury, V.A. Demin, L.A. Chernozatonskii, A.G. Kvashnin", journal: "Membranes", year: "2022", url: "/assets/pdfs/all_publications/2022_ultra_low_thermal.pdf" },
                { title: "Cu–Au nanoparticles produced by the aggregation of gas-phase metal atoms for CO oxidation", authors: "I.V. Chepkasov, V.S. Baidyshev, A.A. Golubnichiy, I.S. Zamulin, A.G. Kvashnin, S.M. Kozlov", journal: "Aggregate", year: "2022", url: "/assets/pdfs/all_publications/2022_cu_au.pdf" },
                { title: "Effect of magnetic impurities on superconductivity in LaH10", authors: "D.V. Semenok, I.A. Troyan, A.V. Sadakov, D. Zhou, M. Galasso, A.G. Kvashnin, I.A. Kruglov, A.A. Bykov, K.Y. Terent'ev, A.V. Cherepahin, O.A. Sobolevskiy, K.S. Pervakov, A.Yu. Seregin, T. Helm, T. Förster, A.D. Grockowiak, S.W. Tozer, Y. Nakamoto, K. Shimizu, V.M. Pudalov, I.S. Lyubutin, A.R. Oganov", journal: "Advanced Materials", year: "2022", url: "/assets/pdfs/all_publications/2022_effect_of_magnetic.pdf" },
                { title: "Large-Scale Synthesis and Applications of Hafnium–Tantalum Carbides", authors: "A.G. Kvashnin, D.S. Nikitin, I.I. Shanenkov, I.V. Chepkasov, Yu.A. Kvashnina, A. Nassyrbayev, A.A. Sivkov, Z. Bolatova, A.Ya. Pak", journal: "Advanced Functional Materials", year: "2022", url: "/assets/pdfs/all_publications/2022_large_scale_synthesis_and_applications_of_hafnium_tantalum.pdf" },
                { title: "Crystal Structure Evolution of Fluorine Under High Pressure", authors: "C. Tantardini, F.N. Jalolov, A.G. Kvashnin", journal: "Journal of Physical Chemistry C", year: "2022", url: "/assets/pdfs/all_publications/2022_crystal_structure_wvolution_of_fluorine.pdf" },
                { title: "Sr-Doped Molecular Hydrogen: Synthesis and Properties of SrH22", authors: "D.V. Semenok, W. Chen, X. Huang, D. Zhou, I.A. Kruglov, A.B. Mazitov, M. Galasso, C. Tantardini, X. Gonze, A.G. Kvashnin, A.R. Oganov, T. Cui", journal: "Advanced Materials", year: "2022", url: "/assets/pdfs/all_publications/2022_sr_doped_superionic.pdf" },
                { title: "High-temperature superconductivity in hydrides", authors: "I.A. Trojan, D.V. Semenok, A.G. Ivanova, A.G. Kvashnin, D. Zhou, A.V. Sadakov, O.A. Sobolevsky, V.M. Pudalov, I.S. Lyubutin, A.R. Oganov", journal: "Physics-Uspekhi", year: "2022", url: "/assets/pdfs/all_publications/2022_high_temperature_superconductivity.pdf" },
                { title: "Efficient Synthesis of WB5-x-WB2 Powders with Selectivity for WB5-x Content", authors: "A.Ya. Pak, D.V. Rybkovskiy, Yu.Z. Vassilyeva, E.N. Kolobova, A.V. Filimonenko, A.G. Kvashnin", journal: "Inorganic Chemistry", year: "2022", url: "/assets/pdfs/Higher_Tungtsen_Boride/2021_synthesis_wb5x.pdf" },
                { title: "Computational Design of Gas Sensors Based on V3S4 Monolayer", authors: "I.V. Chepkasov, E.V. Sukhanova, A.G. Kvashnin, H.A. Zakaryan, M.A. Aghamalyan, Y.Sh. Mamasakhlisov, A.M. Manakhov, Z.I. Popov, D.G. Kvashnin", journal: "Nanomaterials", year: "2022", url: "/assets/pdfs/all_publications/2022_сomputational_ design_of_gas_sensors.pdf" },
                { title: "2D-Mo3S4 phase as promising contact for MoS2", authors: "E.V. Sukhanova, A.G. Kvashnin, L.A. Bereznikova, H.A. Zakaryan, M.A. Aghamalyan, D.G. Kvashnin, Z.I. Popov", journal: "Applied Surface Science", year: "2022", url: "/assets/pdfs/all_publications/2022_2d_mo3s4.pdf" },
                { title: "Map of Two-Dimensional Tungsten Chalcogenide Compounds (W–S, W–Se, W–Te) Based on USPEX Evolutionary Search", authors: "E.V. Sukhanova, A.G. Kvashnin, M.A. Agamalyan, H.A. Zakaryan, Z.I. Popov", journal: "JETP Letters", year: "2022", url: "/assets/pdfs/all_publications/2022_map_of_two_dimensional_tingsten_chalcogenide.pdf" },
                { title: "Nanohardness from First Principles with Active Learning on Atomic Environments", authors: "E.V. Podryabinkin, A.G. Kvashnin, M. Asgarpour, I.I. Maslenikov, D.A. Ovsyannikov, P.B. Sorokin, M.Yu Popov, A.V. Shapeev", journal: "Journal of Chemical Theory and Computation", year: "2022", url: "/assets/pdfs/all_publications/2022_nanohardness.pdf" },
                { title: "Diamane quasicrystals", authors: "L.A. Chernozatonskii, V.A. Demin, A.G. Kvashnin, D.G. Kvashnin", journal: "Applied Surface Science", year: "2022", url: "/assets/pdfs/all_publications/2022_diamane_qasicrystals.pdf" }
            ]);
        }, 1000);
    });
}
// ===== VIDEO FUNCTIONS =====
function initializeVideos() {
    const videoGrid = document.querySelector(".video-grid");
    if (!videoGrid) return;

    videoGrid.innerHTML = videoData.map(video => `
        <div class="video-item">
            <div class="video-preview">
                <a href="${video.url}" target="_blank" class="video-link">
                    <img src="${video.preview}" alt="Video preview" class="video-thumbnail">
                    <div class="video-play-button">
                        <svg width="64" height="64" viewBox="0 0 64 64">
                            <circle cx="32" cy="32" r="30" fill="rgba(0,0,0,0.7)"/>
                            <polygon points="24,20 24,44 44,32" fill="white"/>
                        </svg>
                    </div>
                </a>
            </div>

            <div class="video-info">
                <h3>${video.title}</h3>
                <p class="video-description">${video.description}</p>

                <div class="video-meta">
                    <span class="video-duration">${video.duration}</span>
                    <span class="video-date">${video.date}</span>
                </div>

                <a href="${video.url}" target="_blank" class="watch-btn">
                    Watch (${video.source})
                </a>
            </div>
        </div>
    `).join('');
}

// ===== MODAL FUNCTIONS =====
document.addEventListener('DOMContentLoaded', function() {
    const closeButtons = document.querySelectorAll('.close');
    const modals = document.querySelectorAll('.modal');
    
    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            modals.forEach(modal => modal.style.display = 'none');
        });
    });

    window.addEventListener('click', (event) => {
        modals.forEach(modal => {
            if (event.target === modal) modal.style.display = 'none';
        });
    });
});
