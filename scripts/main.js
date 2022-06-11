/* BARRA DE MENU CON SCROLL AL HACER CLICK */
const deslizar = (idSeccion) => {
    let seccion = document.getElementById(idSeccion);
    seccion.scrollIntoView({
        behavior:"smooth",
        block:"center"
    });
}

/* SECCIONES APARECEN CONFORME AL SCROLL */
let secciones = document.getElementsByClassName("seccion");
function mostrarSeccion() {
    let scrolltop = document.documentElement.scrollTop;
    for(let i=0; i<secciones.length; i++) {
        let altura = secciones[i].offsetTop;
        if(altura-500<scrolltop) {
            secciones[i].style.opacity = 1;
            secciones[i].classList.add("efectoSeccion");
        }
    }
}
window.addEventListener('scroll', mostrarSeccion);