console.log("Funciones de Venta de Motos");

console.log("FORMA CLASICA");
function mostrarCatalogo() {
    console.log("Bienvenido al catálogo de motos");
}
mostrarCatalogo();

console.log("FORMA CON PARAMETROS Y RETORNO");
function calcularPrecioTotal(precioBase, impuestos) {
    return precioBase + impuestos;
}
resultado = calcularPrecioTotal(15000, 3000);
console.log("Precio total de la moto es:", resultado);

console.log("FUNCION FLECHA");
const calcularDescuento = (precio, porcentaje) => {
    return precio * (porcentaje/100);
}
let resultadoDescuento = calcularDescuento(20000, 10);
console.log("El descuento es:", resultadoDescuento);

console.log("FUNCION RETORNO DIRECTO");
const calcularIVA = precio => precio * 0.12;
console.log("IVA de la moto:", calcularIVA(15000));

console.log("FUNCION CON PARAMETROS POR DEFECTO");
function mostrarMoto(modelo, marca="Yamaha") {
    return marca + " " + modelo;
}
let moto1 = mostrarMoto("R1");
let moto2 = mostrarMoto("CBR1000RR", "Honda");
console.log(moto1);
console.log(moto2);

function calcularFinanciamiento(precio, meses) {
    if (precio <= 0 || meses <= 0) {
        return "El precio y los meses deben ser valores positivos.";
    }
    const cuotaMensual = precio / meses;
    return cuotaMensual;
}
console.log(calcularFinanciamiento(24000, 12));