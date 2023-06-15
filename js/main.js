let entrada = prompt('Ingrese su nombre');

console.log(entrada);

let salida = prompt(`Bienvenido a Twenty-one, ${entrada}, estas listo para jugar?`);

console.log(salida);

//Menor de edad
// fecha de nacimiento al usuario
const fechaNacimiento = prompt('Ingrese su fecha de nacimiento (en formato DD/MM/AAAA)');

// Convercion de la fecha de nacimiento a un objeto Date
const fechaNacimientoObj = new Date(fechaNacimiento.split('/')[2], fechaNacimiento.split('/')[1] - 1, fechaNacimiento.split('/')[0]);

// Calculo edad a partir de la fecha de nacimiento
const hoy = new Date();
let edad = hoy.getFullYear() - fechaNacimientoObj.getFullYear();
const mes = hoy.getMonth() - fechaNacimientoObj.getMonth();
if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNacimientoObj.getDate())) {
    edad--;
}

// Verificamos si es mayor o menor de edad
if (edad < 18) {
    alert('Lo siento, eres menor de edad y no puedes ingresar.');
} else {
    alert('Bienvenido!');
}
//fuction
function sumar(numero1, numero2) {
    let resultado = numero1 + numero2
    console.log(resultado);
}
function restar(numero1, numero2) {
    let resultado = numero1 - numero2
    console.log(resultado)
}

sumar(3,10)
restar(3,10)

//funcion calculadora
function calculadora(primerNumero, segundoNumero, operacion) {
    switch(operacion) {
        case "+":
            return primerNumero + segundoNumero;
            break;
        case "-":
            return primerNumero - segundoNumero;
            break;
        case "*":
            return primerNumero * segundoNumero;
            break;
        case "/":
            return primerNumero / segundoNumero;
            break;
        default:
            return 0;
            break;
    }
}
console.log(calculadora(80, 90, "/"))
//Calcular precio
//calculo del precioProducto + Iva - descuento
//Casino slots
const suma = (a, b) => a + b
const resta = (a, b) => a - b

const iva = x => x * 1.21
let precioJuegoCasino = 100
let descuento = 70
let nuevoPrecio = (suma(precioJuegoCasino, iva(precioJuegoCasino)), descuento)
console.log('Cada tiro de Slots cuesta ' + nuevoPrecio)
//Minimo de Apuestas Deportivas
let precioApuestasDeportivas = 15
let descuentoApuestas = 2.5

let nuevoPrecioApuestas = resta(suma(precioApuestasDeportivas, iva(precioApuestasDeportivas)), descuentoApuestas)
console.log('El minimo para las Apuestas Deportivas es de ' + nuevoPrecioApuestas)
//Valor de cada ficha en Black Jack 
let precioApuestasBlackJack = 20
let descuentoApuestasBlackJack = 2.5

let nuevoPrecioApuestasBlackJack = resta(suma(precioApuestasBlackJack, iva(precioApuestasBlackJack)), descuentoApuestasBlackJack)
console.log('Cada ficha de Black Jack cuesta ' + nuevoPrecioApuestasBlackJack)

//Apuesta Final de Champions Inter de Milan
const sumaChampionsInter = (a, b) => a + b
const restaChampionsInter = (a, b) => a - b
const multiplicacionDeGananciasInter = x => x * 8.40

let precioApostadoChampionsInter = 400
let descuentoChampionsInter = 2.6

let GananciaApuestasChampionsInter = restaChampionsInter(sumaChampionsInter(precioApostadoChampionsInter, multiplicacionDeGananciasInter(precioApostadoChampionsInter)), descuentoChampionsInter)
console.log('Tus ganancias apostando 400 pesos al inter de Milan son de ' + GananciaApuestasChampionsInter)

//Apuesta final de Champions Manchester City
const sumaChampionsCity = (a, b) => a + b
const restaChampionsCity = (a, b) => a - b
const multiplicacionDeGananciasCity = x => x * 2.40

let precioApostadoChampionsCity = 400
let descuentoChampionsCity = 2.6

let GananciaApuestasChampionsCity = restaChampionsCity(sumaChampionsCity(precioApostadoChampionsCity, multiplicacionDeGananciasCity(precioApostadoChampionsCity)), descuentoChampionsCity)
console.log('Tus ganancias apostando 400 pesos al Manchester City son de ' + GananciaApuestasChampionsCity)

//Final NBA
