document.getElementById('about-button').addEventListener('click', function(e) {
    e.preventDefault(); // Prevent default anchor click behavior

    const aboutSection = document.getElementById('about');
    aboutSection.scrollIntoView({
        behavior: 'smooth', // Enables smooth scrolling
        block: 'start' // Aligns the top of the section to the top of the viewport
    });
});

document.getElementById('scrollToProject').addEventListener('click', function (event) {
    event.preventDefault(); // Prevent default anchor behavior
    const projectSection = document.getElementById('project');
    projectSection.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to the projects section
});
