document.addEventListener('DOMContentLoaded', () => {

    // Initialize Isotope for filtering
    const isotope = new Isotope('.portfolio-grid', {
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows',
    })
    
   // Initialize Isotope for filtering
   const Isotope = new Isotope('.certifications-grid', {
    itemSelector: '.certifications-item',
    layoutMode: 'fitRows'
})

// Filter buttons
const filterButtons = document.querySelectorAll('.filter-btn');
filterButtons.forEach(button => {
    button.addEventListener('click', function () {
        const filterValue = this.getAttribute('data-filter');
        isotope.arrange({ filter: filterValue });

        // Update active button
        filterButtons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
    });
});
});	

    // Initialize Isotope for filtering
    const iso = new Isotope('.service-grid', {
        itemSelector: '.service-item',
        layoutMode: 'fitRows'})

    // Filter buttons
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', function () {
            const filterValue = this.getAttribute('data-filter');
            iso.arrange({ filter: filterValue });

            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
        });
    });
;	
    // Smooth Scroll for Navbar Links
    document.querySelectorAll('.nav-links a').forEach(anchor => {
        anchor.add()
	});
;
