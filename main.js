function solicitarNombre(){
let nombreIngresado = prompt("Ingresar Nombre");

if(nombreIngresado == "" || nombreIngresado.length <= 2 || nombreIngresado.length >= 10){
    alert("Ingresa un nombre valido por favor");
} else{
    alert("Bienvenido " + nombreIngresado);

}
}

solicitarNombre();




const suma = (a,b) => a + b;

const resta = (a,b) => a - b;

const iva = x => x * 0.21;

let apuestaBayerMunich = 1000;
let descuentoprimerApuesta = 500;


let nuevoPrecio = resta(suma(apuestaBayerMunich, iva(apuestaBayerMunich)), descuentoprimerApuesta);
console.log("El precio final es de " + nuevoPrecio);





const sumaPorGanancia = (a,b) => a + b;
const sumaCombinada = a => a * 0.90;
const sumaPorAbandonar = x => x * 0.80;
const restaPorAbandonar = (a,b) => a - b;

let clasicosDeLaFechaMonto = 50000;

let posibleGanancia = sumaPorGanancia(clasicosDeLaFechaMonto, sumaCombinada(clasicosDeLaFechaMonto));
console.log("Si apostas 50.000 pesos, tus ganancias seran de " + posibleGanancia + " pesos si se dan todos los resultados")
let resultadoPorAbandonar = restaPorAbandonar(clasicosDeLaFechaMonto, sumaPorAbandonar(clasicosDeLaFechaMonto));
console.log("Si queres abandonar, tus ganancias por salir antes de finalizar habiendo apostado 50.000 pesos son de " + resultadoPorAbandonar);

