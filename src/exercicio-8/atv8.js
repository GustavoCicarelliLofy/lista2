function converterTemperatura(valor, tipo) {
    let resultado;

    if (tipo === "CparaK") {
        resultado = valor + 273.15;
        return {
            entrada: valor + " °C",
            saida: resultado + " K"
        };
    } else {
        resultado = valor - 273.15;
        return {
            entrada: valor + " K",
            saida: resultado + " °C"
        };
    }
}

function calcular() {
    let valor = Number(document.getElementById("valor").value);
    let tipo = document.getElementById("tipo").value;

    let resultado = converterTemperatura(valor, tipo);

    document.getElementById("resultado").innerHTML =
        "Entrada: " + resultado.entrada + "<br>" +
        "Resultado: " + resultado.saida;
}