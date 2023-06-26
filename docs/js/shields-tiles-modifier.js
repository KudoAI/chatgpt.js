// Modify shield + showcase promo tile attributes

const onLoadObserver = new MutationObserver(() => {

    // Modify shields
    const shields = document.querySelectorAll('article#main > div:nth-child(2) img');
    if (shields) { // change styles to for-the-badge
        shields.forEach((img) => {
            img.setAttribute('src', img.getAttribute('src')
                .replace(/(style="[^"]*")/g, 'style="for-the-badge"')
    );});}

	// Modify showcase promo tiles
    const promoTiles = document.querySelectorAll('img[src*="promo-tile"]');
    if (promoTiles.length > 0) // change widths to 1111
        promoTiles.forEach((img) => { img.setAttribute('width', '1111'); });

    // Disconnect observer
    if (shields.length > 0 || promoTiles.length > 0) onLoadObserver.disconnect();

}) ; onLoadObserver.observe(document.body, { childList: true, subtree: true });
