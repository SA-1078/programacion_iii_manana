
function infoMoto(marca: string): string {
    return `Moto marca: ${marca}`;
}
console.log(infoMoto('Kawasaki'));

const calcularPrecioTotal = (precio: number, impuesto: number): number => {
    return precio + impuesto;
}
console.log(calcularPrecioTotal(15000, 2000));


function mostrarPromocion(): void {
    console.log("¡Gran Venta de Motos!");
    console.log("Descuentos en modelos 2024");
}
mostrarPromocion();

function calcularAreaRueda(radio: number): number {
    return Math.PI * radio * radio;
}
function calcularAreaRuedaVoid(radio: number): void {
    console.log(Math.PI * radio * radio);
}
console.log(calcularAreaRueda(17));
calcularAreaRuedaVoid(17);
