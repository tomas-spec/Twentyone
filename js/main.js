let usuario = localStorage.getItem('nombre');
if (usuario == null) {
    localStorage.setItem('nombre', prompt('INGRESAR NOMBRE'));
} else {
    alert('Tu nombre de usuario es ' + usuario);
}

const fechaNacimiento = prompt("Ingresa tu fecha de nacimiento en formato DD/MM/AAAA:");
const partesFecha = fechaNacimiento.split('/');
const dia = parseInt(partesFecha[0]);
const mes = parseInt(partesFecha[1]) - 1; // Restamos 1 al mes ya que los meses en JavaScript empiezan desde 0 (enero es 0, febrero es 1, etc.)
const año = parseInt(partesFecha[2]);
const fechaNac = new Date(año, mes,);
const edad = (new Date() - fechaNac) / (365.25 * 24 * 60 * 60 * 0) // Cálculo de la edad en años

permitirIngreso = (edad >= 18) ? "Puede ingresar" : "No puede ingresar";

permitirIngreso ? alert("Puedes acceder a los juegos"): alert("No podras acceder a los juegos")

const registroIngreso = permitirIngreso >= 18 && new Date()
console.log(registroIngreso)


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

//Practicando para entrega
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
/*let imagenPartido = document.getElementById("Img-Partido1");
imagenPartido.addEventListener("click", function () {
    

console.log("Si apostas 200 a que gana Atletico Madrid y convierte Griezmann 2 goles contra el Sevilla, tus ganancias seran de 3000 pesos")
    
});
*/
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


const urlActual2 = window.location.href;
if (urlActual2 === "file:///Users/tomasduran/Desktop/Twenty-one2/pages/casino.html") {

    let casino = document.querySelector(".En-Vivo");
    casino.addEventListener("click", function () {
        prompt("Preparate para jugar, establece tu importe abajo");
    });


    let button = document.getElementById("Button")
    button.addEventListener("click", function () {
        alert("Pronto habra mas juegos disponibles");
    });
}

//Reduce
//Apuesta combinada equipos
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

ganador ? console.log('Si Bayern Munich es el ganador tus ganancias son de ' + (Math.random() * 600)) : console.log('No obtendras ganancias por este partido')

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
const mano = (blackJack.return > blackJackCasa.return) ? true : false

mano ? console.log('Ganaste 500 pesos') : console.log('Pierdes 500 pesos por no superar a la casa')





const urlActual = window.location.href;
if (urlActual === "file:///Users/tomasduran/Desktop/Twenty-one2/index.html") {

    Toastify({

        text: "Hola, soy Leonardo, asistente virtual de Twenty-one, si necesitas ayuda escribinos",

        duration: 5000,
        style: {
            background: "linear-gradient(to right, #a531c2, rgb(7, 6, 6))",
        }

    }).showToast();
    //Para que no se siga repitiendo todo el tiempo
    const eventoEjecutado = localStorage.getItem("eventoEjecutado");
    if (!eventoEjecutado) {
        Swal.fire({
            title: 'Succes!',
            text: 'Bienvenido a la mejor casa de apuestas',
            icon: 'success',
            confirmButtonText: 'Cool',

        })
        localStorage.setItem("eventoEjecutado", true);
    }
    //CRUD: lo dijo en la clase
    Toastify({
        text: "Revisa las ofertas que tenemos",
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "left", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background: "linear-gradient(to right, #a531c2, rgb(7, 6, 6))",
        },
        onClick: function () { } // Callback after click
    }).showToast();


}


let partidoDestacados = document.getElementById("1er-Partido");
partidoDestacados.addEventListener("click", function () {
    prompt("Escribe la cantidad apostar y el equipo elegido")
});

let partidoDestacados2 = document.getElementById("2do-Partido");
partidoDestacados2.addEventListener("click", function () {
    prompt("Escribe la cantidad apostar y el equipo elegido")
});
let partidoDestacados3 = document.getElementById("3er-Partido");
partidoDestacados3.addEventListener("click", function () {
    prompt("Escribe la cantidad apostar y el equipo elegido")
});
let partidoDestacados4 = document.getElementById("4to-Partido");
partidoDestacados4.addEventListener("click", function () {
    prompt("Escribe la cantidad apostar y el equipo elegido")
});
let partidoDestacados5 = document.getElementById("5to-Partido");
partidoDestacados5.addEventListener("click", function () {
    prompt("Escribe la cantidad apostar y el equipo elegido")
});
let partidoDestacados6 = document.getElementById("6to-Partido");
partidoDestacados6.addEventListener("click", function () {
    prompt("Escribe la cantidad apostar y el equipo elegido")
});
let partidoDestacados7 = document.getElementById("7to-Partido");
partidoDestacados7.addEventListener("click", function () {
    prompt("Escribe la cantidad apostar y el equipo elegido")
});
let partidoDestacados8 = document.getElementById("8vo-Partido");
partidoDestacados8.addEventListener("click", function () {
    prompt("Escribe la cantidad apostar y el equipo elegido")
});
let partidoDestacados9 = document.getElementById("9no-Partido");
partidoDestacados9.addEventListener("click", function () {
    prompt("Escribe la cantidad apostar y el equipo elegido")
});


//Lo que hice basicamente fue que los eventos se repitan una sola vez
// y en una sola pagina web


//Apuesta combinada
/*class Juegos {
    constructor(nombre, precio, juegos, bono) {
        this.nombre = nombre;
        this.precio = parseFloat(precio);
        this.juegos = juegos;
        this.bono = parseInt(bono);
    }
}
const juegosTwentyOne = [];
juegosTwentyOne.push(new Juegos("European Roulette", 150, ['Roulette'], 1000));
juegosTwentyOne.push(new Juegos("Football Champions Cup", 100, ['Apuestas Deportivas'], 3000));
juegosTwentyOne.push(new Juegos("Instant Roulette", 100, ['Roulette'], 200));
juegosTwentyOne.push(new Juegos("Sisters Jackpots", 150, ['Jackpots'], 500));
juegosTwentyOne.push(new Juegos("Futbol Studio", 150, ['Apuestas Deportivas'], 700));

localStorage.setItem('juegosTwentyOne', JSON.stringify(juegosTwentyOne));

let juegosNuevos = localStorage.getItem('JuegosTwentyOne');


    if (juegosNuevos != null) {
        let array = JSON.parse(juegosNuevos);
        let salida = 'Seleccionar que juego nuevo quieres probar \n';
        for (let index = 0; index < array.length; index++) {
            salida += index + ' -> ' + array[index].nombre + ' ' + array[index].precio + ' $ ' + array[index].juegos + '\n';
        }
        alert(salida);
        let eleccion = parseInt(prompt('Ver juegos nuevos'));
        if ((eleccion >= 0) && (eleccion < array.length)) {
            alert("Juego seleccionado " + array[eleccion].nombre)
        } else {
            alert("Error de seleccion");
        }
    }
*/