// Insert footer

const onLoadObserver = new MutationObserver(() => {

    // Exit if not loaded
    const shields = document.querySelectorAll('article#main > div:nth-child(2) img');
    if (shields.length === 0) return;

    // Append footer
    const footer = document.createElement('div');
    fetch('assets/html/footer.html')
        .then(response => response.text()).then(html => {
            footer.innerHTML = html;
            const article = document.querySelector('article');
            article.insertBefore(footer, article.lastElementChild);
        });

    // Disconnect observer
    onLoadObserver.disconnect();

});

onLoadObserver.observe(document.body, { childList: true, subtree: true });
