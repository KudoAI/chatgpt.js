// Add listeners to language selector

// Init elements
const languageMenu = document.getElementById('language-menu');
const languageSelector = document.getElementById('language-selector');
languageMenu.style.display = 'none'; // hide on page load

// Add hover listeners to show/hide menu
let hideTimeout; // to account for gap between button & menu
languageSelector.addEventListener('mouseenter', () => {
    clearTimeout(hideTimeout); languageMenu.style.display = 'block'; });
languageSelector.addEventListener('mouseleave', () => {
    hideTimeout = setTimeout(() => { languageMenu.style.display = 'none'; }, 55); });
languageMenu.addEventListener('mouseenter', () => {
    clearTimeout(hideTimeout); languageMenu.style.display = 'block'; });
languageMenu.addEventListener('mouseleave', () => {
    clearTimeout(hideTimeout); hideTimeout = setTimeout(() => {
        languageMenu.style.display = 'none'; }, 55);
});

// Add click listener to dismiss menu
document.querySelectorAll('.dropdown-link').forEach((link) => {
    link.addEventListener('click', (event) => {
        languageMenu.style.display = 'none';
});});
