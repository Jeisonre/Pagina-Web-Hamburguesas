import {initializeApp} from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, doc, deleteDoc, query, orderBy } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-firestore.js";

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

const app = initializeApp(firebaseConfig);
const db = getFirestore();

const pedidoList = document.getElementById('pedido-list');

function mostrarPedidos() {
    const pedidosCollection = collection(db, 'pedidos');
    const ordenQuery = query(pedidosCollection, orderBy('Fecha', 'desc')); //para que se ordene de mas reciente primero
    getDocs(ordenQuery).then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            const data = doc.data();
            const fecha = data.Fecha && data.Fecha.toDate() ? data.Fecha.toDate().toLocaleString() : 'Fecha no disponible';
            const mesa = data.Mesa;

            // Construir una cadena de texto con los detalles de los productos
            let productosDetalles = '<ul>';
            if (data.Productos && Array.isArray(data.Productos)) {
                data.Productos.forEach((producto, index) => {
                    productosDetalles += `<strong>Producto #${index + 1}</strong>`;
                    productosDetalles += `<li><strong>Cantidad:</strong> ${producto.cantidad}</li>`;
                    productosDetalles += `<li><strong>Nombre:</strong> ${producto.nombre}</li>`;
                    productosDetalles += `<li><strong>Precio:</strong> ${producto.precio}</li><br>`;
                });
            }
            productosDetalles += '</ul>';

            const total = data.Total;
            const row = `
                <tr>
                    <td>${fecha}</td>
                    <td>${mesa}</td>
                    <td>${productosDetalles}</td>
                    <td>${total}</td>
                    <td class="btn"><button class="delete-btn" onclick="eliminarPedido('${doc.id}')">Eliminar</button></td>
                </tr>
            `;
            pedidoList.innerHTML += row;
        });
    })
    .catch((error) => {
        console.error('Error al obtener los documentos:', error);
    });
}

window.eliminarPedido = function(pedidoId) {
    const pedidoRef = doc(db, 'pedidos', pedidoId);

    deleteDoc(pedidoRef).then(() => {
        document.getElementById("mensaje").style.display = "block";
        //>setTimeout< de un tiempo de espera en milisegundos.
        setTimeout(function() {
            document.getElementById("mensaje").style.display = "none";
            location.reload();
        },2000);
    }).catch((error) => {
        console.error('Error al eliminar el pedido:', error);
        //alert('Error al eliminar el pedido. Por favor, inténtelo nuevamente.');
        document.getElementById("mensajeError").style.display = "block";
        setTimeout(cerrarMensaje, 800);

        function cerrarMensaje() {
            // Cierra el mensaje
            document.getElementById("mensajeError").style.display = "none";
        }
    });
}

window.onload = mostrarPedidos;