// Navigation component content
const navContent = `
  <title>Michelle Sentevski</title>
  <div class="profile">
    <img src="/michelle.png" alt="Profile Photo">
    <p>Mechanical engineer, CAD, 3D design, hardware, and project management</p>
  </div>
  <a href="/" id="home-link">Home</a>
  <a href="/experience.html" id="experience-link">Experience</a>
  <a href="/portfolio.html" id="portfolio-link">Portfolio</a>
  <div class="social-links">
    <a href="https://linkedin.com/in/michellesentevski" target="_blank"><i class="fab fa-linkedin"></i></a>
    <a href="mailto:msentevski+contracting@gmail.com"><i class="fas fa-envelope"></i></a>
  </div>
`;

// Function to initialize navigation
export function initializeNav() {
  const nav = document.querySelector('nav');
  if (nav) {
    nav.innerHTML = navContent;
    
    // Set active link based on current page
    const currentPage = window.location.pathname;
    const links = {
      '/': 'home-link',
      '/experience.html': 'experience-link',
      '/portfolio.html': 'portfolio-link'
    };
    
    const activeLink = links[currentPage];
    if (activeLink) {
      document.getElementById(activeLink).setAttribute('aria-current', 'page');
    }
  }
}