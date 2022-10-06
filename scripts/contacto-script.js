
const nombre = document.querySelector("#nombre")
const email = document.querySelector("#email")
const phone = document.querySelector("#phone")
const enviarDatos = document.querySelector("#enviarDatos")


enviarDatos.addEventListener("click", ()=> contactSave() )

// Guarda en el local Storage los datos introducidos en las casillas.

function contactSave() {

// Aqui añadimo un operador ternario que sustituye un condicional
    const camposVacios = (isNaN(parseInt(phone.value)) || phone.value != " " && phone.value <= 0)
        camposVacios ? cargarDato() : compra()
            
       
	let tipo = nombre.value
	let marca = email.value
	let ant = phone.value
		localStorage.setItem("tipo", tipo)
		localStorage.setItem("marca", marca)
		localStorage.setItem("ant", ant)	
    
}


// Recopila los ultimos datos guardados en local storage y los muestra por pantalla.
function recoveryData() {
	nombre.value = localStorage.getItem("tipo")
	email.value = localStorage.getItem("marca")
	phone.value = localStorage.getItem("ant")
}

 recoveryData()


const cargarDato = () =>{
    Swal.fire({
  title: 'Introduzca un numero de telefono válido',
  icon: 'warning',
  confirmButtonText: 'Acceptar'
})
}

const compra = () =>{
    Swal.fire({
  title: 'Gracias por su compra!',
  confirmButtonText: 'Acceptar'
})
}