// Elimina el hash (#marcas, #ropa, etc) al cargar o refrescar
window.addEventListener("load", () => {
  if (window.location.hash) {
    history.replaceState(null, "", window.location.pathname);
  }
  window.scrollTo(0, 0);
});
console.log("JS cargado correctamente");

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".sizes span").forEach(size => {
        size.addEventListener("click", () => {

            // Quita selección a las tallas del MISMO producto
            const sizesGroup = size.parentElement;
            sizesGroup.querySelectorAll("span").forEach(s => s.classList.remove("selected"));

            // Marca la talla clickeada
            size.classList.add("selected");
        });
    });
});



