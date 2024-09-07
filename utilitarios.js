recuperarTexto = function (idComponente) {
    let componente = document.getElementById(idComponente);
    let valorIngresado = componente.value;
    return valorIngresado;
}
mostrarComponente = function(idComponente) {
    const elemento = document.getElementById(idComponente);
    if (elemento !== null) {
      elemento.style.display = "block";
    } else {
      console.log(`Element with id "${idComponente}" not found`);
    }
  }

  ocultarComponente = function(idComponente) {
    const elemento = document.getElementById(idComponente);
    if (elemento !== null) {
      elemento.style.display = "none";
    } else {
      console.log(`Element with id "${idComponente}" not found`);
    }
  }