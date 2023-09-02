// Array

let tiposDeDolar = [
    {dolar:"oficial", precio:367},
    {dolar:"blue", precio:730},
    {dolar:"tarjeta", precio:639.62},
    {dolar:"turista", precio:659.93},
]


// Funciones

function impuestoPais(precio) {
    let impuestoP=precio*0.30
    return impuestoP
}

function retencionPais(precio) {
    let retencionP=precio*0.45
    return retencionP
}

function calcularDolar(tipo, cantidad) {
    for (let i = 0; i < tiposDeDolar.length; i++) {
        if (tiposDeDolar[i].dolar === tipo) {
            let precioDolar = tiposDeDolar[i].precio;
            return {
                cantidadDolares: cantidad,
                precioDolar: precioDolar,
            };
        }
    }
    return null; // Tipo de dolar no válido
}

// Compra de dolares

let tipoDolarValido = false; // Variable para rastrear si se encontró un tipo de dolar válido


for (let i = 0; i < 3; i++) {
    let tipoDolar = prompt("Ingrese el tipo de Dolar a comprar (oficial, blue, tarjeta, turista)").toLowerCase();
    let dolares = prompt("Ingrese la cantidad de dólares a comprar");
    if (!isNaN(dolares)) {
        dolares = (parseInt(dolares));
        let resultado = calcularDolar(tipoDolar, dolares);
        let resultadoTotal = (dolares * resultado.precioDolar) + impuestoPais(dolares*resultado.precioDolar) + retencionPais(dolares*resultado.precioDolar);
        console.log("La cantidad de dolares a comprar es de:" , dolares);
        console.log("El precio del dolar", tipoDolar, "es de:" , resultado.precioDolar);
        console.log("Sumando impuestos da un total de:" , resultadoTotal);
        tipoDolarValido = true;
        break

} else if(!tipoDolarValido) {
    console.log("Inserte un tipo de dolar valido: oficial, blue, tarjeta, turista")

} 
    else {
        console.log("Inserte un número entero");
        ;
    }
}