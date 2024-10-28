document.getElementById('about-button').addEventListener('click', function(e) {
    e.preventDefault(); // Prevent default anchor click behavior

    const aboutSection = document.getElementById('about');
    aboutSection.scrollIntoView({
        behavior: 'smooth', // Enables smooth scrolling
        block: 'start' // Aligns the top of the section to the top of the viewport
    });
});
