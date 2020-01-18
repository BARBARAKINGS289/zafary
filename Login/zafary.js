const boton = window.document.querySelector('#button');

boton.addEventListener('click', mostrarDatos);

function mostrarDatos() {
    const option = window.document.querySelector('#option');
    const option2 = window.document.querySelector('#secreta');
    const textValue1 = option.value;
    const textValue2 = option2.value;
    console.log(textValue1);
    console.log(textValue2);
    option.value = '';
    option2.value = "";
    option.focus();
    if (textValue1 === '' || textValue2 === '') {
        document.getElementById("error").innerHTML = " Debe rellenar todos los datos ";
    } else {
        if (textValue1 === 'ejemplo@gmail.com' && textValue2 === '123456') {
            document.getElementById("error").innerHTML = " ";
            boton.addEventListener('click', funcionQueRedirecciona);

            function funcionQueRedirecciona() {
            document.location.assign("../layout/Layout.html");
            }
        } else {
            document.getElementById("error").innerHTML = "Nombre de usuario y/o contraseña incorrectos";
        }
    }
}