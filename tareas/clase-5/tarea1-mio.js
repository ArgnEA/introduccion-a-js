// creá un formulario que capture el primer nombre, segundo nombre, apellido/s y edad del usuario
// también vamos a crear un <h1> que diga Bienvenido!
// vas a crear un botón de acción que una vez que lo apretás, va a
// mostrar toda la información junta en un campo de texto
// Y va a cambiar el <h1> para decir "Bienvenido, nombreDeUsuario"!
$btnInfo = document.querySelector("#btn-info");
$btnInfo.onclick = function(){
  $primerNombre = document.querySelector("#primer-nombre").value;
  $segundoNombre = document.querySelector("#segundo-nombre").value;
  $apellido = document.querySelector("#apellido").value;
  document.querySelector("#info").innerText = "Información Ingresada:";
  document.querySelector("#p-info").innerText = `${$primerNombre} ${$segundoNombre} ${$apellido}`;
  document.querySelector("h1").innerText = `Bienvenido ${$primerNombre} ${$segundoNombre} ${$apellido}!`;
  return false
}