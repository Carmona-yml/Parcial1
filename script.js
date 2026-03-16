document.querySelector("btnCalcular").addEventListener("click", calcularriesgo);
document.querySelector("btnLimpiar").addEventListener("click", limpiar);

function calcularriesgo() {
    const edad = parseFloat(document.getElementById("edad").value);
    const presion = parseFloat(document.getElementById("presion").value);
    const colesterol = parseFloat(document.getElementById("colesterol").value);
    const fumador = parseFloat(document.getElementById("fumador").value);

    if (edad === "" || presion  === "" || colesterol === "" || fumador === "") {
        document.getElementById("textoResultado").textContent = "Por favor rellena toda la infomación";
        return;
    }

    let puntos = 0;

    if(edad >= 35 && edad <= 44){
        puntos +=1;
    }else if(edad >= 45){
        puntos += 2;

    }if (presion >= 120) {
        puntos +=1;
    }else if (presion >= 140) {
        puntos +=3;
        
    }if(colesterol >= 200){
        puntos += 1;
    }else if(colesterol >= 240){
        puntos += 3;
    }

    if(fumador === "si"){
        puntos += 3;
    }

    let riesgo = "";

    if(puntos <= 2){
        riesgo = "Riesgo Bajo";
        document.getElementById("resultado").style.backgroundColor = "lightgreen";
    }
    else if(puntos <= 5){
        riesgo = "Riesgo Moderado";
        document.getElementById("resultado").style.backgroundColor = "khaki";
    }
    else{
        riesgo = "Riesgo Alto";
        document.getElementById("resultado").style.backgroundColor = "salmon";
    }

    document.getElementById("textoResultado").textContent = "Tu nivel de riesgo cardiovascular es:";
    document.getElementById("nivelRiesgo").textContent = riesgo;
}