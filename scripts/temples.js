// Function to update the copyright year dynamically
function updateCopyrightYear() {
    var currentYear = new Date().getFullYear();
    document.getElementById("currentyear").textContent = currentYear;
}

// Function to display the last modified date dynamically
function displayLastModifiedDate() {
    var lastModified = new Date(document.lastModified);
    var options = { year: 'numeric', month: 'long', day: 'numeric' };
    var formattedDate = lastModified.toLocaleDateString('en-US', options);
    document.getElementById("lastModified").textContent = "Last Modified: " + formattedDate;
}

// Function to toggle navigation menu for mobile view
function toggleNavMenu() {
    var navMenu = document.querySelector('nav ul');
    navMenu.classList.toggle('show');
}

// Event listener for hamburger button click
document.getElementById('hamburger').addEventListener('click', function() {
    toggleNavMenu();
});

// Call the functions to initialize
updateCopyrightYear();
displayLastModifiedDate();
