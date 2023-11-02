document.addEventListener("DOMContentLoaded", function () {
    const valorUnitarioInput = document.getElementById("valorUnitario");
    const opcion1 = document.getElementById("opcion1");
    const opcion2 = document.getElementById("opcion2");
    const resultadoDiv = document.getElementById("resultado");
    const calcularButton = document.getElementById("calcular");
    const limpiarButton = document.getElementById("limpiar");

    calcularButton.addEventListener("click", function () {
        const valorUnitario = parseFloat(valorUnitarioInput.value);
        const opcion = opcion1.checked ? 1 : opcion2.checked ? 2 : 0;

        if (valorUnitario <= 0 || opcion === 0) {
            resultadoDiv.textContent = "Por favor, complete todos los campos.";
        } else {
            if (opcion === 1) {
                const cantidadBocas = parseFloat(prompt("Ingrese la cantidad total de bocas:"));
                const bocasTablero = cantidadBocas / 10;
                const costoTotal = (bocasTablero + cantidadBocas) * valorUnitario;

                resultadoDiv.innerHTML = `<p>Presupuesto Aproximado:</p>
                <p>Cantidad de bocas: ${cantidadBocas}</p>
                <p>Cantidad de bocas en el tablero: ${bocasTablero}</p>
                <p>Costo total: ${costoTotal}</p>
                <p>Recuerde que se deben corroborar detalles adicionales. Y solo es un aproximado.</p>`;
            } else if (opcion === 2) {
                const cantidadCircuitos = parseFloat(prompt("Ingrese la cantidad de circuitos:"));
                let costoTotal = 0;
                let bocasElectricidad = 0;
                let bocasTablero = 0;

                for (let circuito = 1; circuito <= cantidadCircuitos; circuito++) {
                    let bocasCircuito = -1;

                    while (bocasCircuito < 0 || bocasCircuito > 15) {
                        bocasCircuito = parseFloat(prompt(`Ingrese la cantidad de bocas en el circuito ${circuito} (máximo 15 bocas):`));
                        if (bocasCircuito > 15) {
                            alert("Error: Se excede el límite de 15 bocas por circuito.");
                        }
                    }

                    bocasElectricidad += bocasCircuito;
                    bocasTablero++;
                    const costoCircuito = bocasCircuito * valorUnitario;
                    costoTotal += costoCircuito;
                }

                resultadoDiv.innerHTML = `<p>Presupuesto Detallado:</p>
                <p>Cantidad de bocas de electricidad: ${bocasElectricidad}</p>
                <p>Cantidad de bocas en el tablero: ${bocasTablero}</p>
                <p>Costo total: ${costoTotal}</p>
                <p>Recuerde que se deben revisar llaves combinadas y otros detalles. Y solo es un aproximado.</p>`;
            }
        }
    });

    limpiarButton.addEventListener("click", function () {
        valorUnitarioInput.value = "";
        resultadoDiv.innerHTML = "";
        opcion1.checked = false;
        opcion2.checked = false;
    });
});
