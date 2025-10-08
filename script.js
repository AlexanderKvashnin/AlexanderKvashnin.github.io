console.log('JS LOADED v3-en');

// =========================
// Team data
// =========================
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
    bio: "",
    website: "https://scholar.google.com/citations?user=iymrPcMAAAAJ&hl=ru",
    photo: "assets/team/jane-smith.jpg"
  },
  {
    id: 8,
    name: "Anastasiia Iosimovska",
    position: "MSc Student",
    bio: "Anastasiia is a Master’s student at the Skolkovo Institute of Science and Technology. Her research focuses on computational modeling of catalytic nanomaterials. She holds a Bachelor’s degree in Chemistry from Lomonosov Moscow State University (MSU).",
    website: "https://scholar.google.com/citations?user=J0-7stAAAAAJ&hl=ru&oi=ru",
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
    bio: "During her Bachelor’s studies at Mendeleev University, Daria focused on the surface reconstruction and surface chemistry of (111)-SiC, employing Molecular Dynamics simulations with the USPEX algorithm and DFT calculations. Currently, she is a first-year Master’s student in Materials Science at Skoltech.",
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
    name: "Grigory",
    position: "MSc Student",
    bio: "",
    website: "",
    photo: "assets/team/Gr.jpg"
  }
];


// =========================
// Projects data
// Tabs: Higher tungsten boride / High-entropy materials / Functional materials / Catalysts / New computational methods
// For Catalysts and Functional materials: publication cards with title, image slot, short abstract, and a "pdf" button.
// =========================
const projectsData = [
  {
    id: 1,
    name: "Higher tungsten boride",
    description: "",
    subprojects: [
      { id: 1, title: "Publications", publications: [] }
    ]
  },
  {
    id: 2,
    name: "High-entropy materials",
    description: "",
    subprojects: [
      { id: 1, title: "Publications", publications: [] }
    ]
  },
  {
    id: 3,
    name: "Functional materials",
    description: "",
    subprojects: [
      {
        id: 1,
        title: "Publications",
        publications: [
          {
            title: "Computational Search for New W–Mo–B Compounds",
            abstract: "Evolutionary structure prediction identified five stable W–Mo–B ternaries and composition–temperature phase diagrams. Links between electronic structure, crystal structure, composition, and mechanical properties were established.",
            pdfUrl: "assets/pdfs/Functional_Materials/2020_comp_search.pdf",
            image: ""
          },
          {
            title: "Computational Modeling of 2D Materials under High Pressure and Their Chemical Bonding: Silicene as Possible Field-Effect Transistor",
            abstract: "Ab initio analysis shows pressure and anisotropic stress alter silicene hybridization. The results indicate feasibility of silicene-based FET pressure sensing and outline a general approach to study 2D materials under stress.",
            pdfUrl: "assets/pdfs/Functional_Materials/2021_tantardini.pdf",
            image: ""
          },
          {
            title: "Large-Scale Synthesis and Applications of Hafnium–Tantalum Carbides",
            abstract: "Evolutionary search combined with plasma-dynamic synthesis enables selective HfTaC coatings with controlled stoichiometry and properties. The route paves the way for broader families of functional and high-entropy carbides.",
            pdfUrl: "assets/pdfs/Functional_Materials/2022_large_scale.pdf",
            image: ""
          },
          {
            title: "Synthesis and Characterization of Niobium Carbide Thin Films on Diamond Surface for Superconductive Application",
            abstract: "Few-nanometer NbC films on diamond exhibit superconductivity up to ~12.4 K (record for NbC). DFT confirms stability and supports potential for superconductive detectors leveraging diamond’s thermal conductivity.",
            pdfUrl: "assets/pdfs/Functional_Materials/2024_NbC_site.pdf",
            image: ""
          },
          {
            title: "Discovery of Chemically Modified Higher Tungsten Boride by a Hybrid GNN/DFT Approach",
            abstract: "A GNN fine-tuned on ~200 DFT entries screened >375k structures and highlighted Ta substitutions that widen stability ranges and enhance hardness. Synthesis and Vickers measurements corroborate the predictions.",
            pdfUrl: "assets/pdfs/Functional_Materials/2025_discovery_of_chemically.pdf",
            image: ""
          },
          {
            title: "Synthesis of High-Entropy Ti–Zr–Nb–Hf–Ta Carbides and Carbonitrides in a High-Speed Arc Plasma Jet",
            abstract: "A single-step plasma process yields single-crystal high-entropy carbides/carbonitrides. ML/DFT guide compositions and conditions, providing a general route for functional ceramic nanopowders.",
            pdfUrl: "assets/pdfs/Functional_Materials/2025_Synthesis_of_high_entropy.pdf",
            image: ""
          },
          {
            title: "Tuning of Mechanical Properties of Doped PbTe-Based Thermoelectric Materials Driven by Intrinsic Defects",
            abstract: "DFT+COHP and DNN potentials reveal how dopants and intrinsic defects control brittleness and elasticity in PbTe. Practical guidelines are proposed for tailoring mechanical properties.",
            pdfUrl: "assets/pdfs/Functional_Materials/2025_tuning_of_mechanical.pdf",
            image: ""
          }
        ]
      }
    ]
  },
  {
    id: 4,
    name: "Catalysts",
    description: "",
    subprojects: [
      {
        id: 1,
        title: "Publications",
        publications: [
          {
            title: "Cu–Au Nanoparticles Produced by Aggregation of Gas-Phase Metal Atoms for CO Oxidation",
            abstract: "MD of PVD synthesis yields non-equilibrium Cu–Au nanoparticles with size- and time-dependent composition. DFT shows CO oxidation activity strongly depends on local structure (fcc, icosahedral, amorphous) and is not simply tied to d-band centers.",
            pdfUrl: "assets/pdfs/Catalyst/2022_aggregate.pdf",
            image: ""
          },
          {
            title: "Structure-Driven Tuning of O and CO Adsorption on AuCu Nanoparticles: A DFT Study",
            abstract: "For ~2 nm Au–Cu particles (core–shell vs alloy; fcc/icosahedral/amorphous), adjusting the core–shell ratio enables precise control of O/CO adsorption energies, especially for fcc. Alloys cannot reach equivalently narrow energy ranges.",
            pdfUrl: "assets/pdfs/Catalyst/2023_structure_driven_tuning.pdf",
            image: ""
          },
          {
            title: "Structure-Driven Tuning of Catalytic Properties of Core–Shell Nanostructures",
            abstract: "Review of recent progress: how core–shell architectures and theory (including DFT) enable structural control of catalytic performance. Promising directions and materials are outlined.",
            pdfUrl: "assets/pdfs/Catalyst/2024_nanoscale.pdf",
            image: ""
          },
          {
            title: "Adsorption Properties of Crystalline and Amorphous PdIr Nanoparticles: A Systematic First-Principles Study",
            abstract: "For Pd–Ir (core–shell and alloy; 79/321 atoms; fcc and amorphous), DFT shows that tuning core–shell ratios narrows adsorption-energy spreads in fcc particles. Amorphous particles exhibit wide variability due to many nonequivalent sites.",
            pdfUrl: "assets/pdfs/Catalyst/2025_journal_of_catalysis.pdf",
            image: ""
          },
          {
            title: "Tuning the Surface Properties of AuPd Nanoparticles for Adsorption of O and CO",
            abstract: "Ab initio results link surface charge redistribution and d-band centers to O/CO adsorption in Au–Pd. Varying structure and composition (core–shell vs alloy; fcc/icosahedral) enables targeted catalytic-property tuning.",
            pdfUrl: "assets/pdfs/Catalyst/PCCP_AuPd.pdf",
            image: ""
          }
        ]
      }
    ]
  },
  {
    id: 5,
    name: "New computational methods",
    description: "",
    subprojects: [
      { id: 1, title: "Publications", publications: [] }
    ]
  }
];


