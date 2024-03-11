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

    let textoEncriptado = TextEncriptado(texto); 

    asignarTextoElemento('frase', textoEncriptado); 
    asignarTextoElemento('textarea', ''); 
    console.log('entro' ,textoEncriptado)

}


function TextEncriptado(textEncriptado) {
    let matrizText = [ ["e", "enter"], ["i", "imes"], ["a", "ai"],["o", "ober"], ["u", "ufat"]];
    textEncriptado = textEncriptado.toLowerCase();

    for (let i = 0; i < matrizText.length; i++) { 
        if (textEncriptado.includes(matrizText[i][0])) {
            textEncriptado = textEncriptado.replaceAll(matrizText[i][0], matrizText[i][1]);
        }
    }
  
    return textEncriptado;
}


function Desencriptar(){
    asignarTextoElemento('frase-inst', '')
    asignarTextoElemento('p-inst','')
    asignarImg('#imagen', './');

    let text = document.getElementById('textarea').value;
    let textDesencriptado = TextDesencriptado(text);
    
    asignarTextoElemento('frase', `${textDesencriptado}`)
}

function TextDesencriptado(textDesencriptado){
    let matrizText = [["a", "ai"], ["e", "enter"], ["i", "imes"], ["o", "ober"], ["u", "ufat"]];
    textDesencriptado = textDesencriptado.toLowerCase();

    for (let i = 0; i < matrizText.length; i++) { 
        if (textDesencriptado.includes(matrizText[i][0])) {
            textDesencriptado = textDesencriptado.replaceAll(matrizText[i][1], matrizText[i][0]);
        }
    }
    window.log()
    return textDesencriptado;
}


//replace all me ayuda a reemplazar todos los textos que se puedan incluir en la matriz
