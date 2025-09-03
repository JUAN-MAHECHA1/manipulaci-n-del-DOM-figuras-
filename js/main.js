// capturamos la figura a manipular
const figura =document.getElementById('figure');

function circulo(){
   figura.style.borderRadius = "50%"
   figura.style.background = "purple"
}

document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('btnCircle').addEventListener('click', circulo);
})