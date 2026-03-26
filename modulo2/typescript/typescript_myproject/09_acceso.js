"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventarioMoto = void 0;
class InventarioMoto {
    constructor(modelo) {
        this.idInventario = 'MOTO-001';
        this.modelo = modelo;
        this.generarPrecio();
    }
    generarPrecio() {
        this.precioCompra = Math.floor(Math.random() * 10000) + 5000;
    }
    getPrecioCompra() {
        return this.precioCompra;
    }
    getDetalles() {
        return {
            modelo: this.modelo,
            precioCompra: this.precioCompra,
            id: this.idInventario
        };
    }
}
exports.InventarioMoto = InventarioMoto;
