const d = document;

const ls= localStorage;



export function darkTheme(btn, classDark){


	const $themeBtn = d.querySelector(btn),
		$selectors = d.querySelectorAll("[data-dark]");

		//console.log($selectors)

		const tierra = "≡",
			agua  = "≈";


			const lightMode = () => {

					$selectors.forEach((el) => el.classList.add(classDark))
					$themeBtn.textContent = tierra;
					ls.setItem("theme","light")


			}

			const darkMode = () =>{

				$selectors.forEach((el) => el.classList.remove(classDark))
					$themeBtn.textContent = agua;
					ls.setItem("theme","dark")


			}

		d.addEventListener("click", (e)=>{

			if(e.target.matches(btn)){
				//console.log($themeBtn.textContent)

				if ($themeBtn.textContent == tierra) {
					
					darkMode()

				}else{					
					
					lightMode()

				}

			}
		})
///localstorag


d.addEventListener("DOMContentLoaded", (e)=>{


	if (ls.getItem("theme") === null) ls.setItem("theme", "light")
		
	
	if (ls.getItem("theme") === "light") lightMode();	

	if (ls.getItem("theme") === "dark")	darkMode();
		
		


})
}