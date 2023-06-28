const nav = document.querySelector("#nav")
const abrir = document.querySelector("#abrir")
const cerrar = document.querySelector("#cerrar")

abrir.addEventListener("click", () => {
    nav.classList.add("visible")
})

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible")
})

let article1 = null // Variable para almacenar el artículo creado

function agregarArticle1() {
    if (!article1) {
        // Capturo la etiqueta padre "id:main"
        let main = document.getElementById("main")

        // Nuevo elemento article
        article1 = document.createElement("article")

        // Le añado código a la etiqueta article
        article1.innerHTML = `
        
            <form class="formulario" action="#" method="get">
                <div class="inputs">
                <div class="boton-salir">
                <button id="salir">Salir</button>
               </div>
                    <label for="ventas">Ventas:</label>
                    <input type="number" placeholder="Ej: $5000" id="ventas" name="ventas" required>

                    <label for="interes">Interés:</label>
                    <input type="number" placeholder="Ej: 40%" id="interes" name="interes" required>

                    <label for="salidas">Salidas:</label>
                    <input type="number" placeholder="Ej: $2200" id="salidas" name="salidas" required>

                    <button type="submit" id="calcular">Calcular</button>
                </div>

                <div class="resultado">
                    
                    <h4>Resultado:</h4>
                    <div class="resp"></div>
                </div>
            </form>
            
        `

        // Le añado una clase
        article1.className = "contenedor"

        // Lo inserto
        main.append(article1)
    }

    let salir = document.getElementById("salir")

    salir.addEventListener("click", () => {
        if (article1) {
            article1.remove()
            article1 = null // Reinicio la variable para permitir agregar nuevamente el artículo
        }
    })

}

let registrar = document.getElementById("registro")


registrar.addEventListener("click", () => {
    agregarArticle1()
    nav.classList.remove("visible")
})

let article2 = null

function agregarArticle2() {

    if (!article2) {
        main = document.getElementById("main")
        article2 = document.createElement("article")
        article2.innerHTML = `<form action="#" method="get" class="formulario2">
        <div class="boton-salir2">
        <button id="salir2">Salir</button>
    </div>
        <label for="inpBuscarID">Buscar por ID</label>
        <input type="number" id="inpBuscarID" placeholder="Ingrese un ID Ej: 5">
        <input type="submit" id="btnBuscarID">
        <div class="resultadoBusquedaID">

        </div>
    </form>`
        article2.className = "contenedor2"
        main.append(article2)
    }
    let salir2 = document.getElementById("salir2")

    salir2.addEventListener("click", () => {
        if (article2) {
            article2.remove()
            article2 = null // Reinicio la variable para permitir agregar nuevamente el artículo
        }
    })

}


let buscarPorID = document.getElementById("busPId")


buscarPorID.addEventListener("click", () => {
    agregarArticle2()
    nav.classList.remove("visible")
})