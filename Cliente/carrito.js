document.addEventListener('DOMContentLoaded', () => {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const cartTable = document.getElementById('cart-table');

    // Mostrar productos en el carrito
    carrito.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.nombre}</td>
            <td>${item.cantidad}</td>
            <td>$${item.precio.toFixed(2)}</td>
            <td><button class="remove-btn" onclick="eliminarProducto('${item.id}')">Eliminar</button></td>
        `;
        cartTable.appendChild(row);
    });

    // Calcular y mostrar el total
    actualizarTotalEnPantalla();
});

function eliminarProducto(productID) {
    // Obtener el carrito desde el almacenamiento local
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    // Filtrar los productos, excluyendo el que se va a eliminar
    carrito = carrito.filter(item => item.id !== productID);

    // Guardar el carrito actualizado en el almacenamiento local
    localStorage.setItem('carrito', JSON.stringify(carrito));

    // Recargar la página para reflejar los cambios en el carrito
    location.reload();
}

function calcularTotal() {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const total = carrito.reduce((acc, item) => acc + item.precio * item.cantidad, 0);
    return total;
}

function actualizarTotalEnPantalla() {
    const total = calcularTotal();
    const totalPriceContainer = document.getElementById('total-price');
    totalPriceContainer.textContent = `Total: $${total.toFixed(2)}`;
}