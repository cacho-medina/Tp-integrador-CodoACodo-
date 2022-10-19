function Ticket(name, surname, email, cantidad, categoria) {
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.cantidad = cantidad;
    this.categoria = categoria;
    this.mostrar = function () {
        console.log(
            ` nombre: ${this.name}\n apellido: ${this.surname}\n email: ${this.email}\n cantidad: ${this.cantidad}\n categoria: ${this.categoria}`
        );
    };
}

let nombre = document.getElementById("name");
let apellido = document.getElementById("surname");
let email = document.getElementById("email");
let cantidad = document.getElementById("cantidad");
let categoria = document.getElementById("categoria");

function crearTicket() {
    const BD = [];
    //let nombre = document.getElementById("name");
    //let apellido = document.getElementById("surname");
    //let email = document.getElementById("email");
    //let cantidad = document.getElementById("cantidad");
    //let categoria = document.getElementById("categoria");
    //ARREGLAR - guarda todos los objetos con el mismo nombre
    const Cacho = new Ticket(
        nombre.value,
        apellido.value,
        email.value,
        cantidad.value,
        categoria.value
    );
    //ARREGLAR - no muestra el array sino el objeto en si
    BD.push(Cacho);
    Cacho.mostrar();

    let importe = calcularPrecio(cantidad.value);
    mostrarImporte(importe);
    alert("TICKET GENERADO");
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

/*--------------------------------------------------------------------*/

function borrarTicket() {
    alert("DATOS BORRADOS");
}
