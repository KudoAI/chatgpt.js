// Add parallax + fade to scroll

document.addEventListener('DOMContentLoaded', () => {
    const cover = document.querySelector('.cover');
    const coverHeight = cover.offsetHeight;
    const coverMain = document.querySelector('.cover-main');
    window.addEventListener('scroll', () => {
        const coverRect = cover.getBoundingClientRect();
        const opacity = 1 - Math.abs(coverRect.top) / coverHeight;
        const parallaxOffset = coverRect.top * -0.15;
        cover.style.opacity = opacity;
        coverMain.style.transform = `translateY(${ parallaxOffset }px)`;
    });
});
