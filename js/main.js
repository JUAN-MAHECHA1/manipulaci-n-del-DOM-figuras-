// capturamos la figura a manipular
const figura = document.getElementById('figure');
let arriba = 0;

function circulo() {
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

// Función de animación sencilla
function animacion() {
    let posicion = 0;      // posición inicial
    let derecha = true;    // bandera: se mueve a la derecha
    let esRojo = true;     // bandera: alterna colores

    // Repetimos cada 50 milisegundos
    const mover = setInterval(function () {
        if (derecha) {
            posicion += 5;  // avanza hacia la derecha
            figura.style.marginLeft = posicion + "px";
            if (posicion >= 100) {
                derecha = false; // cuando llega a 100px, cambia dirección
            }
        } else {
            posicion -= 5;  // regresa hacia la izquierda
            figura.style.marginLeft = posicion + "px";
            if (posicion <= 0) {
                clearInterval(mover); // cuando llega al inicio, se detiene
            }
        }

        // Cambiar color en cada paso
        if (esRojo) {
            figura.style.background = "red";
        } else {
            figura.style.background = "blue";
        }
        esRojo = !esRojo; // alternar entre rojo y azul
    }, 50); // velocidad del movimiento
}
// Función: mover arriba
function moverArriba() {
    figura.style.transform = "translateY(-45px)";
}
// función: mover Mover abajo
function moverAbajo(){
    figura.style.transform = "translateY(40px)"
}
// función: Mover izquierda
function moverIzquierda(){
    figura.style.transform = "translateX(-100px)"
}
// función: mover derecha
function moverDerecha(){
    figura.style.transform = "translateX(100px)";
}
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('btnCircle').addEventListener('click', circulo);
    document.getElementById('btnStar').addEventListener('click', estrella)
    document.getElementById('btnGif').addEventListener('click', fondoGif);
    document.getElementById('btnAnim').addEventListener('click', animacion);
    document.getElementById('btnMoveUp').addEventListener('click', moverArriba);
    document.getElementById('btnMoveDown').addEventListener('click', moverAbajo);
    document.getElementById('btnMoveLeft').addEventListener('click', moverIzquierda);
    document.getElementById('btnMoveRight').addEventListener('click', moverDerecha);


})