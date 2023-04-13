var textInput = document.querySelector("#mensagem");
var outInput = document.querySelector("#text-out");

var btnCripto = document.querySelector(".btn-criptografar");
var btnDescripto = document.querySelector(".btn-descriptografar");

var btnCopiar = document.querySelector("#btn-copiar");

var imagem = document.querySelector("#imagem-procura");
var mensagem = document.querySelector("#mensagem-cripto");

btnCripto.addEventListener('click', criptografar);
btnDescripto.addEventListener('click', descriptografar);
btnCopiar.addEventListener('click', copiarTexto);

function criptografar(){
    
    valorTexto = textInput.value;

    imagem.classList.add('hidden');
    mensagem.classList.remove('hidden');
    
    var criptografado = valorTexto.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");

    document.querySelector('#text-out').innerHTML = criptografado;
}

function descriptografar(){
    
    valorTexto = textInput.value;

    imagem.classList.add('hidden');
    mensagem.classList.remove('hidden');

    var descriptografado = valorTexto.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");

    document.querySelector('#text-out').innerHTML = descriptografado;
}

// function copiarTexto() {

// }


