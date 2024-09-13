//precio base
const precio = 400000
//seleccionamos en el DOM la cantidad y los botones de sumar y restar
let cantidad = 0
const cantidadPrecio = document.querySelector(".cantidad")
const sumar = document.querySelector(".sumar")
const restar = document.querySelector(".restar")
// seleccionamos el valor total
const valorTotal = document.querySelector(".valor-total")


//precio inicial será el precio base de la variable "precio"
const precioSpan = document.querySelector(".precio-inicial")
precioSpan.innerHTML = precio
// establecemos valor total con una función
function total() {
    valorTotal.innerHTML = precio * cantidad
}


sumar.addEventListener('click', ()=>{
    cantidad += 1
    cantidadPrecio.innerHTML = cantidad
    total() // actualizamos el total
})
restar.addEventListener('click', ()=>{
    if(cantidad > 0) { // evitamos valores negativos
        cantidad -=1
        cantidadPrecio.innerHTML = cantidad
        total() // actualizamos el total
    }
})
