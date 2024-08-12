// Sample project data
const projects = [
    { name: "Project Alpha", description: "AI-powered robotics system", icon: "fas fa-robot" },
    { name: "Project Beta", description: "Blockchain-based supply chain solution", icon: "fas fa-link" },
    { name: "Project Gamma", description: "IoT home automation platform", icon: "fas fa-home" },
    { name: "Project Delta", description: "Quantum computing simulator", icon: "fas fa-atom" }
];

// Function to display projects
function displayProjects() {
    const projectList = document.getElementById('project-list');
    projectList.innerHTML = '';

    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.classList.add('project-card');
        projectCard.innerHTML = `
            <i class="${project.icon}"></i>
            <h3>${project.name}</h3>
            <p>${project.description}</p>
        `;
        projectList.appendChild(projectCard);
    });
}

// Function to handle idea form submission
function handleIdeaSubmission(event) {
    event.preventDefault();
    const ideaInput = document.getElementById('idea');
    const idea = ideaInput.value.trim();

    if (idea) {
        alert(`Thank you for your idea: "${idea}". We'll consider it for future projects!`);
        ideaInput.value = '';
    } else {
        alert('Please enter a valid idea before submitting.');
    }
}

// Function to handle contact form submission
function handleContactSubmission(event) {
    event.preventDefault();
    const nameInput = event.target.elements.name;
    const emailInput = event.target.elements.email;
    const messageInput = event.target.elements.message;

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();

    if (name && email && message) {
        alert(`Thank you for your message, ${name}! We'll get back to you soon.`);
        nameInput.value = '';
        emailInput.value = '';
        messageInput.value = '';
    } else {
        alert('Please fill out all fields before submitting.');
    }
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    displayProjects();

    const ideaForm = document.getElementById('idea-form');
    ideaForm.addEventListener('submit', handleIdeaSubmission);

    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', handleContactSubmission);
});