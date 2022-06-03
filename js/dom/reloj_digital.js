export  function relojDigital(display,iniciar,parar){
	let relojito;
	

	const d = document;

	d.addEventListener("click",(e)=>{

		if (e.target.matches(iniciar)){

			relojito = setInterval(()=>{


			const relojeando = new Date().toLocaleTimeString()



				d.querySelector(display).innerHTML =`<h3>${relojeando}</h3>`
			}, 1000)

			d.querySelector(iniciar).disabled =true

		}

		if (e.target.matches(parar)) {

			clearInterval(relojito)

			d.querySelector(display)
			d.querySelector(iniciar).disabled = false
		}



	})




}

	 export function alarma(sonido, play, stop){

	 	const d = document;

	 	let tempo

	 	const $alarm= d.createElement("audio")

	 	$alarm.src = sonido

	 	d.addEventListener("click",(e)=>{

	 		

	 		if(e.target.matches(play)){

	 			tempo = setTimeout(()=>{
	 			$alarm.play()

	 		},1000)

	 			e.target.disabled=true

	 		}

	 		if(e.target.matches(stop)){


	 			$alarm.pause()
	 			$alarm.currentTime=0

	 			d.querySelector(play).disabled=false

	 		}




	 	})

	 }