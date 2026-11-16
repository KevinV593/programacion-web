const notas = [16, 14, 15, 12, 19, 10];
let total = 0;
let aprobados = 0;
let reprobados = 0;
for (const nota of notas) {
    console.log(nota);
    total += nota;
    if (nota < 14) {
        console.log("No pasaste");
        reprobados++;
    }
    else {
        console.log("Pasaste");
        aprobados++;
    }
}
alert(`Total de notas: ${notas.length}
    \nAprobados: ${aprobados}
    \nReprobados: ${reprobados}
    \nPromedio: ${total / notas.length}`);