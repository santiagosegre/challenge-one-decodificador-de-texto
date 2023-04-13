var textInput = document.querySelector("#mensagem");
var outInput = document.querySelector("#text-out");

var btnCripto = document.querySelector(".btn-criptografar");
var btnDescripto = document.querySelector(".btn-descriptografar");


var imagem = document.querySelector("#imagem-procura");
var mensagem = document.querySelector("#mensagem-cripto");

btnCripto.addEventListener('click', criptografar);
btnDescripto.addEventListener('click', descriptografar);

window.onload=function(){
    var btnCopiar = document.getElementById("btn-Copiar");
    btnCopiar.addEventListener('click', copiarTexto);
}

function esconderImagem() {
    imagem.classList.add('hidden');
    mensagem.classList.remove('hidden');
}

function criptografar(){
    
    valorTexto = textInput.value;

    esconderImagem();
    
    criptografado = valorTexto.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");

    document.querySelector('#text-out').innerHTML = criptografado;
    
}

function descriptografar(){
    
    valorTexto = textInput.value;

    esconderImagem();

    var descriptografado = valorTexto.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");

    document.querySelector('#text-out').innerHTML = descriptografado;

}



function copiarTexto() {
    var copiado = document.getElementById("text-out").value;

    if(navigator.clipboard.writeText(copiado) ){
        document.getElementById("btn-Copiar").textContent = "Texto Copiado";
    }

}

function voltarTexto() {
    
    document.getElementById("btn-Copiar").textContent = "Copiar Texto";
    
}


setInterval(voltarTexto, 8000);
