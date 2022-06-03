
const d = document

const w = window

export function scrollTopBotton(btn){

	

	const $scrollBtn = d.querySelector(btn);

	//console.log($scrollBtn)

	w.addEventListener("scroll", e =>{

		let scrollTop = w.pageYOffset || d.documentElement.scrollTop

		if (scrollTop > 600){
		$scrollBtn.classList.remove("hidden")
		}else{
			$scrollBtn.classList.add("hidden")
		}
		//console.log(w.pageYOffset)


	})

	d.addEventListener("click", (e)=>{

		if (e.target.matches(btn)) {
			w.scrollTo({
				behavior: 'smooth',
				top: 0
				//let: 0;

			})
		}


	})


}