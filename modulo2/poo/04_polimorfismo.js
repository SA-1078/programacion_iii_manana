class Empleado{
    constructor(nombre, salario){
        this.nombre=nombre;
        this.salario=salario;
    }
    trabajar(){
        console.log("Empleado trabajando . . . ")
    }
    calcularVacaciones(){
        return this.salario*0.15;
    }
    horasExtra(horas){
        returnn((this.salario/30)/8)*horas*2;
    }
}
class Programador extends Empleado{
    calcularVacaciones(){
        return this.salario*0.20;
    }
    horasExtra(horas){
        return ((this.salario/30)/8)*horas*3;
    }
}
class Diseñador extends Empleado{
    calcularVacaciones(){
        return this.salario*0.20;
    }
}

const progPedro = new Programador('Pedro', 2000);
const diseJuan = new Diseñador('Juan', 1200);
progPedro.trabajar();
diseJuan.trabajar();
console.log(progPedro.calcularVacaciones());
console.log(diseJuan.calcularVacaciones());
console.log(progPedro.horasExtra(5));
console.log(diseJuan.horasExtra(4));