// =========================
const resourcesData = [
  { id: 1, title: "Google Scholar", description: "Comprehensive academic search engine for scholarly literature", url: "https://scholar.google.com" },
  { id: 2, title: "arXiv", description: "Preprint repository for physics, mathematics, computer science and more", url: "https://arxiv.org" },
  { id: 3, title: "PubMed", description: "Free search engine accessing primarily the MEDLINE database", url: "https://pubmed.ncbi.nlm.nih.gov" },
  { id: 4, title: "GitHub", description: "Platform for version control and collaboration on code and projects", url: "https://github.com" }
];


// =========================
// DOM Elements
// =========================
const tabLinks = document.querySelectorAll('.tab-link');
const tabContents = document.querySelectorAll('.tab-content');
const teamGrid = document.querySelector('.team-grid');
const projectTabs = document.querySelector('.project-tabs');
const projectContent = document.querySelector('.project-content');
const publicationsList = document.querySelector('.publications-list');
const resourcesGrid = document.querySelector('.resources-grid');
const modals = document.querySelectorAll('.modal');
const closeButtons = document.querySelectorAll('.close');


// =========================
// Tabs
// =========================
tabLinks.forEach(tab => {
  tab.addEventListener('click', () => {
    const tabId = tab.getAttribute('data-tab');

    tabLinks.forEach(t => t.classList.remove('active'));
    tabContents.forEach(t => t.classList.remove('active'));

    tab.classList.add('active');
    document.getElementById(tabId).classList.add('active');

    if (tabId === 'publications') {
      loadPublications();
    }
  });
});


