const titulo = document.querySelector('h1');
const principal = document.querySelector('.principal');
const contenedor = document.querySelector('.contenedor');

titulo.style.color = '#ffff';
principal.style.backgroundColor = '#5FA71F';
contenedor.style.fontFamily = 'PT Sans, sans-serif';

function calcularTotal() {
    let cantidad = document.querySelector('#cantidad');
    let precio = document.querySelector('#precio');
    let total = document.querySelector('#total');
    let cantidad_resultado = document.querySelector("#cantidad_resultado");
    let color = document.querySelector('#color');
    let color_notebook = document.querySelector('#color_notebook');

    let total_calculo = parseInt(cantidad.value) * parseInt(precio.textContent);

    total.innerHTML = total_calculo;
    cantidad_resultado.innerHTML = cantidad.value;
    color_notebook.style.backgroundColor = color.value;
}
