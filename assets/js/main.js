function solicitarNombre(){
    let nombreIngresado = prompt("ingresar nombre")
    alert("el nombre Ingresado es " + nombreIngresado)
}
solicitarNombre()


let numeroGoles = 4

if(numeroGoles == 5){
    console.log("Ganaste en tu primer apuesta")
} else{
    console.log("No has ganado tu apuesta")
}

let golesMilan = prompt("ingresar cuantos goles mete hoy Milan")
if(golesMilan = 2){
    console.log("Si el Milan mete dos goles tu premio es de 600 pesos")
} if( golesMilan = 3){
    console.log("Si Milan mete tres goles ganaran 1200")
}
else{
    console.log("No ganaste nada")
}

let repetir = false
do{
    console.log("dolo una vez")
} while(repetir);

let resultadoGoles = 4

function sumar (golEquipoLocal, golEquipoVisitante){
    resultadoGoles = golEquipoLocal + golEquipoVisitante
}

function mostrar (mensaje) {
    console.log(mensaje)
}

sumar(6,3)
mostrar("El partido termino 6 a 3, hubo " + resultadoGoles + "goles en total, si tu apuesta fue de 9 goles ganaste 15000 pesos")

// funciones flecha
//Calculo de Combinada


const suma = (a, b) => a + b

const resta = (a, b) => a - b

const multiplicadorCombinada = x => x * 4.6
let precioApostado = 8000
let descuentoPrimerApuesta = 500
//Calculo de precio apostado + precioApostado - descuentoPrimerApuesta

let ganancia = resta(suma(precioApostado, multiplicadorCombinada(precioApostado)), descuentoPrimerApuesta)
console.log(ganancia)


function calculadoraCombinadas (primerGanancia, segundaGanancia, operacion){
    switch(operacion){
        // ganas
        case "*":
            return primerGanancia * segundaGanancia;
            break;
        // si perdes
        case "-":
            return primerGanancia - segundaGanancia;
            break;
    }
}

console.log(calculadoraCombinadas(8000, 8000, "*"))
console.log(calculadoraCombinadas(8000, 8000, "-"))


const suma2 = (a,b) => a + b
const resta2 = (a,b) => a - b

const iva = x => x * 0.21
let precioPaquteBingo = 10000
let descuentoDevolucion = 5000

let nuevoPrecioPaqueteBingo = resta2(suma2(precioPaquteBingo, iva(precioPaquteBingo)), descuentoDevolucion)
console.log(nuevoPrecioPaqueteBingo)
