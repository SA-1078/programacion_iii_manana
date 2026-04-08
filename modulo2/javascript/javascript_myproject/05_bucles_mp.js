for (let i=1; i <= 10; i++){
    console.log("Moto #", i);
}


precioTotal = 0;
for (let i=1; i <=10; i++){
    precioTotal += 5000;
}
console.log("Valor total del inventario:", precioTotal);


modeloMoto = "YAMAHA";
for (let i=0; i <= modeloMoto.length -1; i++){
    console.log(modeloMoto[i]);
}

for (let cc=250; cc <= 1000; cc+=250){
    console.log("Cilindrada:", cc, "cc");
}