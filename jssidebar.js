const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
})

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
})


let registrar = document.getElementById("registro")

let salir =document.getElementById("salir")

let contenedor =document.getElementsByClassName("contenedor")[0]



registrar.addEventListener("click", () => {
    contenedor.classList.add("visible")
    nav.classList.remove("visible")
})

salir.addEventListener("click", () =>{
    contenedor.classList.remove("visible")
    nav.classList.add("visible");
    
})