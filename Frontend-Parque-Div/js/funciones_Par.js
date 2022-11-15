(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation-dep')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }
      else {
        RegistrarDepartamento();
        event.preventDefault()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()

function RegistrarParques () {
  let codigoParque = document.querySelector("#txtCodigoParque").value;
  let nombreParque = document.querySelector("#txtNombreParque").value;
  let direccionParque = document.querySelector("#txtDireccionParque").value;
  let emailParque = document.querySelector("#txtEmailParque").value;
  let ciudadParque = document.querySelector("#txtCiudadParque").value;
  let visitantesParque = document.querySelector("#txtVisitantesDiarios").value;
  let logotipoParque = document.querySelector("#txtLogotipo").value;
  let mapaParque = document.querySelector("#txtMapa").value;
  let descripccionParque = document.querySelector("#txtDescripcionParque").value;
  let url = 'https://localhost:3000/prueba';
  let datos = {
    codigo: codigoParque,
    nombre: nombreParque,
    direccion: direccionParque,
    email: emailParque,
    ciudad: ciudadParque,
    visitantes: visitantesParque,
    logotipo: logotipoParque,
    mapa: mapaParque,
    descripccion: descripccionParque,
  };
    fetch(url, {
      method: "POST",
      body: JSON.stringify(datos),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then((res) => res.json())
      .then((mensaje) => {
        console.log(mensaje)
      })
  }

