export class Libro {
    public titulo: string;
    private cota: any;
    protected idGeneric: string='991828982988';
    constructor( 
        titulo: string
    ){
        this.titulo=titulo;
        this.generarCota()
    }
    generarCota(): void{
        this.cota = (new Date()).toDateString();
    }
    getCota():any {
        return this.cota;
    }
    getAtributes():any {
        return {
            titulo: this.titulo,
            cota: this.cota,
            id: this.idGeneric
        }
    }
}