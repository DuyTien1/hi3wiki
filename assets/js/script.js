document.addEventListener("DOMContentLoaded", function () {
	const searchButton = document.getElementById("searchButton");
	const searchForm = document.getElementById("searchForm");

	searchButton.addEventListener("click", () => {
		searchButton.classList.toggle("active");
		searchForm.classList.toggle("active");
		if (searchForm.classList.contains("active")) {
			searchForm.querySelector("input").focus();
		}
	});

	document.addEventListener("click", (e) => {
		if (!searchButton.contains(e.target) && !searchForm.contains(e.target)) {
			searchButton.classList.remove("active");
			searchForm.classList.remove("active");
		}
	});

	searchForm.addEventListener("submit", (e) => {
		e.preventDefault();
		const searchTerm = searchForm.querySelector("input").value;
		if (searchTerm.trim()) {
			// Add your search logic here
			console.log("Searching for:", searchTerm);
			searchForm.querySelector("input").value = ""; // Clear input
			searchButton.classList.remove("active");
			searchForm.classList.remove("active");
		}
	});
});
