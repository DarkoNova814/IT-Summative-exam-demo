// Insights Page: AI Insights demo
console.log("AI Insights initialized.");

// Utility: safely update forecast text with fade effect
function updateForecast(newText) {
  const forecast = document.querySelector('.cards-container .card:nth-child(3) p');
  if (!forecast) {
    console.warn("Forecast element not found.");
    return;
  }

  // Fade out
  forecast.style.transition = "opacity 0.3s ease";
  forecast.style.opacity = 0;

  setTimeout(() => {
    forecast.textContent = newText;

    // Fade back in
    forecast.style.opacity = 1;
  }, 300);
}

// Example: simulate dynamic prediction updates
setTimeout(() => {
  updateForecast("Predicted water usage for the month: 3,400 liters (updated)");
}, 2000);

setTimeout(() => {
  updateForecast("AI projects a 5% reduction if tips are applied");
}, 5000);