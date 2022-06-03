
const d = document;

let x = 0
 let y = 0



export function moveBall (e,ball,stage){

	const $ball = d.querySelector(ball),
	$stage = d.querySelector(stage),
	limitBall = $ball.getBoundingClientRect(),
	limitStage = $stage.getBoundingClientRect();

	//console.log(e.key)
	//console.log(e.which)

	//console.log(limitBall,limitStage)
		//const move = (direction) =>{}
	

	switch (e.which){
			case 37:
			e.preventDefault();
				//move("left")

				if (limitBall.left > limitStage.left) x--;		

			break;

			case 38: 
			e.preventDefault();

				//move("up")

				if (limitBall.top > limitStage.top) y--;

			break;

			case 39: 
			e.preventDefault();

				//move("rigth")
				if (limitBall.right < limitStage.right) x++
				
			break;				

			case 40:
			e.preventDefault();

				//move("down")
				if (limitBall.bottom < limitStage.bottom) y++;		

			break;

			default:
			break;	
	}

	$ball.style.transform = `translate(${x * 3}px,${y * 3}px)`;
}

export function shortcuts (e){

	//console.log(e.KeyCode)atajos

		
}