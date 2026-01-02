// ===============================
// THEME TOGGLE (WORKING 100%)
// ===============================

const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  // Update icon
  if (document.body.classList.contains("dark")) {
    themeToggle.textContent = "☀️";
  } else {
    themeToggle.textContent = "🌙";
  }
});

// ===============================
// SCROLL REVEAL
// ===============================

const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
  reveals.forEach(section => {
    const top = section.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      section.classList.add("active");
    }
  });
});
