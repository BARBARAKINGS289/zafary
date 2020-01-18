const primer = document.querySelector('#primer');
const segun = document.querySelector('#segun');
const tercer = document.querySelector('#tercer');
const cuarto = document.querySelector('#cuarto');
const quinto= document.querySelector('#quinto');

primer.addEventListener('click', cargarPrimer);
segun.addEventListener('click', cargarSegun);
tercer.addEventListener('click', cargarTercer);
cuarto.addEventListener('click', cargarCuarto);
quinto.addEventListener('click', cargarQuinto);

function cargarPrimer() {
    document.getElementById("nombre").innerHTML = "JUAN PEREZ PEREZ";
}
function cargarSegun() {
    document.getElementById("nombre").innerHTML = "PERICO CASANOVA";
}

function cargarTercer() {
    document.getElementById("nombre").innerHTML = "MIRANDA UNDURRAGA ";
}
function cargarCuarto() {
    document.getElementById("nombre").innerHTML = "PAOLA ASENJO";
}
function cargarQuinto() {
    document.getElementById("nombre").innerHTML = "MIRIAM HERNANDEZ";
}
