const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Salt Lake",
    location: "Salt Lake City, Utah, United States",
    dedicated: "1893, April, 6",
    area: 253015,
    imageUrl: "https://www.churchofjesuschrist.org/imgs/92c33bcbf9cf85483e008d6871f8ced5f6d7b661/full/320%2C/0/default"
  },
  {
    templeName: "San Diego California",
    location: "San Diego, California, United States",
    dedicated: "1993, April, 30",
    area: 72000,
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/2019_San_Diego_LDS_Temple_1.jpg/800px-2019_San_Diego_LDS_Temple_1.jpg"
  },
  {
    templeName: "Accra Ghana",
    location: "Accra, Ghana",
    dedicated: "2004, January, 11",
    area: 17300,
    imageUrl: "https://www.churchofjesuschrist.org/imgs/ea817531789318cff9d81198cdc39923708b7b79/full/320%2C/0/default"
  }
];

// Function to create temple cards
function createTempleCard(temple) {
  const card = document.createElement('div');
  card.className = 'temple-card';

  const img = document.createElement('img');
  img.src = temple.imageUrl;
  img.alt = temple.templeName;
  img.loading = 'lazy';
  card.appendChild(img);

  const name = document.createElement('h2');
  name.textContent = temple.templeName;
  card.appendChild(name);

  const location = document.createElement('p');
  location.textContent = `Location: ${temple.location}`;
  card.appendChild(location);

  const dedicated = document.createElement('p');
  dedicated.textContent = `Dedicated: ${temple.dedicated}`;
  card.appendChild(dedicated);

  const area = document.createElement('p');
  area.textContent = `Area: ${temple.area} sq ft`;
  card.appendChild(area);

  return card;
}

// Function to display temples
function displayTemples(filterFn = () => true) {
  const container = document.getElementById('temple-container');
  container.innerHTML = '';
  temples.filter(filterFn).forEach(temple => {
    const card = createTempleCard(temple);
    container.appendChild(card);
  });
}

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

  // Display all temples on initial load
  displayTemples();
});
