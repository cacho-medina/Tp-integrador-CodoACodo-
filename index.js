/*
function Ticket(name, surname, email, cantidad, categoria) {
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.cantidad = cantidad;
    this.categoria = categoria;
}
*/

let nombre = document.getElementById("name");
let apellido = document.getElementById("surname");
let email = document.getElementById("email");
let cantidad = document.getElementById("cantidad");
let categoria = document.getElementById("categoria");
const BD = [];

function crearTicket() {

    BD.push({
        name: nombre.value,
        surname: apellido.value,
        email: email.value,
        cantidad: cantidad.value,
        categoria: categoria.value
    });

    let importe = calcularPrecio(cantidad.value);
    mostrarImporte(importe);
    Swal.fire({
        icon: "success",
        title: "Ticket generado",
        showConfirmButton: false,
        timer: 1500
    })
}

function calcularPrecio(cant) {
    let categoria = document.getElementById("categoria");
    let importe = cant * 200;
    let descuento;
    if (categoria.value == "Estudiante") {
        descuento = importe * 0.8;
    } else if (categoria.value == "Trainee") {
        descuento = importe * 0.5;
    } else if (categoria.value == "Junior") {
        descuento = importe * 0.15;
    }
    return importe - descuento;
}

function mostrarImporte(dato) {
    let salidaImporte = document.getElementById("show__prize");
    salidaImporte.value = `Total a pagar: $ ${dato}`;
}

function borrarTicket() {
    let formulario = document.querySelector(".form__venta");
    formulario.reset();
    Swal.fire({
        icon: "error",
        title: "Datos eliminados",
        showConfirmButton: false,
        timer: 1500
    })
}
