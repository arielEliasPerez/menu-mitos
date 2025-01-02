document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.getElementById("navbar");
    const infoContainer = document.querySelector(".info-container");
  
    // Calcular la altura del infoContainer
    const navbarOffsetTop = infoContainer.offsetHeight;
    console.log(infoContainer.offsetHeight);
    window.addEventListener("scroll", () => {
      if (window.scrollY >= navbarOffsetTop) {
        console.log("entre por aqui");
        navbar.classList.add("fixed"); // Hacer que el navbar sea fijo
      } else {
        navbar.classList.remove("fixed"); // Restaurar posición inicial
        console.log("no lo hice");
      }
    });
  });
  