// Modify shields, insert footer

const onLoadObserver = new MutationObserver(() => {

    // Exit if not loaded
    const shields = document.querySelectorAll('article#main > div:nth-child(2) img');
    if (shields.length === 0) return;

    // Change shield styles to for-the-badge
    shields.forEach((img) => {        
        const src = img.getAttribute('src');
        img.setAttribute('src', src.replace(/style=[^&]*/g, 'style=for-the-badge'));
    });

    // Append footer
    const footer = document.createElement('div');
    fetch('sections/footer.html')
        .then(response => response.text()).then(html => {
            footer.innerHTML = html;
            const article = document.querySelector('article');
            article.insertBefore(footer, article.lastElementChild);
        });

    // Disconnect observer
    onLoadObserver.disconnect();

});

onLoadObserver.observe(document.body, { childList: true, subtree: true });
