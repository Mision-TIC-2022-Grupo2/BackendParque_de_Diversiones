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

function RegistrarPlanes () {
  let codigoPlanes = document.querySelector("#txtCodigoPlanes").value;
  let nombrePlanes = document.querySelector("#txtNombrePlan").value;
  let colorPlan = document.querySelector("#txtColorPlan").value;
  let valorPlan = document.querySelector("#txtValor").value;
  let atraccionesPlanes = document.querySelector("#txtListaAtracciones").value;
  let parquesPlanes = document.querySelector("#txtListaParqueAplica").value;

  let url = 'https://localhost:3000/prueba';
  let datos = {
    codigo: codigoPlanes,
    nombre: nombrePlanes,
    color: colorPlan,
    valor: valorPlan,
    atracciones: atraccionesPlanes,
    parques: parquesPlanes,

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

