// capturamos la figura a manipular
const figura =document.getElementById('figure');

function circulo(){
   figura.style.borderRadius = "50%"
   figura.style.background = "purple"
}
function estrella() {
    figura.style.clipPath = "polygon(50% 0%, 61% 35%, 98% 35%, \
                              68% 57%, 79% 91%, 50% 70%, \
                              21% 91%, 32% 57%, 2% 35%, 39% 35%)";
    figura.style.borderRadius = "0"; // quitamos el círculo
    figura.style.background = "gold";
}
function fondoGif() {
    figura.style.clipPath = "none"; // quitamos recortes si hubiera
    figura.style.borderRadius = "0";
    figura.style.background = "url('img/rick.gif')";
    figura.style.backgroundSize = "cover"; // para que ocupe toda la figura
}
document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('btnCircle').addEventListener('click', circulo);
    document.getElementById('btnStar').addEventListener('click', estrella)
    document.getElementById('btnGif').addEventListener('click', fondoGif);
})