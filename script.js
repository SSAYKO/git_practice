document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.querySelector(".menu-btn");
  const sidebar = document.querySelector(".sidebar");

  menuBtn.addEventListener("click", () => {
    sidebar.classList.toggle("open");
  });

  // Modo oscuro
  document.getElementById("dark-mode-toggle").addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
  });

  // Menú desplegable
  document.querySelectorAll(".dropdown-btn").forEach((button) => {
    button.addEventListener("click", () => {
      let dropdownContent = button.nextElementSibling;
      dropdownContent.style.display =
        dropdownContent.style.display === "block" ? "none" : "block";
    });
  });

  // Cargar íconos de Lucide
  lucide.createIcons();
});
