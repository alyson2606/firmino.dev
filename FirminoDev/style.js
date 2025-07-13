document.addEventListener('DOMContentLoaded', () => {
  if (typeof AOS !== 'undefined') {
    AOS.init();
  }

  const toggleBtn = document.getElementById('toggleTheme');
  toggleBtn.addEventListener('click', () => {
    const html = document.documentElement;
    const currentTheme = html.getAttribute('data-bs-theme');
    const icon = toggleBtn.querySelector('i');
    const nav = document.querySelector('navbarNav');
    const footer = document.querySelector('footer');

    if (currentTheme === 'dark') {
      html.setAttribute('data-bs-theme', 'light');
      document.body.classList.replace('bg-dark', 'bg-light');
      document.body.classList.replace('text-light', 'text-dark');
      nav.classList.replace('navbar-dark', 'navbar-light');
      footer.classList.replace('bg-dark', 'bg-light');
      footer.classList.replace('text-light', 'text-dark');
      icon.classList.replace('bi-moon', 'bi-sun');
    } else {
      html.setAttribute('data-bs-theme', 'dark');
      document.body.classList.replace('bg-light', 'bg-dark');
      document.body.classList.replace('text-dark', 'text-light');
      nav.classList.replace('navbar-light', 'navbar-dark');
      footer.classList.replace('bg-light', 'bg-dark');
      footer.classList.replace('text-dark', 'text-light');
      icon.classList.replace('bi-sun', 'bi-moon');
    }
  });
});