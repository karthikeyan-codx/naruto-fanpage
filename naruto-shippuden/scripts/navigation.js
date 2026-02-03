/**
 * Navigation component for multi-page site
 */

// Naruto Shippuden ID constant
const NARUTO_SHIPPUDEN_ID = 1735;

/**
 * Initialize navigation on page load
 */
function initNavigation() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
            link.classList.add('active');
        }
    });
}

/**
 * Create navigation HTML
 * @returns {string} Navigation HTML
 */
function createNavigationHTML() {
    return `
        <nav class="main-nav">
            <div class="nav-container">
                <a href="index.html" class="nav-logo">
                    <span class="logo-text">Naruto Shippuden</span>
                </a>
                <ul class="nav-menu">
                    <li><a href="index.html" class="nav-link">Home</a></li>
                    <li><a href="details.html" class="nav-link">Details</a></li>
                    <li><a href="characters.html" class="nav-link">Characters</a></li>
                    <li><a href="episodes.html" class="nav-link">Episodes</a></li>
                </ul>
            </div>
        </nav>
    `;
}

/**
 * Insert navigation into page
 */
function insertNavigation() {
    const navPlaceholder = document.getElementById('navigation');
    if (navPlaceholder) {
        navPlaceholder.innerHTML = createNavigationHTML();
        initNavigation();
    }
}

// Auto-insert navigation when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', insertNavigation);
} else {
    insertNavigation();
}
