// JavaScript to dynamically populate the product select options
document.addEventListener('DOMContentLoaded', function () {
    const products = [
        {
            id: 'fc-1888',
            name: "flux capacitor",
            avgRating: 4.5
        },
        {
            id: 'fc-2050',
            name: "power laces",
            avgRating: 4.7
        },
        {
            id: 'fs-1987',
            name: "time circuits",
            avgRating: 3.5
        },
        {
            id: 'ac-2000',
            name: "low voltage reactor",
            avgRating: 3.9
        },
        {
            id: 'jj-1969',
            name: "warp equalizer",
            avgRating: 5.0
        }
    ];

    const productSelect = document.getElementById('productName');
    products.forEach(product => {
        const option = document.createElement('option');
        option.value = product.id;
        option.textContent = product.name;
        productSelect.appendChild(option);
    });
});

// Ensure the DOM is fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {
    // Event listeners for navigation
    document.getElementById('home').addEventListener('click', () => displayTemples());
    document.getElementById('old').addEventListener('click', () => displayTemples(temple => new Date(temple.dedicated).getFullYear() < 1900));
    document.getElementById('new').addEventListener('click', () => displayTemples(temple => new Date(temple.dedicated).getFullYear() > 2000));
    document.getElementById('large').addEventListener('click', () => displayTemples(temple => temple.area > 90000));
    document.getElementById('small').addEventListener('click', () => displayTemples(temple => temple.area < 10000));
  
    // Set current year and last modified date
    document.getElementById('current-year').textContent = new Date().getFullYear();
    document.getElementById('last-modified').textContent = document.lastModified;
  });
