const shopContent = document.getElementById("shopContent")
const verCarrito = document.getElementById("verCarrito")
const modalContainer = document.getElementById("modal-container")
const cantidadCarrito = document.getElementById("cantidadCarrito")
const productos = [
    {
        "id": 1,
        "nombre": "Real Sociedad",
        "precio": 50,
        "img": "../imagenes/Ligas.jpg",
        "cantidad": 1
    },
    {
        "id": 2,
        "nombre": "Los Pumas",
        "precio": 25,
        "img": "../imagenes/rugby.jpeg",
        "cantidad": 1
    },

    {
        "id": 3,
        "nombre": "Roger Federer",
        "precio": 50,
        "img": "../imagenes/Tenis.jpg",
        "cantidad": 1
    },
    {
        "id": 4,
        "nombre": "River Plate",
        "precio": 50,
        "img": "../imagenes/EstadioRiver-kebab-case.jpeg",
        "cantidad": 1
    },
    {
        "id": 5,
        "nombre": "BlackJack",
        "precio": 50,
        "img": "../imagenes/blackjack-online-kebab-case.png",
        "cantidad": 1
    },
    {
        "id": 6,
        "nombre": "Roulette",
        "precio": 50,
        "img": "../imagenes/ruletta-casino-kebab-case.jpeg",
        "cantidad": 1
    },
    {
        "id": 7,
        "nombre": "Checo Perez",
        "precio": 50,
        "img": "../imagenes/F1.jpg",
        "cantidad": 1
    },
    {
        "id": 8,
        "nombre": "Boca Jrs",
        "precio": 50,
        "img": "../imagenes/Tenis.jpg",
        "cantidad": 1
    }

]

let carrito= JSON.parse(localStorage.getItem("carrito")) || []

const getProducts = async () => {
    const resp = await fetch ('.././assets/data/data.json')
    const data = await resp.json()

    data.forEach((product)=>{
        let content = document.createElement("div")
        content.className = "card w-100"
        content.innerHTML = `
        <img src="${product.img}" height="200px">
        <h3>${product.nombre}</h3>
        <p class="price">Apuesta minima: ${product.precio} $</p>
        <p>Cantidad: ${product.cantidad}</p>`
    
        shopContent.append(content)
    
        let comprar = document.createElement('button')
        comprar.innerText = "comprar"
    
        comprar.className = "comprar"
        content.append(comprar)
    
        comprar.addEventListener('click', ()=>{
    
        const repeat = carrito.some((repeatProduct)=> repeatProduct.id === product.id)
    
        if(repeat){
            carrito.map((prod) =>{
                if(prod.id === product.id){
                    prod.cantidad++
                }
            })
        }else{
    
            carrito.push({
                id: product.id,
                img: product.img,
                nombre: product.nombre,
                precio: product.precio,
                cantidad: product.cantidad,
            })
        }
        carritoCounter()
        saveLocal()
        })
    })
    
}
getProducts()

/*data.forEach((product)=>{
    let content = document.createElement("div")
    content.className = "card w-100"
    content.innerHTML = `
    <img src="${product.img}" height="200px">
    <h3>${product.nombre}</h3>
    <p class="price">Apuesta minima: ${product.precio} $</p>
    <p>Cantidad: ${product.cantidad}</p>`

    shopContent.append(content)

    let comprar = document.createElement('button')
    comprar.innerText = "comprar"

    comprar.className = "comprar"
    content.append(comprar)

    comprar.addEventListener('click', ()=>{

    const repeat = carrito.some((repeatProduct)=> repeatProduct.id === product.id)

    if(repeat){
        carrito.map((prod) =>{
            if(prod.id === product.id){
                prod.cantidad++
            }
        })
    }else{

        carrito.push({
            id: product.id,
            img: product.img,
            nombre: product.nombre,
            precio: product.precio,
            cantidad: product.cantidad,
        })
    }
    carritoCounter()
    saveLocal()
    })
})*/
const saveLocal = () => {
    
    localStorage.setItem("carrito", JSON.stringify(carrito))
}

//getItem


/*verCarrito.addEventListener('click', ()=>{
    modalContainer.innerHTML = ""
    modalContainer.style.display = "flex"
    const modalHeader = document.createElement('div')
    modalHeader.className = "modal-header"
    modalHeader.innerHTML = `
    <h1 class = "modal-header-title">Carrito.</h1>`


    modalContainer.append(modalHeader)


    const modalbutton = document.createElement("h1")
    modalbutton.innerText = "cerrar"
    modalbutton.className = "modal-header-button"

    modalbutton.addEventListener("click", ()=>{
        modalContainer.style.display = "none"
    })


    modalHeader.append(modalbutton)

carrito.forEach((product) => {


    let carritoContent = document.createElement("div")
    carrito.className = "modal-content"
    carritoContent.innerHTML = 
    `
    <img src ="${product.img}">
    <h3>${product.nombre}</h3>
    <p>${product.precio}$</p>
    `

    modalContainer.append(carritoContent)
})

const total = carrito.reduce((acc, el)=> acc + el.precio, 0)

const totalBuying = document.createElement("div")
totalBuying.classname = "total-content"
totalBuying.innerHTML = `total a pagar: ${total} $`
modalContainer.append(totalBuying)
})
*/