const d = document,
	w = window;

	export default function rsponsiveMedia(id, mq, movilContent, desktopContent){


		let breakpoint = w.matchMedia(mq)

		const responsive = (e) => {
			if(e.matches){
				d.getElementById(id).innerHTML = desktopContent
			}else{
				d.getElementById(id).innerHTML = movilContent
			}		

			//console.log("mq",breakpoint,e.matches)
		}
		breakpoint.addListener(responsive)

		responsive(breakpoint)

	}