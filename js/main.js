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
    alert('Lo siento, eres menor de edad, no podras jugar y apostar.');
} else {
    alert('Bienvenido!');
}

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
function finalNba(anotaJokic, anotaLowry, operacion) {
    switch (operacion) {
        case "*":
            return anotaJokic * anotaLowry;
            break;
        default:
            return 0;
            break;
    }
}
console.log('Tus ganancias si apostas 80 pesos a que Jokic anota 30 ptos y 90 pesos a que Lowry anota 20 ptos es de : ' + (finalNba(80, 90, "*")))
//otro ejemplo
class Persona {
    constructor(nombre, edad, calle) {
        this.nombre = nombre;
        this.edad = edad;
        this.calle = calle;

    }
    hablar() {
        console.log("Hola " + this.nombre + ", soy Leonardo, asistente virtual de Twenty-one, en que puedo ayudarte?")
    }
}

const persona1 = new Persona("TOMAS", 22, "Av Barrio Koch");
persona1.hablar();

//Practicando para entrega
//Juego ruleta
const juegoRuleta1Tiro = () => {
    return Math.round(Math.random() * 36)
}

console.log('Tu tiro arrojo el numero' + juegoRuleta1Tiro())

//2do tiro
const juegoRuleta2Tiro = () => {
    return Math.round(Math.random() * 36)
}
console.log('Tu 2do tiro arrojo el numero' +juegoRuleta2Tiro())
//3er tiro
const juegoRuleta3Tiro = () => {
    return Math.round(Math.random() * 36)
}
console.log('Tu 3er tiro arrojo el numero' +juegoRuleta3Tiro())
//Apuestas Virtuales
class Boca {
    constructor(goles, ganancia, vencedor) {
        this.goles = goles;
        this.ganancia = ganancia;
        this.vencedor = vencedor;

    }
    hablar() {
        console.log("Si apostas 3000 pesos a que Boca Jrs convierte " + this.goles + " goles, tu ganancia sera de " + this.ganancia)
    }
}

const boca = new Boca(3, 100000, "Boca Jrs");
boca.hablar();

//Uefa Champions League

class Atletico {
    constructor(goles, ganancia, vencedor) {
        this.goles = goles;
        this.ganancia = ganancia;
        this.vencedor = vencedor;

    }
    hablar() {
        console.log("Si apostas 200 a que gana " + this.vencedor + " y convierte " + this.goles + " goles contra el Sevilla, tus ganancias seran de " + this.ganancia)
    }
}

const atletico = new Atletico("5", 400000, "Atletico Madrid");
atletico.hablar();

//Sevilla
class Sevilla {
    constructor(goles, ganancia, vencedor) {
        this.goles = goles;
        this.ganancia = ganancia;
        this.vencedor = vencedor;

    }
    hablar() {
        console.log("Si apostas 200 a que gana " + this.vencedor + " y convierte " + this.goles + " goles Correa contra el Sevilla, tus ganancias seran de " + this.ganancia)
    }
}

const sevilla = new Sevilla("2", 900000, "Atletico Madrid");
sevilla.hablar();
//Crear Apuesta
class Griezmann {
    constructor(goles, ganancia, jugador) {
        this.goles = goles;
        this.ganancia = ganancia;
        this.jugador = jugador;

    }
    hablar() {
        console.log("Si  apostas 500 pesos a que " + this.jugador + " convierte " + this.goles + " goles contra el Sevilla, tus ganancias seran de " + this.ganancia)
    }
}

const griezmann = new Griezmann("2", 10000, "Griezmann");
griezmann.hablar();
//Juego Truco
//Primer Carta
const repartirCartasTruco = () => {
    return Math.round(Math.random() * 7)
}
console.log(repartirCartasTruco())
//Segunda Carta
const repartirCartasTruco2 = () => {
    return Math.round(Math.random() * 7 + 1)
}
console.log(repartirCartasTruco2())
//Tercera Carta
const repartirCartasTruco3 = () => {
    return Math.round(Math.random() + 10)
}
console.log(repartirCartasTruco3())
console.log("Tus cartas para esta manos son estas")

