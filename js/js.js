let tw = document.getElementById("not_tresmas")


function verMas (tw,) {
    tw.classList.remove("not_off")
    tw.classList.add("not_on")

}

let menuDesplegable = document.querySelector(".menu-desplegable")
let menuOff = document.querySelector(".menu-off")
let imgMenuOn = document.querySelector(".on")

function toggleMenuOn(){
    menuDesplegable.classList.remove("menu-off")  
    menuDesplegable.classList.add("menu-on")
    imgMenuOn.style.opacity = "0"
}

function toggleMenuOff(){
    menuDesplegable.classList.remove("menu-on")
    menuDesplegable.classList.add("menu-off")
    imgMenuOn.style.opacity = "1"
}


let fueraMenu = []

fueraMenu.push(document.querySelector(".section-home"))
fueraMenu.push(document.querySelector(".section-sobre-mi"))
fueraMenu.push(document.querySelector(".section-tec-port"))
fueraMenu.push(document.querySelector(".section-contacto"))

function agregarOnclik(){
    for (let i = 0; i < fueraMenu.length; i++) {   
        fueraMenu[i].setAttribute("onclick","toggleMenuOff()");        
    }
}