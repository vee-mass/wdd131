document.addEventListener("DOMContentLoaded", () => {
  const temp = parseFloat(document.getElementById("temp").textContent);
  const speed = parseFloat(document.getElementById("speed").textContent);
  const chillElement = document.getElementById("chill");

  function calculateWindChill(t, s) {
    return (13.12 + 0.6215 * t - 11.37 * Math.pow(s, 0.16) + 0.3965 * t * Math.pow(s, 0.16)).toFixed(1);
  }

  if (temp <= 10 && speed > 4.8) {
    chillElement.textContent = `${calculateWindChill(temp, speed)}°C`;
  } else {
    chillElement.textContent = "N/A";
  }

  document.getElementById("year").textContent = new Date().getFullYear();
  document.getElementById("lastModified").textContent = document.lastModified;
});
