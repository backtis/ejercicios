/*clallback*/
(()=>{
	const xhr = new XMLHttpRequest(),// instancia
		$xhr = document.getElementById("xhr"),
		$fragment = document.createDocumentFragment()

		

		xhr.addEventListener("readystatechange", (e)=>{
			//console.log(xhr)//estados de peticion que pasa imprime 4veces

			if(xhr.readyState !==4) return;

			if(xhr.status >= 200 && xhr.status <300){

				//console.log("exito")
				let json = JSON.parse(xhr.responseText)
				json.forEach((el)=>{
				const $li = document.createElement("li")
				$li.innerHTML=`${el.name} -- ${el.email} -- ${el.phone}`

				$fragment.appendChild($li)				

			});
				$xhr.appendChild($fragment)

				//console.log(xhr.responseText)

			}else{

				//console.log("error")
				let message = xhr.statusText || "ocurrio un error"

				xhr.innerHTML = `Error ${xhr.status}:${message}`
			}





			
		})//asignacion de  eventos  callback

	//	xhr.open("GET","https://jsonplaceholder.typicode.com/users")//abrir la peticion asignar el endponit
		xhr.open("GET","assets/users.json")

		xhr.send();// enviar peticion

})();



/*fetch*/
(()=>{

const $fetch = document.getElementById("fetch"),
	$fragment = document.createDocumentFragment()

fetch("assets/users.json")
	.then((res)=>{
		//console.log(res)
		return res.ok ? res.json(): Promise.reject(res)
	}).then((json)=>{
		//console.log(json)
				
				json.forEach((el)=>{
				const $li = document.createElement("li")
				$li.innerHTML =`${el.name} -- ${el.email} -- ${el.phone}`
				$fragment.appendChild($li)

				})
		$fetch.appendChild($fragment)

		})
	.catch((err)=>{
		//console.log("erorr del catch", err)
		let message = err.statusText || "ocurrio un error"
		$fetch.innerHTML = `erorr ${err.status}: ${message}`

	})
	.finally(()=>
		console.log()
	)

})();





/*async away*/

(()=>{
	const $async = document.getElementById("async")
		$fragment = document.createDocumentFragment()


		async function getData(){
			try{
				let res = await fetch("assets/users.json"),
					json = await res.json();
					console.log(res.ok, json)

					if (!res.ok) throw{status: res.status, statusText: res.statusText};//trhow retorna o deberia al catch



					//if (!res.ok) throw new Error ("solo texto con objeto error")

					json.forEach((el)=>{
					const $li = document.createElement("li");
					
					$li.innerHTML = `${el.name}--${el.email}--${el.phone}`;

					$fragment.appendChild($li)
					})

				$async.appendChild($fragment)

			} catch (err){
				console.log("esto es el catch", err)
				let message = err.statusText || "ocurrio un error";
				$async.innerHTML = `error ${err.status}: ${message}`;

			}finally{

		console.log("esto se muesttra independientementede la promesa")
			};
		};

	getData();


})();
