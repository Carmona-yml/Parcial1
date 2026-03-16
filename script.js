document.querySelector("btnCalcular").addEventListener("click", calcularriesgo);
document.querySelector("btnLimpiar").addEventListener("click", limpiar);

function calcularriesgo() {
    const edad = parseFloat(document.getElementById("edad").value);
    const presion = parseFloat(document.getElementById("presion").value);
    const colesterol = parseFloat(document.getElementById("colesterol").value);
    const fumador = parseFloat(document.getElementById("fumador").value);

    if (edad == "" presion == "" colesterol == "" fumador == "") {
        document.getElementById("textoResultado").textContent = "Por favor llenena toda la infomación";
    }
}