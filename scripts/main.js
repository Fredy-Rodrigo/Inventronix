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

/* LIGHT BOX */
let lbServicios = document.getElementsByClassName('serv-lb');

// para disenio 3d
let lbDisenio = document.getElementsByClassName('lb-disenio-container');
let btnDisenioOn = document.getElementById('btn-disenio');
let btnDisenioOff = document.getElementById('btn-disenio-off');
let disenioContainer = document.getElementsByClassName('lb-disenio-container');

btnDisenioOn.addEventListener('click',()=>{
    lbServicios[0].classList.add('show');
    lbDisenio[0].classList.add('show-servicio');
});

btnDisenioOff.addEventListener('click',()=>{
    lbServicios[0].classList.remove('show');
    lbDisenio[0].classList.remove('show-servicio');
});

disenioContainer[0].addEventListener('click',(e)=>{
    if (!(document.getElementById('disenio-target').contains(e.target))){
        lbServicios[0].classList.remove('show');
        lbDisenio[0].classList.remove('show-servicio');
    }
});

//para impresion 3d
let lbImpresion = document.getElementsByClassName('lb-impresion-container');
let btnImpresionOn = document.getElementById('btn-impresion');
let btnImpresionOff = document.getElementById('btn-impresion-off');
let impresionContainer = document.getElementsByClassName('lb-impresion-container');

btnImpresionOn.addEventListener('click',()=>{
    lbServicios[0].classList.add('show');
    lbImpresion[0].classList.add('show-servicio');
});

btnImpresionOff.addEventListener('click',()=>{
    lbServicios[0].classList.remove('show');
    lbImpresion[0].classList.remove('show-servicio');
});

impresionContainer[0].addEventListener('click',(e)=>{
    if (!(document.getElementById('impresion-target').contains(e.target))){
        lbServicios[0].classList.remove('show');
        lbImpresion[0].classList.remove('show-servicio');
    }
});

//para proyectos educativos
let lbProyectos = document.getElementsByClassName('lb-proyectos-container');
let btnProyectosOn = document.getElementById('btn-proyectos');
let btnProyectosOff = document.getElementById('btn-proyectos-off');
let proyectosContainer = document.getElementsByClassName('lb-proyectos-container');

btnProyectosOn.addEventListener('click',()=>{
    lbServicios[0].classList.add('show');
    lbProyectos[0].classList.add('show-servicio');
});

btnProyectosOff.addEventListener('click',()=>{
    lbServicios[0].classList.remove('show');
    lbProyectos[0].classList.remove('show-servicio');
});

proyectosContainer[0].addEventListener('click',(e)=>{
    if (!(document.getElementById('proyectos-target').contains(e.target))){
        lbServicios[0].classList.remove('show');
        lbProyectos[0].classList.remove('show-servicio');
    }
});