// Sample data
const teamData = [
    {
        id: 1,
        name: "Alexander Kvashnin",
        position: "Principal Investigator",
        bio: "Prof. Alexander Kvashnin holds the position of Full Professor at the Skolkovo Institute of Science and Technology. Prof. Kvashnin is a renowned researcher with over 15 years of experience in the field of computational materials science. His work focuses on applications of modern methods of computational materials science and artificial intellegence to complex problems.",
        website: "https://scholar.google.com/citations?user=6x6tbTYAAAAJ&hl=en",
        photo: "assets/team/Kvashnin.PNG" // путь к фотографии
    },
    {
        id: 2,
        name: "Ilia Chepkasov",
        position: "Senior Research Scientist",
        bio: "Dr. Chepkasov specializes in computational methods and data analysis. Hhe has published numerous papers in top-tier journals.",
        website: "https://scholar.google.com/citations?user=uld736gAAAAJ&hl=ru",
        photo: "assets/team/jane-smith.jpg"
    },
    {
        id: 3,
        name: "Viktor S. Baidyshev",
        position: "Research Scientist",
        bio: "Dr. Baidyshev specializes in computational methods and data analysis. Hhe has published numerous papers in top-tier journals.",
        website: "https://scholar.google.com/citations?user=Ludi0DIAAAAJ&hl=ru",
        photo: "assets/team/mike-johnson.jpg"
    }
];

const projectsData = [
    {
        id: 1,
        name: "Machine Learning Research",
        description: "Advanced machine learning algorithms for scientific applications",
        subprojects: [
            {
                id: 1,
                title: "Neural Network Optimization",
                description: "Developing efficient neural network architectures for complex pattern recognition tasks in scientific data analysis.",
                pdfUrl: "assets/pdfs/neural_network.pdf"
            },
            {
                id: 2,
                title: "Reinforcement Learning",
                description: "Applying reinforcement learning algorithms to solve real-world optimization problems in various scientific domains.",
                pdfUrl: "assets/pdfs/reinforcement_learning.pdf"
            }
        ]
    },
    {
        id: 2,
        name: "Data Visualization",
        description: "Interactive visualization tools for complex scientific data",
        subprojects: [
            {
                id: 1,
                title: "3D Molecular Visualization",
                description: "Developing web-based 3D visualization tools for molecular structures and interactions.",
                pdfUrl: "assets/pdfs/molecular_viz.pdf"
            },
            {
                id: 2,
                title: "Real-time Data Dashboard",
                description: "Creating interactive dashboards for real-time monitoring of experimental data streams.",
                pdfUrl: "assets/pdfs/dashboard.pdf"
            }
        ]
    },
    {
        id: 3,
        name: "Computational Biology",
        description: "Bioinformatics and computational approaches to biological problems",
        subprojects: [
            {
                id: 1,
                title: "Genome Sequence Analysis",
                description: "Developing algorithms for efficient genome sequencing and variant analysis.",
                pdfUrl: "assets/pdfs/genome_analysis.pdf"
            },
            {
                id: 2,
                title: "Protein Structure Prediction",
                description: "Machine learning approaches for accurate protein structure prediction and analysis.",
                pdfUrl: "assets/pdfs/protein_prediction.pdf"
            }
        ]
    }
];

const resourcesData = [
    {
        id: 1,
        title: "Google Scholar",
        description: "Comprehensive academic search engine for scholarly literature",
        url: "https://scholar.google.com"
    },
    {
        id: 2,
        title: "arXiv",
        description: "Preprint repository for physics, mathematics, computer science and more",
        url: "https://arxiv.org"
    },
    {
        id: 3,
        title: "PubMed",
        description: "Free search engine accessing primarily the MEDLINE database",
        url: "https://pubmed.ncbi.nlm.nih.gov"
    },
    {
        id: 4,
        title: "GitHub",
        description: "Platform for version control and collaboration on code and projects",
        url: "https://github.com"
    }
];

// DOM Elements
const tabLinks = document.querySelectorAll('.tab-link');
const tabContents = document.querySelectorAll('.tab-content');
const teamGrid = document.querySelector('.team-grid');
const projectTabs = document.querySelector('.project-tabs');
const projectContent = document.querySelector('.project-content');
const publicationsList = document.querySelector('.publications-list');
const resourcesGrid = document.querySelector('.resources-grid');
const modals = document.querySelectorAll('.modal');
const closeButtons = document.querySelectorAll('.close');

// Tab Navigation
tabLinks.forEach(tab => {
    tab.addEventListener('click', () => {
        const tabId = tab.getAttribute('data-tab');
        
        // Update active tab
        tabLinks.forEach(t => t.classList.remove('active'));
        tabContents.forEach(t => t.classList.remove('active'));
        
        tab.classList.add('active');
        document.getElementById(tabId).classList.add('active');
        
        // Load specific content
        if (tabId === 'publications') {
            loadPublications();
        }
    });
});

// Initialize Team Section
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

// Team Modal
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

// Initialize Projects
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
        tab.addEventListener('click', () => showProject(project.id));
        projectTabs.appendChild(tab);
    });
    
    // Set first tab as active
    if (projectTabs.firstChild) {
        projectTabs.firstChild.classList.add('active');
    }
}

function showProject(projectId) {
    const project = projectsData.find(p => p.id === projectId);
    if (!project) return;
    
    // Update active tab
    document.querySelectorAll('.project-tab').forEach(tab => tab.classList.remove('active'));
    event.target.classList.add('active');
    
    projectContent.innerHTML = `
        <div class="project-details active">
            <h2>${project.name}</h2>
            <p>${project.description}</p>
            <div class="subprojects-grid">
                ${project.subprojects.map(subproject => `
                    <div class="subproject">
                        <div class="subproject-image"></div>
                        <h3>${subproject.title}</h3>
                        <p>${subproject.description}</p>
                        <button class="download-btn" onclick="downloadPDF('${subproject.pdfUrl}')">
                            Download PDF
                        </button>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

// Initialize Resources
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

// Load Publications from Google Scholar (simulated)
async function loadPublications() {
    publicationsList.innerHTML = '<p>Loading publications...</p>';
    
    try {
        // Note: Direct Google Scholar scraping is not possible due to CORS
        // This is a simulation - you'll need to use a proxy or manual updates
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

// Simulate Google Scholar fetch
function simulateGoogleScholarFetch() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                {
                    title: "Advanced Machine Learning Techniques for Scientific Discovery",
                    authors: "John Doe, Jane Smith, Mike Johnson",
                    journal: "Nature Machine Intelligence",
                    year: "2024",
                    url: "#"
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

// Download PDF function
function downloadPDF(url) {
    // In a real implementation, this would download the PDF
    alert(`Downloading PDF from: ${url}`);
    // window.open(url, '_blank');
}

// Modal functionality
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

// Initialize the website
document.addEventListener('DOMContentLoaded', () => {
    initializeTeam();
    initializeProjects();
    initializeResources();
});
