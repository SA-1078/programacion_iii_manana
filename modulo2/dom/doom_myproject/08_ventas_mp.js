const formulario = document.getElementById('formulario');
const contenedor = document.getElementById('contenedorMotos');
let motos = [];

formulario.addEventListener('submit', (e) => {
  e.preventDefault();
  const modelo = document.getElementById('modelo').value.trim();
  const descripcion = document.getElementById('descripcion').value.trim();
  const precio = parseFloat(document.getElementById('precio').value.trim());

  if (modelo && descripcion && !isNaN(precio)) {
    const nuevaMoto = { id: Date.now(), modelo, descripcion, precio };
    motos.push(nuevaMoto);
    renderizarMoto(nuevaMoto);
    formulario.reset();
  }
});

function renderizarMoto({ id, modelo, descripcion, precio }) {
  const div = document.createElement('div');
  div.className = 'moto';
  div.setAttribute('data-id', id);
  div.innerHTML = `
    <h3>${modelo}</h3>
    <p>${descripcion}</p>
    <p><strong>Precio: $${precio.toFixed(2)}</strong></p>
    <div class="acciones"><button class="eliminar">Eliminar</button></div>
  `;
  contenedor.appendChild(div);
}

contenedor.addEventListener('click', (e) => {
  if (e.target.classList.contains('eliminar')) {
    const tarjeta = e.target.closest('.moto');
    const id = parseInt(tarjeta.getAttribute('data-id'));
    motos = motos.filter(m => m.id !== id);
    tarjeta.remove();
  }
});