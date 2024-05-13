// Add back-to-top button

// Create/style button
const button = document.createElement('button');
button.classList.add('back-to-top');

// Create button SVG
const svgElement = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
svgElement.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
svgElement.setAttribute('height', '2em');
svgElement.setAttribute('viewBox', '0 0 448 512');

// Create button SVG path
const pathElement = document.createElementNS('http://www.w3.org/2000/svg', 'path');
pathElement.setAttribute('d', 'M246.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L224 109.3 361.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160zm160 352l-160-160c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L224 301.3 361.4 438.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3z');

// Merge elements
svgElement.append(pathElement); button.append(svgElement);
document.body.append(button);

function fadeIn(el, duration) {
    if (el.classList.contains('done')) return;
    el.classList.add('done'); el.style.opacity = 0;
    let last = +new Date();
    const tick = () => {
        el.style.opacity = +el.style.opacity + (new Date() - last) / duration;
        last = +new Date();    
        if (+el.style.opacity < 1) 
            (window.requestAnimationFrame && requestAnimationFrame(tick)) ||
                setTimeout(tick, 16);
        else el.style.display = 'block';
    };
    tick();
}

function fadeOut(el, duration) {
    if (!el.classList.contains('done')) return;
    el.classList.remove('done'); el.style.opacity = 1;
    let last = +new Date();
    const tick = () => {
        el.style.opacity = +el.style.opacity - (new Date() - last) / duration;
        last = +new Date();
        if (+el.style.opacity > 0)
            (window.requestAnimationFrame && requestAnimationFrame(tick)) ||
                setTimeout(tick, 16);
        else el.style.display = 'none';
    };
    tick();
}

function scrollToTop() {
    const c = document.documentElement.scrollTop || document.body.scrollTop;
    if (c > 0) {
        window.requestAnimationFrame(scrollToTop);
        window.scrollTo(0, c - c / 8);
    }
}
button.addEventListener('click', scrollToTop);
  
window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    if (scrollTop > 0) fadeIn(button, 500);
    else fadeOut(button, 500);
});