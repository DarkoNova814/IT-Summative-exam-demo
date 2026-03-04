// Home Page CTA button and water usage simulation
document.getElementById("cta-btn").addEventListener("click", () => {
  window.location.href = "dashboard.html";
});

// Simulate dynamic water usage number (demo)
const usage = document.getElementById("water-usage");
const trend = document.getElementById("trend");

// Random demo number for video purposes
const todayUsage = 120;
const averageHouse = 110;
usage.textContent = todayUsage;
trend.textContent = `+${todayUsage - averageHouse}%`;