const precioEntrada = 20;
const descuentoEstudiante = 0.30;
const descuentoDocente = 0.15;
const descuentoPublico = 0.00;
const limiteMaximoDeEntradas = 5;
let cuposDisponibles = 50;
let entradasVendidas = 0;
let comprasRealizadas = 0;
let ingresosAcumulados = 0;

// Muestra mensajes al usuario y los registra en consola.
function mostrarMensaje(mensaje) {
    alert(mensaje);
    console.log(mensaje);
}

let menu = 0;
do {
    menu = prompt(
        "=====================================\n" +
        "          INNOVA ESPE 2026\n" +
        "     SISTEMA DE GESTIÓN DE ENTRADAS\n" +
        "=====================================\n\n" +
        "1. Comprar entradas\n" +
        "2. Consultar cupos disponibles\n" +
        "3. Consultar ingresos acumulados\n" +
        "4. Salir\n\n" +
        "Seleccione una opción (1-4):"
    );

    switch(menu) {
        case "1": 
            console.log("-------------------------------------");
            console.log("REGISTRO DE COMPRA DE ENTRADAS");

            if(cuposDisponibles === 0) {
                mostrarMensaje("No hay entradas disponibles.");
                break;
            }

            const nombreComprador = prompt(
                "Ingrese el nombre del comprador:"
            );

            if (nombreComprador === null ||
                //.trim convierte espacios vacios " " a ""
                nombreComprador.trim() === "") {
                mostrarMensaje("Nombre no válido.");
                break;
            }

            const tipoParticipante = prompt(
                "Tipo de participante:\n" +
                "1. Estudiante\n" + "2. Docente\n" + "3. Público general\n" +
                "Seleccione una opción:"
            );
            if (tipoParticipante !== "1" && tipoParticipante !== "2" && tipoParticipante !== "3") {
                mostrarMensaje("Tipo de participante no válido.");
                break;
            }

            const cantidadTexto = prompt("Ingrese la cantidad de entradas (1-5):");
            //El texto se convierte a numero con el operador +
            const cantidad = +cantidadTexto;
            if (cantidadTexto === null || cantidadTexto.trim() === "" || cantidad % 1 !== 0 || 
                cantidad < 1 || cantidad > limiteMaximoDeEntradas) {
                mostrarMensaje("Ingrese una cantidad válida entre 1 y 5.");
                break;
            }

            if (cantidad > cuposDisponibles) {
                mostrarMensaje(
                    `Cupos insuficientes.\n` +
                    `Solo quedan ${cuposDisponibles} entradas.`
                );
                break;
            }

            let porcentajeDescuento = descuentoPublico;
            let nombreParticipante = "Público general";

            if (tipoParticipante === "1") {
                porcentajeDescuento = descuentoEstudiante;
                nombreParticipante = "Estudiante";
            } else if (tipoParticipante === "2") {
                porcentajeDescuento = descuentoDocente;
                nombreParticipante = "Docente";
            }

            const subtotal = cantidad * precioEntrada;
            const descuento = subtotal * porcentajeDescuento;
            const totalPagar = subtotal - descuento;

            cuposDisponibles -= cantidad;
            entradasVendidas += cantidad;
            comprasRealizadas++;
            ingresosAcumulados += totalPagar;

            mostrarMensaje(
                "COMPRA REALIZADA EXITOSAMENTE\n" +
                "=====================================\n" +
                `Comprador: ${nombreComprador}\n` +
                `Participante: ${nombreParticipante}\n` +
                `Cantidad: ${cantidad}\n\n` +
                //toFixed muestra fijo dos decimales
                `Subtotal: $${subtotal.toFixed(2)}\n` +
                `Descuento (${porcentajeDescuento * 100}%): $${descuento.toFixed(2)}\n` +
                `Total a pagar: $${totalPagar.toFixed(2)}\n\n` +
                `Cupos restantes: ${cuposDisponibles}`
            );
            break;
                        
            case "2": 
                let estadoCupos;

                if (cuposDisponibles > 10) {
                    estadoCupos = "Cupos disponibles.";
                } else if (cuposDisponibles >= 1) {
                    estadoCupos = "Últimos cupos disponibles.";
                } else {
                    estadoCupos = "Evento agotado.";
                }

                mostrarMensaje(
                    "-------------------------------------\n" +
                    "CONSULTA DE DISPONIBILIDAD\n" +
                    `Cupos disponibles: ${cuposDisponibles}\n` +
                    `Estado: ${estadoCupos}`
                );
                break;
            
            case "3":
                mostrarMensaje(
                    "-------------------------------------\n" +
                    "CONSULTA DE INGRESOS\n" +
                    `Entradas vendidas: ${entradasVendidas}\n` +
                    `Compras realizadas: ${comprasRealizadas}\n` +
                    `Ingresos acumulados: $${ingresosAcumulados.toFixed(2)}`
                );
                break;
            
            case "4":
                mostrarMensaje(
                    "-------------------------------------\n" +
                    "RESUMEN FINAL DE VENTAS\n" +
                    `Entradas vendidas: ${entradasVendidas}\n` +
                    `Compras realizadas: ${comprasRealizadas}\n` +
                    `Ingresos acumulados: $${ingresosAcumulados.toFixed(2)}\n\n` +
                    "Gracias por utilizar Innova ESPE 2026."
                );
                break;
            default: 
            console.log("Opción no válida. Seleccione un número entre 1 y 4.");
            break;
    }
} while (menu != "4")