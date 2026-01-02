// ===============================
// THEME TOGGLE (STABLE & CLEAN)
// ===============================

const themeToggle = document.getElementById("themeToggle");
const body = document.body;

// Ensure default icon
if (!body.classList.contains("dark")) {
  themeToggle.textContent = "🌙";
}

themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark");

  // Toggle icon
  if (body.classList.contains("dark")) {
    themeToggle.textContent = "☀️";
  } else {
    themeToggle.textContent = "🌙";
  }
});

// ===============================
// SCROLL REVEAL (ON LOAD + SCROLL)
// ===============================

const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  reveals.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (sectionTop < windowHeight - 100) {
      section.classList.add("active");
    }
  });
}

// Run on page load
revealOnScroll();

// Run on scroll
window.addEventListener("scroll", revealOnScroll);
