// Add parallax + fade to scroll

document.addEventListener('DOMContentLoaded', () => {

    // Cache cover elements
    const cover = document.querySelector('.cover');
    const coverMain = document.querySelector('.cover-main');

    // Create/append gradient overlay
    const topGradient = document.createElement('div');
    topGradient.classList.add('top-gradient');
    updateTGvisibility(); // since page load can be below fold
    document.body.appendChild(topGradient);

    window.addEventListener('scroll', () => {
        updateTGvisibility();
        const coverRect = cover.getBoundingClientRect();
        const newOpacity = 1 - Math.abs(coverRect.top) / cover.offsetHeight;
        const parallaxOffset = coverRect.top * -0.35;
        cover.style.opacity = newOpacity;
        coverMain.style.transform = `translateY(${ parallaxOffset }px)`;
    });

    function updateTGvisibility() {
        topGradient.style.display = ( // hide/show when fold is 85% at top
            window.scrollY > 0.85 * cover.offsetHeight ? '' : 'none' ); }
});
