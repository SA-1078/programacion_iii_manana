interface Moto {
    id: number;
    modelo: string;
    precio?: number;
}

const moto1: Moto = {
    id: 101,
    modelo: "Ducati Panigale"
}
const moto2: Moto = {
    id: 102,
    modelo: "BMW S1000RR",
    precio: 25000
}

console.log(moto1);
console.log(moto1.id);
console.log(moto1.modelo);
console.log(moto1.precio);
console.log(moto2);
console.log(moto2.id);
console.log(moto2.modelo);
console.log(moto2.precio);
