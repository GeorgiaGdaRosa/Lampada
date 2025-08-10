const ligar = document.getElementById('ligar');
const desligar = document.getElementById('desligar');
const lampada = document.getElementById('lampada');

function lampada_quebrada(){
    return lampada.src.indexOf('quebrada') > -1;
}

function ligar_lampada(){
    if(!lampada_quebrada()){
        lampada.src =  './images/ligada.jpg';
    }
    
}

function desligar_lampada(){
    if(!lampada_quebrada()){
        lampada.src =  './images/desligada.jpg';
    }
}

function quebrar_lampada(){
    lampada.src = './images/quebrada.jpg';
}

ligar.addEventListener('click', ligar_lampada);
desligar.addEventListener('click', desligar_lampada);
lampada.addEventListener('mouseover', ligar_lampada);
lampada.addEventListener('mouseleave', desligar_lampada);
lampada.addEventListener('dblclick', quebrar_lampada);