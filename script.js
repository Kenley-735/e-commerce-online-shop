const toggleBtn = document.getElementById("theme-toggle");
const root = document.documentElement;

// Load saved theme if available
if (localStorage.getItem("theme")) {
  root.className = localStorage.getItem("theme");
  toggleBtn.textContent = root.className === "dark" ? "🌞" : "🌙";
} else {
  // Default: system preference
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    root.className = "dark";
    toggleBtn.textContent = "🌞";
  } else {
    root.className = "light";
    toggleBtn.textContent = "🌙";
  }
}

// Toggle theme on button click
toggleBtn.addEventListener("click", () => {
  if (root.className === "light") {
    root.className = "dark";
    toggleBtn.textContent = "🌞";
    localStorage.setItem("theme", "dark");
  } else {
    root.className = "light";
    toggleBtn.textContent = "🌙";
    localStorage.setItem("theme", "light");
  }
});