//Ofertas
const oferta = new Date("October 18, 2023 23:59:59")
console.log("No te pierdas la oportunidad de este OFERTON, tenes un descuento en todas las apuestas deportivas hasta " + oferta)
const oferta2 = new Date("December 22, 2023")
console.log("Multiplicaremos tus ganancias en las apuestas de Black Jack por cada tiro adicional, ooferta valida hasta " + oferta2)
const oferta3 = new Date("December 2023, 18")
console.log(`Participa del torneo de truco a nivel nacional!, para ingresar abonas 300 pesos y ya estas participando. Oferta valida hasta ${oferta3}`)


const equiposGanadores = [
    { equipos: 'Boca Jrs', precio: 150 },
    { equipos: 'Godoy Cruz', precio: 100 },
    { equipos: 'Instituto', precio: 50 },
    { equipos: 'Lanus', precio: 30 },
    { equipos: 'San Lorenzo', precio: 40 },
    { equipos: 'Patronato', precio: 150 },
    { equipos: 'Velez', precio: 90 },
    { equipos: 'Sarmiento', precio: 50 },
    { equipos: 'Arsenal', precio: 20 },
    { equipos: 'Talleres', precio: 15 },
]
const total = equiposGanadores.reduce((acc, el) => acc + el.precio, 0)
console.log('El total apostado es de ' + total)

const gananciasDeApuestas = [
    { ganador: 'Boca Jrs', ganancia: 660 },
    { ganador: 'Godoy Cruz', ganancia: 500 },
    { ganador: 'Instituto', ganancia: 500 },
    { ganador: 'Lanus', ganancia: 300 },
    { ganador: 'San Lorenzo', ganancia: 400 },
    { ganador: 'Patronato', ganancia: 1500 },
    { ganador: 'Velez', ganancia: 900 },
    { ganador: 'Sarmiento', ganancia: 500 },
    { ganador: 'Arsenal', ganancia: 200 },
    { ganador: 'Talleres', ganancia: 150 },
]
const total2 = gananciasDeApuestas.reduce((acc, el) => acc + el.ganancia, 0)
console.log('Tus ganacias si se dan los resultados es de ' + total2)

let ganador = "Bayern Munich"
if (ganador == "Bayern Munich") {
    console.log('Si Bayer Munich es el ganador tus ganancias son de ' + + (Math.random() * 600))
}
else if (ganador !== "Bayern Munich") {
    console.log('No obtendras ganancias por este partido')
}
//Hay que ver si esta bien
//Map
//Predicciones
const partidosDeHoy = [
    { partido: "Boca Jrs 2 vs River Plate 1", ganancia: 800 },
    { partido: "Talleres 0 vs Belgrano 0", ganancia: 100 },
    { partido: "Rosario Central 4 vs Colon 0", ganancia: 400 },
    { partido: "Huracan 1 vs San Lorenzo 0", ganancia: 800 },

]
const resultadosAlFinal = partidosDeHoy.map((el) => el.partido)
console.log(resultadosAlFinal)
//Si se dan los resultados, mas la bonificacion, tus resultados seran:
const actualizandoGananciasPorBonificacion = partidosDeHoy.map((el) => {
    return {
        partido: el.partido,
        gananciaActualizadaPorBonificacion: el.ganancia * 6.25
    }
})
console.log(actualizandoGananciasPorBonificacion)
//Predicciones
//Champions
const partidosDeHoyChampions = [
    { partido: "Barcelona 2 vs Leverkusen 0", apostado: 1000 },
    { partido: "Inter 0 vs Liverpool 3", apostado: 1000 },
    { partido: "Milan 1 vs Real Madrid 0", apostado: 4000 },
    { partido: "Chelsea 1 vs Valencia 0", apostado: 800 },

]
const resultadosAlFinalChampions = partidosDeHoyChampions.map((el) => el.partido)
console.log(partidosDeHoyChampions)
//Si se dan los resultados, mas la bonificacion, tus resultados seran:
const bonificacionEnChampions = partidosDeHoyChampions.map((el) => {
    return {
        partido: el.partido,
        bonificacionEnChampions: el.apostado * 20.5
    }
})
console.log(bonificacionEnChampions)

const blackJack = () => {
    return Math.floor(Math.random() * 12 + 10)
}
const blackJackCasa = () => {
    return Math.floor(Math.random() * 12 + 10)
}

console.log('Tus cartas para esta mano son de ' + blackJack() + ', la casa obtiene ' + blackJackCasa())
if (blackJack() > blackJackCasa()) {
    console.log('Ganaste 500 pesos')
}
else if (blackJack() < blackJackCasa()) {
    console.log('Pierdes 500 pesos por no superar a la casa')
}
