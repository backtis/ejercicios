
const d = document,
	n = navigator;

export  function getGeoLocation(btn,id){


	
	


	d.addEventListener("click", (e)=>{

		//console.log(e.target.matches(btn))




		if (e.target.matches(btn)) {







		const $id = d.getElementById(id),
		 options = {
				enableHighAccuracy: true,
				timeout:5000,
				maximumAge: 0
			};

		const success = (position)=>{

			let coords = position.coords
			console.log(position)

			$id.innerHTML= `
			<p> tu posicion actual es</p>
				<ul>
					<li><b>Latitude: ${coords.latitude}</b></li>
					<li><b>Longitud: ${coords.longitude}</b></li>
					<li><b>Precision: ${coords.accuracy}</b></li>
				<ul>
			<a href="https://www.google.com/maps/@${coords.latitude},${coords.longitude},19z" target="_blank" rel="noopener"> ver mapa</a>`
		}
	

		const error = (err)=>{

			$id.innerHTML = `<p><mark>Error${err.code}: ${err.message}</mark></p>`
			console.log(`Erorr:${err.code}:${err.message}`)
		}

			n.geolocation.getCurrentPosition(success, error, options)


		
		}

	})		

}