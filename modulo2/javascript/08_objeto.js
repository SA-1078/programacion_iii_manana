console.log("OBJETOS")
let persona = {
    nombre: "Santiago",
    edad: 28,
    ciudad: "Quito"
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
let estudiante = {
    nombre: "Pedro",
    apellido: "Perez",
    contactos: {
        correo: "pedro@gmail.com",
        telefono: "023456789",
        celular: "0998765432"
    },
    materias: [
        
        {nombre: "Programacion III",
        calificacion: 8},

        {nombre: "Base de Datos",
        calificacion: 9},
    ]
};
console.log("Estudiante: ", estudiante);