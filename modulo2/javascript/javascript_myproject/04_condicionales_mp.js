let velocidad = 120;
if (velocidad > 100){
    console.log("Velocidad alta para ciudad");
}


let codigoAcceso = "MOTO2024";
if(codigoAcceso === "MOTO2024"){
    console.log("Acceso al sistema de ventas permitido");
} else {
    console.log("Código de acceso inválido");
}


let precioMoto = 15000;
if(precioMoto > 20000){
    console.log("Moto de alta gama");
} else if(precioMoto >= 10000){
    console.log("Moto gama media");
} else {
    console.log("Moto gama básica");
}


let edadComprador = 20;
let tieneLicenciaMoto = true;

if(edadComprador >= 18 && tieneLicenciaMoto) {
    console.log("Puede comprar la moto");
} else if(edadComprador >= 18) {
    console.log("Necesita licencia para motos");
} else {
    console.log("Debe ser mayor de edad");
}

edadComprador = 16;


// Estructura switch
let diaMantenimiento = "lunes";

switch (diaMantenimiento) {
    case "lunes":
        console.log("Mantenimiento de motos deportivas");
        break;
    case "viernes":
        console.log("Revisión de motos adventure");
        break;
    default:
        console.log("Servicio técnico general");
}


let precioMoto1 = parseInt(prompt("Ingrese precio primera moto: "));
let precioMoto2 = parseInt(prompt("Ingrese precio segunda moto: "));
let precioMoto3 = parseInt(prompt("Ingrese precio tercera moto: "));

mayor = 0;
if (precioMoto1 > precioMoto2) {
    mayor = precioMoto1;
} else {
    mayor = precioMoto2;
}
if (precioMoto3 > mayor) {
    mayor = precioMoto3;
}
console.log("La moto más costosa es:", mayor);