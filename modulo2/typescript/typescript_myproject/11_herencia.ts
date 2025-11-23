export class MotoBase {
    public marca: string;
    public tipo: string;
    constructor(
        marca: string,
        tipo: string
    ) {
        this.marca = marca;
        this.tipo = tipo;

    }
    acelerar(): void {
        console.log('Moto acelerando...');
    }
}

export class MotoDeportiva extends MotoBase { }
