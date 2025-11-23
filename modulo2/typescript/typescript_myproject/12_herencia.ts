import { MotoBase, MotoDeportiva } from "./11_herencia";

const motoStandard = new MotoBase('Royal Enfield', 'Clásica');
console.log(motoStandard.marca);
console.log(motoStandard.tipo);
motoStandard.acelerar();


const miNinja =
    new MotoDeportiva('Kawasaki', 'Deportiva');
console.log(miNinja.marca);
console.log(miNinja.tipo);
miNinja.acelerar();
