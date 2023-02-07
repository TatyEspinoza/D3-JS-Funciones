/* 1) Modifica la función para que reciba el elemento clickeado de forma de no
tener que seleccionarlo nuevamente dentro de la función 

function pintar() {
    ele = document.getElementById("ele1")
    ele.style.backgroundColor = 'yellow'
}
ele = document.getElementById("ele1")
ele.addEventListener("click", pintar);


2) Modifica el código anterior para poder pasarle un color como argumento a la
función pintar. El color debe ser verde  */

function pintar(elemento, color = 'green') {
    elemento.style.backgroundColor = color

}

elemento = document.getElementById('ele1')
elemento.addEventListener('click', function () {
    pintar(elemento)

})


