
let nombreFormulario = document.querySelector("#Nombre");
let apellidoFormulario = document.querySelector("#Apellido");
let paisFormulario = document.querySelector("#Pais");
let destinoFormulario = document.querySelector("#Pais2");
let valijasFormulario = document.querySelector("#Valijas");
let Formulario = document.querySelector("form")

nombreFormulario.addEventListener("input", function (){})
apellidoFormulario.addEventListener("input", function (){})

const alert = Formulario.addEventListener ("submit" , function(e) {
  e.preventDefault();
  Formulario.innerHTML = `<div id="liveAlertPlaceholder">Sus Datos se guardaron correctamente </div>
  <button type="button" class="btn btn-primary" id="liveAlertBtn">Hola ${apellidoFormulario.value} ${nombreFormulario.value}. Esperamos que su viaje a ${destinoFormulario.value} con Origen en ${paisFormulario.value} sea muy placentero. Lo invitamos a seguir completando sus informacion de vuelo. Gracias  </button>`
})



