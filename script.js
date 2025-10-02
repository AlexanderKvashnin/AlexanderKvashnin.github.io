// Sample data
const teamData = [
    {
        id: 1,
        name: "John Doe",
        position: "Principal Investigator",
        bio: "Dr. John Doe is a renowned researcher with over 15 years of experience in the field. His work focuses on innovative approaches to complex problems.",
        website: "https://johndoe.com"
    },
    {
        id: 2,
        name: "Jane Smith",
        position: "Postdoctoral Researcher",
        bio: "Dr. Jane Smith specializes in computational methods and data analysis. She has published numerous papers in top-tier journals.",
        website: "https://janesmith.com"
    },
    {
        id: 3,
        name: "Mike Johnson",
        position: "PhD Student",
        bio: "Mike is currently pursuing his PhD with a focus on machine learning applications in scientific research.",
        website: "https://mikejohnson.com"
    }
];

let projectsData = [
    {
        id: 1,
        name: "Machine Learning Research",
        description: "Advanced machine learning algorithms for scientific applications",
        subprojects: [
            {
                id: 1,
                title: "Neural Network Optimization",
                description: "Developing efficient neural network architectures",
                pdfUrl: "assets/pdfs/neural_network.pdf"
            },
            {
                id: 2,
                title: "Reinforcement Learning",
                description: "Applying RL to real-world problems",
                pdfUrl: "assets/pdfs/reinforcement_learning.pdf"
            }
        ]
    }
];

let resourcesData = [
    {
        id: 1,
        title: "Google Scholar",
        description: "Comprehensive academic search engine",
        url: "https://scholar.google.com"
    },
    {
        id: 2,
        title: "arXiv",
        description: "Preprint repository for scientific papers",
        url: "https://arxiv.org"
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
            <div class="member-photo"></div>
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
        <h2>${member.name}</h2>
        <p><strong>Position:</strong> ${member.position}</p>
        <p><strong>Bio:</strong> ${member.bio}</p>
        <a href="${member.website}" target="_blank" class="download-btn">Visit Personal Website</a>
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
                    title: "Advanced Machine Learning Techniques",
                    authors: "John Doe, Jane Smith",
                    journal: "Nature Machine Intelligence",
                    year: "2024",
                    url: "#"
                },
                {
                    title: "Deep Learning for Scientific Discovery",
                    authors: "Jane Smith, Mike Johnson",
                    journal: "Science Advances",
                    year: "2023",
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

// Add Project functionality
document.querySelector('.add-project-btn').addEventListener('click', () => {
    document.getElementById('projectModal').style.display = 'block';
});

document.getElementById('projectForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('projectName').value;
    const description = document.getElementById('projectDescription').value;
    
    const newProject = {
        id: projectsData.length + 1,
        name,
        description,
        subprojects: []
    };
    
    projectsData.push(newProject);
    updateProjectTabs();
    showProject(newProject.id);
    document.getElementById('projectModal').style.display = 'none';
    document.getElementById('projectForm').reset();
});

// Add Resource functionality
document.querySelector('.add-resource-btn').addEventListener('click', () => {
    document.getElementById('resourceModal').style.display = 'block';
});

document.getElementById('resourceForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const title = document.getElementById('resourceTitle').value;
    const url = document.getElementById('resourceUrl').value;
    const description = document.getElementById('resourceDescription').value;
    
    const newResource = {
        id: resourcesData.length + 1,
        title,
        url,
        description
    };
    
    resourcesData.push(newResource);
    updateResourcesGrid();
    document.getElementById('resourceModal').style.display = 'none';
    document.getElementById('resourceForm').reset();
});

// Initialize the website
document.addEventListener('DOMContentLoaded', () => {
    initializeTeam();
    initializeProjects();
    initializeResources();
});
