console.log("ARRAYS O ARREGLOS");
let numeros = [10,5,26,9];
let arrayVacio = new Array();
let arrayVacio2 = []
console.log(arrayVacio)
console.log(arrayVacio2)
console.log("Acceso a los elementos del array");
console.log(numeros[0]);
console.log(numeros[3]);

console.log("Modificar los elementos del array");
numeros[0]= 100;
console.log(numeros);

console.log("Agregar elementos al array");
numeros.push(200);
console.log(numeros);

console.log("Agregar elementos al inicio del array");
numeros.unshift(888);
console.log(numeros);

console.log("Eliminar el ultimo elemento del array");
numeros.pop();
console.log(numeros);

console.log("Eliminar el primer elemento del array");
numeros.shift();
console.log(numeros);

console.log("Iteracion de array del array");
let indice = 0;
console.log("Iteracion con while");
while(indice<numeros.length){
    console.log("valor", indice, "es", numeros[indice]);
    indice++;
}

console.log("Iteracion con for");
for (let i=0; i < numeros.length; i++){
    console.log(numeros[i]);
}

console.log("Iteracion con for ... of");
for (let valor of numeros){
    console.log(valor);
}

console.log("Iteracion con For Each");
numeros.forEach(function(valor, indice) {
    console.log(indice, "es", valor);
});
