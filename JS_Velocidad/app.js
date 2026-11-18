const velocidad = document.getElementById("velocidad");
const calcular = document.getElementById("btnCalcular");
const resultado = document.getElementById("resultado");

const clasificarVelocidad = (velocidad) => {
    if(velocidad <= 90){
        return "Velocidad Permitida";
    } else if(velocidad <= 110){
        return "Exceso Moderado";
    } else {
        return "Velocidad Excesiva";
    }
}

btnCalcular.addEventListener("click", () => {
    if (velocidad.value === "") {
        resultado.textContent = "Por favor, ingrese una velocidad valida.";
        return;
    }
    const estado = clasificarVelocidad(velocidad.value);

    resultado.textContent = "Resultado: " + estado;
});