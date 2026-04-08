console.log("Funciones");



console.log("FORMA CLASICA");
function saludar() {
    console.log("Hola desde una funcion clasica");
}
saludar();



console.log("FORMA CON PARAMETROS Y RETORNO");
function sumar(a, b) {
    return a + b;
}
resultado = sumar(4, 9);
console.log("La suma es:", resultado);



console.log("FUNCION FLECHA");
const resta = (a,b)=> {
    return a - b;
}
let resultadoResta = resta(9,5);
console.log("La resta es:", resultadoResta);



console.log("FUNCION RETORNO DIRECTO");
const cuadrado = x => x*x;
console.log("Cuadrado de 5:", cuadrado(5));



console.log("FUNCION CON PARAMETROS POR DEFECTO");
function saludar(nombre, saludo="Hola") {
    return saludo + ", " + nombre;
}
let saludo1 = saludar("Santiago");
let saludo2 = saludar("Santiago", "Buenos dias");
console.log(saludo1);
console.log(saludo2);



function calcularAreaTriangulo(base, altura) {
if (base <= 0 || altura <= 0) {
    return "La base y la altura deben ser valores positivos.";
}
const area = (base * altura) / 2;
return area;
}
console.log(calcularAreaTriangulo(10, 5)); 
