const d = document;

export default function contactForm(){
	const $form = d.querySelector(".contact-form"),

	$inputs = d.querySelectorAll(".contact-form [required]");

	console.log($inputs)

	$inputs.forEach((input) =>{
		const $span = d.createElement("span")
		$span.id = input.name

		$span.textContent = input.title
		$span.classList.add("contact-form-error", "none")
		input.insertAdjacentElement("afterend",$span)

	})

	d.addEventListener("keyup", (e)=>{

		if(e.target.matches(".contact-form [required]")){
			let $input= e.target,
			pattern = $input.pattern || $input.dataset.pattern
		//console.log($input, pattern)
		if(pattern && $input.value !==""){
			let regex = new RegExp(pattern)
			return !regex.exec($input.value)
				?d.getElementById($input.name).classList.add("is-active")
				:d.getElementById($input.name).classList.remove("is-active")//tirnr patron


		}
		if (!pattern) {

			return $input.value === ""
			? d.getElementById($input.name).classList.add("is-active")
			: d.getElementById($input.name).classList.remove("is-active")//noo tirnr patron
			


		}
	}
	})


	d.addEventListener("submit",(e)=>{
		//e.preventDefault()

		const $loader = d.querySelector(".contact-from-loader"),
			$respons = d.querySelector(".contact-form-response")

			
			$loader.classList.remove("none")

			setTimeout(()=>{

			$loader.classList.add("none")
			
			$form.reset()
				$respons.classList.remove("none")
			},5000)

			setTimeout(()=>{

				$respons.classList.add("none")

			},5000)

						/*setTimeout(()=>{
			$loader.classList.add("none")		
			$respons.classList.remove("none")
            $form.reset()			

			setTimeout(()=>$respons.classList.add("none"),3000)
			},3000)*/




	})

}