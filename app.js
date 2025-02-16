let nombresSorteados = [];
let sorteoIndice = 0;




function agregarAmigo(text) {
    let nombreEscrito = document.getElementById('amigo').value;

    if (nombreEscrito === ''){
    alert('Porfavor, inserte un nombre.')}
      else {
      nombresSorteados.push(nombreEscrito);
      limpiarCaja('amigo','');
      limpiarMensaje('resultao', '');
      
      console.log(nombresSorteados);
      crearLista();
    } 
  }

function limpiarMensaje(id, text) {
    let textoCaja =document.getElementById(id);
    textoCaja.textContent = text;}


function limpiarCaja(id, text) {
    let textoCaja =document.getElementById(id);
    textoCaja.value = text;}

function crearLista () {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    nombresSorteados.forEach(nombre => {
    let li = document.createElement('li');
    li.textContent = nombre;
    lista.appendChild(li);

    });
  }

function resultadoFinal(){
    let resultado = document.getElementById('resultao');
    sorteoIndice = Math.floor(Math.random()*nombresSorteados.length);
    let amigoSorteado = nombresSorteados[sorteoIndice];

    resultado.textContent = `Tu amigo Secreto es ${amigoSorteado}.`
  }
 
function sortearAmigo() { 
    let resultado =document.getElementById('resultao');

    if (nombresSorteados.length === 0){
    resultado.textContent = 'Falta agregar nombres';
    }
    else {
    resultadoFinal();
    } 
  }
