class Cliente {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    puedeComprarMoto(){
        if (this.edad >=18){
            console.log("Puede comprar una moto")
        } else {
            console.log("No puede comprar una moto")
        }
    }
    mostrarDatos(){
        console.log(`Cliente: ${this.nombre}, Edad: ${this.edad}`);
    }
}

const cliente = new Cliente('Pedro', 17);
cliente.puedeComprarMoto();
cliente.mostrarDatos();