document.addEventListener("DOMContentLoaded", () => {
    const searchBtn = document.getElementById("search-btn");
    const searchInput = document.getElementById("search-input");

    // Toggle search bar display when the search icon is clicked
    searchBtn.addEventListener("click", () => {
        searchInput.classList.toggle("hidden");
        if (!searchInput.classList.contains("hidden")) {
            searchInput.focus();
        }
    });

    // Execute search when typing in the search input
    searchInput.addEventListener("input", () => {
        const query = searchInput.value.trim().toLowerCase();
        if (query === "") return;

        // Search through readable text elements on the current page
        const searchableElements = document.querySelectorAll("h1, h2, h3, h4, p, li, code");

        for (const element of searchableElements) {
            // Ignore text inside the search bar itself
            if (searchInput.contains(element)) continue;

            if (element.textContent.toLowerCase().includes(query)) {
                // Automatically scroll down to the first match
                element.scrollIntoView({ behavior: "smooth", block: "center" });
                break; // Stop after finding the first match
            }
        }
    });
});

//Self care reminder to take a break
setTimeout(() => {
    alert("Hey! Remember to take a break and stretch, Rome wasn't built in a day! Your health matters!");
}, 3600000); // 1 hour in milliseconds