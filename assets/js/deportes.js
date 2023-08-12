const shopContent = document.getElementById("shopContent")
const verCarrito = document.getElementById("verCarrito")
const modalContainer = document.getElementById("modal-container")
const cantidadCarrito = document.getElementById("cantidadCarrito")

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


const saveLocal = () => {
    
    localStorage.setItem("carrito", JSON.stringify(carrito))
}

