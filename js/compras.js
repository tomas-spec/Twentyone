const shopContent = document.getElementById("shopContent")
const verCarrito = document.getElementById("verCarrito")
const modalContainer = document.getElementById("modal-container")
const cantidadCarrito = document.getElementById("cantidadCarrito")
const productos = [
    {
        id: 1,
        nombre: "Real Sociedad",
        precio: 5000,
        img: "../imagenes/Ligas.jpg",
        cantidad: 1,
    },
    {
        id: 2,
        nombre: 'Los Pumas',
        precio: 2500,
        img: '../imagenes/rugby.jpeg',
        cantidad: 1,
    },

    {
        id: 3,
        nombre: 'Roger Federer',
        precio: 500,
        img: '../imagenes/Tenis.jpg',
        cantidad: 1,
    },
    {
        id: 4,
        nombre: 'River Plate',
        precio: 500,
        img: "../imagenes/EstadioRiver-kebab-case.jpeg",
        cantidad: 1,
    },
    {
        id: 5,
        nombre: 'BlackJack',
        precio: 500,
        img: '../imagenes/blackjack-online-kebab-case.png',
        cantidad: 1,
    },
    {
        id: 6,
        nombre: 'Roulette',
        precio: 500,
        img: '../imagenes/ruletta-casino-kebab-case.jpeg',
        cantidad: 1,
    },
    {
        id: 7,
        nombre: 'Checo Perez',
        precio: 500,
        img: '../imagenes/F1.jpg',
        cantidad: 1,
    },
    {
        id: 8,
        nombre: 'Boca Jrs',
        precio: 500,
        img: '../imagenes/Tenis.jpg',
        cantidad: 1,
    },

];
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
productos.forEach((product) => {
    let content = document.createElement("div");
    content.className = "card"
    content.innerHTML = `
            <img src="${product.img}"  width="100%" height="150px">
            <h2>🔴 Apostar en Vivo por: </h2>
            <h3>${product.nombre}</h3>
            <p class="price">Precio: ${product.precio}$</p>
    `

    shopContent.append(content);
    let comprar = document.createElement("button")
    comprar.innerText = "apostar";

    comprar.className = "apostar"

    content.append(comprar)

    comprar.addEventListener("click", () => {

    const repeat = carrito.some((repeatProduct)=> repeatProduct.id === product.id)
    if (repeat){
        carrito.map((prod)=> {
            if(prod.id === product.id){
                prod.cantidad++
            }
        })
    } else{
        carrito.push({
            id: product.id,
            img: product.img,
            nombre: product.nombre,
            precio: product.precio,
            cantidad: product.cantidad,

        });
    }
        console.log(carrito)
        
        saveLocal()

    });
});
//set Item
const saveLocal = () => {

    localStorage.setItem("carrito", JSON.stringify(carrito))
}



//get item