// =========================
// Team
// =========================
function initializeTeam() {
  teamGrid.innerHTML = '';
  teamData.forEach(member => {
    const memberElement = document.createElement('div');
    memberElement.className = 'team-member';
    memberElement.innerHTML = `
      <div class="member-photo">
        <img src="${member.photo}" alt="${member.name}" onerror="this.style.display='none'">
      </div>
      <h3>${member.name}</h3>
      <p>${member.position}</p>
    `;
    memberElement.addEventListener('click', () => openTeamModal(member));
    teamGrid.appendChild(memberElement);
  });
}

function openTeamModal(member) {
  const modal = document.getElementById('teamModal');
  const modalBody = modal.querySelector('.modal-body');

  modalBody.innerHTML = `
    <div class="modal-team-member">
      <div class="modal-photo">
        <img src="${member.photo}" alt="${member.name}" onerror="this.style.display='none'">
      </div>
      <div class="modal-info">
        <h2>${member.name}</h2>
        <p><strong>Position:</strong> ${member.position}</p>
        <p><strong>Bio:</strong> ${member.bio}</p>
        <a href="${member.website}" target="_blank" class="download-btn">Visit Personal Website</a>
      </div>
    </div>
  `;
  modal.style.display = 'block';
}


// =========================
// Projects
// =========================
function initializeProjects() {
  updateProjectTabs();
  if (projectsData.length > 0) {
    showProject(projectsData[0].id);
  }
}

function updateProjectTabs() {
  projectTabs.innerHTML = '';
  projectsData.forEach(project => {
    const tab = document.createElement('button');
    tab.className = 'project-tab';
    tab.textContent = project.name;
    tab.setAttribute('data-id', project.id);
    tab.addEventListener('click', () => showProject(project.id));
    projectTabs.appendChild(tab);
  });
  if (projectTabs.firstChild) {
    projectTabs.firstChild.classList.add('active');
  }
}

function showProject(projectId) {
  const project = projectsData.find(p => p.id === projectId);
  if (!project) return;

  document.querySelectorAll('.project-tab').forEach(tab => {
    tab.classList.toggle('active', tab.getAttribute('data-id') === String(projectId));
  });

  projectContent.innerHTML = `
    <div class="project-details active">
      <h2>${project.name}</h2>
      ${project.description ? `<p>${project.description}</p>` : ''}
      <div class="subprojects-grid">
        ${
          project.subprojects && project.subprojects.length
            ? project.subprojects.map(sp => renderSubproject(sp)).join('')
            : `<p>No subprojects yet.</p>`
        }
      </div>
    </div>
  `;
}

