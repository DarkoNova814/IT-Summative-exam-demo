// Settings Page interactions
const connectBtn = document.getElementById("connect-meter");
const saveReadingBtn = document.getElementById("save-reading");

connectBtn.addEventListener("click", () => {
  alert("Connecting to smart meter... (demo)");
});

saveReadingBtn.addEventListener("click", () => {
  const reading = document.getElementById("manual-reading").value;
  if(reading) {
    alert(`Manual reading saved: ${reading} liters`);
  } else {
    alert("Please enter a value first.");
  }
});

// Notification toggles
const aiAlerts = document.getElementById("ai-alerts");
const weeklySummary = document.getElementById("weekly-summary");

aiAlerts.addEventListener("change", () => {
  console.log(`AI Alerts toggled: ${aiAlerts.checked}`);
});

weeklySummary.addEventListener("change", () => {
  console.log(`Weekly Summary toggled: ${weeklySummary.checked}`);
});