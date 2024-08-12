document.addEventListener('DOMContentLoaded', function () {
    const sidebar = document.querySelector('.sidebar');
    const logo = sidebar.querySelector('.logo img');

    // Add click event to the logo to toggle the sidebar
    logo.addEventListener('click', function () {
        sidebar.classList.toggle('expanded');
    });
});
