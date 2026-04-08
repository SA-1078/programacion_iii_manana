class Moto {
    constructor(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
    }
    encender(){
        console.log(`${this.marca} ${this.modelo} está encendida.`);
    }
    acelerar(){
        console.log(`${this.marca} ${this.modelo} está acelerando.`);
    }
    apagar(){
        console.log(`${this.marca} ${this.modelo} está apagada.`);
    }
}   

const miMoto = new Moto('Yamaha', 'YZF-R1');
miMoto.encender();
miMoto.acelerar();
miMoto.apagar();
console.log(miMoto.marca);
console.log(miMoto.modelo);