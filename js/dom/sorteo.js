



const d = document

/*export default function ruleta(btn, selectores){

	d.addEventListener("click", (e)=>{

		if (e.target.matches(btn)) {


	let todys = d.querySelectorAll(selectores)

	let cantidad = todys.length - 1

	let rul = Math.random(cantidad)

	let leta = Math.round(rul*cantidad),
	
	 yanis = todys[leta]

		alert(yanis.textContent)
		}
	})




}*/


export default function ruleta(btn, selectores){

	const getWinner = (selectores) =>{
		const $players = d.querySelectorAll(selectores),
			random = Math.floor(Math.random()*$players.length),
			winner = $players[random]

			return `el ganador es: ${winner.textContent}`
	}

	d.addEventListener("click",e=>{

		if(e.target.matches(btn)){

			let result = getWinner(selectores)
			alert(result)
			console.log(result)
		}
	})



}


	/*const getWinnerComment = (selectores) =>{
		const $players = document.querySelectorAll(selectores),
			random = Math.floor(Math.random()*$players.length),
			winner = $players[random]

			return `el ganador es: ${winner.textContent}`
	}


	getWinnerComment("ytd-comment-thread-renderer #author-text span")*///"author-comment-badge",


	/*const getWinnerComment = (selectores) =>{
		const $players = document.querySelectorAll(selectores),
			random = Math.floor(Math.random()*$players.length),
			winner = $players[random];
    
    console.log(random);

			return `el ganador es: ${winner.textContent}`;
	}


	getWinnerComment("ytd-comment-thread-renderer #author-text span");*/