let nombresSorteados = [];


function agregarAmigo(text) {
    let nombreEscrito = document.getElementById('amigo').value;

    if (nombreEscrito === ''){
    alert('Porfavor, inserte un nombre.')}
      else {
      nombresSorteados.push(nombreEscrito);
      limpiarCaja('amigo');
      
      console.log(nombresSorteados);
      crearLista();
    } 
}

function limpiarCaja(id) {
    let textoCaja =document.getElementById(id);
    textoCaja.value = '';}

function crearLista () {
  let lista = document.getElementById('listaAmigos');
  lista.innerHTML = '';
nombresSorteados.forEach(nombre => {
  let li = document.createElement('li');
  li.textContent = nombre;
  lista.appendChild(li);

});
}

 

    
