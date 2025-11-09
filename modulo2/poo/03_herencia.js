class Animal{
    constructor(nombre){
        this.nombre=nombre;
    }
    hacerSonido(){
        console.log("Realiza algun ruido")
    }
}

class Perro extends Animal{}
const miPerro = new Perro ('Toby');
const miAnimal = new Animal('Lucero');
miPerro.hacerSonido();
miAnimal.hacerSonido();