let edad: number = 30;
let nombre: string = "Maria";
let archivo: boolean = true;
let valor: any = 6;

if(edad > 18 && archivo){
    console.log('Trabajador Activo');
} else {
    console.log('Trabajador Inactivo');
}

let frutas: string[] = ['Manzana', 'Banana', 'Naranja'];
for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}

enum Estodo{
    Pendiente,
    Enviado,
    Entregado
}

console.log(Estodo);
console.log(Estodo.Enviado);