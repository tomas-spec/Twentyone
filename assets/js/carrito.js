/*verCarrito.addEventListener('click', ()=>{*/
const pintarcarrito = () =>{
    modalContainer.innerHTML = ""
    modalContainer.style.display = "flex"
    const modalHeader = document.createElement('div')
    modalHeader.className = "modal-header"
    modalHeader.innerHTML = `
    <h1 class = "modal-header-title">Tus apuestas</h1>`


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
    <h1>${product.nombre}</h1>
    <p>${product.precio}$</p>
    <span class = "restar"> - </span>
    <p>Cantidad: ${product.cantidad}</p>
    <span class = "sumar"> + </span>
    <p>Total: ${product.cantidad * product.precio}</p>
    `

    modalContainer.append(carritoContent)

    let restar = carritoContent.querySelector(".restar")

    restar.addEventListener("click", () =>{
        if(product.cantidad !==1){
        product.cantidad --
        }
        saveLocal()
        pintarcarrito()
    })

    let sumar = carritoContent.querySelector(".sumar")
    sumar.addEventListener("click",()=>{
        product.cantidad ++
        saveLocal()
        pintarcarrito()
    })

    


 let eliminar = document.createElement("span")

    eliminar.innerHTML = "Descartar"
    eliminar.className = "delete-product"
    carritoContent.append(eliminar)

    eliminar.addEventListener("click", eliminarProducto)
})

const total = carrito.reduce((acc, el)=> acc + el.precio * el.cantidad, 0)

const totalBuying = document.createElement("div")
totalBuying.classname = "total-content"
totalBuying.innerHTML = `total a pagar: ${total} $`
modalContainer.append(totalBuying)
}

verCarrito.addEventListener("click",pintarcarrito) 


const eliminarProducto = () => {
    const foundId = carrito.find((element)=> element.id)

    carrito = carrito.filter((carritoId)=>{
        return carritoId !== foundId
    })
    carritoCounter()
    saveLocal()
    pintarcarrito()
}



const carritoCounter = () =>{ 
    cantidadCarrito.style.display = "block" 
    
    const carritoLength = carrito.length
    
    localStorage.setItem("carritoLength", JSON.stringify(carritoLength))

    cantidadCarrito.innerText = JSON.parse(localStorage.getItem("carritoLength"))
} 

carritoCounter()