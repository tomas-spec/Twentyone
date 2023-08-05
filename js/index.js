const getProducts = async () => {
    const respuesta = await fetch('/data/data.json')
    return await respuesta.json()
}

const listadoProductos = document.querySelector('#listadoProductos')
listadoProductos.classList.add('row', 'w-100')

const productos = await getProducts()

const renderProductos = () => {
    productos.forEach(producto => {
        const card = document.createElement('div')
        card.classList.add('card', 'col-4')

        card.innerHTML = `
        <div class='card-body'>
        <img src="${producto.img}" class='w-100'
        </div>
       `
       listadoProductos.appendChild(card)
    });
}

renderProductos()
console.log(productos)

