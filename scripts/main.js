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

btnDisenioOn.addEventListener('click',()=>{
    lbServicios[0].classList.add('show');
    lbDisenio[0].classList.add('show-disenio');
});

btnDisenioOff.addEventListener('click',()=>{
    lbServicios[0].classList.remove('show');
    lbDisenio[0].classList.remove('show-disenio');
});

//para impresion 3d
let lbImpresion = document.getElementsByClassName('lb-impresion-container');
let btnImpresionOn = document.getElementById('btn-impresion');
let btnImpresionOff = document.getElementById('btn-impresion-off');

btnImpresionOn.addEventListener('click',()=>{
    lbServicios[0].classList.add('show');
    lbImpresion[0].classList.add('show-impresion');
});

btnImpresionOff.addEventListener('click',()=>{
    lbServicios[0].classList.remove('show');
    lbImpresion[0].classList.remove('show-impresion');
});


//para proyectos educativos
let lbProyectos = document.getElementsByClassName('lb-proyectos-container');
let btnProyectosOn = document.getElementById('btn-proyectos');
let btnProyectosOff = document.getElementById('btn-proyectos-off');

btnProyectosOn.addEventListener('click',()=>{
    lbServicios[0].classList.add('show');
    lbProyectos[0].classList.add('show-proyectos');
});

btnProyectosOff.addEventListener('click',()=>{
    lbServicios[0].classList.remove('show');
    lbProyectos[0].classList.remove('show-proyectos');
});
