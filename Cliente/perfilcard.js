function ingresarDatos() {
    var nombre = document.getElementById("nombre").value;
    var cedula = document.getElementById("cedula");

    if (nombre && cedula.checkValidity() && cedula.value.length > 9 && cedula.value.length < 11){
        localStorage.setItem("nombreUsuario", nombre);
        localStorage.setItem("cedulaUsuario", cedula.value);

        document.getElementById("mensaje").style.display = "block";
        //>setTimeout< de un tiempo de espera en milisegundos.
        setTimeout(function() {
            document.getElementById("mensaje").style.display = "none";
            // >window.location.href< Redirige a otra página.
            window.location.href = "articulos.html";
        },500);
    } else {
        document.getElementById("mensajeError").style.display = "block";
        setTimeout(cerrarMensaje, 800);

        function cerrarMensaje() {
            // Cierra el mensaje
            document.getElementById("mensajeError").style.display = "none";
        }
    }
}

function mostrarDatos() {
    var nombreUsuario = localStorage.getItem("nombreUsuario");
    var cedulaUsuario = localStorage.getItem("cedulaUsuario");

    document.getElementById("nombre-usuario").textContent = nombreUsuario || "Nombre del Usuario";
    document.getElementById("cedula-usuario").textContent = "Cédula: " + (cedulaUsuario || "Cédula del Usuario");
}