const selectElement = document.getElementById('seats');

const filas = 15;
const asientosPorFila = 9;

for (let fila = 1; fila <= filas; fila++) {
    for (let asiento = 1; asiento <= asientosPorFila; asiento++) {
        const opcion = `Fila ${fila} - Asiento ${asiento}`;
        const optionElement = document.createElement('option');
        optionElement.textContent = opcion;
        optionElement.value = opcion;
        selectElement.appendChild(optionElement);
    }
}