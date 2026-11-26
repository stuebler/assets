document.addEventListener('DOMContentLoaded', async () => {
    const footerContainer = document.getElementById('global-footer');

    if (footerContainer) {
        const response = await fetch(
            'https://assets.stuebler.org/footer.html'
        );

        footerContainer.innerHTML = await response.text();
    }
});
