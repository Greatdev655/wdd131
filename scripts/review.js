const reviewSubmitted = localStorage.getItem("reviewSubmitted");

if (reviewSubmitted === "true") {
  // Read, increment, save
  const currentCount = parseInt(localStorage.getItem("reviewCount")) || 0;
  const newCount = currentCount + 1;
  localStorage.setItem("reviewCount", newCount);

  // Clear the flag
  localStorage.removeItem("reviewSubmitted");
}

// Always display the count when the page loads
// (whether a new submission just happened or not)
const count = parseInt(localStorage.getItem("reviewCount")) || 0;
document.querySelector("#review-count").textContent = count;
