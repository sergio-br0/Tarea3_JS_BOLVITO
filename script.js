const cajaTexto = document.querySelector('#cajaTexto');
const salida = document.querySelector('#salida');
cajaTexto.addEventListener(
    "keydown",
    (e) => (salida.textContent = `Presionaste la tecla "${e.key}".`)
);