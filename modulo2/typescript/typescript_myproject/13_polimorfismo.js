"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cuatrimoto = void 0;
const _11_herencia_1 = require("./11_herencia");
class Cuatrimoto extends _11_herencia_1.MotoBase {
    getTraccion() {
        console.log('Tracción 4x4 activada');
    }
}
exports.Cuatrimoto = Cuatrimoto;
const miCuatrimoto = new Cuatrimoto('Can-Am', 'Off-road');
console.log(miCuatrimoto.marca);
console.log(miCuatrimoto.tipo);
miCuatrimoto.acelerar();
miCuatrimoto.getTraccion();
