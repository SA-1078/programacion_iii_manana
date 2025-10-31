const boton= document.getElementById('agregar')
boton.addEventListener('click', () => {
    const texto = document.getElementById('moto').value;
    if (texto.trim()!==''){
        const li = document.createElement('li');
        li.textContent = texto;
        document.getElementById('listaMotos').appendChild(li);
        inputText = document.getElementById('motos').value = '';
    }
});