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
	const carousel = document.querySelector(".caroussel");
	const items = document.querySelectorAll(".item");
	const arrowLeft = document.querySelector(".arrowLeft");
	const arrowRight = document.querySelector(".arrowRight");

	// Set initial index
	let currentIndex = 0;

	//Function to handle arrow click
	function handleArrowClick(direction) {
		const itemWidth = items[0].offsetWidth;

		if (direction === "left") {
			currentIndex = Math.max(0, currentIndex - 1);
		} else {
			currentIndex = Math.min(items.length - 1, currentIndex + 1);
		}

		// Calculate the scroll position for the selected item
		const scrollPosition = currentIndex * itemWidth;

		// Use smooth scroll behavior
		carousel.scrollTo({
			left: scrollPosition,
			behavior: "smooth",
		});

		// Ensure the currentIndex reflects the actual scroll position
		currentIndex = Math.floor(scrollPosition / itemWidth);

		// Update arrow visibility based on scroll position
		setTimeout(updateArrowVisibility, 150);
	}

	// Function to update arrow visibility
	function updateArrowVisibility() {
		let isAtLeftEdge = carousel.scrollLeft === 0;
		let isAtRightEdge =
			carousel.scrollLeft + carousel.clientWidth === carousel.scrollWidth;

		arrowLeft.classList.toggle("arrowHidden", isAtLeftEdge);
		arrowLeft.classList.toggle("arrowVisible", !isAtLeftEdge);

		arrowRight.classList.toggle("arrowHidden", isAtRightEdge);
		arrowRight.classList.toggle("arrowVisible", !isAtRightEdge);
	}

	// Add click event listeners to arrow buttons
	document
		.querySelector(".arrowLeft")
		.addEventListener("click", () => handleArrowClick("left"));
	document
		.querySelector(".arrowRight")
		.addEventListener("click", () => handleArrowClick("right"));
});

window.addEventListener("DOMContentLoaded", (event) => {
	const paragraphs = document.querySelectorAll(".item p");

	paragraphs.forEach((paragraph) => {
		// Check if the content doesn't overflows
		if (paragraph.scrollHeight <= paragraph.clientHeight) {
			paragraph.classList.add("hide-scrollbar");
		}
	});

	const container = document.getElementById("container");

	// Check if the container element exists
	if (container) {
		// Scroll to the container
		container.scrollIntoView({ behavior: "smooth", block: "center" });
	}
});
