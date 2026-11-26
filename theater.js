function toggleTheaterMode(button) {
    const card = button.closest('.connection-card');

    card.classList.toggle('theater-mode');

    if (card.classList.contains('theater-mode')) {
        button.textContent = '❌ Vollen Modus beenden';
    } else {
        button.textContent = '🎬 Voller Modus';
    }

    // Darstellung des Buttons neu berechnen lassen
    button.style.display = 'none';
    button.offsetHeight;
    button.style.display = '';
}
