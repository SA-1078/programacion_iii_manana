let cilindraje: number = 600;
let marca: string = "Yamaha";
let disponible: boolean = true;
let accesorio: any = "Casco";

if (cilindraje > 250 && disponible) {
    console.log('Moto de Alto Cilindraje Disponible');
} else {
    console.log('Moto No Disponible o de Bajo Cilindraje');
}

let modelos: string[] = ['R1', 'R6', 'MT-09'];
for (let i = 0; i < modelos.length; i++) {
    console.log(modelos[i]);
}

enum EstadoVenta {
    Pendiente,
    Vendida,
    Entregada
}

console.log(EstadoVenta);
console.log(EstadoVenta.Vendida);
