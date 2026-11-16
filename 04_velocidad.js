const velocidades = [65, 88, 95, 110, 72, 90, 125, 84];

let dentro = 0;
let fuera = 0;
let totalVelocidad = 0;
let i = 0;
let j = 0;
const estados = [];

const calcularMaximo = (lista) => {
    let max = lista[0];

    for (const velocidad of lista) {
        if (velocidad > max) {
            max = velocidad;
        }
    }

    return max;
};

const calcularMinimo = (lista) => {
    let min = lista[0];

    for (const velocidad of lista) {
        if (velocidad < min) {
            min = velocidad;
        }
    }

    return min;
};

for (const velocidad of velocidades) {
    i++;

    console.log(`Velocidad del auto Nro. ${i}: ${velocidad} km/h`);

    totalVelocidad += velocidad;

    if (velocidad > 90) {
        console.log("Fuera del limite permitido");
        fuera++;
        estados.push("Fuera del límite");
    } else {
        console.log("Dentro del limite permitido");
        dentro++;
        estados.push("Dentro del límite");
    }

    if (velocidad <= 60) {
        console.log("Clasificación: Velocidad baja");
    } else if (velocidad <= 90) {
        console.log("Clasificación: Velocidad moderada");
    } else if (velocidad <= 110) {
        console.log("Clasificación: Velocidad alta");
    } else {
        console.log("Clasificación: Velocidad excesiva");
    }
}

const max = calcularMaximo(velocidades);
const min = calcularMinimo(velocidades);
const media = totalVelocidad / velocidades.length;

console.log("ESTADOS DE LOS VEHÍCULOS:");

for (const estado of estados) {
    j++;
    console.log(`Auto ${j}: ${estado}`);
}

console.log("RESUMEN FINAL");
console.log(`Dentro del límite: ${dentro}`);
console.log(`Fuera del límite: ${fuera}`);
console.log(`Promedio: ${media} km/h`);
console.log(`Velocidad máxima: ${max} km/h`);
console.log(`Velocidad mínima: ${min} km/h`);

alert(`RESUMEN FINAL DE CONTROL DE VELOCIDAD

Dentro del límite: ${dentro}
Fuera del límite: ${fuera}
Promedio: ${media} km/h
Velocidad máxima: ${max} km/h
Velocidad mínima: ${min} km/h`);