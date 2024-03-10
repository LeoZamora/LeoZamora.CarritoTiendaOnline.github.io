const productosCarritos = JSON.parse(localStorage.getItem('cantidad-carrito'))
console.log(productosCarritos)

const contProductosCarrito = document.querySelector('.contenedor-productos-carrito')
const contOpcionesCarrito = document.querySelectorAll('.opciones-carrito')
let deleteBtn = document.querySelectorAll('.btn-delete')
const vaciar = document.querySelector('#vaciar')
const contenedorTotal = document.querySelector('#total')



// function datosCarrito(){
//     if (productosCarritos) {

//         contProductosCarrito.innerHTML = ``

//         productosCarritos.forEach(producto => {
//             const contenedorDiv = document.createElement('div')
//             contenedorDiv.classList.add('detalles-producto')
    
        
//             contenedorDiv.innerHTML = 
//             `<img src="${producto.imagen}" alt="">
//                 <div class="det name">
//                     <h3>Descripcion</h3>
//                     <p>${producto.nombre} <i class="bi bi-tag-fill"></i></p>
//                 </div>
//                 <div class=" det cant">
//                     <h3>Cantidad</h3>
//                     <p>${producto.cantidad}</p>
//                 </div>
//                 <div class="det precio-detalle">
//                     <h3>Precio</h3>
//                     <p id="subtotal">$${producto.precio}</p>
//                 </div>
//                 <div class="det precio-detalle">
//                     <h3>Subtotal</h3>
//                     <p id="${producto.id}">$${producto.precio*producto.cantidad}</p>
//                 </div>
//                 <div class="btn-delete">
//                     <i id="${producto.id}" class="bi bi-trash-fill"></i>
//                 </div>`
    
//             contProductosCarrito.append(contenedorDiv)
    
//         }) 
//     } else {
//         productosCarritos=[]
//     }
//     actualizarDeletebtn()
//     actualizarTotal()
// }
// datosCarrito()


actualizarDeletebtn()

function actualizarDeletebtn() {
    deleteBtn = document.querySelectorAll('.bi-trash-fill')

    deleteBtn.forEach(btn=> {
        btn.addEventListener('click', eliminarProducto)
    })
}

function eliminarProducto(e) {
    const idbtn = e.currentTarget.id
    const index = productosCarritos.findIndex(producto => producto.id === idbtn)
    console.log(productosCarritos)
    productosCarritos.splice(index, 1)
    console.log(productosCarritos)

    datosCarrito()

    localStorage.setItem('cantidad-carrito', JSON.stringify(productosCarritos))

}


const buyBtn = document.querySelector('#buy-btn')

buyBtn.addEventListener('click', ()=>{
    swal('Aviso','Te estaremos redirigiendo al Whatsapp de la Tienda para realizar tu compra')

})


vaciar.addEventListener('click', vaciarCarrito)
function vaciarCarrito() {
    productosCarritos.length = 0
    localStorage.setItem('cantidad-carrito', JSON.stringify(productosCarritos))
    datosCarrito()
}

function actualizarTotal(){
    const totalCalculado = productosCarritos.reduce((acc, producto) => acc + (producto.precio * producto.cantidad), 0)
    total.innerText = `$${totalCalculado}`
}