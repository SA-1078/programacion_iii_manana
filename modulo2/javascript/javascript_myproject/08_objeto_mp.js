console.log("OBJETOS DE MOTOS")
let moto = {
    modelo: "YZF-R1",
    cilindrada: 1000,
    concesionario: "MotoCenter"
}

console.log(persona);
console.log(persona.nombre);
console.log(persona.ciudad);
console.log(persona["edad"]);
console.log("Modificacion del objeto");
persona.nombre = "Maria";
console.log(persona);
console.log("Incluir clave al objeto")
persona.direccion = "Av. Occidental";
console.log(persona);
console.log("Eliminar clave al objeto")
delete persona.direccion;
console.log(persona);

console.log("Recorrer un objeto");
for (let clave in persona){
    console.log(clave);
}
console.log("Mostrar claves con objets.keys");
console.log(Object.keys(persona));
console.log("Mostrar claves con objets.values");
console.log(Object.values(persona));
console.log("Objetos Anidados");
let ventaMoto = {
    modelo: "CBR1000RR",
    marca: "Honda",
    detalles: {
        color: "Rojo/Blanco",
        año: "2024",
        kilometraje: "0"
    },
    servicios: [
        {nombre: "Garantía",
        duracion: "2 años"},
        {nombre: "Mantenimiento",
        frecuencia: "6 meses"},
    ]
};
console.log("Venta de moto: ", ventaMoto);