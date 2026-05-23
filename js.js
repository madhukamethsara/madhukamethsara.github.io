const menuIcon = document.getElementById("menu-icon");
const navbar = document.querySelector(".navbar");

menuIcon.addEventListener("click", () => {
    navbar.classList.toggle("active");
    menuIcon.classList.toggle("bx-x");
});

document.querySelectorAll(".navbar a").forEach(link => {
    link.addEventListener("click", () => {
        navbar.classList.remove("active");
        menuIcon.classList.remove("bx-x");
    });
});

function typeText(elementId, text, delay) {
    const targetElement = document.getElementById(elementId);
    let index = 0;

    function typeCharacter() {
        if (index < text.length) {
            targetElement.innerHTML += text[index];
            index++;
            setTimeout(typeCharacter, delay);
        }
    }

    typeCharacter();
}

typeText("greet", "Madhuka Methsara.", 100);

const projects = [
    {
        title: "Smart Cart IoT System",
        icon: "bx bx-cart-alt",
        description: "An IoT-based smart shopping cart system with barcode scanning, RFID cart identification, weight verification, and backend API communication.",
        role: "Handled ESP32 logic, barcode reading, RFID integration, ultrasonic weight measurement, Wi-Fi communication, and backend API requests.",
        tech: ["ESP32", "Arduino", "RFID", "Barcode Scanner", "Hono", "Bun", "Turso", "REST API"],
        github: "#",
        live: "#"
    },
    {
        title: "BlindMatch Project Allocation System",
        icon: "bx bx-group",
        description: "A web-based project allocation platform for students and supervisors with blind review, admin approval, and role-based access.",
        role: "Worked on authentication, backend structure, database relationships, MVC pages, admin features, and supervisor workflows.",
        tech: ["ASP.NET Core MVC", "C#", "EF Core", "MySQL", "Bootstrap"],
        github: "https://github.com/madhukamethsara/project-allocation-system",
        live: "#"
    },
    {
        title: "Voice Note Mobile App",
        icon: "bx bx-microphone",
        description: "A mobile application for recording voice notes, generating transcripts, creating summaries, and organizing academic notes.",
        role: "Worked on Flutter UI, Firebase Authentication, Firestore data structure, routing, and student dashboard screens.",
        tech: ["Flutter", "Dart", "Firebase Auth", "Firestore"],
        github: "https://github.com/madhukamethsara/Voice-note-",
        live: "#"
    },
    {
        title: "Transport Tracking App",
        icon: "bx bx-map",
        description: "A real-time transport tracking mobile application with GPS tracking, commute mode, telemetry upload, and crowd monitoring features.",
        role: "Handled location permissions, GPS tracking logic, telemetry upload flow, and Supabase integration.",
        tech: ["React Native", "Expo", "Supabase", "GPS", "Realtime"],
        github: "#",
        live: "#"
    },
    {
        title: "Learnix E-Tuition System",
        icon: "bx bx-book-open",
        description: "A C# Windows Forms based e-tuition management system with student registration, teacher profiles, enrollment, and material handling.",
        role: "Worked on form design, SQL Server connection, login, registration, profile image upload, and dashboard features.",
        tech: ["C#", ".NET Framework", "Windows Forms", "SQL Server"],
        github: "#",
        live: "#"
    },
    {
        title: "SL Scope Website",
        icon: "bx bx-globe",
        description: "A web project focused on presenting content through a clean frontend interface and hosted online.",
        role: "Worked on frontend layout, styling, website structure, and deployment.",
        tech: ["HTML", "CSS", "JavaScript", "GitHub Pages"],
        github: "#",
        live: "https://www.slscope.live"
    }
];

const projectContainer = document.getElementById("projectContainer");

projects.forEach(project => {
    const card = document.createElement("div");
    card.className = "project-card";

    card.innerHTML = `
        <i class='${project.icon} project-icon'></i>
        <h3>${project.title}</h3>
        <p>${project.description}</p>

        <h4>My Role</h4>
        <p>${project.role}</p>

        <div class="tech-stack">
            ${project.tech.map(tech => `<span>${tech}</span>`).join("")}
        </div>

        <div class="project-links">
            <a href="${project.github}" target="_blank">GitHub</a>
            <a href="${project.live}" target="_blank">Live Demo</a>
        </div>
    `;

    projectContainer.appendChild(card);
});

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.clientHeight;

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");

        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
        }
    });
});