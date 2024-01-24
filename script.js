function toggleDiv(...args) {
	let checkbox = document.getElementById(args[0]);
	let hiddenDiv = document.getElementById(args[1]);
	// If the checkbox is checked, show the div; otherwise, hide it
	if (checkbox.checked) {
		hiddenDiv.style.display = "block";
		for (let i = 2; i < args.length; i++) {
			let otherDiv = document.getElementById(args[i]);
			otherDiv.style.display = "none";
		}
	} else {
		hiddenDiv.style.display = "none";
	}
}
function uncheckCheckbox(...args) {
	for (const element of args) {
		// Get the checkbox element by its ID
		let checkbox = document.getElementById(element);
		// Uncheck the checkbox
		checkbox.checked = false;
	}
}
document.addEventListener("DOMContentLoaded", function () {
    // Get carousel container and items
    const carousel = document.querySelector('.caroussel');
    const items = document.querySelectorAll('.item');

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
    }

    // Add click event listeners to arrow buttons
    document.querySelector('.arrowLeft').addEventListener('click', () => handleArrowClick('left'));
    document.querySelector('.arrowRight').addEventListener(