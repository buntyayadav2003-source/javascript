let currentPage = 1;
const numberOfProjects = 10;
let allProjects = [];

// 1. State object to hold active filters
const filters = {
    title: "",
    department: "",
    priority: ""
};

function renderProjects(projects) {
    const totalProjects = projects.length;
    const totalPages = Math.ceil(totalProjects / numberOfProjects) || 1;

    const startIndex = (currentPage - 1) * numberOfProjects;
    const endIndex = startIndex + numberOfProjects;
    const projectsOnPage = projects.slice(startIndex, endIndex);

    const projectListEl = document.querySelector("#projectList");
    const paginationEl = document.querySelector("#pagination1");

    // Empty state handling
    if (projectsOnPage.length === 0) {
        projectListEl.innerHTML = `
            <tr>
                <td colspan="7" class="text-center text-muted py-4">No matching projects found</td>
            </tr>
        `;
        paginationEl.innerHTML = "";
        return;
    }

    // Render table rows
    projectListEl.innerHTML = projectsOnPage.map((project, i) => `
        <tr>
            <th scope="row">${startIndex + i + 1}</th>
            <td>
                ${project.ProjectName}
                <br>
                <i>${project.Details}</i>
            </td>
            <td>${project.Department}</td>
            <td>${project.priority }</td>
            <td>${project.startDate}</td>
            <td>${project.EndDate}</td>
            <td>${project.status}</td>
        </tr>
    `).join("");

    // Render pagination buttons
    const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
    paginationEl.innerHTML = ` 
        <li class="page-item ${currentPage === 1 ? "disabled" : ""}"> 
            <a class="page-link" href="#" data-page="${currentPage - 1}">Previous</a> 
        </li> 
        ${pages.map(page => ` 
            <li class="page-item ${page === currentPage ? "active" : ""}"> 
                <a class="page-link" href="#" data-page="${page}">${page}</a> 
            </li>
        `).join("")}
        <li class="page-item ${currentPage === totalPages ? "disabled" : ""}"> 
            <a class="page-link" href="#" data-page="${currentPage + 1}">Next</a> 
        </li>
    `;

    paginationEl.onclick = function (e) {
        e.preventDefault();
        const page = Number(e.target.dataset.page);
        if (page >= 1 && page <= totalPages && page !== currentPage) {
            currentPage = page;
            renderProjects(projects);
        }
    };
}

// 2. Extracts unique values and populates both dropdown menus
function populateDropdowns(data) {
    const departments = [...new Set(data.map(p => p.Department).filter(Boolean))];
    const priorities = [...new Set(data.map(p => p.priority).filter(Boolean))];

    const deptDropdown = document.querySelector("#departmentFilter");
    const priorityDropdown = document.querySelector("#priorityFilter");

    if (deptDropdown) {
        deptDropdown.innerHTML = `
            <option value="">All Departments</option>
            ${departments.map(dept => `<option value="${dept}">${dept}</option>`).join("")}
        `;
    }

    if (priorityDropdown) {
        priorityDropdown.innerHTML = `
            <option value="">All Priorities</option>
            ${priorities.map(prio => `<option value="${prio}">${prio}</option>`).join("")}
        `;
    }
}

// 3. Filters projects based on active inputs
function applyFilters() {
    const filtered = allProjects.filter(project => {
        const matchesTitle = !filters.title || 
            (project.ProjectName && project.ProjectName.toLowerCase().includes(filters.title.toLowerCase()));

        const matchesDept = !filters.department || 
            project.Department === filters.department;

        const matchesPriority = !filters.priority || 
            project.priority === filters.priority;

        return matchesTitle && matchesDept && matchesPriority;
    });

    currentPage = 1;
    renderProjects(filtered);
}

// 4. Fetch data and trigger initial setup
async function fetchData() {
    try {
        const res = await fetch("https://674e84f1635bad45618eebc1.mockapi.io/api/v1/projects");
        const data = await res.json();
        allProjects = data;

        populateDropdowns(allProjects); // Populates the select tags with data
        currentPage = 1;
        renderProjects(allProjects);
    } catch (error) {
        console.error("Error fetching projects:", error);
    }
}

// Event Listeners
document.querySelector("#titleSearch")?.addEventListener("input", (e) => {
    filters.title = e.target.value.trim();
    applyFilters();
});

document.querySelector("#departmentFilter")?.addEventListener("change", (e) => {
    filters.department = e.target.value;
    applyFilters();
});

document.querySelector("#priorityFilter")?.addEventListener("change", (e) => {
    filters.priority = e.target.value;
    applyFilters();
});

window.addEventListener("load", fetchData);