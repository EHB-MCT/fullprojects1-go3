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
