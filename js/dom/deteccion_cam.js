





const d = document,

n = navigator;

export default function webCam(btn, cam){

	const $btn = d.getElementById(btn),
	 $video = d.getElementById(cam);

	 d.addEventListener("click", (e)=>{

	 	///console.log(e.target.matches(btn))

	 if (e.target.matches(btn)) {


	if(n.mediaDevices.getUserMedia){
		n.mediaDevices
		.getUserMedia({video:true,audio:false})
		.then(stream =>{
			console.log(stream)
			$video.srcObject = stream;
			$video.play()
		})
		.catch((err)=>{console.log(`sucedio el error ${err}`)})
	}
}

	})
}













/*const d = document,

n = navigator;

export default function webCam(cam){
	let $video = d.getElementById(cam);

	if(n.mediaDevices.getUserMedia){
		n.mediaDevices
		.getUserMedia({video:true,audio:false})
		.then(stream =>{
			console.log(stream)
			$video.srcObject = stream;
			$video.play()
		})
		.catch((err)=>{console.log(`sucedio el error ${err}`)})
	}
	
}*/