

const d = document,
	w = window

export default function speechReader(){

	const $speechSelect = d.getElementById("speech-select"),

		$speechText = d.getElementById("speech-text"),

		$speechBtn = d.getElementById("speech-btn"),

		speechMessage = new SpeechSynthesisUtterance()

		let voices = []

		d.addEventListener("DOMContentLoaded", (e)=>{

			//console.log(w.speechSynthesis.getVoices())



			w.speechSynthesis.addEventListener("voiceschanged", (e)=>{

				voices = w.speechSynthesis.getVoices()

				voices.forEach(voice=>{
					const $option = d.createElement("option")
						$option.value = voice.name
						$option.textContent = `${voice.name} - ${voice.lang}`
						console.log($option)
						$speechSelect.appendChild($option)


				})
			})

		})



		d.addEventListener("change", (e)=>{
			if(e.target === $speechSelect){
				speechMessage.voices = voices.find((voice)=>voices.nam === e.target.value)
			}


		})

		d.addEventListener("click",(e)=>{


			if (e.target === $speechBtn) {



				speechMessage.text = $speechText.value
				w.speechSynthesis.speak(speechMessage)
			}


		})
}