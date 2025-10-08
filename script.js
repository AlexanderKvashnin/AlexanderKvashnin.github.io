console.log('JS LOADED v2');

// =========================
// Team data (как было)
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
// Projects data (обновлено под твои папки и файлы)
// Кнопки берут текст из f.label; если label не указан — красиво строим из имени файла
// =========================
const projectsData = [
  {
    id: 1,
    name: "Higher tungsten boride",
    description: "Structure, stability, and catalytic properties of tungsten borides with high B content.",
    subprojects: [
      {
        id: 1,
        title: "Publications",
        description: "Selected papers related to higher tungsten borides.",
        files: [
          { label: "New tungsten borides (2018)", url: "assets/pdfs/Higher_Tungtsen_Boride/2018_new_tungtsen_borides.pdf" },
          { label: "WB5+x (2020)",               url: "assets/pdfs/Higher_Tungtsen_Boride/2020_wb5x.pdf" },
          { label: "Synthesis of WB5+x (2021)",   url: "assets/pdfs/Higher_Tungtsen_Boride/2021_synthesis_wb5x.pdf" },
          { label: "Photocatalytic H₂ generation (2024)", url: "assets/pdfs/Higher_Tungtsen_Boride/2024_photocatalytic_h2_generation.pdf" },
          { label: "Scientific Reports (2024)",   url: "assets/pdfs/Higher_Tungtsen_Boride/2024_scientific_reports.pdf" },
          { label: "Discovery of chemically… (2025)", url: "assets/pdfs/Higher_Tungtsen_Boride/2025_discovery_of_chemically.pdf" }
        ]
      }
    ]
  },
  {
    id: 2,
    name: "High-entropy materials",
    description: "Design and screening of high-entropy ceramics, borides, and alloys using ML and DFT.",
    subprojects: [
      {
        id: 1,
        title: "Publications",
        files: [
          { label: "ML (2023)",                 url: "assets/pdfs/High_Entropy_Materials/2023_ml.pdf" },
          { label: "Sci Rep 28678 (2024)",      url: "assets/pdfs/High_Entropy_Materials/2024_scirep_28678.pdf" },
          { label: "JALCOM 177178 (2025)",      url: "assets/pdfs/High_Entropy_Materials/2025_jalcom_177178.pdf" },
          { label: "JES (2025)",                url: "assets/pdfs/High_Entropy_Materials/2025_jes.pdf" }
        ]
      }
    ]
  },
  {
    id: 3,
    name: "Functional materials",
    description: "Discovery of materials with targeted electronic, magnetic, ionic, or optical functions.",
    subprojects: [
      {
        id: 1,
        title: "Publications",
        files: [
          { label: "Computational search (2020)",        url: "assets/pdfs/Functional_Materials/2020_comp_search.pdf" },
          { label: "Tantardini (2021)",                  url: "assets/pdfs/Functional_Materials/2021_tantardini.pdf" },
          { label: "Large scale (2022)",                 url: "assets/pdfs/Functional_Materials/2022_large_scale.pdf" },
          { label: "NbC site (2024)",                    url: "assets/pdfs/Functional_Materials/2024_NbC_site.pdf" },
          { label: "Discovery of chemically… (2025)",    url: "assets/pdfs/Functional_Materials/2025_discovery_of_chemically.pdf" },
          { label: "Synthesis of high-entropy (2025)",   url: "assets/pdfs/Functional_Materials/2025_Synthesis_of_high_entropy.pdf" },
          { label: "Tuning of mechanical (2025)",        url: "assets/pdfs/Functional_Materials/2025_tuning_of_mechanical.pdf" }
        ]
      }
    ]
  },
  {
    id: 4,
    name: "Nanocatalysts",
    description: "Catalytic nanoparticles: activity, selectivity, and stability.",
    subprojects: [
      {
        id: 1,
        title: "Publications",
        files: [
          { label: "Aggregate (2022)",                   url: "assets/pdfs/Catalyst/2022_aggregate.pdf" },
          { label: "Structure-driven tuning (2023)",     url: "assets/pdfs/Catalyst/2023_structure_driven_tuning.pdf" },
          { label: "Nanoscale (2024)",                   url: "assets/pdfs/Catalyst/2024_nanoscale.pdf" },
          { label: "Journal of Catalysis (2025)",        url: "assets/pdfs/Catalyst/2025_journal_of_catalysis.pdf" },
          { label: "PCCP – AuPd",                        url: "assets/pdfs/Catalyst/PCCP_AuPd.pdf" }
        ]
      }
    ]
  },
  {
    id: 5,
    name: "New computational methods",
    description: "Automation, ML potentials, and algorithms for accelerated materials discovery.",
    subprojects: [
      {
        id: 1,
        title: "Publications",
        files: [
          { label: "Podryabinkin (2021)",                url: "assets/pdfs/New_Computational_Methods/2021_podryabinkin.pdf" },
          { label: "Tantardini (2022)",                  url: "assets/pdfs/New_Computational_Methods/2022_tantardini.pdf" },
          { label: "Tantardini (2023)",                  url: "assets/pdfs/New_Computational_Methods/2023_tantardini.pdf" },
          { label: "Baidyshev (2024)",                   url: "assets/pdfs/New_Computational_Methods/2024_baidyshev.pdf" },
          { label: "Jalolov (2024)",                     url: "assets/pdfs/New_Computational_Methods/2024_jalolov.pdf" },
          { label: "Jalolov — Mechanical properties (2024)", url: "assets/pdfs/New_Computational_Methods/2024_jalolov_mechanical_properties_of_single.pdf" },
          { label: "Tantardini (2024)",                  url: "assets/pdfs/New_Computational_Methods/2024_tantardini.pdf" }
        ]
      }
    ]
  }
];


