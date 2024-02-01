function mostrarDatos() {
    
}

function agregarAlCarrito(productID, productName, productPrice, quantity) {
    // Obtener o inicializar el carrito desde el almacenamiento local
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    // Verificar si el producto ya está en el carrito
    const productoExistente = carrito.find(item => item.id === productID);

    if (productoExistente) {
        // Actualizar la cantidad si el producto ya está en el carrito
        productoExistente.cantidad += quantity;
    } else {
        // Agregar el producto al carrito si no está presente
        carrito.push({
            id: productID,
            nombre: productName,
            precio: productPrice,
            cantidad: quantity
        });
    }

    // Guardar el carrito en el almacenamiento local
    localStorage.setItem('carrito', JSON.stringify(carrito));
}


// function restar1(product1) {
//     var inputNumero = document.getElementById("numeroProduct1");
//     inputNumero.value = parseInt(inputNumero.value) - 1;
// }
// function sumar1(product1) {
//     var inputNumero = document.getElementById("numeroProduct1");
//     inputNumero.value = parseInt(inputNumero.value) + 1;
// }
// function restar1(product1) {
//     var numeroProduct1 = document.getElementById("numeroProduct1");
//     var currentValue = parseInt(numeroProduct1.value , 10);
//     if (currentValue > 0) {
//         numeroProduct1.value = currentValue - 1;
//     } else {
//         numeroProduct1.value = 0;
//     }
// }
// function validarMinimo() {
//     var numeroProduct1 = document.getElementById("numeroProduct1");
//     if (numeroProduct1.value < 0) {
//         numeroProduct1.value = 0;
//     }
// }

// function restar2(product2) {
//     var inputNumero = document.getElementById("numeroProduct2");
//     inputNumero.value = parseInt(inputNumero.value) - 1;
// }
// function sumar2(product2) {
//     var inputNumero = document.getElementById("numeroProduct2");
//     inputNumero.value = parseInt(inputNumero.value) + 1;
// }
// function restar2(product2) {
//     var numeroProduct2 = document.getElementById("numeroProduct2");
//     var currentValue = parseInt(numeroProduct2.value , 10);
//     if (currentValue > 0) {
//         numeroProduct2.value = currentValue - 1;
//     } else {
//         numeroProduct2.value = 0;
//     }
// }
// function validarMinimo() {
//     var numeroProduct2 = document.getElementById("numeroProduct2");
//     if (numeroProduct2.value < 0) {
//         numeroProduct2.value = 0;
//     }
// }

// function restar3(product3) {
//     var inputNumero = document.getElementById("numeroProduct3");
//     inputNumero.value = parseInt(inputNumero.value) - 1;
// }
// function sumar3(product3) {
//     var inputNumero = document.getElementById("numeroProduct3");
//     inputNumero.value = parseInt(inputNumero.value) + 1;
// }
// function restar3(product3) {
//     var numeroProduct3 = document.getElementById("numeroProduct3");
//     var currentValue = parseInt(numeroProduct3.value , 10);
//     if (currentValue > 0) {
//         numeroProduct3.value = currentValue - 1;
//     } else {
//         numeroProduct3.value = 0;
//     }
// }
// function validarMinimo() {
//     var numeroProduct3 = document.getElementById("numeroProduct3");
//     if (numeroProduct3.value < 0) {
//         numeroProduct3.value = 0;
//     }
// }

// function restar4(product4) {
//     var inputNumero = document.getElementById("numeroProduct4");
//     inputNumero.value = parseInt(inputNumero.value) - 1;
// }
// function sumar4(product4) {
//     var inputNumero = document.getElementById("numeroProduct4");
//     inputNumero.value = parseInt(inputNumero.value) + 1;
// }
// function restar4(product4) {
//     var numeroProduct4 = document.getElementById("numeroProduct4");
//     var currentValue = parseInt(numeroProduct4.value , 10);
//     if (currentValue > 0) {
//         numeroProduct4.value = currentValue - 1;
//     } else {
//         numeroProduct4.value = 0;
//     }
// }
// function validarMinimo() {
//     var numeroProduct4 = document.getElementById("numeroProduct4");
//     if (numeroProduct4.value < 0) {
//         numeroProduct4.value = 0;
//     }
// }

// function restar5(product5) {
//     var inputNumero = document.getElementById("numeroProduct5");
//     inputNumero.value = parseInt(inputNumero.value) - 1;
// }
// function sumar5(product5) {
//     var inputNumero = document.getElementById("numeroProduct5");
//     inputNumero.value = parseInt(inputNumero.value) + 1;
// }
// function restar5(product5) {
//     var numeroProduct5 = document.getElementById("numeroProduct5");
//     var currentValue = parseInt(numeroProduct5.value , 10);
//     if (currentValue > 0) {
//         numeroProduct5.value = currentValue - 1;
//     } else {
//         numeroProduct5.value = 0;
//     }
// }
// function validarMinimo() {
//     var numeroProduct5 = document.getElementById("numeroProduct5");
//     if (numeroProduct5.value < 0) {
//         numeroProduct5.value = 0;
//     }
// }

// function restar6(product6) {
//     var inputNumero = document.getElementById("numeroProduct6");
//     inputNumero.value = parseInt(inputNumero.value) - 1;
// }
// function sumar6(product6) {
//     var inputNumero = document.getElementById("numeroProduct6");
//     inputNumero.value = parseInt(inputNumero.value) + 1;
// }
// function restar6(product6) {
//     var numeroProduct6 = document.getElementById("numeroProduct6");
//     var currentValue = parseInt(numeroProduct2.value , 10);
//     if (currentValue > 0) {
//         numeroProduct6.value = currentValue - 1;
//     } else {
//         numeroProduct6.value = 0;
//     }
// }
// function validarMinimo() {
//     var numeroProduct6 = document.getElementById("numeroProduct6");
//     if (numeroProduct6.value < 0) {
//         numeroProduct6.value = 0;
//     }
// }