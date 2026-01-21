// Elimina el hash (#marcas, #ropa, etc) al cargar o refrescar
window.addEventListener("load", () => {
  if (window.location.hash) {
    history.replaceState(null, "", window.location.pathname);
  }
  window.scrollTo(0, 0);
});