// =========================
// Resources (как было)
// =========================
const resourcesData = [
  { id: 1, title: "Google Scholar", description: "Comprehensive academic search engine for scholarly literature", url: "https://scholar.google.com" },
  { id: 2, title: "arXiv",          description: "Preprint repository for physics, mathematics, computer science and more", url: "https://arxiv.org" },
  { id: 3, title: "PubMed",         description: "Free search engine accessing primarily the MEDLINE database", url: "https://pubmed.ncbi.nlm.nih.gov" },
  { id: 4, title: "GitHub",         description: "Platform for version control and collaboration on code and projects", url: "https://github.com" }
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
/* Tab Navigation */
// =========================
tabLinks.forEach(tab => {
  tab.addEventListener('click', () => {
    const tabId = tab.getAttribute('data-tab');

    // Update active tab
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
/* Team */
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
/* Projects */
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

// утилита: если нет label — строим подпись из имени файла
function prettyFromUrl(url) {
  try {
    const file = url.split('/').pop().replace(/\.pdf$/i, '');
    return file.replace(/_/g, ' ');
  } catch {
    return url;
  }
}

function showProject(projectId) {
  const project = projectsData.find(p => p.id === projectId);
  if (!project) return;

  // подсветка активного таба
  document.querySelectorAll('.project-tab').forEach(tab => {
    tab.classList.toggle('active', tab.getAttribute('data-id') === String(projectId));
  });

  // контент проекта
  projectContent.innerHTML = `
    <div class="project-details active">
      <h2>${project.name}</h2>
      <p>${project.description || ''}</p>
      <div class="subprojects-grid">
        ${
          project.subprojects && project.subprojects.length
            ? project.subprojects.map(sp => `
              <div class="subproject">
                <div class="subproject-image"></div>
                <h3>${sp.title}</h3>
                <p>${sp.description || ''}</p>
                ${
                  sp.files && sp.files.length
                    ? `
                      <div class="file-list">
                        ${sp.files.map(f => `
                          <a class="download-btn" href="${f.url}" target="_blank" rel="noopener" download title="${f.label || prettyFromUrl(f.url)}">
                            ${f.label || prettyFromUrl(f.url)}
                          </a>
                        `).join('')}
                      </div>
                    `
                    : `<p class="muted">No files yet.</p>`
                }
              </div>
            `).join('')
            : `<p>No subprojects yet.</p>`
        }
      </div>
    </div>
  `;
}


// =========================
/* Resources */
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
/* Publications (simulated) */
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
/* Modals */
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
/* Init */
// =========================
document.addEventListener('DOMContentLoaded', () => {
  initializeTeam();
  initializeProjects();
  initializeResources();
});
