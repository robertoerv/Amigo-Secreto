let nombresSorteados = [];









function agregarAmigo(text) {
    let nombreEscrito = document.getElementById('amigo').value;
  

    if (nombreEscrito === ''){
   alert('Porfavor, inserte un nombre.')}
    else {
    nombresSorteados.push(nombreEscrito);
    console.log(nombresSorteados);
    limpiarCaja('amigo');
    } 
}

function limpiarCaja(id) {
    let textoCaja =document.getElementById(id);
    textoCaja.value = '';
}