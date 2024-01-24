 document.addEventListener("DOMContentLoaded", function () {
        // Get carousel container and items
        const carousel = document.querySelector('.caroussel');
        const items = document.querySelectorAll('.item');
        const arrowLeft = document.querySelector('.arrowLeft');
        const arrowRight = document.querySelector('.arrowRight');

        // Set initial index
        let currentIndex = 0;

        // Function to handle arrow click
        function handleArrowClick(direction) {
            const itemWidth = items[0].offsetWidth;

            if (direction === 'left') {
                currentIndex = Math.max(0, currentIndex - 1);
            } else {
                currentIndex = Math.min(items.length - 1, currentIndex + 1);
            }

            // Manually scroll to the selected item
            carousel.scrollLeft = currentIndex * itemWidth;

            // Ensure the currentIndex reflects the actual scroll position
            currentIndex = Math.floor(carousel.scrollLeft / itemWidth);

            // Update arrow visibility based on scroll position
            updateArrowVisibility();
        }

        // Function to update arrow visibility
        function updateArrowVisibility() {
            const isAtLeftEdge = carousel.scrollLeft === 0;
            const isAtRightEdge = carousel.scrollLeft + carousel.clientWidth === carousel.scrollWidth;

            // Set display style for arrowLeft
            arrowLeft.style.display = isAtLeftEdge ? 'none' : 'block';

            // Set display style for arrowRight
            arrowRight.style.display = isAtRightEdge ? 'none' : 'block';
        }

        // Add click event listeners to arrow buttons
        document.querySelector('.arrowLeft').addEventListener('click', () => handleArrowClick('left'));
        document.querySelector('.arrowRight').addEventListener('click', () => handleArrowClick('right'));

        // Add scroll event listener to update arrow visibility
        carousel.addEventListener('scroll', updateArrowVisibility);

        // Initially update arrow visibility
        updateArrowVisibility();
    });