(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation-ciu')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }
      else {
        RegistrarCiudad();
        event.preventDefault()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()

  function RegistrarCiudad() {
    //alert("Vamos bien")
    let codigo = document.querySelector("#txtCodigoCiudad").value;
    let nombre = document.querySelector("#txtNombreCiudad").value;
    let departamento = document.querySelector("#txtDepartamento").value;
    let url = `http://localhost:3000/ciudads`;
    let datos = {
      codigo: codigo,
      nombre: nombre,
      codigoDepar: departamento
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
