let nombresSorteados = [];

function agregarAmigo(text) {
    let nombreEscrito = document.getElementById('amigo');

      if (nombreEscrito.value === ''){
        alert('Porfavor, inserte un nombre.');
      return;
  }
    nombresSorteados.push(nombreEscrito.value);
      limpiarCaja('amigo', 'input');
      limpiarCaja('resultao', 'text');
      crearLista();
      nombreEscrito.focus();
    }

function limpiarCaja(id, tipo) {
    let textoCaja = document.getElementById(id);
      if(tipo === 'input'){
        textoCaja.value = '';
    }
      else{
        textoCaja.textContent='';
    }}

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

    resultado.textContent = `Tu amigo Secreto es: ${amigoSorteado}.`
    let btn = document.getElementById('btn');
    btn.disabled =true;  
    crearBtn();
  }
 
function sortearAmigo() { 
    let resultado =document.getElementById('resultao');

    if (nombresSorteados.length <= 1){
      resultado.textContent = 'Falta agregar nombres';
    
    }
      else {
      resultadoFinal();
    
    } 
  }
  
  function crearBtn() {
   
   let divButton = document.querySelector('.button-container');
   if(!divButton){ 
    alert('no exite boton')
    return;
   }
   let nuevoBtn = document.createElement("button");
   nuevoBtn.textContent = 'Reset';
   nuevoBtn.id ='nuevoBtn';
   nuevoBtn.onclick = resetear;   

  divButton.appendChild(nuevoBtn);  
  }
  function resetear() {
    location.reload(); 
  }
 
 