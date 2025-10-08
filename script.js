// script.js

document.addEventListener('DOMContentLoaded', () => {
    const hubButtons = document.querySelectorAll('.hub-button');
    const widgets = document.querySelectorAll('.widget');

    hubButtons.forEach(button => {
        button.addEventListener('click', () => {
            const category = button.dataset.category;
            const isAlreadyActive = button.classList.contains('active');

            // Remove 'active' class from all buttons
            hubButtons.forEach(btn => btn.classList.remove('active'));

            // Hide all widgets first with a smooth transition
            widgets.forEach(widget => {
                widget.classList.remove('show');
            });
            
            // If the button wasn't already active, show its widgets
            if (!isAlreadyActive) {
                // Add 'active' class to the clicked button
                button.classList.add('active');

                // Find and show widgets for the clicked category with a staggered delay
                const widgetsToShow = document.querySelectorAll('.' + category);
                widgetsToShow.forEach((widget, index) => {
                    // Use a timeout to create the staggered animation effect
                    setTimeout(() => {
                        widget.classList.add('show');
                    }, index * 80); // 80ms delay between each widget appearing
                });
            }
        });
    });

    // Optional: Programmatically click the 'My Profiles' button on page load
    // to show something by default.
    const defaultButton = document.querySelector('.hub-button[data-category="profiles"]');
    if (defaultButton) {
        defaultButton.click();
    }
});