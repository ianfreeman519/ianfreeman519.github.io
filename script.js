function showSection(sectionId) {
    // Default to 'home' section if sectionId is empty or '#home'
    if (!sectionId || sectionId === 'home') {
        sectionId = 'home';
    }

    // Hide all content sections
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.style.display = 'none';
    });
    
    // Show the selected content section
    const selectedSection = document.getElementById(sectionId);
    selectedSection.style.display = 'block';
}

// Check the hash on page load and display the correct section
document.addEventListener('DOMContentLoaded', () => {
    const currentHash = window.location.hash.substring(1);
    showSection(currentHash);
});
