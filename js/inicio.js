function fixRutas(){
    document.querySelector('img.logo').src = "img/pokemon logo.png"; 
    document.querySelector('#nav-inicio').href = "index.html";
    document.querySelector('#nav-pokedex').href = "html/pokedex.html";
    document.querySelector('#nav-build').href = "html/build.html";
}

document.addEventListener('DOMContentLoaded', () =>{
    fixRutas();
})