import { MotoBase } from "./11_herencia";

export class Cuatrimoto extends MotoBase {
    getTraccion(): void {
        console.log('Tracción 4x4 activada');
    }
}


const miCuatrimoto =
    new Cuatrimoto('Can-Am', 'Off-road');
console.log(miCuatrimoto.marca);
console.log(miCuatrimoto.tipo);
miCuatrimoto.acelerar();
miCuatrimoto.getTraccion();
