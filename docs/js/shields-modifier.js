// Modify shield attributes

const onLoadObserver = new MutationObserver(() => {

    // Modify shields
    const shields = document.querySelectorAll('article#main > div:nth-child(2) img');
    if (shields) { // change styles to for-the-badge
        shields.forEach((img) => {
            img.setAttribute('src', img.getAttribute('src')
                .replace(/(style="[^"]*")/g, 'style="for-the-badge"'));
    });}

    // Disconnect observer
    if (shields.length > 0 || promoTiles.length > 0) onLoadObserver.disconnect();

}) ; onLoadObserver.observe(document.body, { childList: true, subtree: true });
