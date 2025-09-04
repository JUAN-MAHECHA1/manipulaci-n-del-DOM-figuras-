// referencia a la figura
const figura = document.getElementById('figure');
let arriba = 0;

// figuras
function circulo() {
    figura.style.borderRadius = "50%";
    figura.style.background = "purple";
}
function estrella() {
    figura.style.clipPath = "polygon(50% 0%, 61% 35%, 98% 35%, \
                              68% 57%, 79% 91%, 50% 70%, \
                              21% 91%, 32% 57%, 2% 35%, 39% 35%)";
    figura.style.borderRadius = "0";
    figura.style.background = "gold";
}
function fondoGif() {
    figura.style.clipPath = "none";
    figura.style.borderRadius = "0";
    figura.style.background = "url('img/rick.gif')";
    figura.style.backgroundSize = "cover";
}

// animación
function animacion() {
    figura.style.animation = "mover 2s infinite alternate linear";
    figura.style.background = "blue";
}

// mover figura
function moverArriba() {
    figura.style.transform = "translateY(-45px)";
}
function moverAbajo() {
    figura.style.transform = "translateY(40px)";
}
function moverIzquierda() {
    figura.style.transform = "translateX(-100px)";
}
function moverDerecha() {
    figura.style.transform = "translateX(100px)";
}

// título y párrafos
function cambiarTitulo() {
    const titulop = document.getElementById('mainTitle');
    titulop.textContent = prompt("Escribe el nuevo título:");
}
function cambiarParrafo() {
    const parrafop = document.getElementById('mainParagraph');
    parrafop.textContent = prompt("Escribe el nuevo párrafo:");
}
function agregarParrafo() {
    let parrafoN = prompt("Escribe el nuevo párrafo:");
    const parrafo = document.getElementById('extraParagraphs');
    parrafo.textContent = parrafoN;
}
function deletep() {
    const parrafox = document.getElementById('extraParagraphs');
    parrafox.remove();
}

// colores y figuras
function colorHex() {
    const nuevoColor = prompt("Escribe un color en HEX (ej: #ff0000):");
    figura.style.background = nuevoColor;
}
function elegirFigura() {
    const opcion = prompt("Elige una figura:\n1: Cuadrado\n2: Estrella\n3: Círculo");
    switch (opcion) {
        case "1":
            figura.style.clipPath = "none";
            figura.style.borderRadius = "0";
            figura.style.background = "green";
            break;
        case "2":
            estrella();
            break;
        case "3":
            circulo();
            break;
        default:
            alert("Opción no válida");
    }
}

// imágenes
const imagenes = ["img/imagen.jpg", "img/imagen2.jpg", "img/imagen3.jpg"];
let indice = 0;

function cambiarImagenSiguiente() {
    const imagen = document.getElementById('mainImage');
    indice++;
    if (indice >= imagenes.length) indice = 0;
    imagen.src = imagenes[indice];
}
function cambiarImagenAtras() {
    const imagen = document.getElementById('mainImage');
    indice--;
    if (indice < 0) indice = imagenes.length - 1;
    imagen.src = imagenes[indice];
}
function toggleImagen() {
    const imagen = document.getElementById('mainImage');
    if (imagen.style.display === "none" || imagen.style.display === "") {
        imagen.style.display = "block";
        imagen.style.margin = "0 auto";
        imagen.style.display = "block";
    } else {
        imagen.style.display = "none";
    }
}

// atributos de la imagen y enlaces
function cambiarAlt() {
    const imagen = document.getElementById('mainImage');
    const nuevoAlt = prompt("Escribe el nuevo ALT:");
    if (nuevoAlt) {
        imagen.alt = nuevoAlt;
        alert("Nuevo ALT asignado: " + nuevoAlt);
    }
}
function cambiarLink() {
    const enlace = document.getElementById('mainLink');
    const nuevoLink = prompt("Escribe la nueva URL:");
    if (nuevoLink) {
        enlace.href = nuevoLink;
        enlace.textContent = "Visitar: " + nuevoLink;
    }
}
function abrirEnNuevaPestana() {
    window.open("https://github.com/JUAN-MAHECHA1", "_blank");
    const enlace = document.getElementById('mainLink');
    enlace.href = "https://github.com/JUAN-MAHECHA1";
    enlace.textContent = "Visitar mi GitHub";
    enlace.target = "_blank";
}
function deshabilitarLink() {
    const enlace = document.getElementById('mainLink');
    enlace.removeAttribute("href");
    enlace.style.pointerEvents = "none";
    enlace.style.color = "gray";
    alert("El enlace ha sido deshabilitado.");
}

// eventos
document.getElementById('btnToggleImage').addEventListener('click', toggleImagen);
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('btnCircle').addEventListener('click', circulo);
    document.getElementById('btnStar').addEventListener('click', estrella);
    document.getElementById('btnGif').addEventListener('click', fondoGif);
    document.getElementById('btnAnim').addEventListener('click', animacion);
    document.getElementById('btnMoveUp').addEventListener('click', moverArriba);
    document.getElementById('btnMoveDown').addEventListener('click', moverAbajo);
    document.getElementById('btnMoveLeft').addEventListener('click', moverIzquierda);
    document.getElementById('btnMoveRight').addEventListener('click', moverDerecha);
    document.getElementById('btnChangeTitle').addEventListener('click', cambiarTitulo);
    document.getElementById('btnChangeParagraph').addEventListener('click', cambiarParrafo);
    document.getElementById('btnAddParagraph').addEventListener('click', agregarParrafo);
    document.getElementById('btnRemoveParagraph').addEventListener('click', deletep);
    document.getElementById('btnHexColor').addEventListener('click', colorHex);
    document.getElementById('btnChooseFigure').addEventListener('click', elegirFigura);
    document.getElementById('btnChangeImageNext').addEventListener('click', cambiarImagenSiguiente);
    document.getElementById('btnChangeImagePrev').addEventListener('click', cambiarImagenAtras);
    document.getElementById('btnToggleImage').addEventListener('click', toggleImagen);
    document.getElementById('btnChangeAlt').addEventListener('click', cambiarAlt);
    document.getElementById('btnChangeLink').addEventListener('click', cambiarLink);
    document.getElementById('btnOpenLink').addEventListener('click', abrirEnNuevaPestana);
    document.getElementById('btnDisableLink').addEventListener('click', deshabilitarLink);
});
