const shopContent = document.getElementById("shopContent")
const verCarrito = document.getElementById("verCarrito")
const modalContainer = document.getElementById("modal-container")
const productos = [
    {
        id: 1,
        nombre: "Sevilla vs Real Sociedad",
        precio: 5000,
        img: '/Users/tomasduran/Desktop/Twenty-one2/imagenes/Ligas.jpg'
    },
    {
        id: 2,
        nombre: 'Los Pumas vs All blacks',
        precio: 2500,
        img: '/Users/tomasduran/Desktop/Twenty-one2/imagenes/rugby.jpeg'
    },

    {
        id: 3,
        nombre: 'Federer vs Nadal',
        precio: 500,
        img: '/Users/tomasduran/Desktop/Twenty-one2/imagenes/Tenis.jpg'
    },
    {
        id: 4,
        nombre: 'Federer vs Nadal',
        precio: 500,
        img: '/Users/tomasduran/Desktop/Twenty-one2/imagenes/Tenis.jpg'
    },
    {
        id: 5,
        nombre: 'Federer vs Nadal',
        precio: 500,
        img: '/Users/tomasduran/Desktop/Twenty-one2/imagenes/Tenis.jpg'
    },
    {
        id: 6,
        nombre: 'Federer vs Nadal',
        precio: 500,
        img: '/Users/tomasduran/Desktop/Twenty-one2/imagenes/Tenis.jpg'
    },

];
let carrito = [];
productos.forEach((product) => {
    let content = document.createElement("div");
    content.className = "card"
    content.innerHTML = `
            <img src="${product.img}"  width="100%" height="150px">
            <h3>Nombre: ${product.nombre}</h3>
            <p class="price">Precio: ${product.precio}</p>
    `

    shopContent.append(content);
    let comprar = document.createElement("button")
    comprar.innerText = "apostar";

    comprar.className = "apostar"

    content.append(comprar)

    comprar.addEventListener("click", () => {
        carrito.push({
            id: product.id,
            img: product.img,
            nombre: product.nombre,
            precio: product.precio,

        });
        console.log(carrito)
    });
});

verCarrito.addEventListener("click", () => {
    modalContainer.innerHTML = ""
    modalContainer.style.display = "flex"
    const modalHeader = document.createElement("div")
    modalHeader.className = "modal-header"
    modalHeader.innerHTML - `
    <h1 class="modal-header-title">Carrito.<h1>`
    modalContainer.append(modalHeader)


    const modalbutton = document.createElement("h1")
    modalbutton.innerText = "cerrar"
    modalbutton.className = "modal-header-button"
    modalbutton.addEventListener("click", () => {
        modalContainer.style.display = "none"
    })

    modalHeader.append(modalbutton)

    carrito.forEach((product) => {
        let carritoContent = document.createElement("div")
        carritoContent.className = "modal-content"
        carritoContent.innerHTML = `
    <img src = "${product.img}">
    <h3>${product.nombre}</h3>
    <p>${product.precio}$<p>
    `
        modalContainer.append(carritoContent)
    })
    const total = carrito.reduce((acc, el) => acc + el.precio, 0)
    const totalBuying = document.createElement("div")
    totalBuying.className = "total-content"
    totalBuying.innerHTML = `total a pagar: ${total} $`
    modalContainer.append(totalBuying)

})