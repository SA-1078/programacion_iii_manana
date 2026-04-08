let parrafo = null;
document.getElementById('crear').addEventListener('click', () => {
    parrafo = document.createElement('p');
    parrafo.textContent = "Parrafo dinámico creado desde Javascript, Moto";
    document.getElementById('contenedor').appendChild(parrafo);
});
document.getElementById('eliminar').addEventListener('click', () => {
    if (parrafo) parrafo.remove();
});

function saludar() {
    alert("Hola desde la funcion");
}

document.getElementById('parrafo')
    .addEventListener('dblclick', () => {
        alert("Se hizo doble click en el párrafo");
    });

document.getElementById('nombre')
    .addEventListener('input', (e) => {
        console.log("Escribiendo", e.target.value);
    });