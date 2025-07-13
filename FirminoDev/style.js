document.addEventListener('DOMContentLoaded', () => {
    if (typeof AOS !== 'undefined') {
        AOS.init();
    }

    const html = document.documentElement;
    const toggleBtn = document.getElementById('toggleTheme');
    const icon = toggleBtn.querySelector('i');
    const nav = document.querySelector('.navbar'); // Corrected selector
    const footer = document.querySelector('footer');

    // Function to set the theme and icon
    function setTheme(theme) {
        html.setAttribute('data-bs-theme', theme);
        if (theme === 'dark') {
            document.body.classList.replace('bg-light', 'bg-dark');
            document.body.classList.replace('text-dark', 'text-light');
            nav.classList.replace('navbar-light', 'navbar-dark');
            footer.classList.replace('bg-light', 'bg-dark');
            footer.classList.replace('text-dark', 'text-light');
            icon.classList.replace('bi-sun', 'bi-moon');
        } else {
            document.body.classList.replace('bg-dark', 'bg-light');
            document.body.classList.replace('text-light', 'text-dark');
            nav.classList.replace('navbar-dark', 'navbar-light');
            footer.classList.replace('bg-dark', 'bg-light');
            footer.classList.replace('text-light', 'text-dark');
            icon.classList.replace('bi-moon', 'bi-sun');
        }
    }
<<<<<<< HEAD
  });
=======

    // Set initial theme and icon based on data-bs-theme
    setTheme(html.getAttribute('data-bs-theme'));

    toggleBtn.addEventListener('click', () => {
        const currentTheme = html.getAttribute('data-bs-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
    });
});

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.navbar-nav .nav-link').forEach(function(link) {
        link.addEventListener('click', function() {
            var navbarCollapse = document.getElementById('navbarNav');
            if (window.innerWidth < 992 && navbarCollapse.classList.contains('show')) {
                var bsCollapse = bootstrap.Collapse.getOrCreateInstance(navbarCollapse);
                bsCollapse.hide();
            }
        });
    });

    var closeMenuBtn = document.getElementById('closeMenu');
    if (closeMenuBtn) {
        closeMenuBtn.addEventListener('click', function() {
            var navbarCollapse = document.getElementById('navbarNav');
            var bsCollapse = bootstrap.Collapse.getOrCreateInstance(navbarCollapse);
            bsCollapse.hide();
        });
    }
>>>>>>> 3bbdadc8370cd155a978e2131644455ec430b81e
});