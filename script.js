function showSection() {
    const active = location.hash === '#research' ? 'research' : 'home';
    for (const section of document.querySelectorAll('.content-section')) {
        section.hidden = section.id !== active;
        if (section.hidden) {
            section.querySelectorAll('video').forEach(video => video.pause());
        }
    }
}

async function loadCopy(name) {
    const container = document.getElementById(name + '-copy');
    try {
        const response = await fetch('content/' + name + '.html');
        if (!response.ok) throw new Error('HTTP ' + response.status);
        container.innerHTML = await response.text();
    } catch (error) {
        console.error(error);
        container.textContent = 'This section could not be loaded. Please refresh to try again.';
    }
}

window.addEventListener('hashchange', showSection);
showSection();
loadCopy('home');
loadCopy('research');
