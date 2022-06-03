const d = document,

n = navigator,

uA = n.userAgent;

export default function userAgent (id){

	//console.log(uA)

	const $id = d.getElementById(id),

	isMobil = {

		android: () => uA.match(/android/i),
		ios: () => uA.match(/iphone|ipad|ipod/i),
		windows: () => uA.match(/windows phone/i),
		any: function (){
			return this.android()|| this.ios() || this.windows();
		}

	},
	isDesktop = {

		linux: ()=>uA.match(/linux/i),
		mac: ()=> uA.match(/mac os/i),
		windows: ()=>uA.match(/windows nt/i),
		any: function () {
			return this.linux() || this.mac() || this.windows();
		}
	},
	isBrowser = {
		chrome: () => uA.match(/chrome/i),
		safari: () => uA.match(/safari/i),
		firefox: () => uA.match(/firefox/i),
		opera: () => uA.match(/opera|opera mini/i),
		ie: () => uA.match(/msie|iemobile/i),
		edge: () => uA.match(/edge/),

		any: function (){
		return (
			this.ie()||
			this.edge()||
			this.chrome()||
			this.safari()||
			this.firefox()||
			this.opera()
			)
	}

	};
$id.innerHTML = `
<ul>
	<li>user Agent: <b>${uA}</b></li>
	<li>Plataforma: <b> ${
	isMobil.any()?isMobil.any() : isDesktop.any()}</b></li>
	<li> Navegador: <b>${isBrowser.any()}</b></li>
</ul>

`
}

