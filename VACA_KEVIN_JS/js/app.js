const precioEntrada = 20;
const descuentoEstudiante = 0.30;
const descuentoDocente = 0.15;
const descuentoPublico = 0.00;
const limiteMaximoDeEntradas = 5;
let cuposDisponibles = 50;
let entradasVendidas = 0;
let comprasRealizadas = 0;
let ingresosAcumulados = 0;

let menu = 0;
do {
    console.log("=====================================");
    console.log("INNOVA ESPE 2026");
    console.log("SISTEMA DE GESTIÓN DE ENTRADAS");
    console.log("=====================================");
    console.log("1. Comprar entradas");
    console.log("2. Consultar cupos disponibles");
    console.log("3. Consultar ingresos acumulados");
    console.log("4. Salir");

    menu = prompt("\nSeleccione una opción del menú (1-4): ");
    switch(menu) {
        case "1": 
            console.log("REGISTRO DE COMPRA DE ENTRADAS");

            if(cuposDisponibles === 0) {
                console.log("No hay entradas disponibles.");
                break;
            }

            const nombreComprador = prompt("Ingrese el nombre del comprador:");
            if (nombreComprador === null || nombreComprador === "") {
                console.log("Debe ingresar un nombre válido.");
                break;
            }

            const tipoParticipante = prompt(
                "Tipo de participante:\n" +
                "1. Estudiante\n" + "2. Docente\n" + "3. Público general"
            );
            if (tipoParticipante !== "1" && tipoParticipante !== "2" && tipoParticipante !== "3") {
                console.log("Tipo de participante no válido.");
                break;
            }

            const cantidadTexto = prompt("Cantidad de entradas (máximo 5):");
            //El texto se convierte a numero con el operador +
            const cantidad = +cantidadTexto;
            if (cantidadTexto === null || cantidadTexto === "" || cantidad % 1 !== 0 || 
                cantidad < 1 || cantidad > limiteMaximoDeEntradas) {
                console.log("Ingrese una cantidad válida entre 1 y 5.");
                break;
            }

            if (cantidad > cuposDisponibles) {
                console.log("No existen suficientes cupos disponibles.");
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

            console.log("=====================================");
            console.log("RESUMEN DE COMPRA");
            console.log(`Comprador: ${nombreComprador}`);
            console.log(`Participante: ${nombreParticipante}`);
            console.log(`Entradas: ${cantidad}`);
            console.log(`Subtotal: $${subtotal.toFixed(2)}`);
            console.log(`Descuento: $${descuento.toFixed(2)}`);
            console.log(`Total a pagar: $${totalPagar.toFixed(2)}`);
            console.log("Compra realizada exitosamente.");
            console.log(`Cupos restantes: ${cuposDisponibles}`);

            break;
            case "2":
            console.log(`CUPOS DISPONIBLES: ${cuposDisponibles}`);
            break;
        
            case "3":
            console.log(`INGRESOS TOTALES REGISTRADOS: ${ingresosAcumulados}`);
            break;
        
            case "4":
            console.log("RESUMEN FINAL DE VENTAS");
            console.log(`Entradas vendidas: ${entradasVendidas}`);
            console.log(`Compras realizadas: ${comprasRealizadas}`);
            console.log(`Ingresos acumulados: $${ingresosAcumulados}`);
            break;

            default: 
            console.log("Opción no válida. Seleccione un número entre 1 y 4.");
            break;
    }
} while (menu != "4")
    