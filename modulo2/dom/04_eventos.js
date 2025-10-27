let parrafo= null;
document.getElementById('crear').addEventListener('click', () => {
    parrafo = document.createElement('p');
    parrafo.textContent = "Parrafo dinámico creado desde Javascript";
    document.getElementById('contenedor').appendChild(parrafo);
})
document.getElementById('eliminar').addEventListener('click', () => {
    if(parrafo) parrafo.remove();
})