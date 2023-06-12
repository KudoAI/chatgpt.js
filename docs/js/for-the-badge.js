// Convert shield styles from `flat-square` to `for-the-badge`

const observer = new MutationObserver(function(mutationsList) {
	const shieldsDiv = document.querySelector('article#main > div:nth-child(2)')
	if (shieldsDiv) {
		shieldsDiv.innerHTML = shieldsDiv.innerHTML.replace(/flat-square/g, 'for-the-badge')
		observer.disconnect()
	}
}) ; observer.observe(document.body, { childList: true, subtree: true })
