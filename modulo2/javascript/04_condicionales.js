let temperatura = 35;
if (temperatura > 30){
    console.log("Hace calor");
}


password = "pass123";
if(password === "pass12345"){
    console.log("Usuario Logeado");
} else {
    console.log("Acceso Denegado");
}



let nota =7;
if(nota >9){
    console.log("Sobresaliente");
} else if(nota >=7){
    console.log("Aprobado");
} else {
    console.log("Reprobado");
}



let edad = 20;
let tiene_licencia = true;

if(edad >= 18 && tiene_licencia) {
    console.log("Puede conducir");
} else if(edad >= 18) {
    console.log("Necesita licencia para conducir");
} else {
    console.log("Es menor de edad");
}

edad = 16;



// Estructura switch
let dia = "lunes";

switch (dia) {
    case "lunes":
        console.log("Inicio de Semana");
        break;
    case "viernes":
        console.log("Ultimo dia laboral");
        break;
    default:
        console.log("Dia normal");
}



let a = prompt("Ingrese el primer numero: ");
let b = prompt("Ingrese el segundo numero: ");
let c = prompt("Ingrese el tercer numero: ");

mayor = 0;
if (a > b) {
    mayor = a;
} else {
    mayor = b;
}
if (c > mayor) {
    mayor = c;
}
console.log("El mayor es:", mayor);