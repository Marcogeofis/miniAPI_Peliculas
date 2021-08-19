// OPeracion del costo total
// funcion sumatoria de los gastos al mes por cine
function costoTotalCine(cBoleto, noVeces, consumibles){
    cBoleto = parseInt(cBoleto);
    noVeces = parseInt(noVeces);
    consumibles = parseInt(consumibles);
    return noVeces * (cBoleto + consumibles);
}

// funcion sumatoria de los gastos al mes por streaming
function costoTotalStreaming(plataform, botanas){
    plataform = parseInt(plataform);
    botanas = parseInt(botanas);
    return plataform + botanas ;
}




// Funcion de boton analizador
function analizarCostos(){
    //Datos de los gastos para el cine
    const inputVecesCine = document.getElementById("InputVecesCine");
    const inputCineCosto = document.getElementById("InputCinePreferido");
    const inputComestibles = document.getElementById("InputComestibles");

    const vecesCine = inputVecesCine.value;
    const cineCosto = inputCineCosto.value;
    const comestibles = inputComestibles.value;
    const gastoMensualCine = costoTotalCine(cineCosto, vecesCine, comestibles);

    // DAtos de los gastos para la plataforma de Streaming
    const inputPeliculasVistas = document.getElementById("InputPeliculasVistas");   
    const inputCostoPlataform = document.getElementById("InputCostoPlataform");
    const inputCostoBotanas = document.getElementById("InputCostoBotanas");
    
    const peliculasVistas = inputPeliculasVistas.value;
    const costoPlataform = inputCostoPlataform.value;
    const costoBotanas = inputCostoBotanas.value;
    const gastoMensualStreaming = costoTotalStreaming(costoPlataform, costoBotanas);

    // Resultado de los gastos del cine
    const resultP = document.getElementById("ResultP");
    resultP.innerText = "EL costo Total al mes visitando al cine es de: " + gastoMensualCine;

    // Resultado de los gastos para plataforma de Streaming
    const resultStreamingP = document.getElementById("ResultStreamingP");
    resultStreamingP.innerText = "EL costo Total al mes por una plataforma de Streaming: " + gastoMensualStreaming;
    
    // resultado 
    const resultadofinal = document.getElementById("ResultFinal");
    if(gastoMensualCine > gastoMensualStreaming){
        resultadofinal.innerText = "Acorde con el análisis de costos, el más economico es: " + "plataforma Streaming " + " y vistes series";
    } else {
        resultadofinal.innerText = "Acorde con el análisis de costos, el más economico es: " + "Visita el cine";
    }
    
}





