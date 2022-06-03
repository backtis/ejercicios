/*const d = document

export default function scrollSpy(){

	const $sections = d.querySelectorAll("section[data-scroll-spy]")
	const cb = (entries) =>{
		//console.log("entradas:", entries)

		entries.forEach((entry)=>{
		const id = entry.target.getAttribute("id")

		if(entry.isIntersecting){
		d.querySelector(`a[href="#${id}"][data-scroll-spy]`).classList.add("active")
	}else{
		d.querySelector(`a[href="#${id}"][data-scroll-spy]`).classList.remove("active")
	};

});
};
	const observer = new IntersectionObserver(cb, {
		//rootMargin:"-250px",
		threshold:0.5
	})

	$sections.forEach(el => observer.observe(el))


};*/