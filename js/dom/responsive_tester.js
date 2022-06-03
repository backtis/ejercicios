const d= document

const w= window

export function responsiveTester(form){

const $form = d.getElementById(form)

let tester;

d.addEventListener("submit", (e) =>{

	if(e.target === $form){
		e.preventDefault()
		tester = w.open($form.rul.value, tester, `innerWidth=${$form.chancho.value}, innerHeight=${$form.salto.value}`)
	}


})

	d.addEventListener("click", (e)=>{

		if(e.target === $form.cerrar){

			tester.close()
		}

	})

	


	/*let $formu = d.getElementById(form)

	let datos = new FormData($formu)

	let alto = datos.get("salto")

	let ancho = datos.get("chancho")

	let url = datos.get("rul")

	let rez= w.resizeBy(alto, ancho)*/



		//$cerrar = d.querySelector("")


//
	

	//let volantes = w.open(url).resizeTo(ancho,alto)




}