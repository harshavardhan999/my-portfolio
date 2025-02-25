function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
document.addEventListener("DOMContentLoaded", function () {
  const aboutButtons = document.querySelectorAll(".about-btn");
  const descriptions = document.querySelectorAll(".project-description");

  aboutButtons.forEach((button, index) => {
      button.addEventListener("click", (event) => {
          event.stopPropagation(); // Prevent immediate closure
          descriptions[index].style.display = 
              descriptions[index].style.display === "block" ? "none" : "block";
      });
  });

  function hideDescriptions() {
      descriptions.forEach(description => {
          description.style.display = "none";
      });
  }

  document.addEventListener("click", function (event) {
      if (!event.target.classList.contains("about-btn")) {
          hideDescriptions();
      }
  });

  descriptions.forEach(description => {
      description.addEventListener("click", (event) => {
          event.stopPropagation(); // Prevent closure when clicking inside
      });
  });

  window.addEventListener("scroll", hideDescriptions); // Hide descriptions on scroll
});
