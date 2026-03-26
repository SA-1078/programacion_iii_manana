export class Vendedor {
    nombre: string;
    ventasRealizadas: number;
    constructor(
        nombre: string,
        ventasRealizadas: number
    ) {
        this.nombre = nombre;
        this.ventasRealizadas = ventasRealizadas;
    }
    presentar(): void {
        console.log(
            `Hola, soy el vendedor ${this.nombre} y he vendido ${this.ventasRealizadas} motos.`)
    }

}
