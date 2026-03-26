import { InventarioMoto } from "./09_acceso";

const miMoto: InventarioMoto = new InventarioMoto('Suzuki GSX-R');
console.log(miMoto.modelo);
console.log(miMoto.getPrecioCompra());
console.log(miMoto.getDetalles());
