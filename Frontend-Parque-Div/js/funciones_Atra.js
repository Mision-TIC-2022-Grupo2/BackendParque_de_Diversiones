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

function RegistrarAtracciones () {
  let codigoParque = document.querySelector("#txtCodigoAtraccion").value;
  let nombreParque = document.querySelector("#txtNombreAtraccion").value;
  let estatura = document.querySelector("#txtEstatura").value;
  let imagenAtraccion  = document.querySelector("#txtImagenAtraccion").value;
  let descripcionAtracion = document.querySelector("#txtDescripcionAtraccion").value;
  let url = 'https://localhost:3000/prueba';
  let datos = {
    codigo: codigoParque,
    nombre: nombreParque,
    estatura: estatura,
    imagen : imagenAtraccion,
    descripccion: descripcionAtracion,

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

