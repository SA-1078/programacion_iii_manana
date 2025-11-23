"use strict";
let cilindraje = 600;
let marca = "Yamaha";
let disponible = true;
let accesorio = "Casco";
if (cilindraje > 250 && disponible) {
    console.log('Moto de Alto Cilindraje Disponible');
}
else {
    console.log('Moto No Disponible o de Bajo Cilindraje');
}
let modelos = ['R1', 'R6', 'MT-09'];
for (let i = 0; i < modelos.length; i++) {
    console.log(modelos[i]);
}
var EstadoVenta;
(function (EstadoVenta) {
    EstadoVenta[EstadoVenta["Pendiente"] = 0] = "Pendiente";
    EstadoVenta[EstadoVenta["Vendida"] = 1] = "Vendida";
    EstadoVenta[EstadoVenta["Entregada"] = 2] = "Entregada";
})(EstadoVenta || (EstadoVenta = {}));
console.log(EstadoVenta);
console.log(EstadoVenta.Vendida);
