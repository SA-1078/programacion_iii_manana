class Motocicleta{
    constructor(modelo){
        this.modelo = modelo;
    }
    arrancar(){
        console.log("Moto arrancando...")
    }
}

class MotoDeportiva extends Motocicleta{}
const miDeportiva = new MotoDeportiva('YZF-R1');
const miMoto = new Motocicleta('MT-07');
miDeportiva.arrancar();
miMoto.arrancar();