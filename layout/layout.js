const home = document.querySelector('#Home');
const what = document.querySelector('#What');
const zpotify = document.querySelector('#Zpotify');

home.addEventListener('click', cargarHome);
what.addEventListener('click', cargarWhat);
zpotify.addEventListener('click', cargarZpotify);

function cargarHome() {
    const dinamico = document.querySelector('#contenido-dinamico');
    dinamico.setAttribute('src', '../home/Home.html');
    document.getElementById("nombre").innerHTML = "Home ";
}

function cargarWhat() {
    const dinamico = document.querySelector('#contenido-dinamico');
    dinamico.setAttribute('src', '../whatzapp/Whatzapp.html');
    document.getElementById("nombre").innerHTML = "Whatzapp ";
}

function cargarZpotify() {
    const dinamico = document.querySelector('#contenido-dinamico');
    dinamico.setAttribute('src', '../zpotify/zpotify.html');
    document.getElementById("nombre").innerHTML = "Zpotify";
}