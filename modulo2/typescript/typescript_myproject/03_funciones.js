"use strict";
// funcion basica
function infoMoto(marca) {
    return `Moto marca: ${marca}`;
}
console.log(infoMoto('Kawasaki'));
// funcion flecha
const calcularPrecioTotal = (precio, impuesto) => {
    return precio + impuesto;
};
console.log(calcularPrecioTotal(15000, 2000));
function mostrarPromocion() {
    console.log("¡Gran Venta de Motos!");
    console.log("Descuentos en modelos 2024");
}
mostrarPromocion();
function calcularAreaRueda(radio) {
    return Math.PI * radio * radio;
}
function calcularAreaRuedaVoid(radio) {
    console.log(Math.PI * radio * radio);
}
console.log(calcularAreaRueda(17));
calcularAreaRuedaVoid(17);
