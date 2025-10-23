for (let i=1; i <= 10; i++){
    console.log("numero", i);
}

suma = 0;
for (let i=1; i <=10; i++){
    suma+=i;
}
console.log("Sumatoria indices", suma);


nombre = "Santiago";
for (let i=0; i <= nombre.length -1; i++){
    console.log(nombre[i]);
}


for (let i=1; i<=10; i++){
    console.log("Cuadrado de", i, "es", i*2)
};

console.log("Bucle While");
let i=1
while(1<=6){
    console.log("Indice", i)
    i++;
}

let miArreglo=[-2,3,1,2,3];
let indice=0
while(indice < miArreglo.length){
    console.log("Valor", indice, "es", miArreglo[indice]);
    indice++;
}

let numero=1;
while(numero <= 10){
    if (numero % 2 === 0){
        console.log("Numero", numero, "es par");
    }
    numero++;
}

let x = 5
do {
    console.log("X es:", x);
    x--;
} while (x!=0);

let mult=1
while (mult<=10){
    console.log(mult, "*5=", mult*5);
    mult++;
}



let miArreglo2 = [-2, 3, 1, 2, 3];
let indice2 = 0;
let mayor = miArreglo2[0];
while (indice2 < miArreglo2.length) {
    if (miArreglo2[indice2] > mayor) {
        mayor = miArreglo2[indice2];
    }
    
    indice2++;
}
console.log("El número mayor es:", mayor);

