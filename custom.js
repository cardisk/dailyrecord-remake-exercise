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