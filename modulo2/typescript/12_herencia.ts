import { Vehiculo, Moto } from "./11_herencia";

const miCarro = new Vehiculo('Toyota', 'Sedan');
console.log(miCarro.marca);
console.log(miCarro.tipo);
miCarro.moverse();


const miMotocicleta = 
    new Moto('Honda', 'Alta Cilindrada');
console.log(miMotocicleta.marca);
console.log(miMotocicleta.tipo);
miMotocicleta.moverse();