console.log('JS LOADED v7');

// ===== TAB SWITCHING FUNCTIONALITY =====
document.addEventListener('DOMContentLoaded', function() {
    initializeTabs();
    initializeTeam();
    initializeProjects();
    initializeResources();
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
        title: "Polyaromatic Hydrocarbons as Prospective Anode Materials for Metal-Ion Batteries",
        abstract: "First-principles show intercalated PAH crystals (e.g., pentacene) sustain low volume change and can exceed graphite capacity (~1.2–1.3× with Li/Na/K/Rb; ~2.3–2.6× with Mg/Ca).",
        pdfUrl: "assets/pdfs/High_Entropy_Materials/2025_jes.pdf",
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
        abstract: "This study demonstrates a rapid melamine-assisted N-doping method for conductive carbon black (Ketjenblack EC600JD), producing a high-loading (≈40 wt.% Pt) catalyst with exceptional activity and durability. Microscopy reveals uniform Pt nanoparticles (2.5–3 nm) and atomic Pt clusters on the N-doped support, attributed to strong Pt–N interactions. Density functional theory (DFT) calculations highlight the critical role of pyridinic-N defects in stabilizing atomic Pt, enhancing activity via charge transfer, and improving stability via strong Pt anchoring. Electrochemically, Pt/KB-600-N achieves twice the mass activity of commercial HiSPEC4000.",
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

// ===== RESOURCES DATA =====
const resourcesData = [
  { id: 1, title: "Google Scholar", description: "Comprehensive academic search engine for scholarly literature", url: "https://scholar.google.com" },
  { id: 2, title: "arXiv", description: "Preprint repository for physics, mathematics, computer science and more", url: "https://arxiv.org" },
  { id: 3, title: "PubMed", description: "Free search engine accessing primarily the MEDLINE database", url: "https://pubmed.ncbi.nlm.nih.gov" },
  { id: 4, title: "GitHub", description: "Platform for version control and collaboration on code and projects", url: "https://github.com" }
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

// ===== RESOURCES FUNCTIONS =====
function initializeResources() {
    updateResourcesGrid();
}

function updateResourcesGrid() {
    const resourcesGrid = document.querySelector('.resources-grid');
    if (!resourcesGrid) return;
    
    resourcesGrid.innerHTML = '';
    resourcesData.forEach(res => {
        const el = document.createElement('a');
        el.className = 'resource-item';
        el.href = res.url;
        el.target = '_blank';
        el.innerHTML = `<h3>${res.title}</h3><p>${res.description}</p>`;
        resourcesGrid.appendChild(el);
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
                { title: "Advanced Machine Learning Techniques for Scientific Discovery", authors: "John Doe, Jane Smith, Mike Johnson", journal: "Nature Machine Intelligence", year: "2024", url: "/assets/pdfs/ACSAMII.2018.10.43809.pdf" },
                { title: "Deep Learning Approaches in Computational Biology", authors: "Jane Smith, Mike Johnson, Robert Brown", journal: "Science Advances", year: "2023", url: "#" },
                { title: "Interactive Visualization of Complex Scientific Data", authors: "Mike Johnson, John Doe, Sarah Wilson", journal: "IEEE Transactions on Visualization", year: "2023", url: "#" },
                { title: "Reinforcement Learning in Optimization Problems", authors: "John Doe, Robert Brown", journal: "Journal of Machine Learning Research", year: "2022", url: "#" }
            ]);
        }, 1000);
    });
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
