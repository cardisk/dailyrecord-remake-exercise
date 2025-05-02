document.addEventListener('DOMContentLoaded', () => {
    const dropdownTriggers = document.querySelectorAll('.dropdown-hover-trigger');

    dropdownTriggers.forEach(function(dropdown) {
        const dropdownToggle = dropdown.querySelector('.dropdown-toggle');

        dropdown.addEventListener('mouseenter', () => {
            bootstrap.Dropdown.getOrCreateInstance(dropdownToggle).show();
        });

        dropdown.addEventListener('mouseleave', () => {
                bootstrap.Dropdown.getOrCreateInstance(dropdownToggle).hide();
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const primaryNavbar = document.getElementById('primaryNavbar');
    const secondaryNavbar = document.getElementById('secondaryNavbar');

    const show = () => {
        console.log(window.scrollY);
        if (window.scrollY > 50) {
            primaryNavbar.classList.add('d-none');
            secondaryNavbar.classList.remove('d-none');
        } else {
            primaryNavbar.classList.remove('d-none');
            secondaryNavbar.classList.add('d-none');
        }
    }

    show();

    window.addEventListener('scroll', show);
});