"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MotoDeportiva = exports.MotoBase = void 0;
class MotoBase {
    constructor(marca, tipo) {
        this.marca = marca;
        this.tipo = tipo;
    }
    acelerar() {
        console.log('Moto acelerando...');
    }
}
exports.MotoBase = MotoBase;
class MotoDeportiva extends MotoBase {
}
exports.MotoDeportiva = MotoDeportiva;
