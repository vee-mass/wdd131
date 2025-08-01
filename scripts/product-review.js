document.addEventListener('DOMContentLoaded', () => {
  let reviewCount = localStorage.getItem('reviewCount');
  reviewCount = reviewCount ? parseInt(reviewCount, 10) : 0;
  reviewCount++;
  localStorage.setItem('reviewCount', reviewCount);

  const countDisplay = document.getElementById('reviewCountDisplay');
  if (countDisplay) {
    countDisplay.textContent = `Number of reviews submitted: ${reviewCount}`;
  }
});