class Vendedor{
    constructor(nombre, ventas){
        this.nombre = nombre;
        this.ventas = ventas;
    }
    vender(){
        console.log("Vendedor atendiendo...")
    }
    calcularComision(){
        return this.ventas * 0.15;
    }
    horasExtra(horas){
        return ((this.ventas/30)/8)*horas*2;
    }
}

class VendedorMotosDeportivas extends Vendedor{
    calcularComision(){
        return this.ventas * 0.20;
    }
    horasExtra(horas){
        return ((this.ventas/30)/8)*horas*3;
    }
}

class VendedorMotosCustom extends Vendedor{
    calcularComision(){
        return this.ventas * 0.20;
    }
}

const vendedorPedro = new VendedorMotosDeportivas('Pedro', 50000);
const vendedorJuan = new VendedorMotosCustom('Juan', 35000);
vendedorPedro.vender();
vendedorJuan.vender();
console.log(vendedorPedro.calcularComision());
console.log(vendedorJuan.calcularComision());
console.log(vendedorPedro.horasExtra(5));
console.log(vendedorJuan.horasExtra(4));