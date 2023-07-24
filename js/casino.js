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

//Juego ruleta
const juegoRuleta1Tiro = () => {
    return Math.round(Math.random() * 36)
}

console.log(juegoRuleta1Tiro())

//2do tiro
const juegoRuleta2Tiro = () => {
    return Math.round(Math.random() * 36)
}
console.log(juegoRuleta2Tiro())
//3er tiro
const juegoRuleta3Tiro = () => {
    return Math.round(Math.random() * 36)
}
console.log(juegoRuleta3Tiro())


let casino = document.querySelector(".En-Vivo");
casino.addEventListener("click", function () {
    prompt("Preparate para jugar, establece tu importe abajo");
});





const blackJack = () => {
    return Math.floor(Math.random() * 12 + 10)
}
const blackJackCasa = () => {
    return Math.floor(Math.random() * 12 + 10)
}

console.log('Tus cartas para esta mano son de ' + blackJack() + ', la casa obtiene ' + blackJackCasa())
const mano = (blackJack.return > blackJackCasa.return) ? true : false

mano ? console.log('Ganaste 500 pesos') : console.log('Pierdes 500 pesos por no superar a la casa')