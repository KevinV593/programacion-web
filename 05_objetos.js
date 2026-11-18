// clase de objetos en javascript
const autos = [
{ placa: "ABC-123", marca: "Toyota", velocidad: 120 },
{ placa: "DEF-456", marca: "Honda", velocidad: 80 },
{ placa: "GHI-789", marca: "Ford", velocidad: 95 }
];

const clasificarVelocidad = (velocidad) => {
    if (velocidad <= 60) {
        return "Velocidad baja";
    } else if (velocidad <= 90) {
        return "Velocidad moderada";
    }
    return "Velocidad alta";
};

for (const auto of autos) {
    auto.estado = clasificarVelocidad(auto.velocidad);
    console.log(`${auto.placa} | ${auto.marca} | ${auto.velocidad} km/h | ${auto.estado}.`);
}

//getElementById() querySelector() addEventListener()
//  Document
//    Object
//      Model