let nombresSorteados = [];
let nombreEscrito = document.getElementById('amigo');
let lista = document.getElementById('listaAmigos');
let resultado = document.getElementById('resultao');


// creacion de lista
function agregarAmigo() {
     let amigo = nombreEscrito.value.trim();

      if (amigo === ''){
        alert('Porfavor, inserte un nombre.');
      return;
  }
    nombresSorteados.push(amigo);
      limpiarCaja('amigo', 'input');
      limpiarCaja('resultao', 'text');
      crearLista();
      nombreEscrito.focus();
    }

function limpiarCaja(id, tipo) {
    let textoCaja = document.getElementById(id);
      if(tipo === 'input'){
        textoCaja.value = '';
        return;
    } 
        textoCaja.textContent='';
    }

function crearLista () {
     lista.innerHTML = '';
    nombresSorteados.forEach(nombre  => {
    let li = document.createElement('li');
    li.textContent = nombre;
    li.className ='li-new';
    // crear boton para borrar
    
        let botonBorrar = document.createElement('button');
        botonBorrar.textContent ='X';
        botonBorrar.className="boton-borrar";
         
        botonBorrar.onclick = function () {
            li.remove(); 
              nombresSorteados = nombresSorteados.filter(n => n !== nombre); 
    }
        lista.appendChild(li);
        li.appendChild(botonBorrar);
    });
    
  }


function resultadoFinal(){
    
    sorteoIndice = Math.floor(Math.random()*nombresSorteados.length);
    let amigoSorteado = nombresSorteados[sorteoIndice];

    resultado.innerHTML = `<li>Tu amigo Secreto es: ${amigoSorteado}.</li>`
    let btn = document.getElementById('btn');
    btn.disabled =true;  
    crearBtn();
  }
 
function sortearAmigo() { 
    

    if (nombresSorteados.length <= 1){
      resultado.textContent = 'Falta agregar nombres';
      return;
  
    } 
      resultadoFinal();
    } 
  
  //boton reset
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
// funciones

