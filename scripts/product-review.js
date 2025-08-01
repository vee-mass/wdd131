const products = [
  { id: "prod1", name: "SuperWidget" },
  { id: "prod2", name: "MegaGadget" },
  { id: "prod3", name: "UltraTool" },
  { id: "prod4", name: "HyperDevice" }
];

function populateProductOptions() {
  const select = document.getElementById('productName');

  products.forEach(product => {
    const option = document.createElement('option');
    option.value = product.id;
    option.textContent = product.name;
    select.appendChild(option);
  });
}

document.addEventListener('DOMContentLoaded', populateProductOptions);

document.addEventListener('DOMContentLoaded', () => {
  let reviewCount = localStorage.getItem('reviewCount');

  if (!reviewCount) {
    reviewCount = 0;
  } else {
    reviewCount = parseInt(reviewCount, 10);
  }

  reviewCount++;

  localStorage.setItem('reviewCount', reviewCount);

  const countDisplay = document.getElementById('reviewCountDisplay');
  if (countDisplay) {
    countDisplay.textContent = `Number of reviews submitted: ${reviewCount}`;
  }
});
