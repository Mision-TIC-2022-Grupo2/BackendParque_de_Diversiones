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

function RegistrarPuestosComida () {
  let codigoPuesto = document.querySelector("#txtCodigoPuesto").value;
  let nombrePuesto = document.querySelector("#txtNombrePuesto").value;
  let imagenPuesto = document.querySelector("#txtImagenPuesto").value;
  let zonaPuesto = document.querySelector("#txtZonaPuesto").value;
  let url = 'https://localhost:3000/prueba';
  let datos = {
    codigo: codigoPuesto,
    nombre: nombrePuesto,
    imagen: imagenPuesto,
    zona: zonaPuesto,


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

