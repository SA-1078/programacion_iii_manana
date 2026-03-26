export class Vehiculo {
    public marca: string;
    public tipo: string;
    constructor( 
        marca: string,
        tipo: string
    ){
        this.marca=marca;
        this.tipo=tipo;
        
    }
    moverse(): void{
        console.log('vehiculo en movimiento');
    }
}

export class Moto extends Vehiculo {}