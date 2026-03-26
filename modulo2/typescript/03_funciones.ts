// funcion basica
function saludar(nombre: string): string {
    return `Hola ${nombre}`;
}
console.log(saludar('Santiago'));

// funcion flecha
const sumar = (a: number, b: number): number => {
    return a + b;
}
console.log(sumar(5, 5));


function saludarDeNuevo(): void {
    console.log("Hola");
    console.log("Bienvenido a TypeScript");
}
saludarDeNuevo();

function calcularAreaCirculo(radio: number): number {
    return Math.PI * radio * radio;
}
function calcularAreaCirculoVoid(radio: number): void {
    console.log(Math.PI * radio * radio);
}
console.log(calcularAreaCirculo(5));
calcularAreaCirculoVoid(7);
