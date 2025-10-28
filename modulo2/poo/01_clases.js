class Car {
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
    }
    start(){
        console.log('$(this.brand) $(this.model) esta encendido.');
    }
    run(){
        console.log('$(this.brand) $(this.model) esta corriendo.');
    }
    stop(){
        console.log('$(this.brand) $(this.model) esta apagado.');
    }
}   

const miCarro = new Car('Toyota', 'Corolla');
miCarro.start();
miCarro.run();
miCarro.stop();
console.log(miCarro.brand);
console.log(miCarro.model);