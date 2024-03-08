CondicionesIniciales();

function asignarTextoElemento(elemento , text){
    let elementoHTML = document.getElementById(elemento);
    elementoHTML.innerHTML = text;
    return;
}

function asignarImg(elemento, ruta){
    var imagen = document.querySelector(elemento);
    var nuevaSrc = ruta;
    imagen.setAttribute('src', nuevaSrc);

    imagen.onerror = function() {
        imagen.style.display = 'none';
    };
    
}

function CondicionesIniciales(){
    asignarTextoElemento('frase-inst', 'Ningun mensaje fue encontrado')
    asignarTextoElemento('p-inst','Ingrese el texto que desea encriptar o desencriptar')

    asignarImg('#imagen', './public/espera.jpg')
}

function Encriptar(){
    asignarTextoElemento('frase-inst', '')
    asignarTextoElemento('p-inst','')
    asignarImg('#imagen', './');

    let texto = document.getElementById('textarea').value;
    let textoArreglo = texto.split('');
    let textEncriptado = '';
    
    textoArreglo.map(element => {
        if(element=== "a"){
            textEncriptado += 'ai';
        }else if(element === 'e'){
            textEncriptado += 'enter';
        }else if(element === 'i'){
            textEncriptado += 'imes';
        }else if(element === 'o'){
            textEncriptado += 'ober';
        }else if(element === 'u'){
            textEncriptado += 'ufat';
        }else{
            textEncriptado += element
        }
    });

    console.log('entro' ,textEncriptado)
    asignarTextoElemento('frase', `${textEncriptado}`)
}

function Desencriptar(){
    asignarTextoElemento('frase-inst', '')
    asignarTextoElemento('p-inst','')
    asignarImg('#imagen', './');

    let textDesencriptado = '';
    let textoD = document.getElementById('textarea').value;
    let caracter = textoD.split('')


    console.log('entro' , textDesencriptado)
    asignarTextoElemento('frase', `${textDesencriptado}`)
}