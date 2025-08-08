const products = [
  {
    id: 1,
    name: "Silki Moisturizer",
    description: "Hydrating moisturizer with natural ingredients.",
    price: 250,
    imageSrc: "images/silki-moisturizer.jpg"
  },
  {
    id: 2,
    name: "Silki Cleanser",
    description: "Gentle facial cleanser for smooth skin.",
    price: 150,
    imageSrc: "images/silki-cleanser.jpg"
  },
  {
    id: 3,
    name: "Silki Sun",
    description: "SPF 30 sunscreen that protects and nourishes.",
    price: 200,
    imageSrc: "images/silki-sun.jpg"
  }
];

function generateProductList() {
  const productListContainer = document.getElementById('product-list');
  if (!productListContainer) return;

  const productHTMLArray = products.map(product => `
    <article class="product-item" id="product-${product.id}">
      <img src="${product.imageSrc}" alt="${product.name} image" loading="lazy" />
      <h3>${product.name}</h3>
      <p>${product.description}</p>
      <p>Price: R${product.price.toFixed(2)}</p>
    </article>
  `);

  productListContainer.innerHTML = productHTMLArray.join('');
}

document.addEventListener('DOMContentLoaded', generateProductList);
