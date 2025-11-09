var edad = 30;
var nombre = "Maria";
var archivo = true;
var valor = 6;
if (edad > 18 && archivo) {
    console.log('Trabajador Activo');
}
else {
    console.log('Trabajador Inactivo');
}
var frutas = ['Manzana', 'Banana', 'Naranja'];
for (var i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}
var Estodo;
(function (Estodo) {
    Estodo[Estodo["Pendiente"] = 0] = "Pendiente";
    Estodo[Estodo["Enviado"] = 1] = "Enviado";
    Estodo[Estodo["Entregado"] = 2] = "Entregado";
})(Estodo || (Estodo = {}));
console.log(Estodo);
console.log(Estodo.Enviado);
