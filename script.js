document.querySelector("#btnCalcular").addEventListener("click", calcularriesgo);
document.querySelector("#btnLimpiar").addEventListener("click", limpiar);

function calcularriesgo() {
    const edad = parseInt(document.getElementById("edad").value);
    const presion = parseInt(document.getElementById("presion").value);
    const colesterol = parseInt(document.getElementById("colesterol").value);
    const fumador = (document.getElementById("fumador").value);

    if (edad === "" || presion  === "" || colesterol === "" || fumador === "") {
        document.getElementById("textoResultado").textContent = "Por favor rellena toda la infomación";
        return;
    }

    let puntos = 0;

    if(edad >= 35 && edad <= 44){
        puntos +=1;
    }else if(edad >= 45){
        puntos += 2;

    }if (presion >= 140) {
        puntos +=3;
    }else if (presion >= 120) {
        puntos +=1;

    }if(colesterol >= 240){
        puntos += 3;
    }else if(colesterol >= 200){
        puntos += 1;
    }

    if(fumador === "si"){
        puntos += 3;
    }

    let riesgo = "";
    const resultadoriesgo = document.getElementById("resultado");

    if(puntos <= 2){
        riesgo = "Riesgo Bajo";
        resultadoriesgo.style.backgroundColor = "#00ff2a";
    }
    else if(puntos <= 5){
        riesgo = "Riesgo Moderado";
        resultadoriesgo.style.backgroundColor = "#f9fd00";
    }
    else{
        riesgo = "Riesgo Alto";
        resultadoriesgo.style.backgroundColor = "#d67a10";
    }

    document.getElementById("textoResultado").textContent = "Tu nivel de riesgo cardiovascular es:";
    document.getElementById("nivelRiesgo").textContent = riesgo;
}

function limpiar(){
    document.getElementById("edad").value = "";
    document.getElementById("presion").value = "";
    document.getElementById("colesterol").value = "";
    document.getElementById("fumador").value = "";

    document.getElementById("textoResultado").textContent = "";
    document.getElementById("nivelRiesgo").textContent = "";

    document.getElementById("resultado").style.backgroundColor = "transparent";
}
