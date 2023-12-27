const textoNormal = "Normal: ";
const textoAleatorioSin = "Sin repetidos v1: ";
const textoAleatorioSin2 = "Sin repetidos v2: ";

window.addEventListener("DOMContentLoaded", main);

function main(){

    const btnGenerar = document.getElementById("generar");
    if(btnGenerar) btnGenerar.addEventListener("click", generarListener);

    const btnLimpiar = document.getElementById("limpiar");
    if(btnLimpiar) btnLimpiar.addEventListener("click", limpiarListener);

}

function generarListener(){
    let cantidad = document.getElementById("cantidad").value;
    let minimo = parseInt(document.getElementById("minimo").value);
    let maximo = document.getElementById("maximo").value;
    console.log("cantidad: " + cantidad + ", minimo: " + minimo + ", maximo: " + maximo);

    let contAleatorio = document.getElementById("normal");
    if(contAleatorio) contAleatorio.textContent = textoNormal + aleatorios(cantidad, minimo, maximo);

    let contAleatorioSin = document.getElementById("sinRepetidos1");
    if(contAleatorioSin) contAleatorioSin.textContent = textoAleatorioSin + aleatoriosSinRepetidos(cantidad, minimo, maximo);
    
    let contAleatorioSin2 = document.getElementById("sinRepetidos2");
    if(contAleatorioSin2) contAleatorioSin2.textContent = textoAleatorioSin2 + aleatoriosSinRepetidosVariante(cantidad, minimo, maximo);
}

function limpiarListener() {
    let contAleatorio = document.getElementById("normal");
    if(contAleatorio) contAleatorio.textContent = textoNormal;

    let contAleatorioSin = document.getElementById("sinRepetidos1");
    if(contAleatorioSin) contAleatorioSin.textContent = textoAleatorioSin;
    
    let contAleatorioSin2 = document.getElementById("sinRepetidos2");
    if(contAleatorioSin2) contAleatorioSin2.textContent = textoAleatorioSin2;
}






// numeros aleatorios entre un minimo y un maximo
function aleatorios(cantidad=0, min=0, max=0){

    let numeros = [];

    if(min < max){
        for(let i = 0; i < cantidad; i++){
            let numero = Math.floor(Math.random() * (max - min + 1)) + min;
            numeros.push(numero);
        }
    }

    return numeros;
}


// numeros aleatorios sin repetidos
function aleatoriosSinRepetidos(cantidad=0, min=0, max=0){

    let numeros = [];

    if(min < max){
        while(numeros.length < cantidad){

            let numero = Math.floor(Math.random() * (max - min + 1)) + min;
            
            if(!numeros.includes(numero)) {
                numeros.push(numero);
            }
    
        }
    }
    
    return numeros;
}


// numeros aleatorios sin repetidos utilizando la primera función
function aleatoriosSinRepetidosVariante(cantidad=0, min=0, max=0){

    let numeros = aleatorios(cantidad, min, max);

    if(numeros.length > 0){
            //repetido = numeros.some((elemento, indice, array) => array.indexOf(elemento) != indice);
            //if(repetido) numeros = aleatorios(cantidad, min, max);
            console.log(numeros)
            let indice = 0;
            while(indice < numeros.length){
                console.log(indice)
                if(numeros.indexOf(numeros[indice]) != indice){
                    numero = Math.floor(Math.random() * (max - min + 1)) + min;
                    numeros.splice(indice,1,numero);
                } else {
                    indice++;
                }
            }
    }
    return numeros;
}


function comprobar(numeros = [], cantidad = 0, min = 0, max = 0){

    return numeros.length == cantidad && numeros.every((numero) => numero >= min && numero <= max);
}