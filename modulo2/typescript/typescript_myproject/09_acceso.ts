export class InventarioMoto {
    public modelo: string;
    private precioCompra: any;
    protected idInventario: string = 'MOTO-001';
    constructor(
        modelo: string
    ) {
        this.modelo = modelo;
        this.generarPrecio()
    }
    generarPrecio(): void {
        this.precioCompra = Math.floor(Math.random() * 10000) + 5000;
    }
    getPrecioCompra(): any {
        return this.precioCompra;
    }
    getDetalles(): any {
        return {
            modelo: this.modelo,
            precioCompra: this.precioCompra,
            id: this.idInventario
        }
    }
}
