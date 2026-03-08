// Handle menu clicks
const links = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('.section');

links.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = link.dataset.section;

        // Remove active class from all sections
        sections.forEach(section => section.classList.remove('active'));

        // Add active class to target section
        document.getElementById(target).classList.add('active');
    });
});
