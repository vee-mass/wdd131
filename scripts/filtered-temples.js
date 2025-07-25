
const currentYearSpan = document.getElementById('currentyear');
if (currentYearSpan) {
  currentYearSpan.textContent = new Date().getFullYear();
}

const lastModifiedSpan = document.getElementById('lastmodified');
if (lastModifiedSpan) {
  lastModifiedSpan.textContent = document.lastModified;
}

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Adelaide Austrailia",
    location: "Marden, South Australia, Australia",
    dedicated: "2000, June, 15",
    area: 343554,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/adelaide-australia/400x250/adelaide-australia-temple-lds-856093-wallpaper.jpg",
  },
  {
    templeName: "Seoul Korea Temple",
    location: "Seoul, Seoul-teukbyeolsi, South Korea",
    dedicated: "1985, December, 14",
    area: 223456,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/seoul-korea/400x250/seoul-korea-temple-lds-424784-wallpaper.jpg",
  },
  {
    templeName: "Belem Brazil Temple",
    location: "Belém, Para, Brazil",
    dedicated: "2022, November, 20",
    area: 112334,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/belem-brazil/400x250/belem_brazil_temple_exterior.jpg",
  },
];

function displayTemples(temples) {
  const container = document.getElementById('templesContainer');
  container.innerHTML = ''; 

  temples.forEach(temple => {
    const figure = document.createElement('figure');

    const img = document.createElement('img');
    img.src = temple.imageUrl;
    img.alt = `${temple.templeName} Temple`;
    img.loading = 'lazy';

    const caption = document.createElement('figcaption');
    caption.innerHTML = `
      <h3>${temple.templeName}</h3>
      <p><strong>Location:</strong> ${temple.location}</p>
      <p><strong>Dedicated:</strong> ${temple.dedicated || 'Unknown'}</p>
      <p><strong>Area:</strong> ${temple.area || 'N/A'} sq ft</p>
    `;

    figure.appendChild(img);
    figure.appendChild(caption);
    container.appendChild(figure);
  });
}

displayTemples(temples);

document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    const filter = link.textContent.toLowerCase();
    let filteredTemples = temples;

    switch (filter) {
      case 'old':
        filteredTemples = temples.filter(t => {
          const year = parseInt(t.dedicated?.split(',')[0]);
          return year < 1900;
        });
        break;
      case 'new':
        filteredTemples = temples.filter(t => {
          const year = parseInt(t.dedicated?.split(',')[0]);
          return year >= 2000;
        });
        break;
      case 'large':
        filteredTemples = temples.filter(t => t.area >= 90000);
        break;
      case 'small':
        filteredTemples = temples.filter(t => t.area < 10000);
        break;
      default:
        filteredTemples = temples;
    }

    displayTemples(filteredTemples);

    document.querySelector('main h2').textContent = link.textContent;
  });
});



