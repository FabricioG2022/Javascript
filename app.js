

let formulario = document.getElementById('formulario')


formulario.addEventListener('submit', datosSeleccionados)

function datosSeleccionados(e) {
    e.preventDefault();
    const datos = e.target
    const destino = document.getElementById("destino").value
    const lugar = document.getElementById("lugar").value
    const personas = document.getElementById("personas").value
    const fechsal = document.getElementById("fechsal").value
    const fechlleg = document.getElementById("fechlleg").value
    const eleccion = document.getElementById("eleccion");
    eleccion.textContent = `Hola tus datos ingresados son: ${destino}, ${lugar}, Cantidad de personas: ${personas}, Salis: ${fechsal}, Llegas: ${fechlleg}`.toUpperCase();
    if (destino == "" || lugar == "" || personas == "" || fechsal == "" || fechlleg == "") {
        alert ("Debe ingresar los datos correspondientes")
        eleccion.textContent = ""
        document.getElementById("destino").focus()
    } else {
        document.getElementById("destino").value = "";
        document.getElementById("lugar").value = "";
        document.getElementById("personas").value = "";
        document.getElementById("fechsal").value = "";
        document.getElementById("fechlleg").value = "";
        document.getElementById("destino").focus()
    }
}

