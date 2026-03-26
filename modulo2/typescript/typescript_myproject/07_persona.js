"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vendedor = void 0;
class Vendedor {
    constructor(nombre, ventasRealizadas) {
        this.nombre = nombre;
        this.ventasRealizadas = ventasRealizadas;
    }
    presentar() {
        console.log(`Hola, soy el vendedor ${this.nombre} y he vendido ${this.ventasRealizadas} motos.`);
    }
}
exports.Vendedor = Vendedor;
