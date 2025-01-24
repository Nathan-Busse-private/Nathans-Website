document.addEventListener('DOMContentLoaded', () => {

/* Service section */
    // Initialize Isotope for filtering
    const service_isotope = new service_Isotope('.service-grid', {
        itemSelector: '.service-item',
        layoutMode: 'fitRows',});

    // Filter buttons
    const service_filterButtons = document.querySelectorAll('.service-filter-btn');
    service_filterButtons.forEach(button => {
        button.addEventListener('service-click', function () {
            const filterValue = this.getAttribute('.service-data-filter');
            service_isotope.arrange({ filter: filterValue });

            // Update active button
            service_filterButtons.forEach(btn => btn.classList.remove('service-active'));
            this.classList.add('service-active');
        });
    });
});


    // Smooth Scroll for Navbar Links
    document.querySelectorAll('.service-nav-links a').forEach(anchor => {
        anchor.add()
	});

