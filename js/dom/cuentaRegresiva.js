
	let d = document;

export default function countdown(display, limite, fin){

	const $countdown = d.getElementById(display),
	countdownDate = new  Date(limite).getTime();

	//console.log($countdown)

	let countdownTempo = setInterval(()=>{

		let now = new Date().getTime()

		//console.log(countdownD, now)
		let limitTime = countdownDate - now,
		days = Math.floor(limitTime/(1000*60*60*24)),
		hours = Math.floor(limitTime % (1000*60*60*24) / (1000*60*60)),
		minutes = Math.floor(limitTime % (1000*60*60) / (1000*60)),
		seconds =  Math.floor(limitTime % (1000*60) / (1000));

		$countdown.innerHTML = `<h3> faltan: ${days} dias, ${hours} horas, ${minutes} minutos, ${seconds} segundos. </h3>`;

		 if(limitTime < 0){
		 	clearInterval(countdownTempo);
		 	$countdown.innerHTML = `<h3>${fin}</h3>`
		 }
	}, 1000)

	


	




	

}