function renderSubproject(sp) {
  if (sp.publications && sp.publications.length) {
    return `
      <div class="subproject">
        <h3>${sp.title}</h3>
        <div class="publications-grid">
          ${
            sp.publications.map(pub => `
              <div class="pub-card">
                <div class="pub-thumb">
                  ${pub.image
                    ? `<img src="${pub.image}" alt="thumbnail" onerror="this.style.display='none'">`
                    : `<div class="thumb-placeholder"></div>`
                  }
                </div>
                <div class="pub-info">
                  <h4 class="pub-title">${pub.title}</h4>
                  ${pub.abstract ? `<p class="pub-abstract">${pub.abstract}</p>` : ''}
                  <a class="download-btn" href="${pub.pdfUrl}" target="_blank" rel="noopener" download>pdf</a>
                </div>
              </div>
            `).join('')
          }
        </div>
      </div>
    `;
  }
  return `
    <div class="subproject">
      <h3>${sp.title}</h3>
      <p class="muted">No items yet.</p>
    </div>
  `;
}


// =========================
// Resources
// =========================
function initializeResources() {
  updateResourcesGrid();
}

function updateResourcesGrid() {
  resourcesGrid.innerHTML = '';
  resourcesData.forEach(resource => {
    const resourceElement = document.createElement('a');
    resourceElement.className = 'resource-item';
    resourceElement.href = resource.url;
    resourceElement.target = '_blank';
    resourceElement.innerHTML = `
      <h3>${resource.title}</h3>
      <p>${resource.description}</p>
    `;
    resourcesGrid.appendChild(resourceElement);
  });
}


// =========================
// Publications (simulated)
// =========================
async function loadPublications() {
  publicationsList.innerHTML = '<p>Loading publications...</p>';
  try {
    const publications = await simulateGoogleScholarFetch();
    publicationsList.innerHTML = '';
    publications.forEach(pub => {
      const pubElement = document.createElement('div');
      pubElement.className = 'publication-item';
      pubElement.innerHTML = `
        <h3>${pub.title}</h3>
        <p><strong>Authors:</strong> ${pub.authors}</p>
        <p><strong>Journal:</strong> ${pub.journal}</p>
        <p><strong>Year:</strong> ${pub.year}</p>
        <a href="${pub.url}" target="_blank">View Publication</a>
      `;
      publicationsList.appendChild(pubElement);
    });
  } catch (error) {
    publicationsList.innerHTML = '<p>Error loading publications. Please try again later.</p>';
  }
}

function simulateGoogleScholarFetch() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          title: "Advanced Machine Learning Techniques for Scientific Discovery",
          authors: "John Doe, Jane Smith, Mike Johnson",
          journal: "Nature Machine Intelligence",
          year: "2024",
          url: "/assets/pdfs/ACSAMII.2018.10.43809.pdf"
        },
        {
          title: "Deep Learning Approaches in Computational Biology",
          authors: "Jane Smith, Mike Johnson, Robert Brown",
          journal: "Science Advances",
          year: "2023",
          url: "#"
        },
        {
          title: "Interactive Visualization of Complex Scientific Data",
          authors: "Mike Johnson, John Doe, Sarah Wilson",
          journal: "IEEE Transactions on Visualization",
          year: "2023",
          url: "#"
        },
        {
          title: "Reinforcement Learning in Optimization Problems",
          authors: "John Doe, Robert Brown",
          journal: "Journal of Machine Learning Research",
          year: "2022",
          url: "#"
        }
      ]);
    }, 1000);
  });
}


// =========================
// Modals
// =========================
closeButtons.forEach(button => {
  button.addEventListener('click', () => {
    modals.forEach(modal => modal.style.display = 'none');
  });
});

window.addEventListener('click', (event) => {
  modals.forEach(modal => {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });
});


// =========================
// Init
// =========================
document.addEventListener('DOMContentLoaded', () => {
  initializeTeam();
  initializeProjects();
  initializeResources();
});
