import { Libro } from "./09_acceso";

const myLibro: Libro = new Libro('La hora de la verdad');
console.log(myLibro.titulo);
console.log(myLibro.getCota());
console.log(myLibro.getAtributes());