
const currentYearSpan = document.getElementById('currentyear');
if (currentYearSpan) {
  currentYearSpan.textContent = new Date().getFullYear();
}

const lastModifiedSpan = document.getElementById('lastmodified');
if (lastModifiedSpan) {
  lastModifiedSpan.textContent = document.lastModified;
}
