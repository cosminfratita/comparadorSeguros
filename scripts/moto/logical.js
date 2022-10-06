enviarDatos.addEventListener("click", ()=> precioFinalSeguro() )

// Esta funcion muestra en pantalla el precio final de la poliza en funcion de los datos seleccionados.
// se ha añadido condiciones para evitar casillas vacios o datos incorrectos.
precioFinalSeguro = () => {
	const campoVacio = (isNaN(parseInt(addCilindrada.value)) || addCilindrada.value != "" && addCilindrada.value <= 0)
		if(campoVacio){
			cargarDatos()
		}else{
	let plCil = addCilindrada.value
	let plVeh = addTipoVehiculo.value
	let plMar = addMarcaVehiculo.value
	let plAnt = addAntiguedadVehiculo.value
	let plCiu = addCiudadVehiculo.value
	let cuotaAnual = parseFloat(plCil) * parseFloat(plVeh) * parseFloat(plMar) * parseFloat(plAnt) * parseFloat(plCiu)
		valorFinal.innerText = `El valor del seguro es:  ${cuotaAnual.toFixed(2)} €`
		
	}
}


// Esta funcion muestra el alert en caso de introducir datos vacios, 
//que no sean numeros o que sean numeros menores que cero.

const cargarDatos = () =>{
	Swal.fire({
  title: 'Introduzca un numero valido',
  icon: 'warning',
  confirmButtonText: 'Acceptar'
})
}


// Iteramos la base de datos  para poder agregar a cada casilla los elementos que el usuario necesita seleccionar.
const loadStates = async () => {
	await fetch("/scripts/moto/dataBase.json")
	.then(response => response.ok ? response.json() : Promise.reject(response))
	.then(json => {
		json.forEach((el) => {
			if(el.tipo){
				addTipoVehiculo.innerHTML += `<option value="${el.indice}">${el.tipo}</option>`
			}else if(el.marca) {
				addMarcaVehiculo.innerHTML += `<option value="${el.indice}">${el.marca}</option>`
			}else if(el.numero) {
				addAntiguedadVehiculo.innerHTML += `<option value="${el.indice}">${el.numero}</option>`
			}else if(el.ciudad) {
				addCiudadVehiculo.innerHTML += `<option value="${el.indice}">${el.ciudad}</option>`
			}
		})
		
})
	.catch(err => {
		console.log(err)
		let message  = err.statusText || "Ocurrió un error"
	})
}

document.addEventListener("DOMContentLoaded", loadStates)