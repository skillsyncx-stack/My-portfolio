// THEME TOGGLE
const themeToggle = document.getElementById("themeToggle");
themeToggle.onclick = () => {
  document.body.classList.toggle("dark");
  themeToggle.textContent =
    document.body.classList.contains("dark") ? "☀️" : "🌙";
};

// SCROLL REVEAL
document.querySelectorAll(".reveal").forEach(el => {
  const show = () => {
    if (el.getBoundingClientRect().top < window.innerHeight - 100) {
      el.classList.add("active");
    }
  };
  window.addEventListener("scroll", show);
  show();
});

// HAMBURGER MENU
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

hamburger.onclick = () => {
  navMenu.classList.toggle("active");
};

document.querySelectorAll("#navMenu a").forEach(link => {
  link.onclick = () => navMenu.classList.remove("active");
});
