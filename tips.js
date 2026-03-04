// Tips Page AI Quiz functionality
const buttons = document.querySelectorAll(".quiz-options button");
const result = document.getElementById("quiz-result");

// Utility: clear active states
function clearActive() {
  buttons.forEach(btn => btn.classList.remove("active"));
}

buttons.forEach(button => {
  button.addEventListener("click", () => {
    // Highlight selected button
    clearActive();
    button.classList.add("active");

    // Get recommendation from dataset
    const recommendation = button.dataset.recommendation;

    // Show result with a little animation
    result.textContent = `💡 AI Recommendation: ${recommendation}`;
    result.style.opacity = 0;
    setTimeout(() => {
      result.style.opacity = 1;
    }, 150);
  });
});