
function load_header() {
    let header = document.createElement("header");
    header.className = "container-fluid";

    header.innerHTML = `
            <nav class="navbar navbar-expand-md">
                <a class="navbar-brand">
                    <img class="logo" src="../img/pokemon logo.png" alt="logo pokemon">
                </a>
    
                <button class="navbar-toggler btn-collapse" data-bs-toggle="collapse" data-bs-target="#opcionesNav" aria-controls="opcionesNav" aria-expanded="false">
                    <span class="navbar-toggler-icon"></span>
                </button>
    
                <div class="collapse navbar-collapse" id="opcionesNav">
                    <div class="nav">
                        <a id="nav-inicio" href="../index.html">
                            <span class="iconify icon" data-icon="ion:home-outline"></span>
                            <span class="text">inicio</span>
                        </a>
                        <a id="nav-pokedex" href="../html/pokedex.html">
                            <span class="iconify icon" data-icon="iconoir:pokeball"></span>
                            <span class="text">Pokedex</span>
                        </a>
                        <a id="nav-build" href="../html/build.html">
                            <span class="iconify icon" data-icon="material-symbols:swords"></span>
                            <span class="text">Build</span>
                        </a>
                    </div>
                </div>
            </nav>
        `;

    let body = document.body;
    body.insertBefore(header, body.firstChild);
}

document.addEventListener("DOMContentLoaded", () => {
    load_header();
});
