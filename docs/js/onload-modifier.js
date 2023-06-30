// Modify shield styles

const onLoadObserver = new MutationObserver(() => {

    // Exit if not loaded
    const shields = document.querySelectorAll('article#main > div:nth-child(2) img');
    if (shields.length == 0) return;

    // Change shield styles to for-the-badge
    shields.forEach((img) => {
        const src = img.getAttribute('src');
        img.setAttribute('src', src.replace(/style=[^&]*/g, 'style=for-the-badge'));
    });

    // Disconnect observer
    onLoadObserver.disconnect();

});

onLoadObserver.observe(document.body, { childList: true, subtree: true });
