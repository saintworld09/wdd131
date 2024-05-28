// school-project.js

// JavaScript code for adding dynamic elements and interactivity

// Example: Display current date in footer
const currentDate = new Date();
const footer = document.querySelector('footer');
footer.innerHTML += `<p>Current Date: ${currentDate.toDateString()}</p>`;
