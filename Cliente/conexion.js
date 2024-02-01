// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-analytics.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA1eYq-gJl9P1AJirvD4j7lJB0xKyVWns4",
    authDomain: "proyectoprueba-25.firebaseapp.com",
    databaseURL: "https://proyectoprueba-25-default-rtdb.firebaseio.com",
    projectId: "proyectoprueba-25",
    storageBucket: "proyectoprueba-25.appspot.com",
    messagingSenderId: "854508491980",
    appId: "1:854508491980:web:309f21b51efd10907ede69",
    measurementId: "G-C5D74KR3EH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function enviarPedidoAFirebase() {
    // Obtén el número de mesa desde el input
    const numeroMesaInput = document.getElementById('numeroMesa');
    const numeroMesa = numeroMesaInput.value;
    // Verifica si el campo es válido
    if (!numeroMesaInput.checkValidity()) {
        // Muestra un mensaje de error o realiza alguna acción
        document.getElementById("mensajeErrorMesa").style.display = "block";
        setTimeout(cerrarMensaje, 2000);
        function cerrarMensaje() {
            // Cierra el mensaje
            document.getElementById("mensajeErrorMesa").style.display = "none";
        }
        return;
    }
    
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    // Verifica que haya productos en el carrito antes de enviarlos a Firestore
    if (carrito.length === 0) {
        alert('El carrito está vacío. Agregue productos antes de finalizar el pedido.');
        return;
    }
    // Accede a la instancia de Firestore desde la configuración de la aplicación
    const db = getFirestore(app);
    // Crea una referencia a la colección "pedidos" en tu base de datos
    const pedidosRef = collection(db, 'pedidos');
    // Obtén la fecha y hora actual para usar como identificador único del pedido
    const timestamp = new Date();
    // Calcular el total
    let total = calcularTotal();
    // Verificar si el total es válido
    if (isNaN(total)) {
        console.error('El total no es un número válido:', total);
        alert('Error al calcular el total. Por favor, inténtelo nuevamente.');
        return;
    }
    // Convertir el total a un número con dos decimales
    total = parseFloat(total.toFixed(2));
    // Crea un documento en la colección "pedidos" con los datos del carrito
    addDoc(pedidosRef, {
        Fecha: timestamp,
        Productos: carrito,
        Total: total,
        Mesa: numeroMesa,
    })
    .then(() => {
        // Limpiar el carrito después de enviar el pedido
        localStorage.removeItem('carrito');
        document.getElementById("mensajeEnviar").style.display = "block";
        //>setTimeout< de un tiempo de espera en milisegundos.
        setTimeout(function() {
            document.getElementById("mensajeEnviar").style.display = "none";
            location.reload();
        },2000);
    })
    .catch(error => {
        console.error('Error al enviar el pedido a Firebase:', error);
        document.getElementById("mensajeErrorEnviar").style.display = "block";
        setTimeout(cerrarMensaje, 2000);
    });
}
// Asocia la función `enviarPedidoAFirebase` al evento click del botón "Total"
document.getElementById('total').addEventListener('click', enviarPedidoAFirebase);