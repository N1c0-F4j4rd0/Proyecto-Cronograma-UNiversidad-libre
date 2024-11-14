document.addEventListener("DOMContentLoaded", function() {
    // Seleccionar todos los enlaces de navegación
    const navLinks = document.querySelectorAll(".nav-link");

    // Añadir un efecto hover con escala
    navLinks.forEach(link => {
        link.addEventListener("mouseover", function() {
            this.style.transform = "scale(1.1)";
        });
        link.addEventListener("mouseout", function() {
            this.style.transform = "scale(1)";
        });
    });
});
