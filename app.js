let nombresSorteados = [];
let sorteoIndice = 0;




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

function sortearAmigo() {

sorteoIndice = Math.floor(Math.random()*nombresSorteados.length);
let amigoSorteado = nombresSorteados[sorteoIndice];
let resultado = document.getElementById('resultao');
resultado.textContent = `Tu amigo Secreto es ${amigoSorteado}.`

}

