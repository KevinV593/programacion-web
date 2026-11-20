# Innova ESPE 2026 | Sistema de gestión de entradas

## Descripción

**Innova ESPE 2026** es un prototipo académico desarrollado con **HTML5 y JavaScript nativo** para simular la venta de entradas a un evento tecnológico de la Universidad de las Fuerzas Armadas – ESPE.

El sistema permite registrar compras, aplicar descuentos según el tipo de participante, controlar los cupos disponibles y consultar las estadísticas de ventas. La interacción se realiza mediante `prompt()`, `alert()` y `console.log()`, sin interfaz gráfica ni manipulación del DOM.

## Información del proyecto

- **Institución:** Universidad de las Fuerzas Armadas – ESPE
- **Asignatura:** Programación Web
- **Estudiante:** Kevin Vaca
- **Lenguaje:** JavaScript nativo
- **Tecnologías:** HTML5 y JavaScript
- **Repositorio de GitHub:** [https://github.com/KevinV593/programacion-web/tree/main/VACA_KEVIN_JS]

## Estructura del proyecto

```text
VACA_KEVIN_JS/
├── index.html
├── js/
│   └── app.js
└── README.md
```

- `index.html`: documento que carga el archivo JavaScript.
- `js/app.js`: lógica del menú, compras, descuentos, validaciones y consultas.
- `README.md`: documentación del proyecto.

## Funcionalidades

1. **Configuración inicial:** establece precios, porcentajes de descuento, límite de entradas y cupos iniciales.
2. **Menú principal:** permite acceder a las operaciones y permanece activo hasta seleccionar la opción de salida.
3. **Compra de entradas:** solicita los datos del comprador, valida la cantidad y los cupos, calcula el importe final y registra una venta exitosa.
4. **Consulta de cupos:** muestra la disponibilidad y un mensaje según los cupos restantes.
5. **Consulta de ingresos:** presenta entradas vendidas, compras realizadas e ingresos acumulados.
6. **Finalización:** muestra un resumen de ventas al salir.

## Reglas de venta

| Concepto | Valor |
|---|---:|
| Precio por entrada | $20.00 |
| Cupos iniciales | 50 |
| Máximo de entradas por compra | 5 |
| Descuento para estudiantes | 30 % |
| Descuento para docentes | 15 % |
| Descuento para público general | 0 % |

El subtotal se calcula multiplicando la cantidad de entradas por el precio unitario. El descuento se aplica sobre el subtotal y se resta para obtener el total a pagar.

Una compra únicamente se registra cuando los datos son válidos y existe disponibilidad suficiente. Las compras rechazadas no modifican los cupos, los ingresos ni los contadores de ventas.

## Cómo ejecutar el proyecto

1. Descargar o clonar el repositorio.
2. Abrir el archivo `index.html` en un navegador compatible con JavaScript.
3. Seleccionar una opción en el menú que aparece en la ventana de diálogo.
4. Seguir las instrucciones para comprar entradas o consultar información.
5. Seleccionar **4. Salir** para visualizar el resumen final.

## Consideraciones

- El prototipo utiliza las ventanas de diálogo del navegador y la consola para interactuar con el usuario.
- Los datos permanecen en memoria mientras se ejecuta el programa. Al recargar la página se restablecen los valores iniciales.
- No se emplean bibliotecas externas ni manipulación del DOM.

## Control de versiones

El historial de cambios del proyecto puede consultarse en la sección **Commits** del repositorio de GitHub.

**Enlace del repositorio:** [https://github.com/KevinV593/programacion-web/tree/main/VACA_KEVIN_JS]
