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
// Function to calculate windchill factor
function calculateWindChill(temperature, windSpeed) {
    // Constants for windchill calculation
    const metricUnits = true; // Set to true for metric units (°C), false for imperial (°F)
    const windSpeedFactor = metricUnits ? 3.6 : 1.60934; // Convert wind speed to km/h or mph

    // Check if conditions are met for wind chill calculation
    if ((metricUnits && temperature <= 10 && windSpeed > 4.8) || (!metricUnits && temperature <= 50 && windSpeed > 3)) {
        // Calculate windchill factor using formula
        const windChill = 13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16);
        return windChill.toFixed(2); // Return windchill rounded to 2 decimal places
    } else {
        return "N/A"; // Return "N/A" if conditions are not met
    }
}

// Function to display windchill factor in the "Weather" section
function displayWindChill() {
    // Static values for temperature and wind speed (replace with real-time data in the future)
    const temperature = 15; // Example temperature in Celsius
    const windSpeed = 10; // Example wind speed in km/h

    // Call calculateWindChill function to get windchill factor
    const windChill = calculateWindChill(temperature, windSpeed);

    // Display windchill factor in the "Weather" section
    const weatherElement = document.querySelector('.weather');
    weatherElement.innerHTML += `<p>Windchill: ${windChill}℃</p>`; // Adjust units as needed
}

// Call displayWindChill function when the page loads
window.addEventListener('load', displayWindChill);
