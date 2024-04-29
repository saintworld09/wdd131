// getdates.js

// Get the current year
const currentYear = new Date().getFullYear();

// Update the copyright year in the footer
const copyrightYearSpan = document.getElementById('currentyear');
if (copyrightYearSpan) {
    copyrightYearSpan.textContent = currentYear;
}

// Get the last modified date of the document
const lastModifiedParagraph = document.getElementById('lastModified');
if (lastModifiedParagraph) {
    lastModifiedParagraph.textContent = document.lastModified;
}
