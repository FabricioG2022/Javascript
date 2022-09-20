
//*****************************************Variables Formulario****************************/
let formulario = document.getElementById('formulario')
let error = document.getElementById('error')
//*****************************************Evento Formulario*******************************/
formulario.addEventListener('submit', datosSeleccionados)
//*****************************************Funcion Formulario******************************/
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

//******************************************Boton Mostrar paquetes****************/
//******************************************Constructor***************************/
class Paquetes {
    constructor(lugar, dias, precio) {
        this.lugar = lugar.toUpperCase()
        this.dias = dias.toUpperCase()
        this.precio = Number(precio)

    }
    sumaIVA() { return this.precio *= 1.21 }
}
const paquete1 = new Paquetes("Cancun,", "7 dias, 6 noches", 120000)
const paquete2 = new Paquetes("Miami,", "8 dias, 7 noches", 150000)
const paquete3 = new Paquetes("Roma,", "8 dias, 7 noches", 180000)
const paquete4 = new Paquetes("Grecia,", "10 dias, 9 noches", 200000)
//********************************************Array*********************************/
const viajes = [];
//********************************************Push**********************************/
viajes.push(paquete1, paquete2, paquete3, paquete4)

//********************************************Variables*****************************/
let infoPaquetes = document.getElementById('infoPaquetes')
let btnpaquetes = document.getElementById('btnpaquetes')
//*********************************************Eventos******************************/
btnpaquetes.addEventListener('click', infoPaq)
//*********************************************Funcion******************************/
function infoPaq(e) {
    e.preventDefault();
    for (const elements of viajes) {
        infoPaquetes.innerHTML += `<br>${elements.lugar} ${elements.dias} $ ${elements.sumaIVA()}`

    } if (btnpaquetes.addEventListener('click', eliminarMostrar = () => { infoPaquetes.remove() })) { }

}



//****************************************Variables Sweet Alert****************************/
let cancun = document.getElementById('cancun')
let miami = document.getElementById('miami')
let grecia = document.getElementById('grecia')
let roma = document.getElementById('roma')
//****************************************Eventos Sweet Alert******************************/
cancun.addEventListener('click', elegirCancun)
miami.addEventListener('click', elegirMiami)
grecia.addEventListener('click', elegirGrecia)
roma.addEventListener('click', elegirRoma)

//****************************************Funciones Sweet Alert****************************/
function elegirCancun(e) {
    e.preventDefault();
    swal("Cancun tiene una rebaja del 20% por este mes, aproveche!!!")
        .then(() => {
            swal(`Y tenga las vacaciones que tanto desea!!!`);
        });

}
function elegirMiami(e) {
    e.preventDefault();
    swal("Miami tiene una rebaja del 40% por este mes, aproveche!!!")
        .then(() => {
            swal(`Puede abonar en hasta 12 cuotas sin interes!!!`);
        });

}
function elegirGrecia(e) {
    e.preventDefault();
    swal("Grecia tiene una rebaja del 15% por este mes, aproveche!!!")
        .then(() => {
            swal(`No se pierda la cuna de la filosofia antigua!!!`);
        });

}
function elegirRoma(e) {
    e.preventDefault();
    swal("Roma tiene una rebaja del 30% por este mes, aproveche!!!")
        .then(() => {
            swal(`No se pierda el Coliseo, el Panteon, la Fontana di Trevi!!!`);
        });

}
//***********************************************FETCH*****************************************/



const lista = document.getElementById("listado")

fetch ('/viajes.json')
    .then ((resp) => resp.json())
    .then ((data) => {
        data.forEach(trips => {
            
            lista.innerHTML +=`
            <h4>${trips.nombre}</h4>
            <p>${trips.precio}</p>
            
            `
            
        });
    })
