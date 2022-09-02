

let formulario = document.getElementById('formulario')
let error = document.getElementById('error')

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
        error.innerHTML = "Debe ingresar los datos correspondientes"
        eleccion.textContent = ""
        document.getElementById("destino").focus()
    } else {
        error.innerHTML = ""
        document.getElementById("destino").value = "";
        document.getElementById("lugar").value = "";
        document.getElementById("personas").value = "";
        document.getElementById("fechsal").value = "";
        document.getElementById("fechlleg").value = "";
        document.getElementById("destino").focus()
    }
    
}


class Paquetes {
    constructor(lugar, precio) {
        this.lugar = lugar.toUpperCase()
        this.precio = Number(precio)
    }
    sumaIVA() { return this.precio *= 1.21 }
}
const paquete1 = new Paquetes("Cancun", 120000)
const paquete2 = new Paquetes("Miami", 150000)
const paquete3 = new Paquetes("Roma", 180000)
const paquete4 = new Paquetes("Grecia", 200000)

const viajes = [];

viajes.push(paquete1, paquete2, paquete3, paquete4)


let div = document.getElementById('infoPaquetes')
let btn = document.getElementById('btnpaquetes')

btnpaquetes.addEventListener("click", infoPaq)

function infoPaq(e) {
    e.preventDefault();
    for (const elements of viajes) {
        infoPaquetes.innerHTML = `<h3>Listado de todos los paquetes</h3>${elements.lugar} $ ${elements.sumaIVA()}`
    }
}

