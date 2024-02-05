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


//Practica de ejercicios de activ
/*let ingresarNombre = prompt("Ingresa tu nombre")

if(ingresarNombre == Bart){
    console.log("Yo fui")
} else{
    console.log("Yo no fui")
}

let ingresaLetra = prompt("Ingresa una letra")

if ((ingresaLetra == "y") || (ingresaLetra == "Y")){
    console.log("correcto")   
} else{
    console.log("Incorrecto")
}

// activ 3 apartado 2

let elegiAlguien = prompt("Escribi un numero")
if(elegiAlguien == 2){
    console.log("homero")
} else if (elegiAlguien==3){
    console.log("soy Marge")
} else if (elegiAlguien == 4){
    console.log("soy Bart")
} else{
    console.log("soy Lisa")
}

//Activ 4 apart 2
let establecerPresupuesto = prompt("Escribi tu presupuesto")

if((establecerPresupuesto >= 0) || (establecerPresupuesto <=1000)){
    console.log("presupuesto bajo")
} else if((establecerPresupuesto >= 1001) || (establecerPresupuesto <=3000)){
    console.log("Presupuesto medio")
} else if(establecerPresupuesto > 3000){
    console.log("presupuesto Alto")
} else{
    alert("error")
}

//Activ 5 part 2

let producto1 = prompt("Ingresa Producto")
let producto2 = prompt("Ingresa Producto")
let producto3 = prompt("Ingresa Producto")
let producto4 = prompt("Ingresa Producto")

if((producto1 != "") && (producto2 != "") && (producto3 != "") && (producto4 != "")){
    let heladera = "1) " + producto1 + "" + "2)" + producto2 + "" + "3)" + producto3 + "" +
    "4)" + producto4;

    console.log(heladera)
} else{
    alert("errorrrrrr")
}

//ACtiv 1 apart 3
*/



//Constructores

function apuesta(monto) {
    this.partido = monto.partido
    this.goles = monto.goles
    this.apostado = monto.apostado
}

const apuesta1 = new apuesta ({partido:"Barcelona vs Atletico Madrid", goles: "4 goles", apostado:"3000 pesos"})

console.log(apuesta1)


function BlackJack(mano, ganancia, numero){
    this.mano = mano;
    this.ganancia = ganancia;
    this.numero = numero;
    this.hablar = function(){console.log("Tu mano es de " + this.mano + ", has ganado a la casa, quien saco " + this.numero + ", tu ganancia es de " + this.ganancia)}
}

const persona1 = new BlackJack(20, 7000, 19)
const persona2 = new BlackJack(17, 5000, 22)

persona1.hablar()
persona2.hablar()


class Champions{
    constructor(partido, precio){
        this.partido = partido;
        this.precio = precio;
        this.hablar = function(){console.log("El encuentro de hoy de " + this.partido + " es el partido destacado de la fecha, si el local gana, obtendra una ganancia de " + this.precio)}
    }
    potencialGanancia(){
        this.precio = this.precio * 200
    }
}

const jugador1 = new Champions("Real Madrid vs Napoli", "30")

const jugador2 = new Champions("Bayern Munich vs Inter de Milan", "200")

jugador1.potencialGanancia()
jugador1.hablar()

jugador2.potencialGanancia()
jugador2.hablar() 


class Libertadores {
    constructor (nombre, ganancia){
        this.nombre = nombre;
        this.ganancia = ganancia;
        

    }
    gananciaPartidoGana(){
        this.ganancia = this.ganancia * 900
    }
}

const partidosHoy = []
partidosHoy.push(new Libertadores("Boca Jr vs Atletico Mineiro", "300"))
partidosHoy.push(new Libertadores("River Plate vs Flamengo", "200"))
partidosHoy.push(new Libertadores("Estudiantes vs Rosario Central", "100"))

for (const Libertadores of partidosHoy)
Libertadores.gananciaPartidoGana();

console.table(partidosHoy)



const carrito = []

const sudamericana = {
    code: 1,
    nombre: "Copa Sudamericana",
    minimo: 150,

}

const uefa = {
    code: 2,
    nombre: "Uefa Europa League",
    minimo: 50,
}

const premier = {
    code: 3,
    nombre: "Premier League",
    minimo: 100,
}

carrito.push(sudamericana)
carrito.push(uefa)
carrito.push(premier)
console.table(carrito);




//Find

const apuestas = [
    {nombre: 'Colo Colo vs Antofagasta', precio: 500},
    {nombre: 'Una ficha Black Jack', precio: 20}

]

const resultado = apuestas.find((el) => el.nombre === 'Una ficha Black Jack')

console.log(resultado)

const resultado2 = apuestas.filter((el)=> el.nombre.includes('Colo'))

console.log(resultado2)

//Map
const partidosDestacadosEspania = [
    {nombre: 'Barcelona vs Real Madrid', precio: 100},
    {nombre: 'Atletico vs Almeria', precio: 100},
    {nombre: 'Alaves vs Mallorca', precio: 100},
    {nombre: 'Sevilla vs Osasuna', precio: 100},
]
const nombres = partidosDestacadosEspania.map((el)=> el.nombre)
console.log(nombres)
//

//Ejemplo aplicado

const partidosChampions = [{id: 1, partido: 'Inter vs Dormunt, Ganador Inter', precio:150},
{id: 2, partido: 'Bayern vs Liverpool, Ganador Bayern', precio:90},
{id: 3, partido: 'United vs City, Ganador City', precio:101},
{id: 4, partido: 'Arsenal vs Getafe, Ganador Arsenal', precio:15}]

const buscado = partidosChampions.find(partido => partido.id === 2)
console.log(buscado)

const barato = partidosChampions.filter(partido => partido.precio <100)

const listaPartidos = partidosChampions.map(partido => partido.partido)
console.log(listaPartidos)

// carrito

const apuestasDelDia = [{id: 1, nombre: "Pumas vs Francia", precio: 150, imagen:'../imagenes/samoa-mundial.jpg'},
{id: 2, nombre: "Al Hilal vs Inter de Miami", precio: 200, imagen: '../imagenes/inter-de-miami.jpg'},
{id: 3, nombre: "New Zeland vs Fiji", precio: 50, imagen:'../imagenes/fiji.jpg'},
{id: 4, nombre: "Italia vs Irlanda", precio: 50, imagen: '../imagenes/irlanda.jpg'},
{id: 5, nombre: "Gales vs Italia", precio: 50, imagen:'../imagenes/gales.jpg'},
{id: 6, nombre: "Nets vs Lakers", precio: 50, imagen:'../imagenes/La-lakers.jpg'}];

let contenido = document.getElementById("Informacion")
for (const mundial of apuestasDelDia){
    let contenedor = document.createElement("div")
    contenedor.innerHTML= ` <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                            <div class="row"
                            <div class="container-fluid">
                            <div class = "card-body text-center">
                            <h2 class= "Info-apuesta">${mundial.nombre}<h2>
                            <p class= "Precio-apuesta"> Precio: ${mundial.precio}</p>
                            <img src= ${mundial.imagen} style= "width: 18rem">
                            </div>
                            </div>`

contenido.appendChild(contenedor) 
}


