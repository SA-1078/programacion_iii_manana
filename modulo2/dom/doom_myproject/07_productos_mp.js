const productos = [
  { nombre: "Yamaha YZF-R1", descripcion: "1000cc, 200HP", precio: 25000, existencia: 3, ubicacion: "Local Norte" },
  { nombre: "Honda CBR1000RR", descripcion: "1000cc, 189HP", precio: 24000, existencia: 2, ubicacion: "Local Sur" },
  { nombre: "Kawasaki Ninja ZX-10R", descripcion: "998cc, 203HP", precio: 26000, existencia: 4, ubicacion: "Local Centro" },
  { nombre: "BMW S1000RR", descripcion: "999cc, 205HP", precio: 28000, existencia: 2, ubicacion: "Local Norte" },
  { nombre: "Ducati Panigale V4", descripcion: "1103cc, 214HP", precio: 32000, existencia: 1, ubicacion: "Local Sur" },
  { nombre: "KTM RC 390", descripcion: "373cc, 43HP", precio: 8000, existencia: 5, ubicacion: "Local Centro" },
  { nombre: "Suzuki GSX-R750", descripcion: "750cc, 148HP", precio: 15000, existencia: 3, ubicacion: "Local Norte" },
  { nombre: "Aprilia RSV4", descripcion: "1099cc, 217HP", precio: 30000, existencia: 2, ubicacion: "Local Sur" },
  { nombre: "Triumph Street Triple", descripcion: "765cc, 123HP", precio: 12000, existencia: 4, ubicacion: "Local Centro" },
  { nombre: "MV Agusta F3", descripcion: "800cc, 148HP", precio: 20000, existencia: 2, ubicacion: "Local Norte" }
];

const tabla = document.getElementById('cuerpoTabla');
productos.forEach(p => {
  const fila = document.createElement('tr');
  fila.innerHTML = `
    <td>${p.nombre}</td>
    <td>${p.descripcion}</td>
    <td>$${p.precio.toFixed(2)}</td>
    <td>${p.existencia}</td>
    <td>${p.ubicacion}</td>
  `;
  tabla.appendChild(fila);
});
