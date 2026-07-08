// ============ ACTIVE SECTION TRACKING ============
function initActiveSectionTracking() {
  const sections = document.querySelectorAll('.content .section');
  const navLinks = document.querySelectorAll('.sidebar-nav a');
  if (!sections.length || !navLinks.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach((link) => {
          link.classList.toggle('active', link.getAttribute('data-section') === id);
        });
      }
    });
  }, { rootMargin: '-45% 0px -45% 0px', threshold: 0 });

  sections.forEach((section) => {
    if (section.id) observer.observe(section);
  });
}

// ============ MOBILE SIDEBAR TOGGLE ============
function initMobileSidebar() {
  const sidebar = document.getElementById('sidebar');
  const toggle = document.getElementById('mobileToggle');
  if (!sidebar || !toggle) return;

  function closeSidebar() {
    sidebar.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.classList.remove('open');
  }

  toggle.addEventListener('click', () => {
    const isOpen = sidebar.classList.toggle('open');
    toggle.classList.toggle('open', isOpen);
    toggle.setAttribute('aria-expanded', String(isOpen));
  });

  sidebar.querySelectorAll('.sidebar-nav a').forEach((link) => {
    link.addEventListener('click', closeSidebar);
  });
}

// ============ FOOTER YEAR ============
function setFooterYear() {
  const el = document.getElementById('year');
  if (el) el.textContent = new Date().getFullYear();
}

// ============ INIT ============
document.addEventListener('DOMContentLoaded', () => {
  initActiveSectionTracking();
  initMobileSidebar();
  setFooterYear();
});
